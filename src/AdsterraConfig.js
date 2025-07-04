// Adsterra Configuration - Sticky Banner Ads

export const ADSTERRA_UNITS = {
  // Top Banner Ad (728x90) - Sticky
  TOP_BANNER: {
    key: '3f215d4f854ab8068f2384d78c6e23d5',
    format: 'iframe',
    height: 90,
    width: 728,
    style: {
      position: 'fixed',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: '728px',
      height: '90px',
      maxWidth: '100%',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },

  // Bottom Banner Ad (468x60) - Sticky
  BOTTOM_BANNER: {
    key: '6d8031c5b468e4f55d393c33379c1e7b',
    format: 'iframe',
    height: 60,
    width: 468,
    style: {
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: '468px',
      height: '60px',
      maxWidth: '100%',
      backgroundColor: '#fff',
      borderTop: '1px solid #ddd',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
    }
  },

  // Social Bar - Controlled display
  SOCIAL_BAR: {
    scriptSrc: '//pl27074557.profitableratecpm.com/a5/12/d7/a512d7d1ea5e40fb58697277b1d4145e.js',
    style: {
      display: 'block',
      textAlign: 'center',
      margin: '15px auto',
      width: '100%',
      maxWidth: '100%',
      border: 'none',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1000
    }
  }
};

// Load Adsterra script
export const loadAdsterraScript = () => {
  if (typeof window !== 'undefined' && !window.adsterraLoaded) {
    const script1 = document.createElement('script');
    script1.src = '//www.highperformanceformat.com/3f215d4f854ab8068f2384d78c6e23d5/invoke.js';
    script1.async = true;
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.src = '//www.highperformanceformat.com/6d8031c5b468e4f55d393c33379c1e7b/invoke.js';
    script2.async = true;
    document.head.appendChild(script2);
    
    window.adsterraLoaded = true;
  }
};

// Initialize Adsterra ad
export const initializeAdsterra = (adType) => {
  if (typeof window !== 'undefined') {
    const adUnit = ADSTERRA_UNITS[adType];
    if (adUnit) {
      window.atOptions = {
        'key': adUnit.key,
        'format': adUnit.format,
        'height': adUnit.height,
        'width': adUnit.width
      };
    }
  }
};

// Safe social bar loader
export const loadSocialBar = () => {
  if (typeof window !== 'undefined' && !window.socialBarLoaded) {
    try {
      const script = document.createElement('script');
      script.src = ADSTERRA_UNITS.SOCIAL_BAR.scriptSrc;
      script.async = true;
      script.onload = () => {
        window.socialBarLoaded = true;
        console.log('Social bar loaded successfully');
      };
      script.onerror = (error) => {
        console.warn('Social bar failed to load:', error);
      };
      document.head.appendChild(script);
    } catch (error) {
      console.warn('Error loading social bar:', error);
    }
  }
}; 