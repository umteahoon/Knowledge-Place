// 모든 교과목 데이터를 통합하는 메인 파일
import { Subject, gradeLevels, gameModes } from './types';
import { koreanQuestions } from './subjects/korean';
import { mathQuestions } from './subjects/math';
import { englishQuestions } from './subjects/english';
import { scienceQuestions } from './subjects/science';
import { koreanHistoryQuestions } from './subjects/korean_history';
import { worldHistoryQuestions } from './subjects/world_history';

// 교과목 정의
export const subjects: Subject[] = [
  {
    id: 'korean',
    name: '국어',
    icon: '📚',
    color: 'bg-red-500',
    description: '우리말의 아름다움을 탐험해보세요!',
    questions: koreanQuestions
  },
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
    id: 'science',
    name: '과학',
    icon: '🔬',
    color: 'bg-indigo-500',
    description: '자연의 신비로운 법칙을 발견해보세요!',
    questions: scienceQuestions
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
  }
];

// 학급별로 문제 필터링하는 함수
export const getQuestionsByGrade = (subjectId: string, grade: 'elementary' | 'middle' | 'high') => {
  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) return [];
  
  return subject.questions.filter(q => q.grade === grade);
};

// 특정 학급에서 사용 가능한 교과목 반환
export const getSubjectsByGrade = (grade: 'elementary' | 'middle' | 'high') => {
  return subjects.filter(subject => {
    const hasQuestions = subject.questions.some(q => q.grade === grade);
    
    // 초등학교에서는 세계사 제외
    if (grade === 'elementary' && subject.id === 'world_history') {
      return false;
    }
    
    return hasQuestions;
  });
};

// 학급 정보 export
export { gradeLevels, gameModes } from './types';
export type { Question, Subject, GradeLevel, GameMode } from './types';