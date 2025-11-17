import { Question } from '../types';

// 초등학교 국어 문제
export const elementaryKoreanQuestions: Question[] = [
  {
    id: 'elem_kor_1',
    question: '다음 중 맞춤법이 올바른 것은?',
    options: ['안녕하세요', '안녕하세여', '안녕하셰요'],
    answer: '안녕하세요',
    explanation: '"안녕하세요"가 올바른 맞춤법입니다.',
    grade: 'elementary',
    encouragement: '맞춤법을 정확히 알고 있네요! 훌륭해요!'
  },
  {
    id: 'elem_kor_2',
    question: '"ㅂ"으로 시작하는 동물은?',
    options: ['고양이', '강아지', '병아리'],
    answer: '병아리',
    explanation: '"병아리"는 "ㅂ"으로 시작하는 동물입니다.',
    grade: 'elementary',
    encouragement: '초성을 잘 찾았어요! 대단합니다!'
  },
  {
    id: 'elem_kor_3',
    question: '반대말이 올바른 것은?',
    options: ['크다 - 작다', '높다 - 넓다', '빠르다 - 느리다'],
    answer: '크다 - 작다',
    explanation: '"크다"의 반대말은 "작다"입니다.',
    grade: 'elementary',
    encouragement: '반대말을 정확히 알고 있어요!'
  },
  {
    id: 'elem_kor_4',
    question: '다음 중 높임말이 아닌 것은?',
    options: ['드시다', '계시다', '먹다'],
    answer: '먹다',
    explanation: '"먹다"는 높임말이 아닙니다. 높임말은 "드시다"입니다.',
    grade: 'elementary',
    encouragement: '높임말과 일반말을 잘 구분하네요!'
  },
  {
    id: 'elem_kor_5',
    question: '의성어는 무엇인가요?',
    options: ['소리를 흉내낸 말', '모양을 흉내낸 말', '색깔을 나타내는 말'],
    answer: '소리를 흉내낸 말',
    explanation: '의성어는 소리를 흉내내어 만든 말입니다. 예: 멍멍, 야옹',
    grade: 'elementary',
    encouragement: '의성어의 뜻을 정확히 알고 있어요!'
  }
];

// 중학교 국어 문제
export const middleKoreanQuestions: Question[] = [
  {
    id: 'mid_kor_1',
    question: '"ㅂ" 불규칙 활용의 예는?',
    options: ['돕다 - 도와', '잡다 - 잡아', '입다 - 입어'],
    answer: '돕다 - 도와',
    explanation: '"돕다"는 ㅂ불규칙으로 "도와"로 활용됩니다.',
    grade: 'middle',
    encouragement: '불규칙 활용을 잘 이해하고 있네요!'
  },
  {
    id: 'mid_kor_2',
    question: '다음 중 관형어는?',
    options: ['예쁜 꽃', '꽃이 예쁘다', '예쁘게 피었다'],
    answer: '예쁜 꽃',
    explanation: '"예쁜"은 "꽃"을 꾸며주는 관형어입니다.',
    grade: 'middle',
    encouragement: '문장 성분을 정확히 파악했어요!'
  },
  {
    id: 'mid_kor_3',
    question: '시조의 형식은?',
    options: ['3장 6구', '4장 8구', '5장 10구'],
    answer: '3장 6구',
    explanation: '시조는 3장 6구의 정형시입니다.',
    grade: 'middle',
    encouragement: '고전 문학의 형식을 잘 알고 있어요!'
  },
  {
    id: 'mid_kor_4',
    question: '다음 중 피동 표현은?',
    options: ['문이 열렸다', '문을 열었다', '문을 열어라'],
    answer: '문이 열렸다',
    explanation: '"열렸다"는 피동 표현입니다.',
    grade: 'middle',
    encouragement: '능동과 피동을 잘 구분하네요!'
  },
  {
    id: 'mid_kor_5',
    question: '설명문의 특징은?',
    options: ['정보 전달', '감정 표현', '의견 주장'],
    answer: '정보 전달',
    explanation: '설명문은 정보를 전달하는 것이 주목적입니다.',
    grade: 'middle',
    encouragement: '글의 갈래를 정확히 이해하고 있어요!'
  }
];

// 고등학교 국어 문제
export const highKoreanQuestions: Question[] = [
  {
    id: 'high_kor_1',
    question: '다음 중 의도법이 사용된 문장은?',
    options: ['비가 온다', '비가 오겠다', '비가 와라'],
    answer: '비가 와라',
    explanation: '"와라"는 화자의 의도를 나타내는 의도법입니다.',
    grade: 'high',
    encouragement: '문법의 세부 사항까지 정확히 알고 있네요!'
  },
  {
    id: 'high_kor_2',
    question: '"춘향전"의 갈래는?',
    options: ['판소리계 소설', '역사소설', '추리소설'],
    answer: '판소리계 소설',
    explanation: '춘향전은 판소리로 불리던 것이 소설로 정착된 판소리계 소설입니다.',
    grade: 'high',
    encouragement: '고전문학의 갈래를 정확히 알고 있어요!'
  },
  {
    id: 'high_kor_3',
    question: '다음 중 의존명사는?',
    options: ['것', '사람', '나무'],
    answer: '것',
    explanation: '"것"은 다른 말에 의존하여 쓰이는 의존명사입니다.',
    grade: 'high',
    encouragement: '품사 분류를 정확히 하고 있어요!'
  },
  {
    id: 'high_kor_4',
    question: '화법에서 "공감적 듣기"의 특징은?',
    options: ['비판적 분석', '감정적 공유', '논리적 반박'],
    answer: '감정적 공유',
    explanation: '공감적 듣기는 상대방의 감정을 이해하고 공유하는 것입니다.',
    grade: 'high',
    encouragement: '의사소통의 원리를 잘 이해하고 있어요!'
  },
  {
    id: 'high_kor_5',
    question: '현대시에서 "영탄법"의 효과는?',
    options: ['감정 강조', '논리 전개', '정보 전달'],
    answer: '감정 강조',
    explanation: '영탄법은 감정을 강조하여 표현하는 수사법입니다.',
    grade: 'high',
    encouragement: '문학 표현 기법을 정확히 알고 있네요!'
  }
];

export const koreanQuestions = [
  ...elementaryKoreanQuestions,
  ...middleKoreanQuestions,
  ...highKoreanQuestions
];