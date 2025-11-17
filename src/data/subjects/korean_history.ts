import { Question } from '../types';

// 초등학교 사회 (한국사 포함)
export const elementarySocialQuestions: Question[] = [
  {
    id: 'elem_soc_1',
    question: '우리나라의 수도는?',
    options: ['부산', '서울', '대구'],
    answer: '서울',
    explanation: '대한민국의 수도는 서울입니다.',
    grade: 'elementary',
    encouragement: '우리나라의 기본 정보를 잘 알고 있어요!'
  },
  {
    id: 'elem_soc_2',
    question: '한글을 만든 왕은?',
    options: ['세종대왕', '태종', '정조'],
    answer: '세종대왕',
    explanation: '세종대왕이 1443년 한글을 창제하셨습니다.',
    grade: 'elementary',
    encouragement: '우리 문화의 소중함을 잘 알고 있어요!'
  },
  {
    id: 'elem_soc_3',
    question: '우리나라의 전통 의상은?',
    options: ['한복', '기모노', '치파오'],
    answer: '한복',
    explanation: '한복은 우리나라의 전통 의상입니다.',
    grade: 'elementary',
    encouragement: '전통문화를 소중히 여기는 마음이 훌륭해요!'
  },
  {
    id: 'elem_soc_4',
    question: '태극기의 가운데 있는 것은?',
    options: ['태극', '별', '꽃'],
    answer: '태극',
    explanation: '태극기 가운데에는 태극 문양이 있습니다.',
    grade: 'elementary',
    encouragement: '우리나라 국기를 잘 알고 있어요!'
  },
  {
    id: 'elem_soc_5',
    question: '추석에 먹는 대표적인 음식은?',
    options: ['떡국', '송편', '삼계탕'],
    answer: '송편',
    explanation: '추석에는 송편을 만들어 먹는 전통이 있습니다.',
    grade: 'elementary',
    encouragement: '우리의 명절 문화를 잘 알고 있어요!'
  }
];

// 중학교 한국사 문제
export const middleKoreanHistoryQuestions: Question[] = [
  {
    id: 'mid_khist_1',
    question: '고구려를 건국한 인물은?',
    options: ['주몽', '온조', '박혁거세'],
    answer: '주몽',
    explanation: '주몽(동명성왕)이 기원전 37년 고구려를 건국했습니다.',
    grade: 'middle',
    encouragement: '우리 역사의 시작을 잘 알고 있어요!'
  },
  {
    id: 'mid_khist_2',
    question: '조선의 수도는?',
    options: ['경주', '개성', '한양'],
    answer: '한양',
    explanation: '조선은 1394년 한양(현재의 서울)으로 천도했습니다.',
    grade: 'middle',
    encouragement: '조선시대 역사를 잘 기억하고 있어요!'
  },
  {
    id: 'mid_khist_3',
    question: '임진왜란이 일어난 연도는?',
    options: ['1592년', '1597년', '1598년'],
    answer: '1592년',
    explanation: '임진왜란은 1592년에 시작되었습니다.',
    grade: 'middle',
    encouragement: '중요한 역사적 사건을 정확히 기억하고 있어요!'
  },
  {
    id: 'mid_khist_4',
    question: '3.1운동이 일어난 연도는?',
    options: ['1918년', '1919년', '1920년'],
    answer: '1919년',
    explanation: '3.1운동은 1919년 3월 1일에 시작된 독립운동입니다.',
    grade: 'middle',
    encouragement: '민족의 자주정신을 잘 기억하고 있어요!'
  },
  {
    id: 'mid_khist_5',
    question: '대한민국 정부 수립은 언제인가요?',
    options: ['1945년', '1948년', '1950년'],
    answer: '1948년',
    explanation: '대한민국 정부는 1948년 8월 15일에 수립되었습니다.',
    grade: 'middle',
    encouragement: '현대사의 중요한 순간을 정확히 알고 있어요!'
  }
];

// 고등학교 한국사 문제
export const highKoreanHistoryQuestions: Question[] = [
  {
    id: 'high_khist_1',
    question: '고려의 문벌 귀족 정치를 타파한 무신정권의 시작은?',
    options: ['정중부의 난', '묘청의 서경 천도 운동', '몽골 침입'],
    answer: '정중부의 난',
    explanation: '1170년 정중부의 난으로 무신정권이 시작되었습니다.',
    grade: 'high',
    encouragement: '고려시대 정치사를 정확히 이해하고 있어요!'
  },
  {
    id: 'high_khist_2',
    question: '조선 후기 실학자 중 "북학의"를 저술한 인물은?',
    options: ['박지원', '정약용', '김정희'],
    answer: '박지원',
    explanation: '박지원이 청나라 문물을 소개한 "열하일기"를 썼습니다.',
    grade: 'high',
    encouragement: '실학 사상을 정확히 이해하고 있어요!'
  },
  {
    id: 'high_khist_3',
    question: '일제강점기 물산장려운동의 구호는?',
    options: ['내 살림 내 것으로', '조선 사람 조선 것', '우리 것이 좋은 것'],
    answer: '내 살림 내 것으로',
    explanation: '"내 살림 내 것으로"는 물산장려운동의 대표적인 구호였습니다.',
    grade: 'high',
    encouragement: '민족 경제 운동을 정확히 알고 있어요!'
  },
  {
    id: 'high_khist_4',
    question: '6.25 전쟁 중 유엔군이 참전한 근거는?',
    options: ['유엔 안보리 결의', '미소 공동 위원회', '카이로 선언'],
    answer: '유엔 안보리 결의',
    explanation: '유엔 안전보장이사회 결의에 따라 유엔군이 참전했습니다.',
    grade: 'high',
    encouragement: '현대사의 국제적 배경을 잘 이해하고 있어요!'
  },
  {
    id: 'high_khist_5',
    question: '4.19 혁명의 직접적 원인은?',
    options: ['3.15 부정선거', '경제 위기', '학생 시위'],
    answer: '3.15 부정선거',
    explanation: '3.15 부정선거가 4.19 혁명의 직접적 원인이 되었습니다.',
    grade: 'high',
    encouragement: '민주주의 발전 과정을 정확히 알고 있어요!'
  }
];

export const koreanHistoryQuestions = [
  ...elementarySocialQuestions,
  ...middleKoreanHistoryQuestions,
  ...highKoreanHistoryQuestions
];