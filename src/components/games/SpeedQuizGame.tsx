import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Subject, Question } from '@/data/subjects';
import { Clock, Zap, CheckCircle, XCircle, Home } from 'lucide-react';

interface SpeedQuizGameProps {
  subject: Subject;
  onGameEnd: (results: any) => void;
  onBackToMenu: () => void;
}

export const SpeedQuizGame: React.FC<SpeedQuizGameProps> = ({ subject, onGameEnd, onBackToMenu }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60초 제한
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  // 게임 초기화
  useEffect(() => {
    const shuffledQuestions = [...subject.questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
  }, [subject]);

  // 타이머
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameActive]);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setTimeLeft(60);
    setScore(0);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setStreak(0);
    setMaxStreak(0);
    setQuestionIndex(0);
    setCurrentQuestion(questions[0]);
  };

  const handleAnswer = (answer: string) => {
    if (!gameActive || selectedAnswer) return;

    setSelectedAnswer(answer);
    setTotalQuestions(prev => prev + 1);

    const isCorrect = answer === currentQuestion?.answer;
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    // 1초 후 다음 문제로
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    const nextIndex = (questionIndex + 1) % questions.length;
    setQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  };

  const endGame = () => {
    setGameActive(false);
    setShowResult(true);
  };

  const handleGameEnd = () => {
    onGameEnd({
      score,
      correctAnswers,
      totalQuestions,
      streak: maxStreak,
      timeSpent: 60 - timeLeft
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <CardTitle className="text-2xl">스피드 퀴즈</CardTitle>
            <div className="text-lg font-semibold text-orange-600 flex items-center justify-center gap-2">
              <span className="text-2xl">{subject.icon}</span>
              {subject.name}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Clock size={16} />
                게임 규칙
              </h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 60초 안에 최대한 많은 문제를 풀어보세요</li>
                <li>• 정답 시 10점, 연속 정답 시 보너스!</li>
                <li>• 빠르게 답할수록 높은 점수를 얻습니다</li>
              </ul>
            </div>
            <Button 
              onClick={startGame} 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3"
            >
              <Zap className="mr-2" size={20} />
              게임 시작!
            </Button>
            <Button 
              variant="outline" 
              onClick={onBackToMenu}
              className="w-full"
            >
              <Home className="mr-2" size={16} />
              메인 메뉴로
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResult) {
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <CardTitle className="text-2xl">게임 완료!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-gray-600">총 점수</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                <div className="text-sm text-gray-600">정답 수</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">{accuracy}%</div>
                <div className="text-sm text-gray-600">정답률</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">{maxStreak}</div>
                <div className="text-sm text-gray-600">최고 연속</div>
              </div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-lg font-semibold text-yellow-700">
                🎉 {correctAnswers}개 문제를 맞혔습니다!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                빠른 속도로 문제를 해결하는 능력이 뛰어나네요!
              </p>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={handleGameEnd}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                메인 메뉴로
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowResult(false);
                  setGameStarted(false);
                }}
                className="w-full"
              >
                다시 도전하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 게임 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메뉴
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Zap className="text-orange-500" />
              스피드 퀴즈 - {subject.name}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              점수: {score}
            </Badge>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              연속: {streak}
            </Badge>
          </div>
        </div>

        {/* 타이머와 진행도 */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="text-red-500" size={20} />
              <span className="text-xl font-bold text-red-600">{timeLeft}초</span>
            </div>
            <div className="text-gray-600">
              문제 {totalQuestions + 1} | 정답 {correctAnswers}개
            </div>
          </div>
          <Progress value={(60 - timeLeft) / 60 * 100} className="h-3" />
        </div>

        {/* 문제 카드 */}
        {currentQuestion && (
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left transition-all duration-200 ";
                  
                  if (selectedAnswer) {
                    if (option === currentQuestion.answer) {
                      buttonClass += "bg-green-500 text-white border-green-600";
                    } else if (option === selectedAnswer && option !== currentQuestion.answer) {
                      buttonClass += "bg-red-500 text-white border-red-600";
                    } else {
                      buttonClass += "bg-gray-100 text-gray-500";
                    }
                  } else {
                    buttonClass += "bg-white hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300";
                  }

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={buttonClass}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedAnswer}
                    >
                      <div className="flex items-center gap-3">
                        {selectedAnswer && option === currentQuestion.answer && (
                          <CheckCircle className="text-white" size={20} />
                        )}
                        {selectedAnswer && option === selectedAnswer && option !== currentQuestion.answer && (
                          <XCircle className="text-white" size={20} />
                        )}
                        <span className="text-lg">{option}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {selectedAnswer && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>해설:</strong> {currentQuestion.explanation}
                  </p>
                  {selectedAnswer === currentQuestion.answer && (
                    <p className="text-sm text-green-600 mt-2 font-semibold">
                      🎉 {currentQuestion.encouragement}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};