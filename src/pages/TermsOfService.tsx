import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertCircle, Scale, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft size={16} className="mr-2" />
            메인으로
          </Button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Scale className="text-green-600" />
            이용약관
          </h1>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-green-500" />
              서비스 이용약관
            </CardTitle>
            <p className="text-sm text-gray-600">시행일자: 2025년 11월 16일</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제1조 (목적)</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  이 약관은 지식 플레이스(이하 "회사")가 제공하는 교육용 게임 서비스(이하 "서비스")의 
                  이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제2조 (정의)</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>"서비스"</strong>란 회사가 제공하는 교육용 퀴즈 게임 및 관련 서비스를 의미합니다.</li>
                  <li>• <strong>"이용자"</strong>란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                  <li>• <strong>"회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                  <li>• <strong>"비회원"</strong>이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제3조 (약관의 효력 및 변경)</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</li>
                  <li>회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.</li>
                  <li>이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제4조 (회원가입)</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</li>
                  <li>회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</li>
                  <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제5조 (서비스의 제공 및 변경)</h3>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사는 다음과 같은 업무를 수행합니다.
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>• 교육용 퀴즈 게임 서비스 제공</li>
                      <li>• 학습 진도 및 점수 관리</li>
                      <li>• 기타 회사가 정하는 업무</li>
                    </ul>
                  </li>
                  <li>회사는 서비스의 품질 향상을 위해 서비스의 내용을 변경할 수 있습니다.</li>
                  <li>서비스 내용의 변경이 있는 경우 변경사유 및 제공일자를 명시하여 현재 서비스의 제공 전 화면에 게시합니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제6조 (서비스의 중단)</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
                  <li>제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 회사는 배상하지 않습니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제7조 (광고게재 및 광고주와의 거래)</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사는 서비스의 운영과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다.</li>
                  <li>회사는 Google AdSense 등 제3자 광고 서비스를 이용할 수 있으며, 이와 관련된 개인정보 처리는 각 광고 제공업체의 정책을 따릅니다.</li>
                  <li>이용자가 광고를 통해 광고주와 거래를 하거나 광고에 참여하는 것은 전적으로 이용자와 광고주간의 문제이며, 이로 인해 발생하는 손실이나 손해에 대해서는 회사가 책임지지 않습니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제8조 (이용자의 의무)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>이용자는 다음 행위를 하여서는 안됩니다.
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>• 신청 또는 변경시 허위내용의 등록</li>
                      <li>• 타인의 정보도용</li>
                      <li>• 회사가 게시한 정보의 변경</li>
                      <li>• 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                      <li>• 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>• 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>• 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제9조 (저작권의 귀속 및 이용제한)</h3>
              <div className="bg-teal-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
                  <li>이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제10조 (면책조항)</h3>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                  <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
                  <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                  <li>회사는 이용자가 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">제11조 (분쟁해결)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
                  <li>회사와 이용자간에 발생한 분쟁에 관한 소송은 대한민국 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.</li>
                </ol>
              </div>
            </section>

            <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex items-start gap-3">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-green-800">서비스 이용 동의</p>
                <p className="text-green-700 text-sm mt-1">
                  본 서비스를 이용함으로써 위 이용약관에 동의한 것으로 간주됩니다. 
                  문의사항이 있으시면 support@knowledgeplace.com으로 연락해 주세요.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;