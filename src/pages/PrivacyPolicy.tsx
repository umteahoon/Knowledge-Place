import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react';
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
            <CardTitle className="flex items-center gap-2 text-xl">
              <Eye className="text-green-500" />
              지식 플레이스 개인정보처리방침
            </CardTitle>
            <p className="text-sm text-gray-600">최종 업데이트: 2025년 11월 18일</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 서문 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                지식 플레이스(이하 "회사")는 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 
                관련 법령에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 
                하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
              </p>
            </div>

            {/* 1. 개인정보의 처리 목적 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                개인정보의 처리 목적
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>회원가입 및 회원관리</li>
                  <li>교육 서비스 제공 및 학습 진도 관리</li>
                  <li>게임 통계 및 성과 분석</li>
                  <li>서비스 개선 및 맞춤형 콘텐츠 제공</li>
                  <li>고객 문의 및 지원 서비스</li>
                  <li>광고 서비스 제공 (Google AdSense)</li>
                </ul>
              </div>
            </div>

            {/* 2. 개인정보의 처리 및 보유기간 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                개인정보의 처리 및 보유기간
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">회원정보</h4>
                    <p className="text-sm text-gray-600">보유기간: 회원탈퇴 시까지 (단, 관련 법령에 따라 일정기간 보관)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">학습 기록 및 게임 통계</h4>
                    <p className="text-sm text-gray-600">보유기간: 회원탈퇴 후 1년</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">쿠키 및 로그 데이터</h4>
                    <p className="text-sm text-gray-600">보유기간: 1년</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 개인정보의 제3자 제공 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                개인정보의 제3자 제공
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>Google AdSense를 통한 광고 서비스 제공 (아래 참조)</li>
                </ul>
              </div>
            </div>

            {/* 4. Google AdSense 및 쿠키 사용 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                Google AdSense 및 쿠키 사용
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium text-gray-800 mb-2">Google AdSense</h4>
                <p className="text-gray-700 mb-3">
                  본 웹사이트는 Google AdSense를 사용하여 광고를 표시합니다. Google AdSense는 사용자의 관심사에 맞는 
                  광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Google은 이 사이트에 광고를 게재하기 위해 쿠키를 사용합니다</li>
                  <li>Google의 쿠키를 사용하면 Google과 파트너가 사용자의 사이트 방문 기록을 바탕으로 광고를 게재할 수 있습니다</li>
                  <li>사용자는 광고 설정에서 맞춤 광고를 사용 중지할 수 있습니다</li>
                  <li>자세한 내용은 Google 개인정보처리방침을 참조하시기 바랍니다</li>
                </ul>
              </div>
            </div>

            {/* 5. 개인정보보호책임자 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">5</span>
                개인정보보호책임자
              </h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">개인정보보호책임자</h4>
                    <p className="text-gray-700">성명: 엄태훈 (대표)</p>
                    <p className="text-gray-700">이메일: am2869@naver.com</p>
                    <p className="text-sm text-gray-600 mt-2">
                      개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 
                      불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. 정보주체의 권리·의무 및 행사방법 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">6</span>
                정보주체의 권리·의무 및 행사방법
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>개인정보 처리현황 통지요구</li>
                  <li>개인정보 열람요구</li>
                  <li>개인정보 정정·삭제요구</li>
                  <li>개인정보 처리정지요구</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  위의 권리 행사는 개인정보보호책임자에게 서면, 전화, 전자우편을 통하여 하실 수 있으며 
                  회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
              </div>
            </div>

            {/* 7. 개인정보의 안전성 확보조치 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">7</span>
                개인정보의 안전성 확보조치
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-700 mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>개인정보 취급 직원의 최소화 및 대상자에 대한 교육</li>
                      <li>개인정보에 대한 접근 제한</li>
                      <li>개인정보를 안전하게 저장·전송할 수 있는 암호화 기법 사용</li>
                      <li>해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위한 보안시스템 구축</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. 개인정보처리방침 변경 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">8</span>
                개인정보처리방침 변경
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  이 개인정보처리방침은 2025년 11월 18일부터 적용되며, 법령 및 방침에 따른 변경내용의 
                  추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </div>
            </div>

            {/* 연락처 */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-medium text-gray-800 mb-2">문의사항</h4>
              <p className="text-gray-700">
                개인정보 처리에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>이메일:</strong> am2869@naver.com<br />
                <strong>응답시간:</strong> 평일 24-48시간 내
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;