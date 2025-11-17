import { Question } from '../types';

// 초등학교 과학 문제
export const elementaryScienceQuestions: Question[] = [
  {
    id: 'elem_sci_1',
    question: '태양은 어느 방향에서 뜨나요?',
    options: ['동쪽', '서쪽', '남쪽'],
    answer: '동쪽',
    explanation: '태양은 동쪽에서 떠서 서쪽으로 집니다.',
    grade: 'elementary',
    encouragement: '자연 현상을 잘 관찰하고 있어요!'
  },
  {
    id: 'elem_sci_2',
    question: '물이 얼면 무엇이 될까요?',
    options: ['수증기', '얼음', '눈'],
    answer: '얼음',
    explanation: '물이 얼면 얼음이 됩니다.',
    grade: 'elementary',
    encouragement: '물의 상태 변화를 정확히 알고 있어요!'
  },
  {
    id: 'elem_sci_3',
    question: '식물이 자라는 데 필요한 것은?',
    options: ['햇빛, 물, 공기', '음식, 장난감', '텔레비전'],
    answer: '햇빛, 물, 공기',
    explanation: '식물은 햇빛, 물, 공기가 있어야 잘 자랍니다.',
    grade: 'elementary',
    encouragement: '식물의 생장 조건을 잘 알고 있어요!'
  },
  {
    id: 'elem_sci_4',
    question: '자석에 붙는 것은?',
    options: ['나무', '철', '플라스틱'],
    answer: '철',
    explanation: '자석은 철과 같은 금속에 붙습니다.',
    grade: 'elementary',
    encouragement: '자석의 성질을 정확히 알고 있어요!'
  },
  {
    id: 'elem_sci_5',
    question: '우리 몸에서 가장 단단한 부분은?',
    options: ['뼈', '살', '머리카락'],
    answer: '뼈',
    explanation: '뼈는 우리 몸에서 가장 단단한 부분입니다.',
    grade: 'elementary',
    encouragement: '인체의 구조를 잘 알고 있어요!'
  }
];

// 중학교 과학 문제
export const middleScienceQuestions: Question[] = [
  {
    id: 'mid_sci_1',
    question: '물의 화학식은?',
    options: ['H₂O', 'CO₂', 'NaCl'],
    answer: 'H₂O',
    explanation: '물은 수소 2개와 산소 1개로 이루어져 H₂O입니다.',
    grade: 'middle',
    encouragement: '화학의 기본을 완벽히 알고 있어요!'
  },
  {
    id: 'mid_sci_2',
    question: '인체에서 산소를 운반하는 것은?',
    options: ['백혈구', '적혈구', '혈소판'],
    answer: '적혈구',
    explanation: '적혈구의 헤모글로빈이 산소를 운반합니다.',
    grade: 'middle',
    encouragement: '생물학 지식이 훌륭해요!'
  },
  {
    id: 'mid_sci_3',
    question: '지구의 대기 중 가장 많은 기체는?',
    options: ['산소', '질소', '이산화탄소'],
    answer: '질소',
    explanation: '지구 대기의 약 78%가 질소입니다.',
    grade: 'middle',
    encouragement: '지구과학 지식이 정확해요!'
  },
  {
    id: 'mid_sci_4',
    question: '원소의 주기율표를 만든 사람은?',
    options: ['뉴턴', '멘델레예프', '아인슈타인'],
    answer: '멘델레예프',
    explanation: '멘델레예프가 원소의 주기율표를 만들었습니다.',
    grade: 'middle',
    encouragement: '과학사를 잘 알고 있어요!'
  },
  {
    id: 'mid_sci_5',
    question: '빛의 속도는 약 얼마인가요?',
    options: ['30만 km/s', '300만 km/s', '3000만 km/s'],
    answer: '30만 km/s',
    explanation: '빛의 속도는 초당 약 30만 킬로미터입니다.',
    grade: 'middle',
    encouragement: '물리학의 중요한 상수를 잘 알고 있어요!'
  }
];

// 고등학교 과학 문제
export const highScienceQuestions: Question[] = [
  {
    id: 'high_sci_1',
    question: 'DNA의 이중나선 구조를 발견한 과학자는?',
    options: ['다윈', '왓슨과 크릭', '멘델'],
    answer: '왓슨과 크릭',
    explanation: '왓슨과 크릭이 1953년 DNA 이중나선 구조를 발견했습니다.',
    grade: 'high',
    encouragement: '과학사의 중요한 발견을 잘 알고 있어요!'
  },
  {
    id: 'high_sci_2',
    question: '엔트로피의 개념과 관련된 법칙은?',
    options: ['열역학 제1법칙', '열역학 제2법칙', '뉴턴의 법칙'],
    answer: '열역학 제2법칙',
    explanation: '엔트로피는 열역학 제2법칙과 관련된 개념입니다.',
    grade: 'high',
    encouragement: '고급 물리학 개념을 정확히 이해하고 있어요!'
  },
  {
    id: 'high_sci_3',
    question: '유전자 발현에서 전사가 일어나는 곳은?',
    options: ['세포질', '핵', '미토콘드리아'],
    answer: '핵',
    explanation: '전사는 핵에서 DNA로부터 RNA가 만들어지는 과정입니다.',
    grade: 'high',
    encouragement: '분자생물학을 정확히 이해하고 있어요!'
  },
  {
    id: 'high_sci_4',
    question: '산화-환원 반응에서 전자를 잃는 것은?',
    options: ['산화', '환원', '중성화'],
    answer: '산화',
    explanation: '산화는 전자를 잃는 반응이고, 환원은 전자를 얻는 반응입니다.',
    grade: 'high',
    encouragement: '화학 반응의 본질을 정확히 알고 있어요!'
  },
  {
    id: 'high_sci_5',
    question: '상대성 이론을 제시한 과학자는?',
    options: ['뉴턴', '아인슈타인', '갈릴레이'],
    answer: '아인슈타인',
    explanation: '아인슈타인이 특수상대성이론과 일반상대성이론을 제시했습니다.',
    grade: 'high',
    encouragement: '현대 물리학의 아버지를 정확히 알고 있어요!'
  }
];

export const scienceQuestions = [
  ...elementaryScienceQuestions,
  ...middleScienceQuestions,
  ...highScienceQuestions
];