import { Question } from '../types';

// 초등학교 수학 문제
export const elementaryMathQuestions: Question[] = [
  {
    id: 'elem_math_1',
    question: '5 + 3 = ?',
    options: ['7', '8', '9'],
    answer: '8',
    explanation: '5 + 3 = 8입니다.',
    grade: 'elementary',
    encouragement: '덧셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_2',
    question: '10 - 4 = ?',
    options: ['5', '6', '7'],
    answer: '6',
    explanation: '10 - 4 = 6입니다.',
    grade: 'elementary',
    encouragement: '뺄셈도 완벽하게 할 수 있네요!'
  },
  {
    id: 'elem_math_3',
    question: '3 × 4 = ?',
    options: ['11', '12', '13'],
    answer: '12',
    explanation: '3 × 4 = 12입니다.',
    grade: 'elementary',
    encouragement: '구구단을 잘 외우고 있어요!'
  },
  {
    id: 'elem_math_4',
    question: '원의 모양은?',
    options: ['둥글다', '네모나다', '세모나다'],
    answer: '둥글다',
    explanation: '원은 둥근 모양입니다.',
    grade: 'elementary',
    encouragement: '도형의 특징을 잘 알고 있어요!'
  },
  {
    id: 'elem_math_5',
    question: '시계에서 긴 바늘이 가리키는 것은?',
    options: ['시간', '분', '초'],
    answer: '분',
    explanation: '시계의 긴 바늘은 분을 가리킵니다.',
    grade: 'elementary',
    encouragement: '시계 보는 법을 정확히 알고 있네요!'
  }
];

// 중학교 수학 문제
export const middleMathQuestions: Question[] = [
  {
    id: 'mid_math_1',
    question: '2x + 5 = 13일 때, x의 값은?',
    options: ['3', '4', '5'],
    answer: '4',
    explanation: '2x = 13 - 5 = 8, 따라서 x = 4입니다.',
    grade: 'middle',
    encouragement: '일차방정식을 정확히 풀었어요!'
  },
  {
    id: 'mid_math_2',
    question: '원의 넓이 공식은?',
    options: ['πr²', '2πr', 'πd'],
    answer: 'πr²',
    explanation: '원의 넓이는 π × 반지름²입니다.',
    grade: 'middle',
    encouragement: '기본 공식을 잘 알고 있어요!'
  },
  {
    id: 'mid_math_3',
    question: '√64의 값은?',
    options: ['6', '7', '8'],
    answer: '8',
    explanation: '8 × 8 = 64이므로 √64 = 8입니다.',
    grade: 'middle',
    encouragement: '제곱근 계산을 정확히 했어요!'
  },
  {
    id: 'mid_math_4',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 항상 180°입니다.',
    grade: 'middle',
    encouragement: '기하학의 기본을 완벽히 이해하고 있어요!'
  },
  {
    id: 'mid_math_5',
    question: '2³의 값은?',
    options: ['6', '8', '9'],
    answer: '8',
    explanation: '2³ = 2 × 2 × 2 = 8입니다.',
    grade: 'middle',
    encouragement: '거듭제곱을 정확히 계산했어요!'
  }
];

// 고등학교 수학 문제
export const highMathQuestions: Question[] = [
  {
    id: 'high_math_1',
    question: 'lim(x→0) (sin x)/x의 값은?',
    options: ['0', '1', '∞'],
    answer: '1',
    explanation: '이것은 중요한 극한값으로 lim(x→0) (sin x)/x = 1입니다.',
    grade: 'high',
    encouragement: '극한의 기본 공식을 정확히 알고 있어요!'
  },
  {
    id: 'high_math_2',
    question: 'f(x) = x²의 도함수는?',
    options: ['x', '2x', 'x²'],
    answer: '2x',
    explanation: 'f\'(x) = 2x입니다. 거듭제곱의 미분법을 적용합니다.',
    grade: 'high',
    encouragement: '미분법을 정확히 적용했어요!'
  },
  {
    id: 'high_math_3',
    question: '벡터 (3, 4)의 크기는?',
    options: ['5', '7', '12'],
    answer: '5',
    explanation: '벡터의 크기는 √(3² + 4²) = √25 = 5입니다.',
    grade: 'high',
    encouragement: '벡터의 크기를 정확히 계산했어요!'
  },
  {
    id: 'high_math_4',
    question: '등비수열 2, 6, 18, ...의 공비는?',
    options: ['2', '3', '4'],
    answer: '3',
    explanation: '6÷2 = 3, 18÷6 = 3이므로 공비는 3입니다.',
    grade: 'high',
    encouragement: '수열의 규칙을 정확히 찾았어요!'
  },
  {
    id: 'high_math_5',
    question: 'sin²θ + cos²θ의 값은?',
    options: ['0', '1', '2'],
    answer: '1',
    explanation: '삼각함수의 기본 공식으로 sin²θ + cos²θ = 1입니다.',
    grade: 'high',
    encouragement: '삼각함수의 기본 성질을 완벽히 알고 있어요!'
  }
];

export const mathQuestions = [
  ...elementaryMathQuestions,
  ...middleMathQuestions,
  ...highMathQuestions
];