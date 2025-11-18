// 교과목별 데이터 정의
export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  encouragement: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  questions: Question[];
}

// 수학 문제
const mathQuestions: Question[] = [
  {
    id: 'math_1',
    question: '2x + 5 = 13일 때, x의 값은?',
    options: ['3', '4', '5'],
    answer: '4',
    explanation: '2x = 13 - 5 = 8, 따라서 x = 4입니다.',
    difficulty: 'easy',
    encouragement: '수학적 사고력이 뛰어나네요! 계속 도전해보세요.'
  },
  {
    id: 'math_2',
    question: '원의 넓이 공식은?',
    options: ['πr²', '2πr', 'πd'],
    answer: 'πr²',
    explanation: '원의 넓이는 π × 반지름²입니다.',
    difficulty: 'easy',
    encouragement: '기본 공식을 잘 알고 계시네요!'
  },
  {
    id: 'math_3',
    question: '√64의 값은?',
    options: ['6', '7', '8'],
    answer: '8',
    explanation: '8 × 8 = 64이므로 √64 = 8입니다.',
    difficulty: 'easy',
    encouragement: '제곱근 계산을 정확히 하셨어요!'
  },
  {
    id: 'math_4',
    question: '삼각형의 내각의 합은?',
    options: ['90°', '180°', '360°'],
    answer: '180°',
    explanation: '모든 삼각형의 내각의 합은 항상 180°입니다.',
    difficulty: 'easy',
    encouragement: '기하학의 기본을 완벽히 이해하고 계시네요!'
  },
  {
    id: 'math_5',
    question: '2³ × 2² = ?',
    options: ['2⁵', '2⁶', '4⁵'],
    answer: '2⁵',
    explanation: '지수법칙에 의해 2³ × 2² = 2³⁺² = 2⁵입니다.',
    difficulty: 'medium',
    encouragement: '지수법칙을 잘 활용하셨어요!'
  }
];

// 영어 문제
const englishQuestions: Question[] = [
  {
    id: 'eng_1',
    question: '"Beautiful"의 반대말은?',
    options: ['Ugly', 'Pretty', 'Nice'],
    answer: 'Ugly',
    explanation: 'Beautiful(아름다운)의 반대말은 Ugly(못생긴)입니다.',
    difficulty: 'easy',
    encouragement: '어휘력이 훌륭하네요!'
  },
  {
    id: 'eng_2',
    question: '다음 중 과거형이 올바른 것은?',
    options: ['go - went', 'eat - eated', 'run - runned'],
    answer: 'go - went',
    explanation: 'go의 과거형은 불규칙 변화로 went입니다.',
    difficulty: 'medium',
    encouragement: '불규칙 동사를 잘 알고 계시네요!'
  },
  {
    id: 'eng_3',
    question: '"I am reading a book"에서 현재진행형 구조는?',
    options: ['am + reading', 'am + read', 'reading + book'],
    answer: 'am + reading',
    explanation: '현재진행형은 be동사 + 동사ing 형태입니다.',
    difficulty: 'medium',
    encouragement: '문법 구조를 정확히 파악하셨어요!'
  },
  {
    id: 'eng_4',
    question: '"Apple"의 복수형은?',
    options: ['Apples', 'Apple', 'Applees'],
    answer: 'Apples',
    explanation: '일반적인 명사의 복수형은 -s를 붙입니다.',
    difficulty: 'easy',
    encouragement: '기본 문법을 완벽히 알고 계시네요!'
  },
  {
    id: 'eng_5',
    question: '"She _____ to school every day." 빈칸에 들어갈 말은?',
    options: ['go', 'goes', 'going'],
    answer: 'goes',
    explanation: '3인칭 단수 현재형에는 동사에 -s를 붙입니다.',
    difficulty: 'medium',
    encouragement: '3인칭 단수 규칙을 잘 적용하셨어요!'
  }
];

// 국어 문제
const koreanQuestions: Question[] = [
  {
    id: 'kor_1',
    question: '"ㅂ" 불규칙 활용의 예는?',
    options: ['돕다 - 도와', '잡다 - 잡아', '입다 - 입어'],
    answer: '돕다 - 도와',
    explanation: '"돕다"는 ㅂ불규칙으로 "도와"로 활용됩니다.',
    difficulty: 'medium',
    encouragement: '국어 문법의 불규칙 활용을 잘 이해하고 계시네요!'
  },
  {
    id: 'kor_2',
    question: '다음 중 높임법이 올바른 것은?',
    options: ['할아버지께서 오셨다', '할아버지가 왔다', '할아버지께서 왔다'],
    answer: '할아버지께서 오셨다',
    explanation: '높임의 대상에게는 주격조사 "께서"와 높임 동사 "오시다"를 사용합니다.',
    difficulty: 'medium',
    encouragement: '높임법을 정확히 사용하셨어요!'
  },
  {
    id: 'kor_3',
    question: '"한글"을 창제한 왕은?',
    options: ['세종대왕', '태종', '정조'],
    answer: '세종대왕',
    explanation: '세종대왕이 1443년 한글을 창제하셨습니다.',
    difficulty: 'easy',
    encouragement: '우리 문화의 소중함을 잘 알고 계시네요!'
  },
  {
    id: 'kor_4',
    question: '다음 중 의성어는?',
    options: ['반짝반짝', '멍멍', '살금살금'],
    answer: '멍멍',
    explanation: '의성어는 소리를 흉내낸 말로, "멍멍"은 개 소리를 나타냅니다.',
    difficulty: 'easy',
    encouragement: '의성어와 의태어를 잘 구분하셨어요!'
  },
  {
    id: 'kor_5',
    question: '"춘향전"의 갈래는?',
    options: ['판소리계 소설', '역사소설', '추리소설'],
    answer: '판소리계 소설',
    explanation: '춘향전은 판소리로 불리던 것이 소설로 정착된 판소리계 소설입니다.',
    difficulty: 'medium',
    encouragement: '고전문학의 갈래를 정확히 알고 계시네요!'
  }
];

// 한국사 문제
const koreanHistoryQuestions: Question[] = [
  {
    id: 'khist_1',
    question: '고구려를 건국한 인물은?',
    options: ['주몽', '온조', '박혁거세'],
    answer: '주몽',
    explanation: '주몽(동명성왕)이 기원전 37년 고구려를 건국했습니다.',
    difficulty: 'easy',
    encouragement: '우리 역사의 시작을 잘 알고 계시네요!'
  },
  {
    id: 'khist_2',
    question: '조선의 수도는?',
    options: ['경주', '개성', '한양'],
    answer: '한양',
    explanation: '조선은 1394년 한양(현재의 서울)으로 천도했습니다.',
    difficulty: 'easy',
    encouragement: '조선시대 역사를 잘 기억하고 계시네요!'
  },
  {
    id: 'khist_3',
    question: '임진왜란이 일어난 연도는?',
    options: ['1592년', '1597년', '1598년'],
    answer: '1592년',
    explanation: '임진왜란은 1592년에 시작되었습니다.',
    difficulty: 'medium',
    encouragement: '중요한 역사적 사건을 정확히 기억하고 계시네요!'
  },
  {
    id: 'khist_4',
    question: '한글을 창제한 연도는?',
    options: ['1443년', '1446년', '1450년'],
    answer: '1443년',
    explanation: '한글은 1443년에 창제되어 1446년에 반포되었습니다.',
    difficulty: 'medium',
    encouragement: '우리 문자의 소중한 역사를 잘 알고 계시네요!'
  },
  {
    id: 'khist_5',
    question: '3.1운동이 일어난 연도는?',
    options: ['1918년', '1919년', '1920년'],
    answer: '1919년',
    explanation: '3.1운동은 1919년 3월 1일에 시작된 독립운동입니다.',
    difficulty: 'easy',
    encouragement: '민족의 자주정신을 잘 기억하고 계시네요!'
  }
];

// 세계사 문제
const worldHistoryQuestions: Question[] = [
  {
    id: 'whist_1',
    question: '프랑스 혁명이 일어난 연도는?',
    options: ['1789년', '1799년', '1804년'],
    answer: '1789년',
    explanation: '프랑스 혁명은 1789년에 시작되었습니다.',
    difficulty: 'medium',
    encouragement: '세계사의 중요한 전환점을 잘 알고 계시네요!'
  },
  {
    id: 'whist_2',
    question: '로마 제국을 건설한 인물은?',
    options: ['율리우스 카이사르', '아우구스투스', '네로'],
    answer: '아우구스투스',
    explanation: '아우구스투스가 로마 제국의 초대 황제가 되었습니다.',
    difficulty: 'medium',
    encouragement: '고대 로마사를 잘 이해하고 계시네요!'
  },
  {
    id: 'whist_3',
    question: '제2차 세계대전이 끝난 연도는?',
    options: ['1944년', '1945년', '1946년'],
    answer: '1945년',
    explanation: '제2차 세계대전은 1945년에 종료되었습니다.',
    difficulty: 'easy',
    encouragement: '현대사의 중요한 사건을 정확히 기억하고 계시네요!'
  },
  {
    id: 'whist_4',
    question: '산업혁명이 시작된 국가는?',
    options: ['프랑스', '독일', '영국'],
    answer: '영국',
    explanation: '산업혁명은 18세기 중반 영국에서 시작되었습니다.',
    difficulty: 'medium',
    encouragement: '근대사의 흐름을 잘 파악하고 계시네요!'
  },
  {
    id: 'whist_5',
    question: '아메리카 대륙을 발견한 탐험가는?',
    options: ['마젤란', '콜럼버스', '바스코 다 가마'],
    answer: '콜럼버스',
    explanation: '콜럼버스가 1492년 아메리카 대륙을 발견했습니다.',
    difficulty: 'easy',
    encouragement: '대항해시대의 역사를 잘 알고 계시네요!'
  }
];

// 과학 문제
const scienceQuestions: Question[] = [
  {
    id: 'sci_1',
    question: '물의 화학식은?',
    options: ['H₂O', 'CO₂', 'NaCl'],
    answer: 'H₂O',
    explanation: '물은 수소 2개와 산소 1개로 이루어져 H₂O입니다.',
    difficulty: 'easy',
    encouragement: '화학의 기본을 완벽히 알고 계시네요!'
  },
  {
    id: 'sci_2',
    question: '빛의 속도는 약 얼마인가요?',
    options: ['30만 km/s', '300만 km/s', '3000만 km/s'],
    answer: '30만 km/s',
    explanation: '빛의 속도는 초당 약 30만 킬로미터입니다.',
    difficulty: 'medium',
    encouragement: '물리학의 중요한 상수를 잘 알고 계시네요!'
  },
  {
    id: 'sci_3',
    question: '인체에서 산소를 운반하는 것은?',
    options: ['백혈구', '적혈구', '혈소판'],
    answer: '적혈구',
    explanation: '적혈구의 헤모글로빈이 산소를 운반합니다.',
    difficulty: 'easy',
    encouragement: '생물학 지식이 훌륭하네요!'
  },
  {
    id: 'sci_4',
    question: '지구의 대기 중 가장 많은 기체는?',
    options: ['산소', '질소', '이산화탄소'],
    answer: '질소',
    explanation: '지구 대기의 약 78%가 질소입니다.',
    difficulty: 'medium',
    encouragement: '지구과학 지식이 정확하네요!'
  },
  {
    id: 'sci_5',
    question: 'DNA의 이중나선 구조를 발견한 과학자는?',
    options: ['다윈', '왓슨과 크릭', '멘델'],
    answer: '왓슨과 크릭',
    explanation: '왓슨과 크릭이 1953년 DNA 이중나선 구조를 발견했습니다.',
    difficulty: 'hard',
    encouragement: '과학사의 중요한 발견을 잘 알고 계시네요!'
  }
];

// 교과목 데이터
export const subjects: Subject[] = [
  {
    id: 'math',
    name: '수학',
    icon: '🔢',
    color: 'bg-blue-500',
    description: '수식과 계산, 기하학의 세계로!',
    questions: mathQuestions
  },
  {
    id: 'english',
    name: '영어',
    icon: '🇺🇸',
    color: 'bg-green-500',
    description: '글로벌 언어의 마스터가 되어보세요!',
    questions: englishQuestions
  },
  {
    id: 'korean',
    name: '국어',
    icon: '📚',
    color: 'bg-red-500',
    description: '우리말의 아름다움을 탐험해보세요!',
    questions: koreanQuestions
  },
  {
    id: 'korean_history',
    name: '한국사',
    icon: '🏛️',
    color: 'bg-yellow-500',
    description: '우리나라의 찬란한 역사를 배워보세요!',
    questions: koreanHistoryQuestions
  },
  {
    id: 'world_history',
    name: '세계사',
    icon: '🌍',
    color: 'bg-purple-500',
    description: '세계 문명의 발자취를 따라가보세요!',
    questions: worldHistoryQuestions
  },
  {
    id: 'science',
    name: '과학',
    icon: '🔬',
    color: 'bg-indigo-500',
    description: '자연의 신비로운 법칙을 발견해보세요!',
    questions: scienceQuestions
  }
];

// 게임 모드 정의
export interface GameMode {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const gameModes: GameMode[] = [
  {
    id: 'speed_quiz',
    name: '스피드 퀴즈',
    description: '시간 제한 안에 최대한 많은 문제를 풀어보세요!',
    icon: '⚡',
    difficulty: 'medium'
  },
  {
    id: 'survival',
    name: '서바이벌 모드',
    description: '틀릴 때까지 계속 도전하는 무한 퀴즈!',
    icon: '💪',
    difficulty: 'hard'
  },
  {
    id: 'practice',
    name: '연습 모드',
    description: '부담 없이 천천히 학습해보세요!',
    icon: '📖',
    difficulty: 'easy'
  },
  {
    id: 'challenge',
    name: '도전 모드',
    description: '어려운 문제들로 실력을 시험해보세요!',
    icon: '🎯',
    difficulty: 'hard'
  }
];