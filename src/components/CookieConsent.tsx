import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie, Settings, Check } from 'lucide-react';

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // 필수 쿠키는 항상 true
    functional: true,
    analytics: true,
    advertising: true
  });

  useEffect(() => {
    // 쿠키 동의 여부 확인
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true
    };
    
    localStorage.setItem('cookie_consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    onAccept(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    onAccept(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false
    };
    
    localStorage.setItem('cookie_consent', JSON.stringify(minimal));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    onAccept(minimal);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cookie className="text-orange-500" size={24} />
              <h3 className="text-lg font-semibold">쿠키 사용 동의</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
            >
              <X size={16} />
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              저희 웹사이트는 서비스 향상과 맞춤형 경험 제공을 위해 쿠키를 사용합니다. 
              Google AdSense를 통한 광고 게재 시에도 쿠키가 사용됩니다.
            </p>

            {!showDetails ? (
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleAcceptAll} className="bg-green-600 hover:bg-green-700">
                  <Check className="mr-2" size={16} />
                  모두 허용
                </Button>
                <Button variant="outline" onClick={handleRejectAll}>
                  필수만 허용
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2"
                >
                  <Settings size={16} />
                  설정
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">필수 쿠키</h4>
                      <p className="text-sm text-gray-600">웹사이트 기본 기능에 필요합니다.</p>
                    </div>
                    <div className="text-green-600 font-medium">항상 활성</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">기능 쿠키</h4>
                      <p className="text-sm text-gray-600">사용자 설정 및 선호도를 저장합니다.</p>
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                        className="mr-2"
                      />
                      허용
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">분석 쿠키</h4>
                      <p className="text-sm text-gray-600">웹사이트 사용 통계를 수집합니다.</p>
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                        className="mr-2"
                      />
                      허용
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">광고 쿠키</h4>
                      <p className="text-sm text-gray-600">맞춤형 광고 제공을 위해 사용됩니다. (Google AdSense)</p>
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.advertising}
                        onChange={(e) => setPreferences({...preferences, advertising: e.target.checked})}
                        className="mr-2"
                      />
                      허용
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleAcceptSelected} className="bg-blue-600 hover:bg-blue-700">
                    선택 사항 저장
                  </Button>
                  <Button variant="outline" onClick={() => setShowDetails(false)}>
                    뒤로
                  </Button>
                </div>
              </div>
            )}

            <div className="text-xs text-gray-500 border-t pt-3">
              <p>
                자세한 내용은 <span className="text-blue-600 cursor-pointer underline">개인정보처리방침</span>을 
                참조하세요. 쿠키 설정은 언제든지 변경할 수 있습니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};