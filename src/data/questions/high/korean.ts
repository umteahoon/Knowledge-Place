import { Question } from '../../types';

// 고등학교 국어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'high_korean_1',
    question: '다음 중 의인법이 사용된 것은?',
    options: ['꽃이 웃고 있다', '눈이 온다', '바람이 분다', '새가 운다', '물이 흐른다'],
    answer: '꽃이 웃고 있다',
    explanation: '의인법은 사람이 아닌 것을 사람처럼 표현하는 기법입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '문학 표현 기법을 잘 이해했어요!'
  },
  {
    id: 'high_korean_2',
    question: '다음 중 영탄법이 사용된 것은?',
    options: ['아, 그 시절이여!', '비가 온다', '책을 읽는다', '학교에 간다', '밥을 먹는다'],
    answer: '아, 그 시절이여!',
    explanation: '영탄법은 감탄사나 영탄 어조를 사용하여 감정을 강조하는 기법입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '수사법을 정확히 구분했어요!'
  },
  {
    id: 'high_korean_3',
    question: '"금강산도 식후경"의 의미는?',
    options: ['금강산이 아름답다', '음식이 중요하다', '아무리 좋은 일도 배가 부른 후에 해야 한다', '여행을 좋아한다', '경치가 좋다'],
    answer: '아무리 좋은 일도 배가 부른 후에 해야 한다',
    explanation: '이 속담은 기본적인 욕구를 먼저 해결해야 한다는 의미입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '속담의 의미를 정확히 이해했어요!'
  },
  {
    id: 'high_korean_4',
    question: '다음 중 한자성어의 뜻이 올바른 것은?',
    options: ['일석이조 - 돌 하나로 새 둘을 잡는다', '새옹지마 - 늙은이의 말', '백문불여일견 - 백 번 듣는 것이 한 번 보는 것만 못하다', '1번과 3번 모두', '모두 틀렸다'],
    answer: '1번과 3번 모두',
    explanation: '일석이조는 한 가지 일로 두 가지 이익을 얻는다는 뜻이고, 백문불여일견은 백 번 듣는 것보다 한 번 보는 것이 낫다는 뜻입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '한자성어를 정확히 알고 있어요!'
  },
  {
    id: 'high_korean_5',
    question: '다음 중 대조법이 사용된 것은?',
    options: ['밝은 달과 어두운 밤', '푸른 하늘', '높은 산', '깊은 바다', '넓은 들판'],
    answer: '밝은 달과 어두운 밤',
    explanation: '대조법은 상반된 개념을 나란히 제시하여 효과를 높이는 기법입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '표현 기법을 잘 분석했어요!'
  },
  {
    id: 'high_korean_6',
    question: '"구슬이 서 말이라도 꿰어야 보배"의 의미는?',
    options: ['구슬이 비싸다', '아무리 좋은 것도 정리하고 다듬어야 가치가 있다', '보배가 중요하다', '서 말이 많다', '꿰는 것이 어렵다'],
    answer: '아무리 좋은 것도 정리하고 다듬어야 가치가 있다',
    explanation: '이 속담은 좋은 재료도 체계적으로 정리해야 진정한 가치를 발휘한다는 의미입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '속담의 교훈을 잘 이해했어요!'
  },
  {
    id: 'high_korean_7',
    question: '다음 중 설의법이 사용된 것은?',
    options: ['이것이 과연 옳은 일인가?', '비가 온다', '꽃이 핀다', '새가 운다', '바람이 분다'],
    answer: '이것이 과연 옳은 일인가?',
    explanation: '설의법은 의문문 형식을 빌려 강한 부정이나 긍정의 뜻을 나타내는 기법입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '수사법을 정확히 파악했어요!'
  },
  {
    id: 'high_korean_8',
    question: '"호랑이도 제 말 하면 온다"의 의미는?',
    options: ['호랑이가 무섭다', '말의 힘이 세다', '누군가의 이야기를 하면 그 사람이 나타난다', '호랑이가 똑똑하다', '말을 조심해야 한다'],
    answer: '누군가의 이야기를 하면 그 사람이 나타난다',
    explanation: '이 속담은 누군가에 대해 이야기하고 있을 때 그 사람이 우연히 나타나는 상황을 표현합니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '일상 속담을 잘 알고 있어요!'
  },
  {
    id: 'high_korean_9',
    question: '다음 중 점층법이 사용된 것은?',
    options: ['좋다, 매우 좋다, 최고다', '빨갛다', '크다', '높다', '깊다'],
    answer: '좋다, 매우 좋다, 최고다',
    explanation: '점층법은 의미나 어감을 점차 강화시켜 나가는 표현 기법입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '표현 기법의 특징을 정확히 파악했어요!'
  },
  {
    id: 'high_korean_10',
    question: '"천 리 길도 한 걸음부터"의 의미는?',
    options: ['길이 멀다', '걸음이 중요하다', '아무리 큰 일도 작은 것부터 시작해야 한다', '천 리가 멀다', '한 걸음이 작다'],
    answer: '아무리 큰 일도 작은 것부터 시작해야 한다',
    explanation: '이 속담은 큰 목표도 작은 노력부터 시작해야 달성할 수 있다는 의미입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '속담의 지혜를 잘 이해했어요!'
  }
];