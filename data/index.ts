// 학급별 문제 데이터 import
import { questions as elemKoreanQuestions } from './questions/elementary/korean';
import { questions as elemMathQuestions } from './questions/elementary/math';
import { questions as elemEnglishQuestions } from './questions/elementary/english';
import { questions as elemScienceQuestions } from './questions/elementary/science';
import { questions as elemHistoryQuestions } from './questions/elementary/korean_history';

import { questions as midKoreanQuestions } from './questions/middle/korean';
import { questions as midMathQuestions } from './questions/middle/math';
import { questions as midEnglishQuestions } from './questions/middle/english';
import { questions as midScienceQuestions } from './questions/middle/science';
import { questions as midHistoryQuestions } from './questions/middle/korean_history';
import { questions as midWorldHistoryQuestions } from './questions/middle/world_history';

import { questions as highKoreanQuestions } from './questions/high/korean';
import { questions as highMathQuestions } from './questions/high/math';
import { questions as highEnglishQuestions } from './questions/high/english';
import { questions as highScienceQuestions } from './questions/high/science';
import { questions as highHistoryQuestions } from './questions/high/korean_history';
import { questions as highWorldHistoryQuestions } from './questions/high/world_history';

// 타입 정의
export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  grade: 'elementary' | 'middle' | 'high';
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

// 학급 레벨 정의
export const gradeLevels: GradeLevel[] = [
  {
    id: 'elementary',
    name: '초등학교',
    icon: '🎒',
    color: 'bg-green-500',
    description: '기초 학습을 위한 재미있는 문제들'
  },
  {
    id: 'middle',
    name: '중학교',
    icon: '📚',
    color: 'bg-blue-500',
    description: '중급 수준의 체계적인 학습'
  },
  {
    id: 'high',
    name: '고등학교',
    icon: '🎓',
    color: 'bg-purple-500',
    description: '고급 수준의 심화 학습'
  }
];

// 게임 모드 정의
export const gameModes: GameMode[] = [
  {
    id: 'speed',
    name: '스피드 퀴즈',
    icon: '⚡',
    color: 'bg-yellow-500',
    description: '60초 안에 최대한 많은 문제를 풀어보세요!',
    features: [
      '60초 시간 제한',
      '빠른 정답 시 보너스 점수',
      '연속 정답 시 추가 보너스'
    ]
  },
  {
    id: 'survival',
    name: '서바이벌 모드',
    icon: '💪',
    color: 'bg-red-500',
    description: '3개의 생명으로 얼마나 오래 버틸 수 있을까요?',
    features: [
      '3개의 생명으로 시작',
      '틀릴 때마다 생명 감소',
      '무한 도전 가능'
    ]
  },
  {
    id: 'practice',
    name: '연습 모드',
    icon: '📖',
    color: 'bg-blue-500',
    description: '시간 제한 없이 천천히 학습해보세요!',
    features: [
      '시간 제한 없음',
      '상세한 해설 제공',
      '이전 문제 복습 가능'
    ]
  },
  {
    id: 'challenge',
    name: '도전 모드',
    icon: '🎯',
    color: 'bg-purple-500',
    description: '어려운 문제들로 실력을 시험해보세요!',
    features: [
      '어려운 문제 10개 선별',
      '문제당 30초 제한',
      '시간 보너스 및 등급 시스템'
    ]
  }
];

// 학급별 교과목 데이터 통합
const createSubject = (
  id: string,
  name: string,
  icon: string,
  color: string,
  elemQuestions: Question[] = [],
  midQuestions: Question[] = [],
  highQuestions: Question[] = []
): Subject => ({
  id,
  name,
  icon,
  color,
  questions: [...elemQuestions, ...midQuestions, ...highQuestions]
});

// 전체 교과목 데이터
export const subjects: Subject[] = [
  createSubject(
    'korean',
    '국어',
    '📝',
    'bg-red-500',
    elemKoreanQuestions,
    midKoreanQuestions,
    highKoreanQuestions
  ),
  createSubject(
    'math',
    '수학',
    '🔢',
    'bg-blue-500',
    elemMathQuestions,
    midMathQuestions,
    highMathQuestions
  ),
  createSubject(
    'english',
    '영어',
    '🌍',
    'bg-green-500',
    elemEnglishQuestions,
    midEnglishQuestions,
    highEnglishQuestions
  ),
  createSubject(
    'science',
    '과학',
    '🔬',
    'bg-purple-500',
    elemScienceQuestions,
    midScienceQuestions,
    highScienceQuestions
  ),
  createSubject(
    'korean_history',
    '한국사',
    '🏛️',
    'bg-yellow-500',
    elemHistoryQuestions,
    midHistoryQuestions,
    highHistoryQuestions
  ),
  createSubject(
    'world_history',
    '세계사',
    '🌏',
    'bg-indigo-500',
    [], // 초등학교에는 세계사가 없음
    midWorldHistoryQuestions,
    highWorldHistoryQuestions
  )
];

// 특정 학급의 문제만 필터링하는 함수
export const getQuestionsByGrade = (subject: Subject, grade: 'elementary' | 'middle' | 'high'): Question[] => {
  return subject.questions.filter(question => question.grade === grade);
};

// 특정 학급에서 사용 가능한 교과목 반환
export const getSubjectsByGrade = (grade: 'elementary' | 'middle' | 'high'): Subject[] => {
  return subjects.filter(subject => {
    const questionsForGrade = getQuestionsByGrade(subject, grade);
    return questionsForGrade.length > 0;
  });
};

// 학급별 교과목과 문제 수 통계
export const getGradeStatistics = () => {
  return gradeLevels.map(grade => {
    const availableSubjects = getSubjectsByGrade(grade.id);
    const totalQuestions = availableSubjects.reduce((total, subject) => {
      return total + getQuestionsByGrade(subject, grade.id).length;
    }, 0);
    
    return {
      grade: grade.name,
      subjects: availableSubjects.length,
      totalQuestions
    };
  });
};