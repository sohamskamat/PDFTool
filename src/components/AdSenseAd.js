import React, { useEffect, useRef } from 'react';
import { AD_UNITS, loadAdSenseScript, initializeAdSense } from '../AdSenseConfig';

const AdSenseAd = ({ adType, className = '', style = {} }) => {
  const adRef = useRef(null);
  const adUnit = AD_UNITS[adType];

  useEffect(() => {
    // Load AdSense script if not already loaded
    loadAdSenseScript();

    // Initialize ad when component mounts
    const timer = setTimeout(() => {
      if (adRef.current) {
        initializeAdSense();
      }
    }, 1000); // Small delay to ensure script is loaded

    return () => clearTimeout(timer);
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
      />
    </div>
  );
};

export default AdSenseAd; 