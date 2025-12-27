import { Question } from '../../types';

// 중학교 영어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'mid_english_1',
    question: 'I _____ to school yesterday.',
    options: ['go', 'goes', 'went', 'going', 'gone'],
    answer: 'went',
    explanation: 'yesterday가 있으므로 과거형 went를 사용합니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '과거형을 정확히 사용했어요!'
  },
  {
    id: 'mid_english_2',
    question: 'She _____ English every day.',
    options: ['study', 'studies', 'studied', 'studying', 'studys'],
    answer: 'studies',
    explanation: '3인칭 단수 현재형에서는 동사에 -s를 붙입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '3인칭 단수 현재형을 잘 알고 있어요!'
  },
  {
    id: 'mid_english_3',
    question: 'This book is _____ than that one.',
    options: ['interesting', 'more interesting', 'most interesting', 'interestinger', 'much interesting'],
    answer: 'more interesting',
    explanation: '3음절 이상의 형용사는 more를 사용하여 비교급을 만듭니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '비교급을 정확히 만들었어요!'
  },
  {
    id: 'mid_english_4',
    question: 'I am looking _____ my keys.',
    options: ['at', 'for', 'in', 'on', 'with'],
    answer: 'for',
    explanation: 'look for는 ~을 찾다라는 뜻입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '전치사를 정확히 사용했어요!'
  },
  {
    id: 'mid_english_5',
    question: '_____ do you live?',
    options: ['What', 'Where', 'When', 'Why', 'How'],
    answer: 'Where',
    explanation: '거주지를 묻는 질문에는 Where를 사용합니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '의문사를 정확히 사용했어요!'
  },
  {
    id: 'mid_english_6',
    question: 'If it _____ tomorrow, we will stay home.',
    options: ['rain', 'rains', 'rained', 'raining', 'will rain'],
    answer: 'rains',
    explanation: '조건문에서 if절은 현재형을 사용합니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '조건문의 시제를 정확히 사용했어요!'
  },
  {
    id: 'mid_english_7',
    question: 'There _____ many books on the table.',
    options: ['is', 'are', 'was', 'were', 'be'],
    answer: 'are',
    explanation: 'many books는 복수이므로 are를 사용합니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '단수와 복수를 잘 구분했어요!'
  },
  {
    id: 'mid_english_8',
    question: 'I have _____ finished my homework.',
    options: ['yet', 'already', 'still', 'never', 'ever'],
    answer: 'already',
    explanation: '현재완료 긍정문에서 이미를 나타낼 때 already를 사용합니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '현재완료를 정확히 사용했어요!'
  },
  {
    id: 'mid_english_9',
    question: 'Can you help me _____ this problem?',
    options: ['with', 'for', 'at', 'in', 'on'],
    answer: 'with',
    explanation: 'help someone with something은 ~을 도와주다라는 뜻입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '구동사를 정확히 사용했어요!'
  },
  {
    id: 'mid_english_10',
    question: 'The book _____ by many people.',
    options: ['reads', 'is read', 'read', 'reading', 'was reading'],
    answer: 'is read',
    explanation: '수동태는 be동사 + 과거분사로 만듭니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '수동태를 정확히 만들었어요!'
  }
];