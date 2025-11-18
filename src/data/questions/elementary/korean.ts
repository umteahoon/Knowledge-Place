import { Question } from '../../types';

// 초등학교 국어 문제
export const questions: Question[] = [
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
  },
  {
    id: 'elem_kor_6',
    question: '다음 중 의태어는?',
    options: ['멍멍', '야옹', '깡충깡충'],
    answer: '깡충깡충',
    explanation: '의태어는 모양이나 상태를 흉내낸 말입니다. "깡충깡충"은 토끼가 뛰는 모양을 나타냅니다.',
    grade: 'elementary',
    encouragement: '의태어를 정확히 구분할 수 있네요!'
  },
  {
    id: 'elem_kor_7',
    question: '문장에서 주어를 찾으세요: "강아지가 뛰어간다"',
    options: ['강아지가', '뛰어간다', '강아지'],
    answer: '강아지가',
    explanation: '주어는 "~가/이"가 붙은 말로, "강아지가"가 주어입니다.',
    grade: 'elementary',
    encouragement: '문장의 구조를 잘 파악했어요!'
  },
  {
    id: 'elem_kor_8',
    question: '다음 중 단어의 뜻이 다른 것은?',
    options: ['크다', '거대하다', '작다'],
    answer: '작다',
    explanation: '"크다"와 "거대하다"는 비슷한 뜻이지만, "작다"는 반대 뜻입니다.',
    grade: 'elementary',
    encouragement: '단어의 의미를 정확히 비교할 수 있어요!'
  },
  {
    id: 'elem_kor_9',
    question: '다음 중 복수형이 올바른 것은?',
    options: ['책들', '물들', '하늘들'],
    answer: '책들',
    explanation: '"책들"이 올바른 복수형입니다. "물"과 "하늘"은 복수형을 잘 쓰지 않습니다.',
    grade: 'elementary',
    encouragement: '복수형 규칙을 잘 알고 있어요!'
  },
  {
    id: 'elem_kor_10',
    question: '감탄사는 무엇인가요?',
    options: ['아! 예쁘다', '와! 신기하다', '어? 이상하다'],
    answer: '와! 신기하다',
    explanation: '감탄사는 놀라거나 감탄할 때 쓰는 말입니다. "와!"가 감탄사입니다.',
    grade: 'elementary',
    encouragement: '감탄사를 정확히 찾았어요!'
  }
];