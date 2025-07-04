// Google AdSense Configuration
// Publisher ID: ca-pub-9271595483784297

export const AD_UNITS = {
  // Top Banner Ad (728x90)
  TOP_BANNER: {
    id: 'ca-pub-9271595483784297',
    adSlot: '1234567890', // Replace with your actual ad unit ID
    format: '728x90',
    responsive: false,
    style: {
      display: 'block',
      textAlign: 'center',
      margin: '15px auto',
      width: '728px',
      height: '90px',
      maxWidth: '100%'
    }
  },

  // Inline Ad (after result - 300x250)
  INLINE: {
    id: 'ca-pub-9271595483784297',
    adSlot: '1234567891', // Replace with your actual ad unit ID
    format: '300x250',
    responsive: false,
    style: {
      display: 'block',
      textAlign: 'center',
      margin: '20px auto',
      width: '300px',
      height: '250px',
      maxWidth: '100%'
    }
  },

  // Bottom Sticky Ad (728x90 - wider)
  BOTTOM_STICKY: {
    id: 'ca-pub-9271595483784297',
    adSlot: '1234567892', // Replace with your actual ad unit ID
    format: '728x90',
    responsive: false,
    style: {
      display: 'block',
      textAlign: 'center',
      width: '728px',
      height: '90px',
      maxWidth: '100%'
    }
  },


};

// AdSense initialization function
export const initializeAdSense = () => {
  if (typeof window !== 'undefined' && window.adsbygoogle) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }
};

// Load AdSense script
export const loadAdSenseScript = () => {
  if (typeof window !== 'undefined' && !window.adsbygoogle) {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9271595483784297';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }
};

// AdSense page-level ads configuration
export const PAGE_LEVEL_ADS = {
  enabled: true,
  publisherId: 'ca-pub-9271595483784297' // Your publisher ID
}; 