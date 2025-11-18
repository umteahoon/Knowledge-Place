import { Question } from '../../types';

// 초등학교 영어 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'elem_english_1',
    question: '빨간색을 영어로 하면?',
    options: ['blue', 'red', 'green', 'yellow', 'black'],
    answer: 'red',
    explanation: '빨간색은 영어로 red입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '색깔 단어를 잘 알고 있어요!'
  },
  {
    id: 'elem_english_2',
    question: '1부터 10까지 중에서 seven은?',
    options: ['5', '6', '7', '8', '9'],
    answer: '7',
    explanation: 'seven은 숫자 7입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '숫자를 정확히 알고 있어요!'
  },
  {
    id: 'elem_english_3',
    question: '"안녕하세요"를 영어로 하면?',
    options: ['Good morning', 'Hello', 'Good night', 'Goodbye', 'Thank you'],
    answer: 'Hello',
    explanation: '안녕하세요는 Hello입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '인사말을 잘 알고 있어요!'
  },
  {
    id: 'elem_english_4',
    question: '사과를 영어로 하면?',
    options: ['banana', 'orange', 'apple', 'grape', 'strawberry'],
    answer: 'apple',
    explanation: '사과는 영어로 apple입니다.',
    grade: 'elementary',
    difficulty: 'easy',
    encouragement: '과일 이름을 잘 알고 있어요!'
  },
  {
    id: 'elem_english_5',
    question: '다음 중 반대말이 올바른 것은?',
    options: ['big - small', 'hot - cold', 'long - short', 'happy - sad', '모두 맞다'],
    answer: '모두 맞다',
    explanation: '제시된 모든 반대말이 올바릅니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '반대말을 잘 알고 있어요!'
  },
  {
    id: 'elem_english_6',
    question: 'cat의 철자가 올바른 것은?',
    options: ['c-a-t', 'c-e-t', 'k-a-t', 'c-a-d', 'g-a-t'],
    answer: 'c-a-t',
    explanation: '고양이는 c-a-t로 씁니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '철자를 정확히 알고 있어요!'
  },
  {
    id: 'elem_english_7',
    question: '일주일 중 월요일은?',
    options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    answer: 'Monday',
    explanation: '월요일은 Monday입니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '요일을 잘 알고 있어요!'
  },
  {
    id: 'elem_english_8',
    question: '다음 중 의류가 아닌 것은?',
    options: ['shirt', 'pants', 'shoes', 'hat', 'book'],
    answer: 'book',
    explanation: 'book(책)은 의류가 아닙니다.',
    grade: 'elementary',
    difficulty: 'medium',
    encouragement: '단어의 종류를 잘 구분했어요!'
  },
  {
    id: 'elem_english_9',
    question: '강아지가 내는 소리는?',
    options: ['meow', 'moo', 'woof', 'oink', 'quack'],
    answer: 'woof',
    explanation: '강아지는 woof 소리를 냅니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '동물 소리를 잘 알고 있어요!'
  },
  {
    id: 'elem_english_10',
    question: '"Thank you"의 대답으로 적절한 것은?',
    options: ['Hello', 'Goodbye', "You're welcome", 'How are you?', 'Nice to meet you'],
    answer: "You're welcome",
    explanation: '"Thank you"에 대한 대답은 "You\'re welcome"입니다.',
    grade: 'elementary',
    difficulty: 'hard',
    encouragement: '예의 바른 대화를 잘 알고 있어요!'
  }
];