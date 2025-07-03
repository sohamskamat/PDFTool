// Google AdSense Configuration
// Replace these placeholder ad unit IDs with your actual AdSense ad unit IDs

export const AD_UNITS = {
  // Top Banner Ad (728x90 or responsive)
  TOP_BANNER: {
    id: 'ca-pub-9271595483784297', // Your publisher ID
    adSlot: '1234567890', // Replace with your ad unit ID
    format: 'auto',
    responsive: true,
    style: {
      display: 'block',
      textAlign: 'center',
      margin: '20px auto'
    }
  },

  // Inline Ad (after result - 300x250 or responsive)
  INLINE: {
    id: 'ca-pub-9271595483784297', // Your publisher ID
    adSlot: '1234567891', // Replace with your ad unit ID
    format: 'auto',
    responsive: true,
    style: {
      display: 'block',
      textAlign: 'center',
      margin: '20px auto'
    }
  },

  // Bottom Sticky Ad (320x50 or responsive)
  BOTTOM_STICKY: {
    id: 'ca-pub-9271595483784297', // Your publisher ID
    adSlot: '1234567892', // Replace with your ad unit ID
    format: 'auto',
    responsive: true,
    style: {
      display: 'block',
      textAlign: 'center'
    }
  }
};

// AdSense initialization script
export const ADSENSE_SCRIPT = `
  (adsbygoogle = window.adsbygoogle || []).push({});
`;

// AdSense page-level ads configuration
export const PAGE_LEVEL_ADS = {
  enabled: true,
  publisherId: 'ca-pub-9271595483784297' // Your publisher ID
}; 