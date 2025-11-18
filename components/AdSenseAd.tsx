import React, { useEffect } from 'react';

interface AdSenseAdProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// 기본 AdSense 광고 컴포넌트
export const AdSenseAd: React.FC<AdSenseAdProps> = ({
  adClient,
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style,
  className
}) => {
  useEffect(() => {
    try {
      // AdSense 스크립트가 로드되었는지 확인
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

// 배너 광고 (상단/하단)
export const BannerAd: React.FC<{ adSlot: string; className?: string }> = ({ 
  adSlot, 
  className = "my-4" 
}) => {
  return (
    <AdSenseAd
      adClient="ca-pub-YOUR_PUBLISHER_ID" // 실제 게시자 ID로 교체 필요
      adSlot={adSlot}
      adFormat="horizontal"
      className={className}
      style={{ textAlign: 'center' }}
    />
  );
};

// 사각형 광고 (사이드바/콘텐츠 내)
export const SquareAd: React.FC<{ adSlot: string; className?: string }> = ({ 
  adSlot, 
  className = "my-4" 
}) => {
  return (
    <AdSenseAd
      adClient="ca-pub-YOUR_PUBLISHER_ID" // 실제 게시자 ID로 교체 필요
      adSlot={adSlot}
      adFormat="rectangle"
      className={className}
      style={{ textAlign: 'center' }}
    />
  );
};

// 사이드바 광고
export const SidebarAd: React.FC<{ adSlot: string; className?: string }> = ({ 
  adSlot, 
  className = "my-4" 
}) => {
  return (
    <AdSenseAd
      adClient="ca-pub-YOUR_PUBLISHER_ID" // 실제 게시자 ID로 교체 필요
      adSlot={adSlot}
      adFormat="vertical"
      className={className}
      style={{ textAlign: 'center' }}
    />
  );
};

// 반응형 광고 (자동 크기 조정)
export const ResponsiveAd: React.FC<{ adSlot: string; className?: string }> = ({ 
  adSlot, 
  className = "my-4" 
}) => {
  return (
    <AdSenseAd
      adClient="ca-pub-YOUR_PUBLISHER_ID" // 실제 게시자 ID로 교체 필요
      adSlot={adSlot}
      adFormat="auto"
      fullWidthResponsive={true}
      className={className}
      style={{ textAlign: 'center', minHeight: '100px' }}
    />
  );
};

export default AdSenseAd;