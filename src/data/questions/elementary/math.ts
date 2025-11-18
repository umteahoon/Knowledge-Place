import { Question } from '../../types';

// 초등학교 수학 문제
export const questions: Question[] = [
  {
    id: 'elem_math_1',
    question: '5 + 3 = ?',
    options: ['7', '8', '9'],
    answer: '8',
    explanation: '5에 3을 더하면 8입니다.',
    grade: 'elementary',
    encouragement: '덧셈을 정확히 계산했어요!'
  },
  {
    id: 'elem_math_2',
    question: '10 - 4 = ?',
    options: ['5', '6', '7'],
    answer: '6',
    explanation: '10에서 4를 빼면 6입니다.',
    grade: 'elementary',
    encouragement: '뺄셈을 잘 했어요!'
  },
  {
    id: 'elem_math_3',
    question: '3 × 4 = ?',
    options: ['11', '12', '13'],
    answer: '12',
    explanation: '3에 4를 곱하면 12입니다.',
    grade: 'elementary',
    encouragement: '구구단을 잘 외우고 있어요!'
  },
  {
    id: 'elem_math_4',
    question: '15 ÷ 3 = ?',
    options: ['4', '5', '6'],
    answer: '5',
    explanation: '15를 3으로 나누면 5입니다.',
    grade: 'elementary',
    encouragement: '나눗셈을 정확히 했어요!'
  },
  {
    id: 'elem_math_5',
    question: '다음 중 가장 큰 수는?',
    options: ['25', '52', '15'],
    answer: '52',
    explanation: '52가 가장 큰 수입니다.',
    grade: 'elementary',
    encouragement: '수의 크기를 정확히 비교했어요!'
  },
  {
    id: 'elem_math_6',
    question: '시계에서 3시 30분을 나타내는 것은?',
    options: ['긴바늘이 6, 짧은바늘이 3', '긴바늘이 3, 짧은바늘이 6', '긴바늘이 6, 짧은바늘이 3과 4 사이'],
    answer: '긴바늘이 6, 짧은바늘이 3과 4 사이',
    explanation: '30분은 긴바늘이 6을 가리키고, 3시 30분이므로 짧은바늘은 3과 4 사이에 있습니다.',
    grade: 'elementary',
    encouragement: '시계 보는 법을 정확히 알고 있어요!'
  },
  {
    id: 'elem_math_7',
    question: '1000원에서 350원을 쓰면 거스름돈은?',
    options: ['650원', '750원', '550원'],
    answer: '650원',
    explanation: '1000 - 350 = 650원입니다.',
    grade: 'elementary',
    encouragement: '돈 계산을 정확히 했어요!'
  },
  {
    id: 'elem_math_8',
    question: '다음 중 직각은?',
    options: ['90도', '180도', '45도'],
    answer: '90도',
    explanation: '직각은 90도입니다.',
    grade: 'elementary',
    encouragement: '각도의 개념을 잘 알고 있어요!'
  },
  {
    id: 'elem_math_9',
    question: '정사각형의 변은 몇 개인가요?',
    options: ['3개', '4개', '5개'],
    answer: '4개',
    explanation: '정사각형은 4개의 변을 가지고 있습니다.',
    grade: 'elementary',
    encouragement: '도형의 특징을 잘 알고 있어요!'
  },
  {
    id: 'elem_math_10',
    question: '1/2 + 1/4 = ?',
    options: ['2/6', '3/4', '1/6'],
    answer: '3/4',
    explanation: '1/2 = 2/4이므로, 2/4 + 1/4 = 3/4입니다.',
    grade: 'elementary',
    encouragement: '분수 계산을 정확히 했어요!'
  }
];