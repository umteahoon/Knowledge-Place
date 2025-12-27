import { Question } from '../../types';

// 중학교 국어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'mid_korean_1',
    question: '다음 중 품사가 다른 것은?',
    options: ['아름답다', '크다', '높다', '책상', '좋다'],
    answer: '책상',
    explanation: '책상은 명사이고, 나머지는 모두 형용사입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '품사를 정확히 구분했어요!'
  },
  {
    id: 'mid_korean_2',
    question: '다음 문장에서 주어는?',
    options: ['철수가', '학교에', '갔다', '어제', '빨리'],
    answer: '철수가',
    explanation: '주어는 동작이나 상태의 주체를 나타내는 문장 성분입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '문장 성분을 잘 찾았어요!'
  },
  {
    id: 'mid_korean_3',
    question: '다음 중 피동 표현은?',
    options: ['문을 열다', '문이 열리다', '문을 닫다', '문을 만들다', '문을 보다'],
    answer: '문이 열리다',
    explanation: '피동 표현은 주어가 다른 주체에 의해 어떤 행동을 당하는 것을 나타냅니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '피동과 능동을 잘 구분했어요!'
  },
  {
    id: 'mid_korean_4',
    question: '다음 중 높임법이 올바르게 사용된 것은?',
    options: ['선생님이 오셨습니다', '선생님이 왔습니다', '선생님이 온다', '선생님이 와', '선생님이 오네'],
    answer: '선생님이 오셨습니다',
    explanation: '높임의 대상인 선생님에 대해 주체 높임법을 사용한 올바른 표현입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '높임법을 정확히 사용했어요!'
  },
  {
    id: 'mid_korean_5',
    question: '다음 중 의성어는?',
    options: ['반짝반짝', '살금살금', '멍멍', '느릿느릿', '깜깜'],
    answer: '멍멍',
    explanation: '의성어는 소리를 흉내 낸 말입니다. 멍멍은 개 짖는 소리를 나타냅니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '의성어와 의태어를 잘 구분했어요!'
  },
  {
    id: 'mid_korean_6',
    question: '다음 중 사동 표현은?',
    options: ['아이가 잠들다', '아이를 재우다', '아이가 자다', '아이가 일어나다', '아이를 보다'],
    answer: '아이를 재우다',
    explanation: '사동 표현은 주어가 다른 대상으로 하여금 어떤 행동을 하게 하는 것을 나타냅니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '사동 표현을 정확히 찾았어요!'
  },
  {
    id: 'mid_korean_7',
    question: '다음 중 복합어는?',
    options: ['학교', '돌다리', '하늘', '바다', '산'],
    answer: '돌다리',
    explanation: '돌다리는 돌+다리로 이루어진 복합어입니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '단어의 구성을 잘 분석했어요!'
  },
  {
    id: 'mid_korean_8',
    question: '다음 중 관형어는?',
    options: ['예쁜 꽃', '꽃이 예쁘다', '예쁘게', '예쁘다', '꽃'],
    answer: '예쁜 꽃',
    explanation: '관형어는 체언을 꾸며주는 말입니다. 예쁜이 꽃을 꾸며줍니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '문장 성분을 정확히 파악했어요!'
  },
  {
    id: 'mid_korean_9',
    question: '다음 중 부사는?',
    options: ['빨리', '빠른', '빠르다', '빠름', '빨간'],
    answer: '빨리',
    explanation: '부사는 용언이나 다른 부사, 문장 전체를 꾸며주는 말입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '품사를 정확히 구분했어요!'
  },
  {
    id: 'mid_korean_10',
    question: '다음 중 연결어미는?',
    options: ['-고', '-다', '-니까', '-겠-', '-었-'],
    answer: '-니까',
    explanation: '연결어미는 앞 문장과 뒤 문장을 연결하는 역할을 합니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '어미의 종류를 잘 구분했어요!'
  }
];