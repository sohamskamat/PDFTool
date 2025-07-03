import React, { useEffect, useRef } from 'react';
import { AD_UNITS, ADSENSE_SCRIPT } from '../AdSenseConfig';

const AdSenseAd = ({ adType, className = '', style = {} }) => {
  const adRef = useRef(null);
  const adUnit = AD_UNITS[adType];

  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Initialize ad when component mounts
    if (adRef.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  if (!adUnit) {
    console.error(`Ad unit type "${adType}" not found`);
    return null;
  }

  return (
    <div 
      ref={adRef}
      className={`ad-slot ${className}`}
      style={{ ...adUnit.style, ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adUnit.id}
        data-ad-slot={adUnit.adSlot}
        data-ad-format={adUnit.format}
        data-full-width-responsive={adUnit.responsive}
      />
    </div>
  );
};

export default AdSenseAd; 