import { Question } from '../../types';

// 중학교 수학 문제
export const questions: Question[] = [
  {
    id: 'mid_math_1',
    question: '2x + 5 = 11일 때, x의 값은?',
    options: ['2', '3', '4'],
    answer: '3',
    explanation: '2x = 11 - 5 = 6, 따라서 x = 3입니다.',
    grade: 'middle',
    encouragement: '일차방정식을 정확히 풀었어요!'
  },
  {
    id: 'mid_math_2',
    question: '(-3) × 4 = ?',
    options: ['-12', '12', '-7'],
    answer: '-12',
    explanation: '음수와 양수를 곱하면 음수가 됩니다. (-3) × 4 = -12',
    grade: 'middle',
    encouragement: '정수의 곱셈을 정확히 계산했어요!'
  },
  {
    id: 'mid_math_3',
    question: 'x² - 4x + 4를 인수분해하면?',
    options: ['(x-2)²', '(x+2)²', '(x-2)(x+2)'],
    answer: '(x-2)²',
    explanation: 'x² - 4x + 4 = (x-2)²입니다. 완전제곱식입니다.',
    grade: 'middle',
    encouragement: '인수분해를 정확히 했어요!'
  },
  {
    id: 'mid_math_4',
    question: '직각삼각형에서 빗변의 길이가 5, 한 변의 길이가 3일 때, 나머지 한 변의 길이는?',
    options: ['3', '4', '5'],
    answer: '4',
    explanation: '피타고라스 정리에 의해 3² + b² = 5², 9 + b² = 25, b² = 16, b = 4',
    grade: 'middle',
    encouragement: '피타고라스 정리를 잘 적용했어요!'
  },
  {
    id: 'mid_math_5',
    question: '함수 y = 2x + 1에서 x = 3일 때 y의 값은?',
    options: ['6', '7', '8'],
    answer: '7',
    explanation: 'y = 2(3) + 1 = 6 + 1 = 7',
    grade: 'middle',
    encouragement: '일차함수의 값을 정확히 구했어요!'
  },
  {
    id: 'mid_math_6',
    question: '원의 둘레 공식은?',
    options: ['2πr', 'πr²', 'πr'],
    answer: '2πr',
    explanation: '원의 둘레는 2πr입니다. (r은 반지름)',
    grade: 'middle',
    encouragement: '원의 공식을 정확히 알고 있어요!'
  },
  {
    id: 'mid_math_7',
    question: '연립방정식 x + y = 5, x - y = 1의 해는?',
    options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1'],
    answer: 'x=3, y=2',
    explanation: '두 식을 더하면 2x = 6, x = 3. x = 3을 첫 번째 식에 대입하면 y = 2',
    grade: 'middle',
    encouragement: '연립방정식을 정확히 풀었어요!'
  },
  {
    id: 'mid_math_8',
    question: '이차방정식 x² - 5x + 6 = 0의 해는?',
    options: ['x = 2, 3', 'x = 1, 6', 'x = -2, -3'],
    answer: 'x = 2, 3',
    explanation: 'x² - 5x + 6 = (x-2)(x-3) = 0, 따라서 x = 2 또는 x = 3',
    grade: 'middle',
    encouragement: '이차방정식을 정확히 풀었어요!'
  },
  {
    id: 'mid_math_9',
    question: '삼각형의 내각의 합은?',
    options: ['180도', '360도', '90도'],
    answer: '180도',
    explanation: '모든 삼각형의 내각의 합은 180도입니다.',
    grade: 'middle',
    encouragement: '삼각형의 성질을 정확히 알고 있어요!'
  },
  {
    id: 'mid_math_10',
    question: '확률에서 동전을 던져 앞면이 나올 확률은?',
    options: ['1/4', '1/2', '1/3'],
    answer: '1/2',
    explanation: '동전에는 앞면과 뒷면 2가지 경우가 있으므로 앞면이 나올 확률은 1/2입니다.',
    grade: 'middle',
    encouragement: '확률의 개념을 정확히 이해했어요!'
  }
];