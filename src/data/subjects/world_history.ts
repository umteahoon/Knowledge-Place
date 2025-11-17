import { Question } from '../types';

// 중학교 세계사 문제 (초등학교에서는 세계사를 별도로 다루지 않음)
export const middleWorldHistoryQuestions: Question[] = [
  {
    id: 'mid_whist_1',
    question: '고대 이집트의 대표적인 건축물은?',
    options: ['콜로세움', '피라미드', '파르테논 신전'],
    answer: '피라미드',
    explanation: '피라미드는 고대 이집트의 대표적인 건축물입니다.',
    grade: 'middle',
    encouragement: '고대 문명을 잘 알고 있어요!'
  },
  {
    id: 'mid_whist_2',
    question: '중국을 통일한 최초의 황제는?',
    options: ['진시황제', '한무제', '당태종'],
    answer: '진시황제',
    explanation: '진시황제가 기원전 221년 중국을 최초로 통일했습니다.',
    grade: 'middle',
    encouragement: '중국사의 중요한 인물을 정확히 알고 있어요!'
  },
  {
    id: 'mid_whist_3',
    question: '로마 제국을 건설한 인물은?',
    options: ['율리우스 카이사르', '아우구스투스', '네로'],
    answer: '아우구스투스',
    explanation: '아우구스투스가 로마 제국의 초대 황제가 되었습니다.',
    grade: 'middle',
    encouragement: '고대 로마사를 잘 이해하고 있어요!'
  },
  {
    id: 'mid_whist_4',
    question: '이슬람교의 창시자는?',
    options: ['예수', '부처', '마호메트'],
    answer: '마호메트',
    explanation: '마호메트(무함마드)가 이슬람교를 창시했습니다.',
    grade: 'middle',
    encouragement: '세계 종교의 역사를 잘 알고 있어요!'
  },
  {
    id: 'mid_whist_5',
    question: '몽골 제국을 건설한 인물은?',
    options: ['칭기즈칸', '쿠빌라이칸', '바투칸'],
    answer: '칭기즈칸',
    explanation: '칭기즈칸이 몽골 제국을 건설했습니다.',
    grade: 'middle',
    encouragement: '유라시아 역사를 잘 이해하고 있어요!'
  }
];

// 고등학교 세계사 문제
export const highWorldHistoryQuestions: Question[] = [
  {
    id: 'high_whist_1',
    question: '프랑스 혁명이 일어난 연도는?',
    options: ['1789년', '1799년', '1804년'],
    answer: '1789년',
    explanation: '프랑스 혁명은 1789년에 시작되었습니다.',
    grade: 'high',
    encouragement: '세계사의 중요한 전환점을 잘 알고 있어요!'
  },
  {
    id: 'high_whist_2',
    question: '제2차 세계대전이 끝난 연도는?',
    options: ['1944년', '1945년', '1946년'],
    answer: '1945년',
    explanation: '제2차 세계대전은 1945년에 종료되었습니다.',
    grade: 'high',
    encouragement: '현대사의 중요한 사건을 정확히 기억하고 있어요!'
  },
  {
    id: 'high_whist_3',
    question: '산업혁명이 시작된 국가는?',
    options: ['프랑스', '독일', '영국'],
    answer: '영국',
    explanation: '산업혁명은 18세기 중반 영국에서 시작되었습니다.',
    grade: 'high',
    encouragement: '근대사의 흐름을 잘 파악하고 있어요!'
  },
  {
    id: 'high_whist_4',
    question: '아메리카 대륙을 발견한 탐험가는?',
    options: ['마젤란', '콜럼버스', '바스코 다 가마'],
    answer: '콜럼버스',
    explanation: '콜럼버스가 1492년 아메리카 대륙을 발견했습니다.',
    grade: 'high',
    encouragement: '대항해시대의 역사를 잘 알고 있어요!'
  },
  {
    id: 'high_whist_5',
    question: '러시아 혁명이 일어난 연도는?',
    options: ['1905년', '1917년', '1922년'],
    answer: '1917년',
    explanation: '러시아 혁명은 1917년에 일어났습니다.',
    grade: 'high',
    encouragement: '20세기 역사의 중요한 사건을 정확히 알고 있어요!'
  }
];

export const worldHistoryQuestions = [
  ...middleWorldHistoryQuestions,
  ...highWorldHistoryQuestions
];