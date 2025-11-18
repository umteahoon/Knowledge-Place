import { Question } from '../../types';

// 중학교 국어 문제
export const questions: Question[] = [
  {
    id: 'mid_kor_1',
    question: '다음 중 품사가 다른 것은?',
    options: ['아름답다', '예쁘다', '책상'],
    answer: '책상',
    explanation: '"아름답다", "예쁘다"는 형용사이고, "책상"은 명사입니다.',
    grade: 'middle',
    encouragement: '품사를 정확히 구분할 수 있네요!'
  },
  {
    id: 'mid_kor_2',
    question: '다음 문장에서 주어와 서술어를 찾으세요: "학생들이 열심히 공부한다"',
    options: ['학생들이 - 공부한다', '열심히 - 공부한다', '학생들이 - 열심히'],
    answer: '학생들이 - 공부한다',
    explanation: '주어는 "학생들이", 서술어는 "공부한다"입니다.',
    grade: 'middle',
    encouragement: '문장 성분을 정확히 분석했어요!'
  },
  {
    id: 'mid_kor_3',
    question: '다음 중 피동문은?',
    options: ['형이 동생을 때렸다', '동생이 형에게 맞았다', '형과 동생이 싸웠다'],
    answer: '동생이 형에게 맞았다',
    explanation: '피동문은 주어가 다른 사람의 행동을 당하는 문장입니다.',
    grade: 'middle',
    encouragement: '능동문과 피동문을 잘 구분하네요!'
  },
  {
    id: 'mid_kor_4',
    question: '다음 중 사동문은?',
    options: ['아이가 잠을 잔다', '엄마가 아이를 재운다', '아이가 일어난다'],
    answer: '엄마가 아이를 재운다',
    explanation: '사동문은 주어가 다른 사람으로 하여금 어떤 행동을 하게 하는 문장입니다.',
    grade: 'middle',
    encouragement: '사동문의 개념을 정확히 이해했어요!'
  },
  {
    id: 'mid_kor_5',
    question: '다음 중 관형어는?',
    options: ['예쁜 꽃', '꽃이 예쁘다', '예쁘게 피었다'],
    answer: '예쁜 꽃',
    explanation: '관형어는 체언(명사)을 꾸며주는 말입니다. "예쁜"이 "꽃"을 꾸며줍니다.',
    grade: 'middle',
    encouragement: '문장 성분을 정확히 파악했어요!'
  },
  {
    id: 'mid_kor_6',
    question: '다음 중 부사어는?',
    options: ['빨간 사과', '사과를 먹다', '맛있게 먹다'],
    answer: '맛있게 먹다',
    explanation: '부사어는 용언(동사, 형용사)을 꾸며주는 말입니다. "맛있게"가 "먹다"를 꾸며줍니다.',
    grade: 'middle',
    encouragement: '부사어의 역할을 잘 이해하고 있어요!'
  },
  {
    id: 'mid_kor_7',
    question: '다음 중 높임법이 가장 높은 것은?',
    options: ['선생님이 오신다', '선생님이 온다', '선생님이 와'],
    answer: '선생님이 오신다',
    explanation: '"오신다"는 주체 높임법으로 가장 높은 높임 표현입니다.',
    grade: 'middle',
    encouragement: '높임법의 단계를 정확히 알고 있어요!'
  },
  {
    id: 'mid_kor_8',
    question: '다음 중 의문문은?',
    options: ['오늘 날씨가 좋다', '오늘 날씨가 좋은가?', '오늘 날씨가 좋구나!'],
    answer: '오늘 날씨가 좋은가?',
    explanation: '의문문은 물어보는 문장으로 "~가?", "~는가?" 등으로 끝납니다.',
    grade: 'middle',
    encouragement: '문장의 종류를 정확히 구분했어요!'
  },
  {
    id: 'mid_kor_9',
    question: '다음 중 감탄문은?',
    options: ['집에 가자', '집에 간다', '집이 크구나!'],
    answer: '집이 크구나!',
    explanation: '감탄문은 놀라거나 감탄하는 마음을 나타내는 문장으로 "~구나!", "~로구나!" 등으로 끝납니다.',
    grade: 'middle',
    encouragement: '감탄문의 특징을 잘 파악했어요!'
  },
  {
    id: 'mid_kor_10',
    question: '다음 중 명령문은?',
    options: ['빨리 와라', '빨리 온다', '빨리 왔다'],
    answer: '빨리 와라',
    explanation: '명령문은 상대방에게 어떤 행동을 하라고 시키는 문장입니다.',
    grade: 'middle',
    encouragement: '명령문의 특징을 정확히 알고 있어요!'
  }
];