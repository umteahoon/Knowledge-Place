import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Subject, Question } from '@/data/subjects';
import { BookOpen, CheckCircle, XCircle, Home, ArrowRight, RotateCcw } from 'lucide-react';

interface PracticeGameProps {
  subject: Subject;
  onGameEnd: (results: any) => void;
  onBackToMenu: () => void;
}

export const PracticeGame: React.FC<PracticeGameProps> = ({ subject, onGameEnd, onBackToMenu }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set());

  // 게임 초기화
  useEffect(() => {
    setQuestions(subject.questions);
    setCurrentQuestion(subject.questions[0]);
  }, [subject]);

  const startGame = () => {
    setGameStarted(true);
    setQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setCompletedQuestions(new Set());
    setCurrentQuestion(questions[0]);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    setShowExplanation(true);
    setTotalQuestions(prev => prev + 1);
    setCompletedQuestions(prev => new Set([...prev, questionIndex]));

    if (answer === currentQuestion?.answer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (questionIndex < questions.length - 1) {
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    } else {
      // 모든 문제 완료
      handleGameEnd();
    }
  };

  const previousQuestion = () => {
    if (questionIndex > 0) {
      setSelectedAnswer(null);
      setShowExplanation(false);
      const prevIndex = questionIndex - 1;
      setQuestionIndex(prevIndex);
      setCurrentQuestion(questions[prevIndex]);
    }
  };

  const goToQuestion = (index: number) => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuestionIndex(index);
    setCurrentQuestion(questions[index]);
  };

  const handleGameEnd = () => {
    onGameEnd({
      correctAnswers,
      totalQuestions: questions.length,
      practiceMode: true,
      completionRate: Math.round((completedQuestions.size / questions.length) * 100)
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">📖</div>
            <CardTitle className="text-2xl">연습 모드</CardTitle>
            <div className="text-lg font-semibold text-blue-600 flex items-center justify-center gap-2">
              <span className="text-2xl">{subject.icon}</span>
              {subject.name}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="text-blue-500" size={16} />
                학습 특징
              </h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 시간 제한 없이 천천히 학습하세요</li>
                <li>• 모든 문제에 상세한 해설이 제공됩니다</li>
                <li>• 이전 문제로 돌아가서 복습할 수 있습니다</li>
                <li>• 총 {subject.questions.length}개의 문제가 준비되어 있습니다</li>
              </ul>
            </div>
            <Button 
              onClick={startGame} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3"
            >
              <BookOpen className="mr-2" size={20} />
              학습 시작하기
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

  const progress = ((questionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 게임 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메뉴
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="text-blue-500" />
              연습 모드 - {subject.name}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {questionIndex + 1} / {questions.length}
            </Badge>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              정답: {correctAnswers}
            </Badge>
          </div>
        </div>

        {/* 진행도 바 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>학습 진행도</span>
            <span>{Math.round(progress)}% 완료</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* 문제 네비게이션 */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <Button
                key={index}
                variant={index === questionIndex ? "default" : completedQuestions.has(index) ? "secondary" : "outline"}
                size="sm"
                className="w-10 h-10 p-0"
                onClick={() => goToQuestion(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>

        {/* 문제 카드 */}
        {currentQuestion && (
          <Card className="bg-white/90 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                문제 {questionIndex + 1}. {currentQuestion.question}
              </CardTitle>
              <div className="text-center">
                <Badge variant={currentQuestion.difficulty === 'easy' ? 'secondary' : currentQuestion.difficulty === 'medium' ? 'default' : 'destructive'}>
                  {currentQuestion.difficulty === 'easy' ? '쉬움' : currentQuestion.difficulty === 'medium' ? '보통' : '어려움'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 mb-4">
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
                    buttonClass += "bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300";
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

              {showExplanation && (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📝 상세 해설</h4>
                    <p className="text-gray-700 mb-3">{currentQuestion.explanation}</p>
                    {selectedAnswer === currentQuestion.answer && (
                      <p className="text-green-600 font-semibold">
                        🎉 {currentQuestion.encouragement}
                      </p>
                    )}
                  </div>

                  {/* 네비게이션 버튼 */}
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={previousQuestion}
                      disabled={questionIndex === 0}
                    >
                      <RotateCcw className="mr-2" size={16} />
                      이전 문제
                    </Button>
                    
                    {questionIndex < questions.length - 1 ? (
                      <Button onClick={nextQuestion}>
                        다음 문제
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    ) : (
                      <Button onClick={handleGameEnd} className="bg-green-500 hover:bg-green-600">
                        학습 완료
                        <CheckCircle className="ml-2" size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};