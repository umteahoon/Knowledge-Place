import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Subject, Question } from '@/data';
import { difficultyLevels } from '@/data/types';
import { Heart, Flame, CheckCircle, XCircle, Home, Trophy } from 'lucide-react';

interface SurvivalGameProps {
  subject: Subject;
  onGameEnd: (results: any) => void;
  onBackToMenu: () => void;
}

export const SurvivalGame: React.FC<SurvivalGameProps> = ({ subject, onGameEnd, onBackToMenu }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());

  // 게임 초기화 - 문제와 보기 랜덤 섮기
  useEffect(() => {
    if (subject.questions && subject.questions.length > 0) {
      const shuffledQuestions = [...subject.questions].sort(() => Math.random() - 0.5);
      
      // 각 문제의 보기도 랜덤으로 섮기
      const questionsWithShuffledOptions = shuffledQuestions.map(question => {
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        return {
          ...question,
          options: shuffledOptions
        };
      });
      
      setQuestions(questionsWithShuffledOptions);
      setCurrentQuestion(questionsWithShuffledOptions[0]);
    }
  }, [subject]);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setLives(3);
    setScore(0);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setStreak(0);
    setMaxStreak(0);
    setQuestionIndex(0);
    setUsedQuestions(new Set());
    setCurrentQuestion(questions[0]);
  };

  const handleAnswer = (answer: string) => {
    if (!gameActive || selectedAnswer) return;

    setSelectedAnswer(answer);
    setTotalQuestions(prev => prev + 1);

    const isCorrect = answer === currentQuestion?.answer;
    
    if (isCorrect) {
      const streakBonus = Math.floor(streak / 3) * 5; // 3연속마다 5점 보너스
      const points = 10 + streakBonus;
      setScore(prev => prev + points);
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => endGame(), 1500);
        }
        return newLives;
      });
    }

    // 1.5초 후 다음 문제로 (해설 읽을 시간)
    setTimeout(() => {
      if (lives > 0 || isCorrect) {
        nextQuestion();
      }
    }, 1500);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    
    // 사용한 문제 추가
    if (currentQuestion) {
      setUsedQuestions(prev => new Set([...prev, currentQuestion.id]));
    }

    // 사용하지 않은 문제 찾기
    const availableQuestions = questions.filter(q => !usedQuestions.has(q.id) && q.id !== currentQuestion?.id);
    
    if (availableQuestions.length === 0) {
      // 모든 문제를 다 풀었으면 다시 섞어서 시작
      const reshuffled = [...subject.questions].sort(() => Math.random() - 0.5);
      setQuestions(reshuffled);
      setUsedQuestions(new Set());
      setCurrentQuestion(reshuffled[0]);
    } else {
      // 랜덤하게 다음 문제 선택
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      setCurrentQuestion(availableQuestions[randomIndex]);
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
      totalQuestions,
      streak: maxStreak,
      survivalMode: true
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">💪</div>
            <CardTitle className="text-2xl">서바이벌 모드</CardTitle>
            <div className="text-lg font-semibold text-red-600 flex items-center justify-center gap-2">
              <span className="text-2xl">{subject.icon}</span>
              {subject.name}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="text-red-500" size={16} />
                게임 규칙
              </h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 3개의 생명으로 시작합니다</li>
                <li>• 틀릴 때마다 생명이 하나씩 줄어듭니다</li>
                <li>• 연속 정답 시 보너스 점수를 얻습니다</li>
                <li>• 생명이 모두 떨어지면 게임 종료!</li>
              </ul>
            </div>
            <Button 
              onClick={startGame} 
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3"
            >
              <Flame className="mr-2" size={20} />
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
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">
              {correctAnswers >= 20 ? '🏆' : correctAnswers >= 10 ? '🥈' : '🥉'}
            </div>
            <CardTitle className="text-2xl">
              {correctAnswers >= 20 ? '전설의 생존자!' : correctAnswers >= 10 ? '훌륭한 도전!' : '좋은 시도!'}
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
                🎯 {correctAnswers}문제 연속 정답!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {correctAnswers >= 20 
                  ? "놀라운 집중력과 지식을 보여주셨네요!" 
                  : correctAnswers >= 10 
                  ? "꾸준한 학습의 결과가 보입니다!" 
                  : "다음엔 더 좋은 결과가 있을 거예요!"}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 게임 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메뉴
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Flame className="text-red-500" />
              서바이벌 - {subject.name}
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

        {/* 생명과 진행도 */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">생명:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={i < lives ? "text-red-500 fill-red-500" : "text-gray-300"} 
                    size={24} 
                  />
                ))}
              </div>
            </div>
            <div className="text-gray-600">
              문제 {totalQuestions + 1} | 정답 {correctAnswers}개
            </div>
          </div>
          
          {streak >= 3 && (
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 text-center">
              <Flame className="inline mr-2 text-orange-500" size={20} />
              <span className="font-semibold text-orange-700">
                🔥 {streak}연속 정답! 보너스 점수 획득 중!
              </span>
            </div>
          )}
        </div>

        {/* 문제 카드 */}
        {currentQuestion && (
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                {currentQuestion.question}
              </CardTitle>
              <div className="text-center mt-2">
                {(() => {
                  const diffLevel = difficultyLevels.find(d => d.id === currentQuestion.difficulty);
                  return diffLevel ? (
                    <Badge 
                      variant={currentQuestion.difficulty === 'easy' ? 'secondary' : currentQuestion.difficulty === 'medium' ? 'default' : 'destructive'}
                      className="text-sm px-3 py-1"
                    >
                      <span className="mr-1">{diffLevel.icon}</span>
                      {diffLevel.name}
                    </Badge>
                  ) : null;
                })()}
              </div>
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
                    buttonClass += "bg-white hover:bg-red-50 border-2 border-gray-200 hover:border-red-300";
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