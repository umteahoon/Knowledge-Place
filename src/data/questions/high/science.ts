import { Question } from '../../types';

// 고등학교 과학 문제 (5지선다 + 난이도 포함)
export const questions: Question[] = [
  {
    id: 'high_science_1',
    question: 'DNA에서 유전자 발현 과정의 첫 번째 단계는?',
    options: ['번역(Translation)', '전사(Transcription)', '복제(Replication)', '돌연변이(Mutation)', '재조합(Recombination)'],
    answer: '전사(Transcription)',
    explanation: '유전자 발현은 전사(DNA→RNA) 후 번역(RNA→단백질) 순서로 진행됩니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '분자생물학을 잘 이해했어요!'
  },
  {
    id: 'high_science_2',
    question: '열역학 제1법칙은 무엇을 의미하는가?',
    options: ['에너지는 창조되거나 소멸될 수 없다', '엔트로피는 항상 증가한다', '절대온도 0도에서 엔트로피는 0이다', '열은 고온에서 저온으로 흐른다', '압력과 부피는 반비례한다'],
    answer: '에너지는 창조되거나 소멸될 수 없다',
    explanation: '열역학 제1법칙은 에너지 보존 법칙으로, 에너지는 한 형태에서 다른 형태로 변환될 뿐 창조되거나 소멸되지 않습니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '물리 법칙을 정확히 이해했어요!'
  },
  {
    id: 'high_science_3',
    question: '전자의 파동성을 증명한 실험은?',
    options: ['러더퍼드 산란 실험', '밀리컨 기름방울 실험', '드브로이 실험', '데이비슨-거머 실험', '광전효과 실험'],
    answer: '데이비슨-거머 실험',
    explanation: '데이비슨-거머 실험은 전자의 회절 현상을 관찰하여 전자의 파동성을 증명했습니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '현대물리학의 중요한 실험을 알고 있어요!'
  },
  {
    id: 'high_science_4',
    question: 'PCR(중합효소연쇄반응)의 주요 목적은?',
    options: ['단백질 합성', 'DNA 증폭', 'RNA 분해', '세포 분열', '효소 활성화'],
    answer: 'DNA 증폭',
    explanation: 'PCR은 특정 DNA 서열을 대량으로 증폭하는 기술입니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '생명공학 기술을 잘 이해했어요!'
  },
  {
    id: 'high_science_5',
    question: '산화-환원 반응에서 산화제의 역할은?',
    options: ['전자를 잃는다', '전자를 얻는다', '수소를 잃는다', '산소를 잃는다', '중성을 유지한다'],
    answer: '전자를 얻는다',
    explanation: '산화제는 다른 물질을 산화시키면서 자신은 환원되어 전자를 얻습니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '화학 반응의 원리를 정확히 파악했어요!'
  },
  {
    id: 'high_science_6',
    question: '아인슈타인의 특수상대성이론에 따르면?',
    options: ['시간은 절대적이다', '공간은 절대적이다', '빛의 속도는 관찰자에 따라 다르다', '빛의 속도는 일정하다', '질량은 변하지 않는다'],
    answer: '빛의 속도는 일정하다',
    explanation: '특수상대성이론의 기본 가정 중 하나는 진공에서 빛의 속도가 모든 관성계에서 일정하다는 것입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '현대물리학의 핵심 개념을 이해했어요!'
  },
  {
    id: 'high_science_7',
    question: '생태계에서 1차 소비자는?',
    options: ['생산자', '초식동물', '육식동물', '분해자', '최고차 소비자'],
    answer: '초식동물',
    explanation: '1차 소비자는 생산자(식물)를 먹는 초식동물입니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '생태계의 구조를 잘 이해했어요!'
  },
  {
    id: 'high_science_8',
    question: '원자핵의 결합 에너지가 최대인 원소는?',
    options: ['수소', '헬륨', '탄소', '철', '우라늄'],
    answer: '철',
    explanation: '철(Fe) 근처의 원소들이 핵자당 결합 에너지가 최대입니다.',
    grade: 'high',
    difficulty: 'hard',
    encouragement: '핵물리학의 중요한 개념을 알고 있어요!'
  },
  {
    id: 'high_science_9',
    question: '효소의 특성이 아닌 것은?',
    options: ['반응 속도를 증가시킨다', '활성화 에너지를 낮춘다', '반응 후 변화하지 않는다', '반응의 평형상수를 변화시킨다', '기질 특이성을 가진다'],
    answer: '반응의 평형상수를 변화시킨다',
    explanation: '효소는 반응 속도를 증가시키지만 평형상수는 변화시키지 않습니다.',
    grade: 'high',
    difficulty: 'medium',
    encouragement: '생화학의 핵심 개념을 정확히 파악했어요!'
  },
  {
    id: 'high_science_10',
    question: '전자기 유도 현상을 발견한 과학자는?',
    options: ['뉴턴', '아인슈타인', '패러데이', '맥스웰', '쿨롱'],
    answer: '패러데이',
    explanation: '마이클 패러데이가 전자기 유도 현상을 발견하고 패러데이 법칙을 정립했습니다.',
    grade: 'high',
    difficulty: 'easy',
    encouragement: '과학사의 중요한 인물을 알고 있어요!'
  }
];