import { Question } from '../../types';

// 고등학교 수학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'high_math_1',
    question: 'lim(x→0) (sin x)/x의 값은?',
    options: ['0', '1', '∞', '-1', '1/2'],
    answer: '1',
    explanation: '이것은 중요한 극한 공식으로, lim(x→0) (sin x)/x = 1입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '극한의 기본 공식을 잘 알고 있어요!'
  },
  {
    id: 'high_math_2',
    question: 'f(x) = x³ - 3x² + 2x일 때, f\'(x)는?',
    options: ['3x² - 6x + 2', '3x² - 3x + 2', 'x² - 6x + 2', '3x² - 6x + 1', '3x² - 6x'],
    answer: '3x² - 6x + 2',
    explanation: 'f\'(x) = 3x² - 6x + 2입니다. 각 항을 미분하면 됩니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '미분을 정확히 계산했어요!'
  },
  {
    id: 'high_math_3',
    question: '∫(2x + 3)dx의 값은?',
    options: ['x² + 3x + C', '2x² + 3x + C', 'x² + 3x', '2x + 3x + C', 'x² + 6x + C'],
    answer: 'x² + 3x + C',
    explanation: '∫(2x + 3)dx = x² + 3x + C입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '적분을 정확히 계산했어요!'
  },
  {
    id: 'high_math_4',
    question: 'log₂ 8의 값은?',
    options: ['2', '3', '4', '8', '16'],
    answer: '3',
    explanation: '2³ = 8이므로 log₂ 8 = 3입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '로그의 정의를 잘 이해했어요!'
  },
  {
    id: 'high_math_5',
    question: '벡터 a⃗ = (2, 3), b⃗ = (1, -2)일 때, a⃗ · b⃗의 값은?',
    options: ['-4', '-2', '0', '2', '4'],
    answer: '-4',
    explanation: 'a⃗ · b⃗ = 2×1 + 3×(-2) = 2 - 6 = -4입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '벡터의 내적을 정확히 계산했어요!'
  },
  {
    id: 'high_math_6',
    question: 'sin 30°의 값은?',
    options: ['1/4', '1/3', '1/2', '√2/2', '√3/2'],
    answer: '1/2',
    explanation: 'sin 30° = 1/2입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '삼각함수 값을 정확히 알고 있어요!'
  },
  {
    id: 'high_math_7',
    question: '등비수열 2, 6, 18, 54, ...에서 첫째항부터 5째항까지의 합은?',
    options: ['242', '243', '244', '245', '246'],
    answer: '242',
    explanation: '첫째항 a=2, 공비 r=3인 등비수열의 첫 5항의 합은 2(3⁵-1)/(3-1) = 2×242/2 = 242입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '등비수열의 합 공식을 잘 적용했어요!'
  },
  {
    id: 'high_math_8',
    question: '₅C₃의 값은?',
    options: ['6', '8', '10', '12', '15'],
    answer: '10',
    explanation: '₅C₃ = 5!/(3!×2!) = (5×4)/(2×1) = 10입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '조합을 정확히 계산했어요!'
  },
  {
    id: 'high_math_9',
    question: '복소수 (2+3i) + (1-2i)의 값은?',
    options: ['3+i', '3-i', '1+5i', '3+5i', '1+i'],
    answer: '3+i',
    explanation: '(2+3i) + (1-2i) = (2+1) + (3-2)i = 3+i입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '복소수의 덧셈을 정확히 했어요!'
  },
  {
    id: 'high_math_10',
    question: '포물선 y = x²의 초점의 좌표는?',
    options: ['(0, 1/2)', '(0, 1/4)', '(1/4, 0)', '(0, 1)', '(1, 0)'],
    answer: '(0, 1/4)',
    explanation: '포물선 y = x²의 초점은 (0, 1/4)입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '포물선의 성질을 잘 이해했어요!'
  }
];