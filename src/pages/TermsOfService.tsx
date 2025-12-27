import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertTriangle, Scale, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            메인으로
          </Button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="text-green-600" />
            이용약관
          </h1>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Scale className="text-blue-500" />
              지식 플레이스 서비스 이용약관
            </CardTitle>
            <p className="text-sm text-gray-600">최종 업데이트: 2025년 11월 18일</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 서문 */}
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                본 약관은 지식 플레이스(이하 "회사")가 제공하는 교육용 게임 서비스(이하 "서비스")의 
                이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            {/* 제1조 목적 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                목적
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  본 약관은 지식 플레이스가 제공하는 온라인 교육 게임 서비스의 이용조건 및 절차, 
                  회사와 회원 간의 권리·의무 및 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </div>

            {/* 제2조 정의 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                정의
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>① "서비스"</strong>란 회사가 제공하는 교육용 게임 플랫폼을 의미합니다.</p>
                  <p className="text-gray-700"><strong>② "회원"</strong>이란 본 약관에 동의하고 회사와 서비스 이용계약을 체결한 자를 의미합니다.</p>
                  <p className="text-gray-700"><strong>③"아이디(ID)"</strong>란 회원식별과 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</p>
                  <p className="text-gray-700"><strong>④ "콘텐츠"</strong>란 서비스에서 제공하는 교육 자료, 퀴즈, 게임 등을 의미합니다.</p>
                </div>
              </div>
            </div>

            {/* 제3조 약관의 효력 및 변경 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                약관의 효력 및 변경
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력을 발생합니다.</p>
                  <p className="text-gray-700">② 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.</p>
                  <p className="text-gray-700">③ 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</p>
                </div>
              </div>
            </div>

            {/* 제4조 회원가입 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                회원가입
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회원가입은 이용자가 약관의 내용에 대하여 동의를 하고 회원가입신청을 한 후 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</p>
                  <p className="text-gray-700">② 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙하지 않거나 사후에 이용계약을 해지할 수 있습니다:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                    <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                    <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 제5조 서비스의 제공 및 변경 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">5</span>
                서비스의 제공 및 변경
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회사는 다음과 같은 서비스를 제공합니다:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>교육용 퀴즈 게임 (국어, 수학, 영어, 과학, 한국사, 세계사)</li>
                    <li>4가지 게임 모드 (스피드 퀴즈, 서바이벌, 연습, 도전)</li>
                    <li>치즈 헌터 게임</li>
                    <li>학습 통계 및 진도 관리</li>
                    <li>기타 회사가 정하는 서비스</li>
                  </ul>
                  <p className="text-gray-700">② 회사는 서비스의 내용을 변경할 수 있으며, 변경 시 그 내용과 제공일자를 명시하여 현재의 서비스와 함께 서비스 초기화면에 게시하여야 합니다.</p>
                </div>
              </div>
            </div>

            {/* 제6조 서비스의 중단 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">6</span>
                서비스의 중단
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-600 mt-1" size={20} />
                  <div className="space-y-2">
                    <p className="text-gray-700">① 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                    <p className="text-gray-700">② 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 않습니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 제7조 광고게재 및 광고주와의 거래 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">7</span>
                광고게재 및 광고주와의 거래
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회사는 서비스의 운영과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다.</p>
                  <p className="text-gray-700">② 회사는 Google AdSense를 통해 맞춤형 광고를 제공할 수 있으며, 이를 위해 쿠키 등의 기술을 사용할 수 있습니다.</p>
                  <p className="text-gray-700">③ 회원이 서비스상에 게재되어 있는 광고를 이용하거나 광고주와의 거래를 통해 발생하는 손실과 손해에 대해서는 회사가 책임지지 않습니다.</p>
                </div>
              </div>
            </div>

            {/* 제8조 이용자의 의무 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">8</span>
                이용자의 의무
              </h3>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                  <Users className="text-red-600 mt-1" size={20} />
                  <div className="space-y-2">
                    <p className="text-gray-700">이용자는 다음 행위를 하여서는 안 됩니다:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                      <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 제9조 저작권의 귀속 및 이용제한 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">9</span>
                저작권의 귀속 및 이용제한
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</p>
                  <p className="text-gray-700">② 이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>
                </div>
              </div>
            </div>

            {/* 제10조 면책조항 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">10</span>
                면책조항
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                  <p className="text-gray-700">② 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                  <p className="text-gray-700">③ 회사는 이용자가 서비스를 이용하여 기대하는 학습효과나 결과를 얻지 못한 것에 대하여는 책임을 지지 않습니다.</p>
                  <p className="text-gray-700">④ 회사는 이용자 간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.</p>
                </div>
              </div>
            </div>

            {/* 제11조 분쟁해결 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">11</span>
                분쟁해결
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700">① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
                  <p className="text-gray-700">② 회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>
                </div>
              </div>
            </div>

            {/* 연락처 */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-medium text-gray-800 mb-2">문의사항</h4>
              <p className="text-gray-700">
                본 약관에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
              </p>
              <div className="mt-3 space-y-1">
                <p className="text-gray-700"><strong>회사명:</strong> 지식 플레이스</p>
                <p className="text-gray-700"><strong>대표:</strong> 엄태훈</p>
                <p className="text-gray-700"><strong>이메일:</strong> am2869@naver.com</p>
                <p className="text-gray-700"><strong>응답시간:</strong> 평일 24-48시간 내</p>
              </div>
            </div>

            {/* 부칙 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">부칙</h4>
              <p className="text-gray-700">
                본 약관은 2025년 11월 18일부터 적용됩니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;