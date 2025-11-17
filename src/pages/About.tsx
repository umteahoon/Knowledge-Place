import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Target, Lightbulb, Mail, Github, Globe, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            메인으로
          </Button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-purple-600" />
            About & Contact
          </h1>
        </div>

        {/* 서비스 소개 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="text-purple-500" />
              지식 플레이스란?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>지식 플레이스</strong>는 재미있는 게임을 통해 학습하는 혁신적인 교육 플랫폼입니다. 
                전통적인 암기식 학습에서 벗어나 게임화(Gamification)를 통해 자연스럽고 즐거운 학습 경험을 제공합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" />
                  우리의 미션
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 학습을 재미있고 흥미진진한 경험으로 만들기</li>
                  <li>• 모든 연령대가 접근 가능한 교육 콘텐츠 제공</li>
                  <li>• 개인 맞춤형 학습 경험 구현</li>
                  <li>• 지속적인 학습 동기 부여</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Award className="text-blue-500" />
                  제공 서비스
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 6개 교과목 퀴즈 게임 (수학, 영어, 국어, 한국사, 세계사, 과학)</li>
                  <li>• 4가지 게임 모드 (스피드, 서바이벌, 연습, 도전)</li>
                  <li>• 치즈 헌터 - 뱀 게임 + 한국어 퀴즈</li>
                  <li>• 개인 학습 통계 및 진도 관리</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 개발팀 소개 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="text-blue-500" />
              개발팀 소개
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  KP
                </div>
                <h3 className="text-xl font-bold text-gray-800">지식 플레이스 개발팀</h3>
                <p className="text-base font-semibold text-blue-700 mt-3">대표: 엄태훈</p>
                <p className="text-sm text-gray-600">개발자: 엄태훈, 손우혁</p>
                <p className="text-gray-600">Educational Technology Specialists</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <Globe className="mx-auto mb-2 text-green-500" size={24} />
                  <h4 className="font-semibold">웹 개발</h4>
                  <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Target className="mx-auto mb-2 text-red-500" size={24} />
                  <h4 className="font-semibold">게임 디자인</h4>
                  <p className="text-sm text-gray-600">교육학적 게임화 설계</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Lightbulb className="mx-auto mb-2 text-yellow-500" size={24} />
                  <h4 className="font-semibold">콘텐츠 기획</h4>
                  <p className="text-sm text-gray-600">교과과정 연계 문제 개발</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card className="bg-white/90 backdrop-blur-sm mb-6">
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
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mail className="text-green-500" />
              문의 및 피드백
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-6 rounded-lg">
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
                  <div className="space-y-2 text-gray-700">
                    <p>• 새로운 게임 아이디어 제안</p>
                    <p>• 버그 신고 및 개선 사항</p>
                    <p>• 교육 콘텐츠 추가 요청</p>
                    <p>• 사용성 개선 의견</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-green-400">
                <p className="text-gray-700">
                  <strong>응답 시간:</strong> 평일 기준 24-48시간 내 답변드립니다. 
                  주말 및 공휴일에는 응답이 지연될 수 있습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 푸터 정보 */}
        <div className="text-center mt-8 text-gray-500">
          <p className="mb-2">© 2025 지식 플레이스 (Knowledge Place). All rights reserved.</p>
          <p className="text-sm">
            교육을 통해 더 나은 세상을 만들어갑니다. 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
