// 교과목별 데이터 정의
export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  grade: 'elementary' | 'middle' | 'high'; // 초등/중등/고등
  encouragement: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  questions: Question[];
}

export interface GradeLevel {
  id: 'elementary' | 'middle' | 'high';
  name: string;
  description: string;
  icon: string;
  color: string;
}

// 학급 정보
export const gradeLevels: GradeLevel[] = [
  {
    id: 'elementary',
    name: '초등학교',
    description: '초등학생을 위한 기초 학습',
    icon: '🎒',
    color: 'bg-green-500'
  },
  {
    id: 'middle',
    name: '중학교', 
    description: '중학생을 위한 심화 학습',
    icon: '📖',
    color: 'bg-blue-500'
  },
  {
    id: 'high',
    name: '고등학교',
    description: '고등학생을 위한 고급 학습',
    icon: '🎓',
    color: 'bg-purple-500'
  }
];

// 게임 모드 정의
export interface GameMode {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const gameModes: GameMode[] = [
  {
    id: 'speed_quiz',
    name: '스피드 퀴즈',
    description: '시간 제한 안에 최대한 많은 문제를 풀어보세요!',
    icon: '⚡',
    difficulty: 'medium'
  },
  {
    id: 'survival',
    name: '서바이벌 모드',
    description: '틀릴 때까지 계속 도전하는 무한 퀴즈!',
    icon: '💪',
    difficulty: 'hard'
  },
  {
    id: 'practice',
    name: '연습 모드',
    description: '부담 없이 천천히 학습해보세요!',
    icon: '📖',
    difficulty: 'easy'
  },
  {
    id: 'challenge',
    name: '도전 모드',
    description: '어려운 문제들로 실력을 시험해보세요!',
    icon: '🎯',
    difficulty: 'hard'
  }
];