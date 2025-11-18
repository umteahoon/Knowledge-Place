import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Home, RotateCcw, Trophy, Moon, Sun } from 'lucide-react';

interface CheeseHunterGameProps {
  onBackToMenu: () => void;
}

interface Position {
  x: number;
  y: number;
}

interface QuizItem {
  question: string;
  hint: string;
  answer: string;
  consonants: string;
}

interface GameItem {
  x: number;
  y: number;
  type: 'cheese' | 'bigCheese' | 'bomb' | 'mushroom' | 'clock';
  emoji: string;
}

interface HighScore {
  name: string;
  score: number;
  date: string;
}

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
const GRID_SIZE = 25;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

// 퀴즈 데이터
const quizData: QuizItem[] = [
  { question: "과일", hint: "빨간색이고 달콤한 과일", answer: "사과", consonants: "ㅅㄱ" },
  { question: "동물", hint: "바다에 사는 큰 포유동물", answer: "고래", consonants: "ㄱㄹ" },
  { question: "음식", hint: "한국의 대표적인 발효 음식", answer: "김치", consonants: "ㄱㅊ" },
  { question: "계절", hint: "눈이 내리는 추운 계절", answer: "겨울", consonants: "ㄱㅇ" },
  { question: "색깔", hint: "하늘과 바다의 색", answer: "파랑", consonants: "ㅍㄹ" },
  { question: "교통수단", hint: "하늘을 나는 교통수단", answer: "비행기", consonants: "ㅂㅎㄱ" },
  { question: "학용품", hint: "글씨를 쓰는 도구", answer: "연필", consonants: "ㅇㅍ" },
  { question: "가전제품", hint: "음식을 차갑게 보관하는 기계", answer: "냉장고", consonants: "ㄴㅈㄱ" },
  { question: "스포츠", hint: "공을 발로 차는 운동", answer: "축구", consonants: "ㅊㄱ" },
  { question: "악기", hint: "건반을 누르는 악기", answer: "피아노", consonants: "ㅍㅇㄴ" },
  { question: "직업", hint: "병을 고치는 사람", answer: "의사", consonants: "ㅇㅅ" },
  { question: "건물", hint: "학생들이 공부하는 곳", answer: "학교", consonants: "ㅎㄱ" },
  { question: "자연", hint: "높고 큰 자연물", answer: "산", consonants: "ㅅ" },
  { question: "가족", hint: "나를 낳아주신 여자분", answer: "어머니", consonants: "ㅇㅁㄴ" },
  { question: "시간", hint: "하루의 시작", answer: "아침", consonants: "ㅇㅊ" }
];

export const CheeseHunterGame: React.FC<CheeseHunterGameProps> = ({ onBackToMenu }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<QuizItem | null>(null);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [combo, setCombo] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(150);
  const [speedEffect, setSpeedEffect] = useState<'fast' | 'slow' | null>(null);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // 게임 초기화
  const initializeGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setCombo(0);
    setGameRunning(true);
    setGameOver(false);
    setShowQuiz(false);
    setShowNameInput(false);
    setGameSpeed(150);
    setSpeedEffect(null);
    generateGameItems();
  }, []);

  // 게임 아이템 생성
  const generateGameItems = () => {
    const items: GameItem[] = [];
    const itemTypes = [
      { type: 'cheese' as const, emoji: '🧀', count: 3 },
      { type: 'bigCheese' as const, emoji: '🥇', count: 1 },
      { type: 'bomb' as const, emoji: '💣', count: 2 },
      { type: 'mushroom' as const, emoji: '🍄', count: 1 },
      { type: 'clock' as const, emoji: '⏳', count: 1 }
    ];

    itemTypes.forEach(({ type, emoji, count }) => {
      for (let i = 0; i < count; i++) {
        let x, y;
        do {
          x = Math.floor(Math.random() * (CANVAS_WIDTH / GRID_SIZE));
          y = Math.floor(Math.random() * (CANVAS_HEIGHT / GRID_SIZE));
        } while (items.some(item => item.x === x && item.y === y));
        
        items.push({ x, y, type, emoji });
      }
    });

    setGameItems(items);
  };

  // 키보드 입력 처리
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning || showQuiz) return;

      const keyMap: { [key: string]: Position } = {
        'ArrowUp': { x: 0, y: -1 },
        'ArrowDown': { x: 0, y: 1 },
        'ArrowLeft': { x: -1, y: 0 },
        'ArrowRight': { x: 1, y: 0 },
        'w': { x: 0, y: -1 },
        's': { x: 0, y: 1 },
        'a': { x: -1, y: 0 },
        'd': { x: 1, y: 0 }
      };

      const newDirection = keyMap[e.key];
      if (newDirection) {
        setDirection(prev => {
          // 반대 방향으로 이동 방지
          if (newDirection.x === -prev.x && newDirection.y === -prev.y) {
            return prev;
          }
          return newDirection;
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameRunning, showQuiz]);

  // 게임 루프
  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // 벽 충돌 검사
        if (head.x < 0 || head.x >= CANVAS_WIDTH / GRID_SIZE || 
            head.y < 0 || head.y >= CANVAS_HEIGHT / GRID_SIZE) {
          setGameRunning(false);
          setGameOver(true);
          setShowNameInput(true);
          return prevSnake;
        }

        // 자기 몸과 충돌 검사
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameRunning(false);
          setGameOver(true);
          setShowNameInput(true);
          return prevSnake;
        }

        newSnake.unshift(head);

        // 아이템과 충돌 검사
        const hitItem = gameItems.find(item => item.x === head.x && item.y === head.y);
        if (hitItem) {
          handleItemCollision(hitItem, newSnake);
        } else {
          newSnake.pop(); // 꼬리 제거
        }

        return newSnake;
      });
    }, gameSpeed);

    return () => clearInterval(gameLoop);
  }, [gameRunning, direction, gameItems, gameSpeed]);

  // 아이템 충돌 처리
  const handleItemCollision = (item: GameItem, currentSnake: Position[]) => {
    setGameItems(prev => prev.filter(i => i.x !== item.x || i.y !== item.y));

    switch (item.type) {
      case 'cheese':
        const randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
        setCurrentQuiz(randomQuiz);
        setShowQuiz(true);
        setGameRunning(false);
        break;
      case 'bigCheese':
        setScore(prev => prev + 500);
        // 꼬리 3칸 추가
        for (let i = 0; i < 3; i++) {
          currentSnake.push({ ...currentSnake[currentSnake.length - 1] });
        }
        generateNewItem();
        break;
      case 'bomb':
        // 꼬리 3칸 감소
        for (let i = 0; i < 3 && currentSnake.length > 1; i++) {
          currentSnake.pop();
        }
        setCombo(0);
        generateNewItem();
        break;
      case 'mushroom':
        setSpeedEffect('fast');
        setGameSpeed(75);
        setTimeout(() => {
          setSpeedEffect(null);
          setGameSpeed(150);
        }, 5000);
        generateNewItem();
        break;
      case 'clock':
        setSpeedEffect('slow');
        setGameSpeed(300);
        setTimeout(() => {
          setSpeedEffect(null);
          setGameSpeed(150);
        }, 5000);
        generateNewItem();
        break;
    }
  };

  // 새 아이템 생성
  const generateNewItem = () => {
    const itemTypes = ['cheese', 'bigCheese', 'bomb', 'mushroom', 'clock'];
    const emojis = ['🧀', '🥇', '💣', '🍄', '⏳'];
    const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    const randomEmoji = emojis[itemTypes.indexOf(randomType)];
    
    let x, y;
    do {
      x = Math.floor(Math.random() * (CANVAS_WIDTH / GRID_SIZE));
      y = Math.floor(Math.random() * (CANVAS_HEIGHT / GRID_SIZE));
    } while (gameItems.some(item => item.x === x && item.y === y) || 
             snake.some(segment => segment.x === x && segment.y === y));

    setGameItems(prev => [...prev, { 
      x, y, 
      type: randomType as GameItem['type'], 
      emoji: randomEmoji 
    }]);
  };

  // 퀴즈 답안 제출
  const handleQuizSubmit = () => {
    if (!currentQuiz) return;

    if (quizAnswer.trim() === currentQuiz.answer) {
      const newCombo = combo + 1;
      const baseScore = 100;
      const comboBonus = newCombo > 1 ? newCombo * 50 : 0;
      const totalScore = baseScore + comboBonus;
      
      setScore(prev => prev + totalScore);
      setCombo(newCombo);
      
      // 뱀 길이 증가
      setSnake(prev => [...prev, { ...prev[prev.length - 1] }]);
    } else {
      setCombo(0);
    }

    setShowQuiz(false);
    setQuizAnswer('');
    setCurrentQuiz(null);
    setGameRunning(true);
    generateNewItem();
  };

  // 점수 저장
  const saveScore = () => {
    if (!playerName.trim()) return;

    const newScore: HighScore = {
      name: playerName.trim(),
      score,
      date: new Date().toLocaleDateString()
    };

    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setHighScores(updatedScores);
    localStorage.setItem('cheeseHunterScores', JSON.stringify(updatedScores));
    setShowNameInput(false);
    setPlayerName('');
  };

  // 하이스코어 로드
  useEffect(() => {
    const savedScores = localStorage.getItem('cheeseHunterScores');
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }
  }, []);

  // 캔버스 렌더링
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 배경 그리기
    ctx.fillStyle = darkMode ? '#1a1a1a' : '#f0f0f0';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // 격자 그리기
    ctx.strokeStyle = darkMode ? '#333' : '#ddd';
    ctx.lineWidth = 1;
    for (let i = 0; i <= CANVAS_WIDTH; i += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, CANVAS_HEIGHT);
      ctx.stroke();
    }
    for (let i = 0; i <= CANVAS_HEIGHT; i += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(CANVAS_WIDTH, i);
      ctx.stroke();
    }

    // 뱀 그리기
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#4CAF50' : '#8BC34A';
      ctx.fillRect(
        segment.x * GRID_SIZE + 1,
        segment.y * GRID_SIZE + 1,
        GRID_SIZE - 2,
        GRID_SIZE - 2
      );
    });

    // 아이템 그리기
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    gameItems.forEach(item => {
      ctx.fillText(
        item.emoji,
        item.x * GRID_SIZE + GRID_SIZE / 2,
        item.y * GRID_SIZE + GRID_SIZE / 2 + 7
      );
    });
  }, [snake, gameItems, darkMode]);

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToMenu}>
              <Home size={16} className="mr-2" />
              메인 메뉴
            </Button>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              🧀 치즈 헌터
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              점수: {score}
            </Badge>
            {combo > 1 && (
              <Badge variant="destructive" className="text-lg px-3 py-1">
                🔥 콤보 x{combo}
              </Badge>
            )}
          </div>
        </div>

        {/* 게임 설명 */}
        {!gameRunning && !gameOver && (
          <Card className="mb-6 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">🐭 게임 방법</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">조작법</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 화살표 키 또는 WASD로 이동</li>
                    <li>• 🧀 치즈: 퀴즈를 풀면 점수 획득</li>
                    <li>• 연속 정답 시 콤보 보너스!</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">아이템</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 🥇 큰 치즈: +500점, 꼬리 +3</li>
                    <li>• 💣 폭탄: 꼬리 -3 (주의!)</li>
                    <li>• 🍄 버섯: 5초간 속도 2배</li>
                    <li>• ⏳ 시계: 5초간 속도 1/2배</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 게임 캔버스 */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="border-2 border-gray-300 rounded-lg bg-white"
            />
            {speedEffect && (
              <div className="absolute top-4 left-4">
                <Badge variant={speedEffect === 'fast' ? 'destructive' : 'secondary'}>
                  {speedEffect === 'fast' ? '🍄 빠름!' : '⏳ 느림!'}
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* 게임 시작 버튼 */}
        {!gameRunning && !gameOver && (
          <div className="text-center mb-6">
            <Button onClick={initializeGame} size="lg" className="bg-green-500 hover:bg-green-600">
              🎮 게임 시작
            </Button>
          </div>
        )}

        {/* 퀴즈 모달 */}
        {showQuiz && currentQuiz && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle className="text-center">🧀 치즈 퀴즈</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">{currentQuiz.question}</p>
                  <p className="text-gray-600">{currentQuiz.hint}</p>
                  <p className="text-xl font-mono mt-2">초성: {currentQuiz.consonants}</p>
                </div>
                <div className="flex gap-2">
                  <Input
                    value={quizAnswer}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                    placeholder="정답 입력"
                    onKeyPress={(e) => e.key === 'Enter' && handleQuizSubmit()}
                    autoFocus
                  />
                  <Button onClick={handleQuizSubmit}>확인</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 게임 오버 모달 */}
        {gameOver && showNameInput && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle className="text-center">🎮 게임 오버!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">최종 점수: {score}점</p>
                  <p className="text-gray-600">명예의 전당에 등록하시겠습니까?</p>
                </div>
                <div className="flex gap-2">
                  <Input
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="이름 (3자 이하)"
                    maxLength={3}
                  />
                  <Button onClick={saveScore}>등록</Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={initializeGame} className="flex-1">
                    <RotateCcw size={16} className="mr-2" />
                    다시 시작
                  </Button>
                  <Button variant="outline" onClick={() => setShowNameInput(false)} className="flex-1">
                    건너뛰기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 명예의 전당 */}
        {highScores.length > 0 && (
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <Trophy className="text-yellow-500" />
                🏆 명예의 전당 (Top 10)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {highScores.map((score, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-semibold">
                      {index + 1}. {score.name}
                    </span>
                    <div className="text-right">
                      <div className="font-bold">{score.score}점</div>
                      <div className="text-xs text-gray-500">{score.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setHighScores([]);
                    localStorage.removeItem('cheeseHunterScores');
                  }}
                >
                  기록 초기화
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};