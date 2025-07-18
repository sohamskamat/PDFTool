import React from 'react';
import { keywords as keywords1 } from './seo_words/seo_keywords_array';
import { keywords as keywords2 } from './seo_words/final_filtered_keywords_array';

const SEOKeywords = () => {
  // Combine and deduplicate keywords
  const allKeywords = [...new Set([...keywords1, ...keywords2])];
  
  return (
    <div style={{ display: 'none' }}>
      {allKeywords.join(',\n')}
    </div>
  );
};

export default SEOKeywords; 