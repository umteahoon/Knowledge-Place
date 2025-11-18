import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { subjects, gameModes, gradeLevels, Subject, GameMode, GradeLevel, getSubjectsByGrade, getQuestionsByGrade } from '@/data';
import { SpeedQuizGame } from '@/components/games/SpeedQuizGame';
import { SurvivalGame } from '@/components/games/SurvivalGame';
import { PracticeGame } from '@/components/games/PracticeGame';
import { ChallengeGame } from '@/components/games/ChallengeGame';
import { CheeseHunterGame } from '@/components/games/CheeseHunterGame';
import { Trophy, Star, Clock, Target, BookOpen, Brain, Gamepad2, ArrowLeft, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

interface GameStats {
  totalGamesPlayed: number;
  totalCorrectAnswers: number;
  bestStreak: number;
  favoriteSubject: string;
}

const Index = () => {
  const { user, logout } = useAuth();
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode | null>(null);
  const [showCheeseHunter, setShowCheeseHunter] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    totalGamesPlayed: 0,
    totalCorrectAnswers: 0,
    bestStreak: 0,
    favoriteSubject: ''
  });

  // 게임 통계 로드
  useEffect(() => {
    const savedStats = localStorage.getItem('educationalGameStats');
    if (savedStats) {
      setGameStats(JSON.parse(savedStats));
    }
  }, []);

  // 게임 통계 업데이트
  const updateStats = (newStats: Partial<GameStats>) => {
    const updatedStats = { ...gameStats, ...newStats };
    setGameStats(updatedStats);
    localStorage.setItem('educationalGameStats', JSON.stringify(updatedStats));
  };

  // 메인 화면으로 돌아가기
  const resetToHome = () => {
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedGameMode(null);
  };

  // 게임 종료 후 메인 화면으로 돌아가기
  const handleGameEnd = (results: any) => {
    // 통계 업데이트
    updateStats({
      totalGamesPlayed: gameStats.totalGamesPlayed + 1,
      totalCorrectAnswers: gameStats.totalCorrectAnswers + (results.correctAnswers || 0),
      bestStreak: Math.max(gameStats.bestStreak, results.streak || 0),
      favoriteSubject: selectedSubject?.name || gameStats.favoriteSubject
    });

    // 메인 화면으로 돌아가기
    resetToHome();
  };

  // 게임 컴포넌트 렌더링
  const renderGame = () => {
    if (!selectedGrade || !selectedSubject || !selectedGameMode) return null;

    // 선택된 학급에 맞는 문제들로 필터링
    const subjectWithFilteredQuestions = {
      ...selectedSubject,
      questions: getQuestionsByGrade(selectedSubject, selectedGrade.id)
    };

    const gameProps = {
      subject: subjectWithFilteredQuestions,
      onGameEnd: handleGameEnd,
      onBackToMenu: resetToHome
    };

    switch (selectedGameMode.id) {
      case 'speed':
        return <SpeedQuizGame {...gameProps} />;
      case 'survival':
        return <SurvivalGame {...gameProps} />;
      case 'practice':
        return <PracticeGame {...gameProps} />;
      case 'challenge':
        return <ChallengeGame {...gameProps} />;
      default:
        return null;
    }
  };

  // 치즈 헌터 게임 렌더링
  if (showCheeseHunter) {
    return <CheeseHunterGame onBackToMenu={() => setShowCheeseHunter(false)} />;
  }

  // 게임이 시작된 경우 게임 컴포넌트만 렌더링
  if (selectedSubject && selectedGameMode) {
    return renderGame();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <Brain className="text-indigo-600" size={40} />
              지식 플레이스 - 교육 게임
            </h1>
            <p className="text-lg text-gray-600">재미있는 게임으로 학습하는 스마트 교육 플랫폼</p>
          </div>
          
          {/* 사용자 정보 및 로그인/로그아웃 */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{user.nickname}님</p>
                  <p className="text-xs text-gray-500">환영합니다!</p>
                </div>
                <Button variant="outline" size="sm" onClick={logout}>
                  로그아웃
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* 통계 대시보드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Trophy className="mx-auto mb-2 text-yellow-500" size={24} />
              <div className="text-2xl font-bold text-gray-800">{gameStats.totalGamesPlayed}</div>
              <div className="text-sm text-gray-600">총 게임 수</div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Star className="mx-auto mb-2 text-green-500" size={24} />
              <div className="text-2xl font-bold text-gray-800">{gameStats.totalCorrectAnswers}</div>
              <div className="text-sm text-gray-600">정답 수</div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Target className="mx-auto mb-2 text-red-500" size={24} />
              <div className="text-2xl font-bold text-gray-800">{gameStats.bestStreak}</div>
              <div className="text-sm text-gray-600">최고 연속 정답</div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <BookOpen className="mx-auto mb-2 text-blue-500" size={24} />
              <div className="text-lg font-bold text-gray-800">{gameStats.favoriteSubject || '없음'}</div>
              <div className="text-sm text-gray-600">선호 과목</div>
            </CardContent>
          </Card>
        </div>

        {selectedSubject && selectedGameMode ? (
          // 게임 모드가 선택된 경우 - 실제 게임 실행은 위에서 처리
          null
        ) : selectedSubject ? (
          // 3단계: 게임 모드 선택 화면
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedSubject(null)}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                뒤로가기
              </Button>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">{selectedSubject.icon}</span>
                {selectedGrade?.name} {selectedSubject.name} - 게임 모드 선택
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameModes.map((mode) => (
                <Card 
                  key={mode.id} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm hover:scale-105"
                  onClick={() => setSelectedGameMode(mode)}
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{mode.icon}</div>
                    <CardTitle className="text-lg">{mode.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm mb-4">
                      {mode.description}
                    </CardDescription>
                    <div className="space-y-1">
                      {mode.features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : selectedGrade ? (
          // 2단계: 교과목 선택 화면
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedGrade(null)}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                뒤로가기
              </Button>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">{selectedGrade.icon}</span>
                {selectedGrade.name} - 교과목 선택
              </h2>
            </div>
            
            {/* 치즈 헌터 게임 카드 */}
            <div className="mb-8">
              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white hover:scale-105 max-w-md mx-auto"
                onClick={() => setShowCheeseHunter(true)}
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-3">🧀</div>
                  <CardTitle className="text-2xl text-white">치즈 헌터</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-white/90 text-base">
                    뱀 게임과 한국어 퀴즈를 결합한 재미있는 게임!
                    <br />
                    <span className="flex items-center justify-center gap-2 mt-2">
                      <Gamepad2 size={16} />
                      지금 도전해보세요!
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getSubjectsByGrade(selectedGrade.id).map((subject) => {
                const questionsForGrade = getQuestionsByGrade(subject, selectedGrade.id);
                return (
                  <Card 
                    key={subject.id} 
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm hover:scale-105"
                    onClick={() => setSelectedSubject(subject)}
                  >
                    <CardHeader className="text-center">
                      <div className="text-5xl mb-3">{subject.icon}</div>
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>문제 수</span>
                          <span>{questionsForGrade.length}개</span>
                        </div>
                        <Progress 
                          value={Math.min((questionsForGrade.length / 10) * 100, 100)} 
                          className="h-2"
                        />
                        <div className="text-center">
                          <Badge variant="secondary" className="text-xs">
                            {selectedGrade.name} 수준
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          // 1단계: 학급 선택 화면
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
              <Users className="text-indigo-600" />
              학급을 선택하세요
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {gradeLevels.map((grade) => {
                const availableSubjects = getSubjectsByGrade(grade.id);
                const totalQuestions = availableSubjects.reduce((total, subject) => {
                  return total + getQuestionsByGrade(subject, grade.id).length;
                }, 0);
                
                return (
                  <Card 
                    key={grade.id} 
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm hover:scale-105 border-2 hover:border-indigo-300"
                    onClick={() => setSelectedGrade(grade)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4">{grade.icon}</div>
                      <CardTitle className="text-2xl text-gray-800">{grade.name}</CardTitle>
                      <CardDescription className="text-base text-gray-600 mt-2">
                        {grade.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">교과목</span>
                          <Badge variant="secondary">{availableSubjects.length}개</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">총 문제</span>
                          <Badge variant="outline">{totalQuestions}개</Badge>
                        </div>
                        <div className="pt-2">
                          <Button className={`w-full ${grade.color} hover:opacity-90 text-white`}>
                            {grade.name} 시작하기
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* 푸터 */}
        <div className="text-center mt-12 text-gray-500">
          <p className="mb-4">🎓 즐겁게 학습하며 지식을 쌓아가세요! 🎓</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-gray-700 transition-colors">
              개인정보처리방침
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-700 transition-colors">
              이용약관
            </Link>
            <Link to="/about" className="hover:text-gray-700 transition-colors">
              About & Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;