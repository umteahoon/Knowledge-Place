import { Question } from '../../types';

// 초등학교 국어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'elem_korean_1',
    question: '다음 중 맞춤법이 올바른 것은?',
    options: ['넓다', '넓따', '널따', '널다', '넙다'],
    answer: '넓다',
    explanation: '넓다가 올바른 맞춤법입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '맞춤법을 정확히 알고 있어요!'
  },
  {
    id: 'elem_korean_2',
    question: '다음 중 의성어는?',
    options: ['반짝반짝', '살금살금', '멍멍', '느릿느릿', '깜깜'],
    answer: '멍멍',
    explanation: '의성어는 소리를 흉내 낸 말입니다. 멍멍은 개 짖는 소리입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '의성어를 잘 찾았어요!'
  },
  {
    id: 'elem_korean_3',
    question: '다음 중 의태어는?',
    options: ['멍멍', '야옹', '반짝반짝', '꽥꽥', '삐약삐약'],
    answer: '반짝반짝',
    explanation: '의태어는 모양이나 상태를 흉내 낸 말입니다. 반짝반짝은 빛나는 모양을 나타냅니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '의태어를 정확히 구분했어요!'
  },
  {
    id: 'elem_korean_4',
    question: '다음 문장에서 주어는?',
    options: ['고양이가', '생선을', '먹었다', '맛있게', '어제'],
    answer: '고양이가',
    explanation: '주어는 동작을 하는 주체를 나타냅니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '문장 성분을 잘 찾았어요!'
  },
  {
    id: 'elem_korean_5',
    question: '다음 중 반대말이 올바른 것은?',
    options: ['크다 - 작다', '높다 - 낮다', '빠르다 - 느리다', '밝다 - 어둡다', '모두 맞다'],
    answer: '모두 맞다',
    explanation: '제시된 모든 반대말이 올바릅니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '반대말을 잘 알고 있어요!'
  },
  {
    id: 'elem_korean_6',
    question: '다음 중 높임말이 아닌 것은?',
    options: ['진지', '연세', '댁', '집', '성함'],
    answer: '집',
    explanation: '집은 높임말이 아닙니다. 높임말은 댁입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '높임말을 잘 구분했어요!'
  },
  {
    id: 'elem_korean_7',
    question: '다음 중 띄어쓰기가 올바른 것은?',
    options: ['학교에 간다', '학교에간다', '학 교에 간다', '학교 에간다', '학교에가 ㄴ다'],
    answer: '학교에 간다',
    explanation: '조사는 앞말에 붙여 쓰고, 동사는 띄어 씁니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '띄어쓰기를 정확히 했어요!'
  },
  {
    id: 'elem_korean_8',
    question: '다음 중 꾸며주는 말은?',
    options: ['예쁜 꽃', '꽃이 예쁘다', '예쁘게 웃다', '예쁘다', '꽃'],
    answer: '예쁜 꽃',
    explanation: '예쁜이 꽃을 꾸며주는 말입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '꾸며주는 말을 잘 찾았어요!'
  },
  {
    id: 'elem_korean_9',
    question: '다음 중 감탄사는?',
    options: ['아', '그리고', '하지만', '그런데', '그러므로'],
    answer: '아',
    explanation: '감탄사는 감정이나 의지를 나타내는 말입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '품사를 정확히 구분했어요!'
  },
  {
    id: 'elem_korean_10',
    question: '다음 중 문장 부호 사용이 올바른 것은?',
    options: ['안녕하세요.', '안녕하세요!', '안녕하세요?', '안녕하세요,', '안녕하세요;'],
    answer: '안녕하세요.',
    explanation: '인사말은 마침표(.)를 사용합니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '문장 부호를 올바르게 사용했어요!'
  }
];