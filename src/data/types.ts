// 타입 정의
export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  grade: 'elementary' | 'middle' | 'high';
  difficulty: 'easy' | 'medium' | 'hard';  // 난이도 추가
  encouragement: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface GradeLevel {
  id: 'elementary' | 'middle' | 'high';
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface GameMode {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
}

// 난이도 레벨 정의
export const difficultyLevels = [
  {
    id: 'easy' as const,
    name: '쉬움',
    icon: '😊',
    color: 'bg-green-500',
    description: '기초적인 문제'
  },
  {
    id: 'medium' as const,
    name: '보통',
    icon: '🤔',
    color: 'bg-yellow-500',
    description: '표준적인 문제'
  },
  {
    id: 'hard' as const,
    name: '어려움',
    icon: '😤',
    color: 'bg-red-500',
    description: '도전적인 문제'
  }
];