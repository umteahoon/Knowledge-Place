import React from 'react';
import { ArrowLeft, Users, Target, Lightbulb, Mail, Github, Globe, Award } from 'lucide-react';

// 단일 파일 환경에서 실행 가능하도록 shadcn/ui 컴포넌트 및 router를 간단히 Mocking합니다.

// Mock Components for Shadcn/ui (Tailwind CSS 기반)
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);
const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-semibold ${className}`}>
    {children}
  </h2>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);
const Button = ({ children, onClick, variant = "default", className = "" }) => {
  let style = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 transform active:scale-95";
  if (variant === "outline") style += " border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm";
  else style += " bg-blue-600 text-white hover:bg-blue-700 shadow-md";
  return <button className={`${style} ${className}`} onClick={onClick}>{children}</button>;
};
const Badge = ({ children, variant = "default" }) => {
    let style = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
    if (variant === "secondary") style += " bg-gray-100 text-gray-800";
    else if (variant === "outline") style += " border border-gray-300 text-gray-700";
    else style += " bg-purple-500 text-white";
    return <span className={style}>{children}</span>;
};


const App = () => {
  // 실제 라우터가 없으므로 간단히 콘솔 로그로 대체합니다.
  const handleNavigateBack = () => {
    console.log("메인 페이지로 이동 (시뮬레이션)");
    // 실제 환경에서는 useNavigate('/') 등으로 사용됩니다.
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={handleNavigateBack} className="shadow-md">
            <ArrowLeft size={16} className="mr-2" />
            메인으로
          </Button>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            <Users className="text-purple-600" />
            About & Contact
          </h1>
        </div>

        {/* 서비스 소개 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6 border border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="text-purple-500" />
              지식 플레이스란?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>지식 플레이스</strong>는 재미있는 게임을 통해 학습하는 혁신적인 교육 플랫폼입니다. 
                전통적인 암기식 학습에서 벗어나 게임화(Gamification)를 통해 자연스럽고 즐거운 학습 경험을 제공합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" />
                  우리의 미션
                </h3>
                <ul className="space-y-2 text-gray-700 list-inside list-disc pl-2">
                  <li>학습을 재미있고 흥미진진한 경험으로 만들기</li>
                  <li>모든 연령대가 접근 가능한 교육 콘텐츠 제공</li>
                  <li>개인 맞춤형 학습 경험 구현</li>
                  <li>지속적인 학습 동기 부여</li>
                </ul>
              </div>
              
              <div className="space-y-4 p-4 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Award className="text-blue-500" />
                  제공 서비스
                </h3>
                <ul className="space-y-2 text-gray-700 list-inside list-disc pl-2">
                  <li>6개 교과목 퀴즈 게임 (수학, 영어, 국어, 한국사, 세계사, 과학)</li>
                  <li>4가지 게임 모드 (스피드, 서바이벌, 연습, 도전)</li>
                  <li>치즈 헌터 - 뱀 게임 + 한국어 퀴즈</li>
                  <li>개인 학습 통계 및 진도 관리</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개발팀 소개 - 수정됨 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6 border border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="text-blue-500" />
              개발팀 소개
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  KP
                </div>
                <h3 className="text-xl font-bold text-gray-800">지식 플레이스 개발팀 </h3>
                {/* 사용자 요청에 따라 역할 및 이름 추가 */}
                <p className="text-base font-semibold text-blue-700 mt-3">대표: 엄태훈</p>
                <p className="text-sm text-gray-600">개발자: 엄태훈, 손우혁</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="mx-auto mb-2 text-green-500" size={24} />
                  <h4 className="font-semibold">웹 개발</h4>
                  <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Target className="mx-auto mb-2 text-red-500" size={24} />
                  <h4 className="font-semibold">게임 디자인</h4>
                  <p className="text-sm text-gray-600">교육학적 게임화 설계</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Lightbulb className="mx-auto mb-2 text-yellow-500" size={24} />
                  <h4 className="font-semibold">콘텐츠 기획</h4>
                  <p className="text-sm text-gray-600">교과과정 연계 문제 개발</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6 border border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Github className="text-gray-700" />
              기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-800">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React 18</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Shadcn/ui</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-gray-800">Tools & Services</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Google AdSense</Badge>
                  <Badge variant="outline">Netlify</Badge>
                  <Badge variant="outline">Local Storage</Badge>
                  <Badge variant="outline">Canvas API</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 연락처 및 문의 */}
        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mail className="text-green-500" />
              문의 및 피드백
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">📧 이메일 문의</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>일반 문의:</strong> am2869@naver.com</p>
                    <p><strong>기술 지원:</strong> am2869@naver.com</p>
                    <p><strong>개인정보 관련:</strong> am2869@naver.com</p>
                    <p><strong>사업 제휴:</strong> am2869@naver.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">💬 피드백 환영</h3>
                  <div className="space-y-2 text-gray-700 list-inside list-disc pl-2">
                    <p>• 새로운 게임 아이디어 제안</p>
                    <p>• 버그 신고 및 개선 사항</p>
                    <p>• 교육 콘텐츠 추가 요청</p>
                    <p>• 사용성 개선 의견</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-green-400 shadow-inner">
                <p className="text-gray-700">
                  <strong>응답 시간:</strong> 평일 기준 24-48시간 내 답변드립니다. 
                  주말 및 공휴일에는 응답이 지연될 수 있습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 푸터 정보 */}
        <div className="text-center mt-8 pb-4 text-gray-500">
          <p className="mb-2">© 2025 지식 플레이스 (Knowledge Place). All rights reserved.</p>
          <p className="text-sm">
            교육을 통해 더 나은 세상을 만들어갑니다. 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
