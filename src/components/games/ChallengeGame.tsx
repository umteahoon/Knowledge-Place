import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Subject, Question } from '@/data/subjects';
import { Target, Clock, CheckCircle, XCircle, Home, Zap, Trophy } from 'lucide-react';

interface ChallengeGameProps {
  subject: Subject;
  onGameEnd: (results: any) => void;
  onBackToMenu: () => void;
}

export const ChallengeGame: React.FC<ChallengeGameProps> = ({ subject, onGameEnd, onBackToMenu }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 문제당 30초
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [challengeQuestions, setChallengeQuestions] = useState<Question[]>([]);
  const [timeBonus, setTimeBonus] = useState(0);

  // 게임 초기화 - 모든 문제에서 10개 선별
  useEffect(() => {
    if (subject.questions && subject.questions.length > 0) {
      // 모든 문제를 섞어서 10개 선택 (또는 전체 문제 수가 10개 미만이면 전체)
      const shuffled = [...subject.questions].sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffled.slice(0, Math.min(10, shuffled.length));
      
      setChallengeQuestions(selectedQuestions);
      setQuestions(selectedQuestions);
      setCurrentQuestion(selectedQuestions[0]);
    }
  }, [subject]);

  // 타이머
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      // 시간 초과
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameActive]);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setTimeLeft(30);
    setScore(0);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setStreak(0);
    setMaxStreak(0);
    setQuestionIndex(0);
    setTimeBonus(0);
    setCurrentQuestion(challengeQuestions[0]);
  };

  const handleAnswer = (answer: string) => {
    if (!gameActive || selectedAnswer) return;

    setSelectedAnswer(answer);
    setTotalQuestions(prev => prev + 1);

    const isCorrect = answer === currentQuestion?.answer;
    
    if (isCorrect) {
      // 점수 계산: 기본 점수 + 시간 보너스 + 난이도 보너스 + 연속 보너스
      const baseScore = 15;
      const timeBonusPoints = Math.max(0, timeLeft * 2); // 남은 시간 * 2
      const difficultyBonus = currentQuestion?.difficulty === 'hard' ? 10 : 
                             currentQuestion?.difficulty === 'medium' ? 5 : 0;
      const streakBonus = Math.floor(streak / 2) * 5; // 2연속마다 5점
      
      const totalPoints = baseScore + timeBonusPoints + difficultyBonus + streakBonus;
      
      setScore(prev => prev + totalPoints);
      setTimeBonus(timeBonusPoints);
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
      setTimeBonus(0);
    }

    // 1.5초 후 다음 문제로
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const handleTimeUp = () => {
    setSelectedAnswer('timeout');
    setTotalQuestions(prev => prev + 1);
    setStreak(0);
    setTimeBonus(0);
    
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    
    if (questionIndex < challengeQuestions.length - 1) {
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setCurrentQuestion(challengeQuestions[nextIndex]);
      setTimeLeft(30); // 새 문제마다 30초 리셋
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setGameActive(false);
    setShowResult(true);
  };

  const handleGameEnd = () => {
    onGameEnd({
      score,
      correctAnswers,
      totalQuestions: challengeQuestions.length,
      streak: maxStreak,
      challengeMode: true,
      difficulty: 'hard'
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <CardTitle className="text-2xl">도전 모드</CardTitle>
            <div className="text-lg font-semibold text-purple-600 flex items-center justify-center gap-2">
              <span className="text-2xl">{subject.icon}</span>
              {subject.name}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="text-purple-500" size={16} />
                도전 규칙
              </h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 엄선된 어려운 문제 10개에 도전합니다</li>
                <li>• 문제당 30초의 시간 제한이 있습니다</li>
                <li>• 빠른 정답 시 시간 보너스를 받습니다</li>
                <li>• 연속 정답 시 추가 보너스 점수!</li>
              </ul>
            </div>
            <Button 
              onClick={startGame} 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3"
            >
              <Target className="mr-2" size={20} />
              도전 시작!
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
    const accuracy = challengeQuestions.length > 0 ? Math.round((correctAnswers / challengeQuestions.length) * 100) : 0;
    const grade = accuracy >= 90 ? 'S' : accuracy >= 80 ? 'A' : accuracy >= 70 ? 'B' : accuracy >= 60 ? 'C' : 'D';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">
              {grade === 'S' ? '🏆' : grade === 'A' ? '🥇' : grade === 'B' ? '🥈' : grade === 'C' ? '🥉' : '📚'}
            </div>
            <CardTitle className="text-2xl">
              도전 완료! 등급: {grade}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">{score}</div>
                <div className="text-sm text-gray-600">총 점수</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                <div className="text-sm text-gray-600">정답 수</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
                <div className="text-sm text-gray-600">정답률</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">{maxStreak}</div>
                <div className="text-sm text-gray-600">최고 연속</div>
              </div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-lg font-semibold text-yellow-700">
                {grade === 'S' ? '🌟 완벽한 도전자!' : 
                 grade === 'A' ? '🎯 뛰어난 실력!' : 
                 grade === 'B' ? '👍 좋은 성과!' : 
                 grade === 'C' ? '📈 발전 가능성!' : '💪 다음엔 더 잘할 수 있어요!'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                어려운 문제들을 {correctAnswers}/{challengeQuestions.length}개 맞혔습니다!
              </p>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={handleGameEnd}
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                <Trophy className="mr-2" size={16} />
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

  const progress = ((questionIndex + 1) / challengeQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 게임 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메뉴
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Target className="text-purple-500" />
              도전 모드 - {subject.name}
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
              <Clock className={timeLeft <= 10 ? "text-red-500" : "text-blue-500"} size={20} />
              <span className={`text-xl font-bold ${timeLeft <= 10 ? "text-red-600" : "text-blue-600"}`}>
                {timeLeft}초
              </span>
              {timeBonus > 0 && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  +{timeBonus} 시간보너스
                </Badge>
              )}
            </div>
            <div className="text-gray-600">
              문제 {questionIndex + 1} / {challengeQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-3" />
          
          {timeLeft <= 10 && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-center">
              <Zap className="inline mr-2 text-red-500" size={20} />
              <span className="font-semibold text-red-700">⏰ 시간이 얼마 남지 않았습니다!</span>
            </div>
          )}
        </div>

        {/* 문제 카드 */}
        {currentQuestion && (
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl flex-1">
                  {currentQuestion.question}
                </CardTitle>
                <Badge 
                  variant={currentQuestion.difficulty === 'hard' ? 'destructive' : 'default'}
                  className="ml-4"
                >
                  {currentQuestion.difficulty === 'hard' ? '어려움' : 
                   currentQuestion.difficulty === 'medium' ? '보통' : '쉬움'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left transition-all duration-200 ";
                  
                  if (selectedAnswer === 'timeout') {
                    if (option === currentQuestion.answer) {
                      buttonClass += "bg-green-500 text-white border-green-600";
                    } else {
                      buttonClass += "bg-gray-100 text-gray-500";
                    }
                  } else if (selectedAnswer) {
                    if (option === currentQuestion.answer) {
                      buttonClass += "bg-green-500 text-white border-green-600";
                    } else if (option === selectedAnswer && option !== currentQuestion.answer) {
                      buttonClass += "bg-red-500 text-white border-red-600";
                    } else {
                      buttonClass += "bg-gray-100 text-gray-500";
                    }
                  } else {
                    buttonClass += "bg-white hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-300";
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
                        {(selectedAnswer || selectedAnswer === 'timeout') && option === currentQuestion.answer && (
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

              {(selectedAnswer || selectedAnswer === 'timeout') && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  {selectedAnswer === 'timeout' && (
                    <p className="text-red-600 font-semibold mb-2">⏰ 시간 초과!</p>
                  )}
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