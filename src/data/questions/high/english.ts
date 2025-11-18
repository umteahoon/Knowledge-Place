import { Question } from '../../types';

// 고등학교 영어 문제
export const questions: Question[] = [
  {
    id: 'high_eng_1',
    question: 'Choose the word that best fits: "The evidence was so _____ that no one could dispute it."',
    options: ['ambiguous', 'compelling', 'trivial'],
    answer: 'compelling',
    explanation: '"Compelling" means convincing and forceful. (아무도 반박할 수 없을 정도로 설득력 있는 증거)',
    grade: 'high',
    encouragement: '고급 어휘의 의미를 정확히 파악했어요!'
  },
  {
    id: 'high_eng_2',
    question: 'Identify the grammatical error: "Neither the students nor the teacher were present."',
    options: ['Neither', 'nor', 'were'],
    answer: 'were',
    explanation: 'With "neither...nor", the verb agrees with the closer subject. It should be "was" (teacher is singular).',
    grade: 'high',
    encouragement: '복잡한 주어-동사 일치 규칙을 알고 있어요!'
  },
  {
    id: 'high_eng_3',
    question: 'What does the idiom "break the ice" mean?',
    options: ['to start a conversation', 'to solve a problem', 'to make someone angry'],
    answer: 'to start a conversation',
    explanation: '"Break the ice" means to initiate conversation in a social setting. (어색한 분위기를 깨고 대화를 시작하다)',
    grade: 'high',
    encouragement: '관용표현의 의미를 정확히 이해했어요!'
  },
  {
    id: 'high_eng_4',
    question: 'Choose the correct subjunctive form: "I wish I _____ more time yesterday."',
    options: ['have', 'had', 'had had'],
    answer: 'had had',
    explanation: 'For past wishes, we use past perfect in the subjunctive. (과거에 대한 가정법 과거완료)',
    grade: 'high',
    encouragement: '가정법의 복잡한 시제를 정확히 알고 있어요!'
  },
  {
    id: 'high_eng_5',
    question: 'What is the function of "having studied" in: "Having studied hard, she passed the exam"?',
    options: ['Present participle', 'Past participle', 'Perfect participle'],
    answer: 'Perfect participle',
    explanation: '"Having + past participle" forms a perfect participle showing completed action. (완료분사)',
    grade: 'high',
    encouragement: '분사의 종류를 정확히 구분했어요!'
  },
  {
    id: 'high_eng_6',
    question: 'Choose the word with the correct connotation: "The politician\'s speech was full of _____ promises."',
    options: ['empty', 'hollow', 'vacant'],
    answer: 'empty',
    explanation: '"Empty promises" is the standard collocation meaning promises without substance. (공허한 약속)',
    grade: 'high',
    encouragement: '단어의 함축적 의미를 잘 파악했어요!'
  },
  {
    id: 'high_eng_7',
    question: 'Identify the rhetorical device: "Ask not what your country can do for you—ask what you can do for your country."',
    options: ['Metaphor', 'Chiasmus', 'Alliteration'],
    answer: 'Chiasmus',
    explanation: 'Chiasmus is a reversal of grammatical structures in successive phrases. (교차대구법)',
    grade: 'high',
    encouragement: '수사법을 정확히 식별했어요!'
  },
  {
    id: 'high_eng_8',
    question: 'What type of clause is underlined: "The book that I read was fascinating."',
    options: ['Noun clause', 'Adverb clause', 'Adjective clause'],
    answer: 'Adjective clause',
    explanation: '"That I read" modifies "book" (a noun), making it an adjective clause. (형용사절)',
    grade: 'high',
    encouragement: '절의 종류를 정확히 구분했어요!'
  },
  {
    id: 'high_eng_9',
    question: 'Choose the correct form: "_____ the weather, we decided to go hiking."',
    options: ['Despite', 'Although', 'In spite'],
    answer: 'Despite',
    explanation: '"Despite" is followed by a noun phrase. "Although" needs a clause. (전치사 vs 접속사)',
    grade: 'high',
    encouragement: '전치사와 접속사의 차이를 정확히 알고 있어요!'
  },
  {
    id: 'high_eng_10',
    question: 'What is the etymology of "telephone"?',
    options: ['Greek: tele (far) + phone (sound)', 'Latin: tele (time) + phone (call)', 'French: tele (wire) + phone (voice)'],
    answer: 'Greek: tele (far) + phone (sound)',
    explanation: '"Telephone" comes from Greek "tele" (far) and "phone" (sound/voice). (그리스어 어원)',
    grade: 'high',
    encouragement: '단어의 어원을 정확히 알고 있어요!'
  }
];