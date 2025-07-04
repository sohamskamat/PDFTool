import React, { useEffect, useRef } from 'react';
import { ADSTERRA_UNITS } from '../AdsterraConfig';
import styles from './AdsterraAd.module.css';

const AdsterraAd = ({ adType, refreshKey = 0 }) => {
  const adRef = useRef(null);
  const observerRef = useRef(null);

  // Apply persistent styles to the ad container
  const applyAdStyles = (container, adType, adUnit) => {
    const base = {
      position: 'relative',
      zIndex: '1000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(16px)',
      borderRadius: '18px',
      boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
      width: adUnit.width + 'px',
      height: adUnit.height + 'px',
      maxWidth: '100%',
      padding: '0',
      border: '1.5px solid rgba(102,126,234,0.25)',
      transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
    };
    if (adType === 'TOP_BANNER') {
      base.position = 'relative';
      base.borderBottom = '2px solid #e2e8f0';
    } else if (adType === 'BOTTOM_BANNER') {
      base.position = 'fixed';
      base.bottom = '16px';
      base.left = '50%';
      base.transform = 'translateX(-50%)';
      base.borderTop = '2px solid #e2e8f0';
    }
    Object.assign(container.style, base);
  };

  useEffect(() => {
    if (!adRef.current) return;
    adRef.current.innerHTML = '';
    const adUnit = ADSTERRA_UNITS[adType];
    if (!adUnit) return;
    const adContainer = document.createElement('div');
    adContainer.id = `adsterra-${adType.toLowerCase()}-${refreshKey}`;
    adContainer.className = styles.adsterraAdInner;
    applyAdStyles(adContainer, adType, adUnit);
    adRef.current.appendChild(adContainer);
    observerRef.current = new MutationObserver(() => {
      applyAdStyles(adContainer, adType, adUnit);
    });
    observerRef.current.observe(adContainer, { attributes: true, attributeFilter: ['style'] });
    window.atOptions = {
      key: adUnit.key,
      format: adUnit.format,
      height: adUnit.height,
      width: adUnit.width,
    };
    const script = document.createElement('script');
    script.async = true;
    script.src = `//www.highperformanceformat.com/${adUnit.key}/invoke.js`;
    script.onerror = (error) => console.warn(`Failed to load Adsterra ad for ${adType}:`, error);
    script.onload = () => setTimeout(() => applyAdStyles(adContainer, adType, adUnit), 100);
    document.head.appendChild(script);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [adType, refreshKey]);

  return (
    <div
      ref={adRef}
      className={[
        styles.adsterraAd,
        styles[`adsterra${adType.charAt(0) + adType.slice(1).toLowerCase()}`],
      ].join(' ')}
      aria-label={`Adsterra ${adType.replace('_', ' ').toLowerCase()} ad`}
      tabIndex={-1}
    />
  );
};

export default AdsterraAd; 