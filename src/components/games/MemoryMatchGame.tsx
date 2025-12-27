import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, RotateCcw, Clock, Trophy, Star } from 'lucide-react';

interface CardPair {
  id: number;
  concept: string;
  definition: string;
}

interface GameCard {
  id: string;
  content: string;
  type: 'concept' | 'definition';
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryMatchGameProps {
  onBackToMenu: () => void;
}

// 테스트용 카드 쌍 데이터
const cardPairs: CardPair[] = [
  { id: 1, concept: '수도: 서울', definition: '국가: 한국' },
  { id: 2, concept: '원소: H', definition: '이름: 수소' },
  { id: 3, concept: '수학: π', definition: '값: 3.14159...' },
  { id: 4, concept: '언어: Hello', definition: '의미: 안녕하세요' },
  { id: 5, concept: '행성: 지구', definition: '위치: 태양계 3번째' },
  { id: 6, concept: '화학: H₂O', definition: '물질: 물' },
  { id: 7, concept: '역사: 1945년', definition: '사건: 광복절' },
  { id: 8, concept: '지리: 백두산', definition: '높이: 2,744m' }
];

export const MemoryMatchGame: React.FC<MemoryMatchGameProps> = ({ onBackToMenu }) => {
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // 타이머
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted]);

  // 게임 초기화
  const initializeGame = useCallback(() => {
    // 8쌍의 카드를 선택 (4x4 그리드)
    const selectedPairs = cardPairs.slice(0, 8);
    const cards: GameCard[] = [];

    selectedPairs.forEach(pair => {
      cards.push({
        id: `concept-${pair.id}`,
        content: pair.concept,
        type: 'concept',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      });
      cards.push({
        id: `definition-${pair.id}`,
        content: pair.definition,
        type: 'definition',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      });
    });

    // 카드 섞기
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    setGameCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setScore(0);
    setMoves(0);
    setTimeElapsed(0);
    setGameStarted(true);
    setGameCompleted(false);
    setIsProcessing(false);
  }, []);

  // 게임 시작
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // 카드 클릭 처리
  const handleCardClick = (cardId: string) => {
    if (isProcessing || flippedCards.length >= 2) return;
    
    const card = gameCards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // 카드 뒤집기
    setGameCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));

    // 두 장이 뒤집어졌을 때 매칭 확인
    if (newFlippedCards.length === 2) {
      setIsProcessing(true);
      setMoves(prev => prev + 1);
      
      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = gameCards.find(c => c.id === firstCardId);
      const secondCard = gameCards.find(c => c.id === secondCardId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // 매칭 성공
        setTimeout(() => {
          setGameCards(prev => prev.map(c => 
            c.id === firstCardId || c.id === secondCardId 
              ? { ...c, isMatched: true } 
              : c
          ));
          setMatchedPairs(prev => [...prev, firstCard.pairId]);
          setScore(prev => prev + 100);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 500);
      } else {
        // 매칭 실패 - 0.8초 후 다시 뒤집기
        setTimeout(() => {
          setGameCards(prev => prev.map(c => 
            c.id === firstCardId || c.id === secondCardId 
              ? { ...c, isFlipped: false } 
              : c
          ));
          setFlippedCards([]);
          setIsProcessing(false);
        }, 800);
      }
    }
  };

  // 게임 완료 확인
  useEffect(() => {
    if (matchedPairs.length === 8 && gameStarted) {
      setGameCompleted(true);
      setGameStarted(false);
    }
  }, [matchedPairs.length, gameStarted]);

  // 시간 포맷팅
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 게임 완료 시 등급 계산
  const getGrade = () => {
    if (moves <= 20 && timeElapsed <= 60) return { grade: 'S', color: 'text-yellow-600', message: '완벽해요!' };
    if (moves <= 30 && timeElapsed <= 90) return { grade: 'A', color: 'text-green-600', message: '훌륭해요!' };
    if (moves <= 40 && timeElapsed <= 120) return { grade: 'B', color: 'text-blue-600', message: '좋아요!' };
    if (moves <= 50 && timeElapsed <= 180) return { grade: 'C', color: 'text-orange-600', message: '괜찮아요!' };
    return { grade: 'D', color: 'text-red-600', message: '다시 도전해보세요!' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 게임 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메뉴
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Star className="text-purple-500" />
              지식 카드 뒤집기
            </h1>
          </div>
          <Button variant="outline" onClick={initializeGame}>
            <RotateCcw size={16} className="mr-2" />
            다시 시작
          </Button>
        </div>

        {/* 게임 상태 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="text-blue-500" size={20} />
                <span className="font-semibold text-blue-600">시간</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">{formatTime(timeElapsed)}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-semibold text-yellow-600">점수</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">{score}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-semibold text-green-600">시도</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">{moves}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-semibold text-purple-600">완성</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">{matchedPairs.length}/8</div>
            </CardContent>
          </Card>
        </div>

        {/* 게임 완료 메시지 */}
        {gameCompleted && (
          <Card className="mb-6 bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="text-yellow-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">게임 완료!</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">최종 점수</div>
                  <div className="text-xl font-bold text-gray-800">{score}점</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">소요 시간</div>
                  <div className="text-xl font-bold text-gray-800">{formatTime(timeElapsed)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">시도 횟수</div>
                  <div className="text-xl font-bold text-gray-800">{moves}회</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Badge className={`text-2xl px-4 py-2 ${getGrade().color} bg-white`}>
                  {getGrade().grade}등급
                </Badge>
                <span className="text-lg font-semibold text-gray-700">{getGrade().message}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 게임 보드 (4x4 그리드) */}
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {gameCards.map((card) => (
            <Card
              key={card.id}
              className={`aspect-square cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                card.isMatched
                  ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-300'
                  : card.isFlipped
                  ? card.type === 'concept'
                    ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300'
                    : 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 hover:from-gray-200 hover:to-gray-300'
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <CardContent className="p-2 h-full flex items-center justify-center">
                {card.isFlipped || card.isMatched ? (
                  <div className="text-center">
                    <div className={`text-xs font-semibold mb-1 ${
                      card.type === 'concept' ? 'text-blue-600' : 'text-purple-600'
                    }`}>
                      {card.type === 'concept' ? '개념' : '정의'}
                    </div>
                    <div className="text-sm font-medium text-gray-800 leading-tight">
                      {card.content}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Star className="text-gray-400 mx-auto mb-1" size={24} />
                    <div className="text-xs text-gray-500">?</div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 게임 설명 */}
        <Card className="mt-6 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">게임 방법</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 카드를 클릭하여 뒤집고, 개념과 정의가 맞는 쌍을 찾으세요</li>
              <li>• 한 번에 두 장의 카드만 뒤집을 수 있습니다</li>
              <li>• 짝이 맞으면 100점을 획득하고, 틀리면 0.8초 후 다시 뒤집힙니다</li>
              <li>• 모든 쌍을 맞추면 게임이 완료됩니다</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};