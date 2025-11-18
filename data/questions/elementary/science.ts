import { Question } from '../../types';

// 초등학교 과학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'elem_science_1',
    question: '물의 세 가지 상태는?',
    options: ['고체, 액체, 기체', '얼음, 물, 수증기', '차가운 것, 미지근한 것, 뜨거운 것', '1번과 2번 모두', '모르겠다'],
    answer: '1번과 2번 모두',
    explanation: '물의 세 가지 상태는 고체(얼음), 액체(물), 기체(수증기)입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '물의 상태 변화를 잘 알고 있어요!'
  },
  {
    id: 'elem_science_2',
    question: '식물이 자라는 데 필요한 것은?',
    options: ['햇빛', '물', '공기', '영양분', '모두 필요하다'],
    answer: '모두 필요하다',
    explanation: '식물이 자라려면 햇빛, 물, 공기, 영양분이 모두 필요합니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '식물의 생장 조건을 잘 알고 있어요!'
  },
  {
    id: 'elem_science_3',
    question: '자석에 잘 붙는 것은?',
    options: ['나무', '플라스틱', '철', '종이', '유리'],
    answer: '철',
    explanation: '자석은 철과 같은 자성체에 잘 붙습니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '자석의 성질을 잘 알고 있어요!'
  },
  {
    id: 'elem_science_4',
    question: '사람의 몸에서 가장 단단한 부분은?',
    options: ['뼈', '이', '손톱', '머리카락', '근육'],
    answer: '이',
    explanation: '치아(이)는 사람 몸에서 가장 단단한 부분입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '인체의 구조를 잘 알고 있어요!'
  },
  {
    id: 'elem_science_5',
    question: '지구에서 가장 가까운 별은?',
    options: ['달', '화성', '태양', '금성', '북극성'],
    answer: '태양',
    explanation: '태양은 지구에서 가장 가까운 별입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '천체에 대해 잘 알고 있어요!'
  },
  {
    id: 'elem_science_6',
    question: '소리가 전달되는 방법은?',
    options: ['공기를 통해서만', '물을 통해서만', '고체를 통해서만', '공기, 물, 고체 모두 통해서', '전달되지 않는다'],
    answer: '공기, 물, 고체 모두 통해서',
    explanation: '소리는 공기, 물, 고체 등 모든 매질을 통해 전달됩니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '소리의 전달에 대해 잘 알고 있어요!'
  },
  {
    id: 'elem_science_7',
    question: '다음 중 포유동물이 아닌 것은?',
    options: ['고래', '박쥐', '펭귄', '코끼리', '사자'],
    answer: '펭귄',
    explanation: '펭귄은 조류입니다. 나머지는 모두 포유동물입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '동물의 분류를 잘 알고 있어요!'
  },
  {
    id: 'elem_science_8',
    question: '계절이 바뀌는 이유는?',
    options: ['지구가 태양 주위를 돌기 때문', '지구의 자전축이 기울어져 있기 때문', '태양과의 거리가 달라지기 때문', '1번과 2번 모두', '3번만 맞다'],
    answer: '1번과 2번 모두',
    explanation: '계절 변화는 지구의 공전과 자전축의 기울어짐 때문입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '계절 변화의 원리를 잘 이해했어요!'
  },
  {
    id: 'elem_science_9',
    question: '전기를 잘 통하는 것은?',
    options: ['나무', '플라스틱', '구리', '고무', '종이'],
    answer: '구리',
    explanation: '구리는 전기를 잘 통하는 도체입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '전기의 성질을 잘 알고 있어요!'
  },
  {
    id: 'elem_science_10',
    question: '무지개는 언제 볼 수 있나요?',
    options: ['비가 온 후 햇빛이 날 때', '밤에', '구름이 많을 때', '바람이 불 때', '눈이 올 때'],
    answer: '비가 온 후 햇빛이 날 때',
    explanation: '무지개는 비가 온 후 햇빛이 물방울을 통과하면서 생깁니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '자연 현상을 잘 관찰했어요!'
  }
];