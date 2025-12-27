import { Question } from '../../types';

// 중학교 수학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'mid_math_1',
    question: '2x + 5 = 11일 때, x의 값은?',
    options: ['1', '2', '3', '4', '5'],
    answer: '3',
    explanation: '2x = 11 - 5 = 6, 따라서 x = 3입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '일차방정식을 정확히 풀었어요!'
  },
  {
    id: 'mid_math_2',
    question: '(-3) × 4 = ?',
    options: ['-12', '12', '-7', '7', '0'],
    answer: '-12',
    explanation: '음수와 양수를 곱하면 음수가 됩니다. (-3) × 4 = -12',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '정수의 곱셈을 정확히 계산했어요!'
  },
  {
    id: 'mid_math_3',
    question: 'x² - 5x + 6 = 0을 인수분해하면?',
    options: ['(x-2)(x-3)', '(x-1)(x-6)', '(x+2)(x+3)', '(x-2)(x+3)', '(x+1)(x-6)'],
    answer: '(x-2)(x-3)',
    explanation: 'x² - 5x + 6 = (x-2)(x-3)입니다. 전개하면 x² - 3x - 2x + 6 = x² - 5x + 6',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '인수분해를 완벽하게 했어요!'
  },
  {
    id: 'mid_math_4',
    question: '직각삼각형에서 빗변이 5, 한 변이 3일 때 다른 한 변의 길이는?',
    options: ['2', '3', '4', '5', '6'],
    answer: '4',
    explanation: '피타고라스 정리에 의해 3² + b² = 5², 9 + b² = 25, b² = 16, b = 4',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '피타고라스 정리를 잘 적용했어요!'
  },
  {
    id: 'mid_math_5',
    question: 'y = 2x + 3과 y = -x + 6의 교점의 좌표는?',
    options: ['(1, 5)', '(2, 4)', '(3, 3)', '(0, 3)', '(2, 7)'],
    answer: '(1, 5)',
    explanation: '2x + 3 = -x + 6에서 3x = 3, x = 1. y = 2(1) + 3 = 5. 따라서 교점은 (1, 5)',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '연립방정식을 완벽하게 풀었어요!'
  },
  {
    id: 'mid_math_6',
    question: '원의 둘레가 12π일 때, 이 원의 넓이는?',
    options: ['6π', '12π', '24π', '36π', '144π'],
    answer: '36π',
    explanation: '둘레 = 2πr = 12π이므로 r = 6. 넓이 = πr² = π × 6² = 36π',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '원의 성질을 잘 이해했어요!'
  },
  {
    id: 'mid_math_7',
    question: '2x + 3y = 7, x - y = 1일 때 x + y의 값은?',
    options: ['1', '2', '3', '4', '5'],
    answer: '3',
    explanation: 'x - y = 1에서 x = y + 1. 이를 첫 번째 식에 대입하면 2(y+1) + 3y = 7, 5y = 5, y = 1, x = 2. 따라서 x + y = 3',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '연립방정식을 체계적으로 풀었어요!'
  },
  {
    id: 'mid_math_8',
    question: 'x² = 16일 때 x의 값은?',
    options: ['4', '-4', '±4', '8', '±8'],
    answer: '±4',
    explanation: 'x² = 16에서 x = ±4입니다. 제곱근은 양수와 음수 두 개의 값을 가집니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '제곱근의 성질을 정확히 알고 있어요!'
  },
  {
    id: 'mid_math_9',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '120°', '150°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 항상 180°입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '기본 도형의 성질을 잘 알고 있어요!'
  },
  {
    id: 'mid_math_10',
    question: '주머니에 빨간 공 3개, 파란 공 2개가 들어있다. 빨간 공이 나올 확률은?',
    options: ['1/5', '2/5', '3/5', '4/5', '1'],
    answer: '3/5',
    explanation: '전체 공의 개수는 5개, 빨간 공은 3개이므로 확률은 3/5입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '확률 계산을 정확히 했어요!'
  },
  {
    id: 'mid_math_11',
    question: '다음 중 일차함수가 아닌 것은?',
    options: ['y = 2x + 3', 'y = -x + 1', 'y = x²', 'y = 5', 'y = 3x'],
    answer: 'y = x²',
    explanation: 'y = x²는 이차함수로, 포물선 모양의 그래프를 그립니다. 일차함수는 직선 모양입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '함수의 차수를 잘 구분했네요!'
  },
  {
    id: 'mid_math_12',
    question: '(-2)³의 값은?',
    options: ['-8', '8', '-6', '6', '0'],
    answer: '-8',
    explanation: '(-2)³ = (-2) × (-2) × (-2) = -8입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '거듭제곱을 정확히 계산했어요!'
  },
  {
    id: 'mid_math_13',
    question: '정사각형의 한 변의 길이가 5cm일 때, 대각선의 길이는?',
    options: ['5cm', '5√2cm', '10cm', '25cm', '5√3cm'],
    answer: '5√2cm',
    explanation: '정사각형의 대각선은 한 변의 길이에 √2를 곱한 값입니다. 5 × √2 = 5√2cm',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '정사각형의 성질을 잘 활용했어요!'
  },
  {
    id: 'mid_math_14',
    question: '다음 중 소수가 아닌 것은?',
    options: ['2', '3', '5', '7', '9'],
    answer: '9',
    explanation: '9는 3 × 3으로 나타낼 수 있으므로 소수가 아닙니다. 소수는 1과 자기 자신으로만 나누어지는 수입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '소수의 개념을 정확히 이해했어요!'
  },
  {
    id: 'mid_math_15',
    question: '부등식 2x - 3 > 5를 만족하는 x의 범위는?',
    options: ['x > 1', 'x > 2', 'x > 3', 'x > 4', 'x > 5'],
    answer: 'x > 4',
    explanation: '2x - 3 > 5에서 2x > 8, 따라서 x > 4입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '부등식을 정확히 풀었어요!'
  }
];