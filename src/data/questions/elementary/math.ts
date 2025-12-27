import { Question } from '../../types';

// 초등학교 수학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'elem_math_1',
    question: '25 + 17 = ?',
    options: ['40', '41', '42', '43', '44'],
    answer: '42',
    explanation: '25 + 17 = 42입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '덧셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_2',
    question: '8 × 7 = ?',
    options: ['54', '55', '56', '57', '58'],
    answer: '56',
    explanation: '8 × 7 = 56입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '구구단을 잘 외웠어요!'
  },
  {
    id: 'elem_math_3',
    question: '시계가 3시 30분을 가리킬 때, 시침과 분침이 이루는 각도는?',
    options: ['60°', '75°', '90°', '105°', '120°'],
    answer: '75°',
    explanation: '3시 30분일 때 시침과 분침이 이루는 각도는 75°입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '시계 문제를 잘 풀었어요!'
  },
  {
    id: 'elem_math_4',
    question: '정사각형의 둘레가 20cm일 때, 한 변의 길이는?',
    options: ['4cm', '5cm', '6cm', '7cm', '8cm'],
    answer: '5cm',
    explanation: '정사각형의 둘레는 한 변의 길이 × 4이므로, 20 ÷ 4 = 5cm입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '도형의 성질을 잘 이해했어요!'
  },
  {
    id: 'elem_math_5',
    question: '3/4 + 1/4 = ?',
    options: ['1/2', '3/4', '4/8', '1', '5/4'],
    answer: '1',
    explanation: '3/4 + 1/4 = 4/4 = 1입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '분수의 덧셈을 정확히 했어요!'
  },
  {
    id: 'elem_math_6',
    question: '72 ÷ 8 = ?',
    options: ['7', '8', '9', '10', '11'],
    answer: '9',
    explanation: '72 ÷ 8 = 9입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '나눗셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_7',
    question: '다음 중 가장 큰 수는?',
    options: ['0.7', '0.65', '0.8', '0.75', '0.6'],
    answer: '0.8',
    explanation: '소수를 비교할 때 0.8이 가장 큽니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '소수의 크기를 잘 비교했어요!'
  },
  {
    id: 'elem_math_8',
    question: '원의 지름이 10cm일 때, 반지름은?',
    options: ['3cm', '4cm', '5cm', '6cm', '7cm'],
    answer: '5cm',
    explanation: '반지름은 지름의 절반이므로 10 ÷ 2 = 5cm입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '원의 성질을 잘 알고 있어요!'
  },
  {
    id: 'elem_math_9',
    question: '1000에서 347을 뺀 값은?',
    options: ['653', '663', '673', '683', '693'],
    answer: '653',
    explanation: '1000 - 347 = 653입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '큰 수의 뺄셈을 정확히 했어요!'
  },
  {
    id: 'elem_math_10',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '120°', '150°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 180°입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '도형의 기본 성질을 잘 알고 있어요!'
  }
];