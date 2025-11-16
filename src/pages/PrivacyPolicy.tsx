import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Cookie, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            메인으로
          </Button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Shield className="text-blue-600" />
            개인정보처리방침
          </h1>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="text-blue-500" />
              개인정보처리방침
            </CardTitle>
            <p className="text-sm text-gray-600">시행일자: 2025년 11월 16일</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">1. 개인정보의 처리목적</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  지식 플레이스(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                  이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• 회원 가입 및 관리: 회원 식별, 서비스 이용에 따른 본인확인</li>
                  <li>• 서비스 제공: 게임 진행도 저장, 점수 기록 관리</li>
                  <li>• 마케팅 및 광고: 맞춤형 광고 제공, 서비스 개선</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">2. 처리하는 개인정보의 항목</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">필수항목</h4>
                    <p className="text-gray-700">이메일 주소, 닉네임, 게임 점수 및 진행도</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">선택항목</h4>
                    <p className="text-gray-700">프로필 이미지, 선호 교과목</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">자동 수집 항목</h4>
                    <p className="text-gray-700">IP주소, 쿠키, 방문 기록, 서비스 이용 기록</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Cookie className="text-orange-500" size={20} />
                3. 쿠키(Cookie) 사용
              </h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  회사는 서비스 향상과 맞춤형 서비스 제공을 위해 쿠키를 사용합니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>필수 쿠키:</strong> 서비스 이용에 필요한 기본 기능</li>
                  <li>• <strong>기능 쿠키:</strong> 사용자 설정 및 선호도 저장</li>
                  <li>• <strong>분석 쿠키:</strong> 서비스 이용 통계 및 개선</li>
                  <li>• <strong>광고 쿠키:</strong> 맞춤형 광고 제공 (Google AdSense)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  브라우저 설정을 통해 쿠키를 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">4. Google AdSense 및 제3자 광고</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  본 사이트는 Google AdSense를 통해 광고를 게재합니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google은 사용자의 관심사에 맞는 광고를 제공하기 위해 쿠키를 사용합니다</li>
                  <li>• 개인화 광고를 원하지 않는 경우 Google 광고 설정에서 비활성화할 수 있습니다</li>
                  <li>• 제3자 광고 제공업체도 쿠키를 사용하여 맞춤형 광고를 제공할 수 있습니다</li>
                </ul>
                <div className="mt-3 p-3 bg-white rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-gray-600">
                    <strong>Google 개인정보처리방침:</strong> 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline ml-1">
                      https://policies.google.com/privacy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">5. 개인정보의 보유 및 이용기간</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>회원정보:</strong> 회원 탈퇴 시까지</li>
                  <li>• <strong>게임 기록:</strong> 회원 탈퇴 후 1년</li>
                  <li>• <strong>접속 로그:</strong> 3개월</li>
                  <li>• <strong>쿠키:</strong> 설정에 따라 브라우저 종료 시 또는 설정된 기간</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">6. 정보주체의 권리·의무 및 행사방법</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 개인정보 처리현황 통지요구</li>
                  <li>• 개인정보 열람요구</li>
                  <li>• 개인정보 정정·삭제요구</li>
                  <li>• 개인정보 처리정지요구</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">7. 개인정보보호책임자</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-gray-700">
                  <p><strong>개인정보보호책임자:</strong> 지식 플레이스 관리자</p>
                  <p><strong>연락처:</strong> am2869@naver.com</p>
                  <p><strong>처리방침 변경:</strong> 본 방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-blue-800">중요 안내</p>
                <p className="text-blue-700 text-sm mt-1">
                  본 개인정보처리방침은 Google AdSense 정책 및 GDPR을 준수하여 작성되었습니다. 
                  서비스 이용 시 본 방침에 동의한 것으로 간주됩니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
