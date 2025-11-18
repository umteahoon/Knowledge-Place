import { Question } from '../../types';

// 고등학교 영어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'high_english_1',
    question: 'Choose the word that best fits the blank: The new policy will have a significant _____ on the economy.',
    options: ['affect', 'effect', 'effort', 'efficient', 'effective'],
    answer: 'effect',
    explanation: 'Effect는 명사로 영향, 결과를 의미합니다. have an effect on은 ~에 영향을 미치다는 뜻입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '어휘의 차이를 정확히 구분했어요!'
  },
  {
    id: 'high_english_2',
    question: 'Find the grammatical error: "She don\'t like coffee, but she loves tea."',
    options: ['She', 'don\'t', 'like', 'loves', 'No error'],
    answer: 'don\'t',
    explanation: '3인칭 단수 주어 She와 함께 쓸 때는 doesn\'t를 사용해야 합니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '문법 오류를 정확히 찾았어요!'
  },
  {
    id: 'high_english_3',
    question: 'What does "break the ice" mean?',
    options: ['To literally break ice', 'To start a conversation', 'To be very cold', 'To make someone angry', 'To finish something'],
    answer: 'To start a conversation',
    explanation: '"Break the ice"는 어색한 분위기를 깨고 대화를 시작한다는 의미의 숙어입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '영어 숙어를 잘 이해했어요!'
  },
  {
    id: 'high_english_4',
    question: 'Choose the correct form: "If I _____ rich, I would travel around the world."',
    options: ['am', 'was', 'were', 'will be', 'would be'],
    answer: 'were',
    explanation: '가정법 과거에서는 주어가 I이어도 were를 사용합니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '가정법을 정확히 사용했어요!'
  },
  {
    id: 'high_english_5',
    question: 'What is the past participle of "write"?',
    options: ['wrote', 'written', 'writing', 'writes', 'writed'],
    answer: 'written',
    explanation: 'write의 과거분사는 written입니다. (write-wrote-written)',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '불규칙 동사를 잘 알고 있어요!'
  },
  {
    id: 'high_english_6',
    question: 'Choose the word with a different meaning: "The author\'s writing style is very _____ and easy to understand."',
    options: ['clear', 'lucid', 'transparent', 'obscure', 'plain'],
    answer: 'obscure',
    explanation: 'obscure는 불분명한, 애매한이라는 뜻으로 나머지와 반대 의미입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '단어의 함축적 의미를 잘 파악했어요!'
  },
  {
    id: 'high_english_7',
    question: 'What type of figurative language is used in "Time is money"?',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole', 'Alliteration'],
    answer: 'Metaphor',
    explanation: '은유법(Metaphor)은 두 가지를 직접 비교하여 하나가 다른 하나라고 표현하는 기법입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '영어 수사법을 잘 이해했어요!'
  },
  {
    id: 'high_english_8',
    question: 'Choose the correct relative pronoun: "The book _____ I bought yesterday is very interesting."',
    options: ['who', 'whom', 'which', 'that', 'whose'],
    answer: 'that',
    explanation: '선행사가 사물(book)이고 목적격 관계대명사가 필요한 상황에서 that을 사용할 수 있습니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '관계대명사를 정확히 사용했어요!'
  },
  {
    id: 'high_english_9',
    question: 'What is the difference between "affect" and "effect"?',
    options: ['No difference', 'Affect is a noun, effect is a verb', 'Affect is a verb, effect is a noun', 'Both are adjectives', 'Both are adverbs'],
    answer: 'Affect is a verb, effect is a noun',
    explanation: 'Affect는 동사(영향을 미치다), effect는 명사(영향, 결과)입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '헷갈리기 쉬운 단어를 정확히 구분했어요!'
  },
  {
    id: 'high_english_10',
    question: 'Choose the correct preposition: "She is interested _____ learning new languages."',
    options: ['in', 'on', 'at', 'for', 'with'],
    answer: 'in',
    explanation: '"be interested in"은 ~에 관심이 있다는 뜻의 고정 표현입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '전치사와 접속사를 잘 구분했어요!'
  }
];