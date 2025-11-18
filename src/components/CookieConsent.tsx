import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // 필수 쿠키는 항상 true
    functional: false,
    analytics: false,
    advertising: false
  });

  useEffect(() => {
    // 쿠키 동의 상태 확인
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
    
    // 광고 쿠키 동의 시 AdSense 스크립트 로드
    if (allAccepted.advertising) {
      loadAdSenseScript();
    }
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false
    };
    
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    
    // 광고 쿠키 동의 시 AdSense 스크립트 로드
    if (preferences.advertising) {
      loadAdSenseScript();
    }
  };

  const loadAdSenseScript = () => {
    // Google AdSense 스크립트 로드
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // 필수 쿠키는 변경 불가
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Cookie className="text-orange-500" />
            쿠키 및 개인정보 보호
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showSettings ? (
            // 기본 쿠키 동의 화면
            <>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  저희 웹사이트는 사용자 경험을 개선하고 맞춤형 콘텐츠를 제공하기 위해 쿠키를 사용합니다. 
                  또한 Google AdSense를 통해 관련성 높은 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
                </p>
                
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm text-gray-700">
                    <strong>Google AdSense:</strong> Google과 파트너사는 사용자의 관심사에 맞는 광고를 제공하기 위해 
                    쿠키를 사용할 수 있습니다. 광고 설정에서 맞춤 광고를 사용 중지할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAcceptAll} className="flex-1 bg-green-600 hover:bg-green-700">
                  <Check className="mr-2" size={16} />
                  모두 허용
                </Button>
                <Button onClick={handleRejectAll} variant="outline" className="flex-1">
                  <X className="mr-2" size={16} />
                  필수만 허용
                </Button>
                <Button onClick={() => setShowSettings(true)} variant="outline" className="flex-1">
                  <Settings className="mr-2" size={16} />
                  설정
                </Button>
              </div>
            </>
          ) : (
            // 상세 쿠키 설정 화면
            <>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">쿠키 설정</h3>
                
                {/* 필수 쿠키 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-800">필수 쿠키</h4>
                      <Badge variant="secondary">필수</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      웹사이트 기본 기능을 위해 필요한 쿠키입니다. 비활성화할 수 없습니다.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 기능 쿠키 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">기능 쿠키</h4>
                    <p className="text-sm text-gray-600">
                      사용자 설정 및 선호도를 기억하여 향상된 기능을 제공합니다.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* 분석 쿠키 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">분석 쿠키</h4>
                    <p className="text-sm text-gray-600">
                      웹사이트 사용 패턴을 분석하여 서비스 개선에 도움을 줍니다.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* 광고 쿠키 */}
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">광고 쿠키</h4>
                    <p className="text-sm text-gray-600">
                      Google AdSense를 통해 맞춤형 광고를 제공하기 위해 사용됩니다.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('advertising', !preferences.advertising)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.advertising ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleSavePreferences} className="flex-1">
                  설정 저장
                </Button>
                <Button onClick={() => setShowSettings(false)} variant="outline" className="flex-1">
                  뒤로가기
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;