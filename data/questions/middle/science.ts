import { Question } from '../../types';

// 중학교 과학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'mid_science_1',
    question: '산소의 원소 기호는?',
    options: ['O', 'O2', 'Ox', 'Og', 'Os'],
    answer: 'O',
    explanation: '산소의 원소 기호는 O입니다. O2는 산소 분자를 나타냅니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '원소 기호를 정확히 알고 있어요!'
  },
  {
    id: 'mid_science_2',
    question: '식물이 광합성을 하는 장소는?',
    options: ['뿌리', '줄기', '잎', '꽃', '열매'],
    answer: '잎',
    explanation: '광합성은 주로 잎의 엽록체에서 일어납니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '식물의 구조와 기능을 잘 알고 있어요!'
  },
  {
    id: 'mid_science_3',
    question: '뉴턴의 운동 제1법칙은?',
    options: ['작용-반작용 법칙', '관성의 법칙', '가속도 법칙', '만유인력 법칙', '에너지 보존 법칙'],
    answer: '관성의 법칙',
    explanation: '뉴턴의 제1법칙은 관성의 법칙으로, 물체는 외력이 작용하지 않으면 정지하거나 등속직선운동을 계속합니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '물리 법칙을 정확히 이해했어요!'
  },
  {
    id: 'mid_science_4',
    question: 'DNA를 처음 발견한 과학자는?',
    options: ['멘델', '다윈', '미셔', '왓슨', '크릭'],
    answer: '미셔',
    explanation: '프리드리히 미셔가 1869년 DNA를 처음 발견했습니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '과학사의 중요한 발견을 알고 있어요!'
  },
  {
    id: 'mid_science_5',
    question: '산과 염기가 반응하면 무엇이 생성되는가?',
    options: ['물만', '염만', '물과 염', '기체', '침전물'],
    answer: '물과 염',
    explanation: '산과 염기의 중화반응에서는 물과 염이 생성됩니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '화학 반응을 정확히 이해했어요!'
  },
  {
    id: 'mid_science_6',
    question: '세포 분열 시 염색체 수가 반으로 줄어드는 분열은?',
    options: ['체세포 분열', '감수 분열', '이분법', '출아법', '포자 형성'],
    answer: '감수 분열',
    explanation: '감수분열에서는 염색체 수가 반으로 줄어들어 생식세포가 만들어집니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '세포 분열의 종류를 잘 구분했어요!'
  },
  {
    id: 'mid_science_7',
    question: '전류의 단위는?',
    options: ['볼트(V)', '암페어(A)', '옴(Ω)', '와트(W)', '줄(J)'],
    answer: '암페어(A)',
    explanation: '전류의 단위는 암페어(A)입니다.',
    grade: 'middle',
    difficulty: 'easy',
    encouragement: '물리량의 단위를 정확히 알고 있어요!'
  },
  {
    id: 'mid_science_8',
    question: '대기의 주성분은?',
    options: ['산소', '질소', '이산화탄소', '아르곤', '수증기'],
    answer: '질소',
    explanation: '대기의 약 78%는 질소로 구성되어 있습니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '지구과학 지식을 잘 알고 있어요!'
  },
  {
    id: 'mid_science_9',
    question: '소화 효소 중 단백질을 분해하는 것은?',
    options: ['아밀라아제', '리파아제', '펩신', '말타아제', '락타아제'],
    answer: '펩신',
    explanation: '펩신은 위에서 분비되어 단백질을 분해하는 효소입니다.',
    grade: 'middle',
    difficulty: 'hard',
    encouragement: '인체의 소화 과정을 잘 이해했어요!'
  },
  {
    id: 'mid_science_10',
    question: '빛의 속도는 약 얼마인가?',
    options: ['30만 km/s', '300만 km/s', '3000만 km/s', '3억 m/s', '30억 m/s'],
    answer: '30만 km/s',
    explanation: '빛의 속도는 약 30만 km/s (정확히는 299,792,458 m/s)입니다.',
    grade: 'middle',
    difficulty: 'medium',
    encouragement: '물리 상수를 정확히 알고 있어요!'
  }
];