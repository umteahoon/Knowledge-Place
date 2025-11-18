import { Question } from '../../types';

// 중학교 영어 문제
export const questions: Question[] = [
  {
    id: 'mid_eng_1',
    question: 'Choose the correct past tense of "go".',
    options: ['goed', 'went', 'gone'],
    answer: 'went',
    explanation: 'The past tense of "go" is "went". ("go"의 과거형은 "went"입니다.)',
    grade: 'middle',
    encouragement: '불규칙 동사의 과거형을 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_2',
    question: 'Which sentence is correct?',
    options: ['She don\'t like apples', 'She doesn\'t like apples', 'She not like apples'],
    answer: 'She doesn\'t like apples',
    explanation: 'With third person singular, we use "doesn\'t". (3인칭 단수에는 "doesn\'t"를 사용합니다.)',
    grade: 'middle',
    encouragement: '3인칭 단수 규칙을 정확히 적용했어요!'
  },
  {
    id: 'mid_eng_3',
    question: 'What is the comparative form of "good"?',
    options: ['gooder', 'better', 'best'],
    answer: 'better',
    explanation: 'The comparative form of "good" is "better". ("good"의 비교급은 "better"입니다.)',
    grade: 'middle',
    encouragement: '불규칙 비교급을 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_4',
    question: 'Choose the correct preposition: "I am interested ___ music."',
    options: ['in', 'on', 'at'],
    answer: 'in',
    explanation: 'We say "interested in". ("~에 관심이 있다"는 "interested in"입니다.)',
    grade: 'middle',
    encouragement: '전치사 사용법을 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_5',
    question: 'What does "How often" ask about?',
    options: ['Time', 'Frequency', 'Place'],
    answer: 'Frequency',
    explanation: '"How often" asks about frequency. ("How often"은 빈도를 묻습니다.)',
    grade: 'middle',
    encouragement: '의문사의 의미를 정확히 이해했어요!'
  },
  {
    id: 'mid_eng_6',
    question: 'Choose the correct form: "If it ___ tomorrow, we will stay home."',
    options: ['rain', 'rains', 'will rain'],
    answer: 'rains',
    explanation: 'In conditional sentences, we use present tense after "if". (조건문에서 if 다음에는 현재형을 사용합니다.)',
    grade: 'middle',
    encouragement: '조건문의 시제 일치를 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_7',
    question: 'What is the plural of "child"?',
    options: ['childs', 'children', 'childes'],
    answer: 'children',
    explanation: 'The plural of "child" is "children". ("child"의 복수형은 "children"입니다.)',
    grade: 'middle',
    encouragement: '불규칙 복수형을 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_8',
    question: 'Choose the correct sentence:',
    options: ['I have been to Seoul', 'I have gone to Seoul', 'I have went to Seoul'],
    answer: 'I have been to Seoul',
    explanation: '"Have been to" means you went and came back. ("have been to"는 다녀왔다는 의미입니다.)',
    grade: 'middle',
    encouragement: '현재완료의 용법을 정확히 구분했어요!'
  },
  {
    id: 'mid_eng_9',
    question: 'What is the meaning of "look after"?',
    options: ['search for', 'take care of', 'look behind'],
    answer: 'take care of',
    explanation: '"Look after" means "take care of". ("look after"는 "돌보다"라는 뜻입니다.)',
    grade: 'middle',
    encouragement: '구동사의 의미를 정확히 알고 있어요!'
  },
  {
    id: 'mid_eng_10',
    question: 'Choose the correct passive voice: "Tom wrote the letter."',
    options: ['The letter was written by Tom', 'The letter is written by Tom', 'The letter wrote by Tom'],
    answer: 'The letter was written by Tom',
    explanation: 'Past tense active becomes past tense passive. (과거형 능동문은 과거형 수동문이 됩니다.)',
    grade: 'middle',
    encouragement: '수동태 변환을 정확히 했어요!'
  }
];