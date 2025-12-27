import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CookieConsent from "@/components/CookieConsent";
import { ResponsiveAd } from "@/components/AdSenseAd";
import { MusicProvider, MusicPlayer } from "@/components/MusicPlayer";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [cookieConsent, setCookieConsent] = useState<any>(null);

  useEffect(() => {
    // 쿠키 동의 상태 확인
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(JSON.parse(consent));
    }
  }, []);

  useEffect(() => {
    // 광고 쿠키가 동의된 경우 Google AdSense 스크립트 로드
    if (cookieConsent?.advertising) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, [cookieConsent]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MusicProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* 광고 쿠키 동의 시 광고 표시 - AdSense 승인 후 활성화 */}
            {/* {cookieConsent?.advertising && (
              <div className="fixed bottom-4 right-4 z-40">
                <ResponsiveAd adSlot="YOUR_ACTUAL_AD_SLOT_ID" className="w-80 h-60 bg-gray-100 rounded-lg" />
              </div>
            )} */}
            
            {/* 쿠키 동의 배너 */}
            <CookieConsent />
            
            {/* 음악 플레이어 */}
            <MusicPlayer />
            
            {/* PWA 설치 프롬프트 */}
            <PWAInstallPrompt />
          </BrowserRouter>
        </TooltipProvider>
      </MusicProvider>
    </AuthProvider>
  </QueryClientProvider>
  );
};

export default App;
