import React, { useEffect } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

export const AdSenseAd: React.FC<AdSenseAdProps> = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = {},
  className = ''
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
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID" // 실제 AdSense 게시자 ID로 교체 필요
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

// 다양한 광고 크기별 컴포넌트
export const BannerAd: React.FC<{ adSlot: string; className?: string }> = ({ adSlot, className }) => (
  <AdSenseAd 
    adSlot={adSlot} 
    adFormat="horizontal"
    className={className}
    style={{ minHeight: '90px' }}
  />
);

export const SquareAd: React.FC<{ adSlot: string; className?: string }> = ({ adSlot, className }) => (
  <AdSenseAd 
    adSlot={adSlot} 
    adFormat="rectangle"
    className={className}
    style={{ minHeight: '250px', minWidth: '300px' }}
  />
);

export const SidebarAd: React.FC<{ adSlot: string; className?: string }> = ({ adSlot, className }) => (
  <AdSenseAd 
    adSlot={adSlot} 
    adFormat="vertical"
    className={className}
    style={{ minHeight: '600px', minWidth: '160px' }}
  />
);