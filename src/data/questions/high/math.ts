import { Question } from '../../types';

// 고등학교 수학 문제
export const questions: Question[] = [
  {
    id: 'high_math_1',
    question: 'lim(x→0) (sin x)/x = ?',
    options: ['0', '1', '∞'],
    answer: '1',
    explanation: '이것은 중요한 극한 공식으로, lim(x→0) (sin x)/x = 1입니다.',
    grade: 'high',
    encouragement: '중요한 극한 공식을 알고 있어요!'
  },
  {
    id: 'high_math_2',
    question: 'f(x) = x³일 때, f\'(x) = ?',
    options: ['3x²', 'x²', '3x'],
    answer: '3x²',
    explanation: '거듭제곱의 미분법에 의해 (x³)\' = 3x²입니다.',
    grade: 'high',
    encouragement: '미분법을 정확히 적용했어요!'
  },
  {
    id: 'high_math_3',
    question: '∫ 2x dx = ?',
    options: ['x² + C', '2x² + C', 'x + C'],
    answer: 'x² + C',
    explanation: '∫ 2x dx = x² + C입니다. (C는 적분상수)',
    grade: 'high',
    encouragement: '적분을 정확히 계산했어요!'
  },
  {
    id: 'high_math_4',
    question: 'log₂ 8 = ?',
    options: ['2', '3', '4'],
    answer: '3',
    explanation: '2³ = 8이므로 log₂ 8 = 3입니다.',
    grade: 'high',
    encouragement: '로그의 정의를 정확히 이해했어요!'
  },
  {
    id: 'high_math_5',
    question: '벡터 a⃗ = (3, 4)의 크기는?',
    options: ['5', '7', '12'],
    answer: '5',
    explanation: '벡터의 크기는 √(3² + 4²) = √(9 + 16) = √25 = 5입니다.',
    grade: 'high',
    encouragement: '벡터의 크기를 정확히 구했어요!'
  },
  {
    id: 'high_math_6',
    question: 'sin²θ + cos²θ = ?',
    options: ['0', '1', '2'],
    answer: '1',
    explanation: '삼각함수의 기본 공식으로 sin²θ + cos²θ = 1입니다.',
    grade: 'high',
    encouragement: '삼각함수의 기본 공식을 알고 있어요!'
  },
  {
    id: 'high_math_7',
    question: '등비수열 2, 6, 18, 54, ...의 공비는?',
    options: ['2', '3', '4'],
    answer: '3',
    explanation: '각 항을 이전 항으로 나누면 6÷2 = 3, 18÷6 = 3이므로 공비는 3입니다.',
    grade: 'high',
    encouragement: '등비수열의 공비를 정확히 구했어요!'
  },
  {
    id: 'high_math_8',
    question: '조합 ₅C₂ = ?',
    options: ['10', '20', '25'],
    answer: '10',
    explanation: '₅C₂ = 5!/(2!×3!) = (5×4)/(2×1) = 10입니다.',
    grade: 'high',
    encouragement: '조합을 정확히 계산했어요!'
  },
  {
    id: 'high_math_9',
    question: '복소수 i² = ?',
    options: ['-1', '1', 'i'],
    answer: '-1',
    explanation: '허수 단위 i의 정의에 의해 i² = -1입니다.',
    grade: 'high',
    encouragement: '복소수의 기본 성질을 알고 있어요!'
  },
  {
    id: 'high_math_10',
    question: '포물선 y = x²의 초점의 좌표는?',
    options: ['(0, 1/4)', '(0, 1/2)', '(1/4, 0)'],
    answer: '(0, 1/4)',
    explanation: '포물선 y = x²의 초점은 (0, 1/4)입니다.',
    grade: 'high',
    encouragement: '이차곡선의 성질을 정확히 알고 있어요!'
  }
];