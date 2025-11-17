import { Question } from '../types';

// 초등학교 영어 문제
export const elementaryEnglishQuestions: Question[] = [
  {
    id: 'elem_eng_1',
    question: '"사과"를 영어로 하면?',
    options: ['Apple', 'Orange', 'Banana'],
    answer: 'Apple',
    explanation: '"사과"는 영어로 "Apple"입니다.',
    grade: 'elementary',
    encouragement: '기본 단어를 잘 알고 있어요!'
  },
  {
    id: 'elem_eng_2',
    question: '"Hello"의 뜻은?',
    options: ['안녕', '고마워', '미안해'],
    answer: '안녕',
    explanation: '"Hello"는 인사말로 "안녕"이라는 뜻입니다.',
    grade: 'elementary',
    encouragement: '인사말을 정확히 알고 있네요!'
  },
  {
    id: 'elem_eng_3',
    question: '색깔 "빨간색"을 영어로 하면?',
    options: ['Blue', 'Red', 'Green'],
    answer: 'Red',
    explanation: '"빨간색"은 영어로 "Red"입니다.',
    grade: 'elementary',
    encouragement: '색깔 단어를 잘 외웠어요!'
  },
  {
    id: 'elem_eng_4',
    question: '"Cat"의 뜻은?',
    options: ['개', '고양이', '새'],
    answer: '고양이',
    explanation: '"Cat"은 "고양이"라는 뜻입니다.',
    grade: 'elementary',
    encouragement: '동물 이름을 정확히 알고 있어요!'
  },
  {
    id: 'elem_eng_5',
    question: '"Thank you"의 뜻은?',
    options: ['안녕', '고마워', '잘가'],
    answer: '고마워',
    explanation: '"Thank you"는 "고마워"라는 뜻입니다.',
    grade: 'elementary',
    encouragement: '예의 바른 표현을 잘 알고 있네요!'
  }
];

// 중학교 영어 문제
export const middleEnglishQuestions: Question[] = [
  {
    id: 'mid_eng_1',
    question: '"Beautiful"의 반대말은?',
    options: ['Ugly', 'Pretty', 'Nice'],
    answer: 'Ugly',
    explanation: 'Beautiful(아름다운)의 반대말은 Ugly(못생긴)입니다.',
    grade: 'middle',
    encouragement: '어휘력이 훌륭하네요!'
  },
  {
    id: 'mid_eng_2',
    question: '다음 중 과거형이 올바른 것은?',
    options: ['go - went', 'eat - eated', 'run - runned'],
    answer: 'go - went',
    explanation: 'go의 과거형은 불규칙 변화로 went입니다.',
    grade: 'middle',
    encouragement: '불규칙 동사를 잘 알고 있어요!'
  },
  {
    id: 'mid_eng_3',
    question: '"I am reading a book"에서 현재진행형 구조는?',
    options: ['am + reading', 'am + read', 'reading + book'],
    answer: 'am + reading',
    explanation: '현재진행형은 be동사 + 동사ing 형태입니다.',
    grade: 'middle',
    encouragement: '문법 구조를 정확히 파악했어요!'
  },
  {
    id: 'mid_eng_4',
    question: '"She _____ to school every day." 빈칸에 들어갈 말은?',
    options: ['go', 'goes', 'going'],
    answer: 'goes',
    explanation: '3인칭 단수 현재형에는 동사에 -s를 붙입니다.',
    grade: 'middle',
    encouragement: '3인칭 단수 규칙을 잘 적용했어요!'
  },
  {
    id: 'mid_eng_5',
    question: '"How are you?"의 적절한 답변은?',
    options: ['I am fine', 'Yes, I do', 'No, thank you'],
    answer: 'I am fine',
    explanation: '안부를 묻는 질문에는 "I am fine" 등으로 답합니다.',
    grade: 'middle',
    encouragement: '일상 대화를 잘 이해하고 있어요!'
  }
];

// 고등학교 영어 문제
export const highEnglishQuestions: Question[] = [
  {
    id: 'high_eng_1',
    question: '다음 중 가정법 과거완료 문장은?',
    options: ['If I were you', 'If I had known', 'If I have time'],
    answer: 'If I had known',
    explanation: '가정법 과거완료는 "If + 주어 + had + 과거분사" 형태입니다.',
    grade: 'high',
    encouragement: '복잡한 문법도 정확히 알고 있네요!'
  },
  {
    id: 'high_eng_2',
    question: '"Sophisticated"의 뜻은?',
    options: ['단순한', '세련된', '어려운'],
    answer: '세련된',
    explanation: '"Sophisticated"는 "세련된, 정교한"이라는 뜻입니다.',
    grade: 'high',
    encouragement: '고급 어휘를 잘 알고 있어요!'
  },
  {
    id: 'high_eng_3',
    question: '관계대명사 "which"가 올바르게 사용된 문장은?',
    options: ['The book which I read', 'The person which came', 'The time which we met'],
    answer: 'The book which I read',
    explanation: '"which"는 사물을 선행사로 할 때 사용합니다.',
    grade: 'high',
    encouragement: '관계대명사 용법을 정확히 알고 있어요!'
  },
  {
    id: 'high_eng_4',
    question: '"Nevertheless"의 의미는?',
    options: ['그러므로', '그럼에도 불구하고', '예를 들어'],
    answer: '그럼에도 불구하고',
    explanation: '"Nevertheless"는 "그럼에도 불구하고"라는 뜻의 접속부사입니다.',
    grade: 'high',
    encouragement: '고급 연결어를 정확히 이해하고 있어요!'
  },
  {
    id: 'high_eng_5',
    question: '수동태로 바꾼 문장이 올바른 것은?',
    options: ['The book was read by me', 'The book read by me', 'The book is read by me'],
    answer: 'The book was read by me',
    explanation: '과거 수동태는 "was/were + 과거분사" 형태입니다.',
    grade: 'high',
    encouragement: '수동태 변환을 완벽하게 했어요!'
  }
];

export const englishQuestions = [
  ...elementaryEnglishQuestions,
  ...middleEnglishQuestions,
  ...highEnglishQuestions
];