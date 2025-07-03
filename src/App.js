import React, { useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOKeywords from './SEOKeywords';
import AdSenseAd from './components/AdSenseAd';

const DEFAULT_TITLE = 'Percentage Calculator - Calculate Percent Increase & Decrease Online';
const DEFAULT_DESCRIPTION = 'Free percentage calculator for increase, decrease, and change. Calculate percent difference between two values instantly. No signup required.';
const DEFAULT_KEYWORDS = 'percentage calculator, percent increase, percent decrease, percentage change, online calculator, free calculator, math tool, percentage difference, percent change, percentage formula, calculate percentage, percentage increase calculator, percentage decrease calculator, percent calculator online, percentage change calculator, percentage difference calculator, percent increase formula, percent decrease formula, percentage calculation, percentage math, percentage tool, percentage converter, percentage finder, percentage solver, percentage computer, percentage estimator, percentage determiner, percentage evaluator, percentage assessor, percentage analyzer, percentage processor, percentage calculator tool, percentage calculator online, percentage calculator free, percentage calculator app, percentage calculator website, percentage calculator web app, percentage calculator mobile, percentage calculator desktop, percentage calculator browser, percentage calculator no download, percentage calculator instant, percentage calculator quick, percentage calculator fast, percentage calculator accurate, percentage calculator precise, percentage calculator reliable, percentage calculator trustworthy, percentage calculator secure, percentage calculator private, percentage calculator anonymous';
const DEFAULT_ROBOTS = 'index,follow';

function App() {
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePercentage = useCallback(() => {
    // Reset error state
    setError('');
    setIsCalculating(true);
    
    // Validate inputs
    if (!oldValue || !newValue) {
      setError('Please enter both old and new values');
      setIsCalculating(false);
      return;
    }

    const old = parseFloat(oldValue);
    const newVal = parseFloat(newValue);

    if (isNaN(old) || isNaN(newVal)) {
      setError('Please enter valid numbers');
      setIsCalculating(false);
      return;
    }

    if (old === 0) {
      setError('Old value cannot be zero');
      setIsCalculating(false);
      return;
    }

    // Calculate percentage change
    const percentageChange = ((newVal - old) / old) * 100;
    const roundedPercentage = Math.round(percentageChange * 100) / 100;
    
    const isIncrease = percentageChange > 0;
    const changeType = isIncrease ? 'Increase' : 'Decrease';
    const absoluteChange = Math.abs(roundedPercentage);

    // Add button click animation
    const button = document.querySelector('.calculate-btn');
    if (button) {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 300);
    }

    // Set result immediately with animation
    setResult({
      percentage: absoluteChange,
      changeType: changeType,
      isIncrease: isIncrease,
      oldValue: old,
      newValue: newVal
    });

    // Reset calculating state after a brief delay for animation
    setTimeout(() => setIsCalculating(false), 100);
  }, [oldValue, newValue]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !isCalculating) {
      calculatePercentage();
    }
  }, [calculatePercentage, isCalculating]);

  const clearForm = useCallback(() => {
    setOldValue('');
    setNewValue('');
    setResult(null);
    setError('');
    setIsCalculating(false);
  }, []);

  // Memoized functions for better performance
  const getPageTitle = useMemo(() => {
    if (result) {
      return `${result.percentage}% ${result.changeType} Calculator - Free Online Tool`;
    }
    return DEFAULT_TITLE;
  }, [result]);

  const getPageDescription = useMemo(() => {
    if (result) {
      return `Calculate percentage ${result.changeType.toLowerCase()}: ${result.oldValue} to ${result.newValue} = ${result.percentage}% ${result.changeType.toLowerCase()}. Free online percentage calculator.`;
    }
    return DEFAULT_DESCRIPTION;
  }, [result]);

  const getPageKeywords = useMemo(() => {
    if (result) {
      return 'percentage calculator, percent increase, percent decrease, calculation, math, simple tool';
    }
    return DEFAULT_KEYWORDS;
  }, [result]);

  const getPageRobots = useMemo(() => {
    return DEFAULT_ROBOTS;
  }, []);

  // Optimized structured data
  const getStructuredData = useMemo(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Percentage Calculator",
      "description": DEFAULT_DESCRIPTION,
      "url": "https://percentage-calculator.web.app",
      "applicationCategory": "CalculatorApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Percentage Calculator"
      }
    };

    if (result) {
      return {
        ...baseData,
        "name": `Percentage ${result.changeType} Calculator`,
        "description": `Calculate ${result.percentage}% ${result.changeType.toLowerCase()} from ${result.oldValue} to ${result.newValue}`,
        "potentialAction": {
          "@type": "CalculateAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://percentage-calculator.web.app"
          },
          "result": {
            "@type": "QuantitativeValue",
            "value": result.percentage,
            "unitText": "percent"
          }
        }
      };
    }

    return baseData;
  }, [result]);

  // Check if form is valid
  const isFormValid = useMemo(() => {
    return oldValue && newValue && !isCalculating;
  }, [oldValue, newValue, isCalculating]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{getPageTitle}</title>
        <meta name="description" content={getPageDescription} />
        <meta name="keywords" content={getPageKeywords} />
        <meta name="robots" content={getPageRobots} />
        <meta name="author" content="Percentage Calculator" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={getPageTitle} />
        <meta property="og:description" content={getPageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://percentage-calculator.web.app" />
        <meta property="og:site_name" content="Percentage Calculator" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle} />
        <meta name="twitter:description" content={getPageDescription} />
        <meta name="twitter:site" content="@percentagecalc" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Percentage Calculator" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://percentage-calculator.web.app" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData)}
        </script>
        
        {/* Additional Meta Tags for Calculator */}
        <meta name="application-name" content="Percentage Calculator" />
        <meta name="category" content="Calculator" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9271595483784297" crossOrigin="anonymous"></script>
      </Helmet>

      <div className="container">
        {/* Hidden SEO Keywords */}
        <SEOKeywords />
        
        {/* Top Banner Ad Slot */}
        <AdSenseAd adType="TOP_BANNER" />

        <main className="main-content">
          <div className="calculator-card">
            <header className="header">
              <h1>Percentage Calculator</h1>
              <p>Calculate percentage increase or decrease between two values</p>
            </header>

            <form onSubmit={(e) => { e.preventDefault(); calculatePercentage(); }}>
              <div className="form-group">
                <label htmlFor="oldValue">Old Value:</label>
                <input
                  type="number"
                  id="oldValue"
                  value={oldValue}
                  onChange={(e) => setOldValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter the original value"
                  step="any"
                  required
                  disabled={isCalculating}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newValue">New Value:</label>
                <input
                  type="number"
                  id="newValue"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter the new value"
                  step="any"
                  required
                  disabled={isCalculating}
                />
              </div>

              <button 
                type="submit" 
                className={`calculate-btn ${isCalculating ? 'loading' : ''}`}
                disabled={!isFormValid}
              >
                {isCalculating ? 'Calculating...' : 'Calculate Percentage Change'}
              </button>
            </form>

            {error && (
              <div className="error">
                {error}
              </div>
            )}

            {result && (
              <>
                <div className={`result ${result.isIncrease ? 'increase' : 'decrease'}`}>
                  <h3>Result</h3>
                  <div className="percentage">
                    {result.percentage}%
                  </div>
                  <div className="change-type">
                    {result.changeType}
                  </div>
                  <div className="formula">
                    Formula: (({result.newValue} - {result.oldValue}) / {result.oldValue}) × 100 = {result.percentage}%
                  </div>
                </div>

                {/* Inline Ad Slot after result */}
                <AdSenseAd adType="INLINE" />

                <button 
                  onClick={clearForm}
                  className="calculate-btn"
                  style={{ marginTop: '20px' }}
                >
                  Calculate Another
                </button>
              </>
            )}
          </div>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Percentage Calculator. Free online tool for calculating percentage changes.</p>
        </footer>

        {/* Bottom Sticky Ad Slot */}
        <AdSenseAd adType="BOTTOM_STICKY" className="sticky-bottom" />
      </div>
    </>
  );
}

export default App; 