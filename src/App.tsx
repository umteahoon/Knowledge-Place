import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import { CookieConsent } from "./components/CookieConsent";
import { AdSenseAd } from "./components/AdSenseAd";

const queryClient = new QueryClient();

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
}

const App = () => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    // 쿠키 동의 상태 확인
    const consent = localStorage.getItem('cookie_consent');
    if (consent) {
      setCookiePreferences(JSON.parse(consent));
    }

    // Google AdSense 스크립트 로드 (광고 쿠키 동의 시에만)
    const loadAdSense = () => {
      if (cookiePreferences?.advertising) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    };

    if (cookiePreferences) {
      loadAdSense();
    }
  }, [cookiePreferences]);

  const handleCookieConsent = (preferences: CookiePreferences) => {
    setCookiePreferences(preferences);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* 쿠키 동의 배너 */}
        <CookieConsent onAccept={handleCookieConsent} />
        
        {/* Google AdSense 광고 (동의 시에만 표시) */}
        {cookiePreferences?.advertising && (
          <div className="fixed bottom-4 right-4 z-40">
            <AdSenseAd 
              adSlot="1234567890" 
              adFormat="rectangle"
              className="bg-white rounded-lg shadow-lg p-2"
            />
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
