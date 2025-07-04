import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  BookOpen, 
  Palette, 
  History, 
  Info, 
  Search, 
  Coins, 
  Coffee,
  TrendingUp,
  Percent,
  Hash,
  GraduationCap,
  DollarSign,
  BarChart3,
  Target,
  CheckCircle,
  AlertCircle,
  Clock,
  Star
} from 'lucide-react';
import SEOKeywords from './SEOKeywords';
import AdsterraAd from './components/AdsterraAd';

// Components
import CalculatorForm from './components/CalculatorForm';
import MCQs from './components/MCQs';
import Themes from './components/Themes';
import FAQ from './components/FAQ';
import HistoryComponent from './components/History';
import About from './components/About';
import Navigation from './components/Navigation';
import ThemeProvider from './contexts/ThemeContext';
import QuestionsProvider from './contexts/QuestionsContext';

// Data
import { themes } from './data/themes';

const DEFAULT_TITLE = 'Percentage Calculator - Calculate Percent Increase & Decrease Online';
const DEFAULT_DESCRIPTION = 'Free percentage calculator for increase, decrease, and change. Calculate percent difference between two values instantly. No signup required.';
const DEFAULT_KEYWORDS = 'percentage calculator, percent increase, percent decrease, percentage change, online calculator, free calculator, math tool, percentage difference, percent change, percentage formula, calculate percentage, percentage increase calculator, percentage decrease calculator, percent calculator online, percentage change calculator, percentage difference calculator, percent increase formula, percent decrease formula, percentage calculation, percentage math, percentage tool, percentage converter, percentage finder, percentage solver, percentage computer, percentage estimator, percentage determiner, percentage evaluator, percentage assessor, percentage analyzer, percentage processor, percentage calculator tool, percentage calculator online, percentage calculator free, percentage calculator app, percentage calculator website, percentage calculator web app, percentage calculator mobile, percentage calculator desktop, percentage calculator browser, percentage calculator no download, percentage calculator instant, percentage calculator quick, percentage calculator fast, percentage calculator accurate, percentage calculator precise, percentage calculator reliable, percentage calculator trustworthy, percentage calculator secure, percentage calculator private, percentage calculator anonymous';
const DEFAULT_ROBOTS = 'index,follow';

// Calculator data
const calculators = [
  {
    id: 'percentage-change',
    title: 'Percentage Change',
    description: 'Calculate percentage increase or decrease between two values',
    icon: TrendingUp,
    category: 'basic',
    formula: '((newValue - oldValue) / oldValue) × 100'
  },
  {
    id: 'percentage-to-decimal',
    title: 'Percentage to Decimal',
    description: 'Convert percentage to decimal format',
    icon: Percent,
    category: 'conversion'
  },
  {
    id: 'decimal-to-percentage',
    title: 'Decimal to Percentage',
    description: 'Convert decimal to percentage format',
    icon: Hash,
    category: 'conversion'
  },
  {
    id: 'percentage-of-number',
    title: 'Percentage of Number',
    description: 'Calculate what percentage one number is of another',
    icon: Target,
    category: 'basic'
  },
  {
    id: 'cgpa-calculator',
    title: 'CGPA Calculator',
    description: 'Calculate Cumulative Grade Point Average',
    icon: GraduationCap,
    category: 'academic'
  },
  {
    id: 'gpa-to-percentage',
    title: 'GPA to Percentage',
    description: 'Convert GPA to percentage with custom scale',
    icon: Star,
    category: 'academic'
  },
  {
    id: 'percentage-to-gpa',
    title: 'Percentage to GPA',
    description: 'Convert percentage to GPA with custom scale',
    icon: Star,
    category: 'academic'
  },
  {
    id: 'marks-to-percentage',
    title: 'Marks to Percentage',
    description: 'Convert marks to percentage',
    icon: CheckCircle,
    category: 'academic'
  },
  {
    id: 'percentile-calculator',
    title: 'Percentile Calculator',
    description: 'Calculate percentile rank',
    icon: BarChart3,
    category: 'statistics'
  },
  {
    id: 'percentage-difference',
    title: 'Percentage Difference',
    description: 'Calculate percentage difference between two values',
    icon: AlertCircle,
    category: 'basic'
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest',
    description: 'Calculate compound interest with percentage rate',
    icon: DollarSign,
    category: 'finance'
  },
  {
    id: 'discount-calculator',
    title: 'Discount Calculator',
    description: 'Calculate discount amount and final price',
    icon: DollarSign,
    category: 'finance'
  },
  {
    id: 'markup-calculator',
    title: 'Markup Calculator',
    description: 'Calculate markup percentage and selling price',
    icon: DollarSign,
    category: 'finance'
  },
  {
    id: 'profit-loss-calculator',
    title: 'Profit/Loss Calculator',
    description: 'Calculate profit or loss percentage',
    icon: TrendingUp,
    category: 'finance'
  },
  {
    id: 'percentage-error',
    title: 'Percentage Error',
    description: 'Calculate percentage error between actual and estimated values',
    icon: AlertCircle,
    category: 'statistics'
  },
  {
    id: 'percentage-completion',
    title: 'Percentage Completion',
    description: 'Calculate percentage of task completion',
    icon: CheckCircle,
    category: 'basic'
  },
  {
    id: 'grade-calculator',
    title: 'Grade Calculator',
    description: 'Calculate final grade based on weighted percentages',
    icon: GraduationCap,
    category: 'academic'
  }
];

const categories = [
  { id: 'all', name: 'All Calculations' },
  { id: 'basic', name: 'Basic' },
  { id: 'conversion', name: 'Conversion' },
  { id: 'academic', name: 'Academic' },
  { id: 'finance', name: 'Finance' },
  { id: 'statistics', name: 'Statistics' }
];

function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [adRefreshKey, setAdRefreshKey] = useState(0);

  // Auto refresh ads every 32 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAdRefreshKey(prev => prev + 1);
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  const filteredCalculators = calculators.filter(calc => {
    const matchesSearch = calc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="main-content">
      {/* Dashboard Header */}
      <div className="dashboard-header fade-in-up">
        <h1 className="dashboard-title">Percentage Calculator</h1>
        <p className="dashboard-subtitle">
          Calculate percentages, convert formats, and solve mathematical problems with our comprehensive suite of calculators
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search calculations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Calculator Grid - Moved to top */}
      <div className="calculator-grid">
        <AnimatePresence>
          {filteredCalculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              className="calculator-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/calculator/${calc.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="calculator-icon">
                <calc.icon size={20} />
              </div>
              <h3 className="calculator-title">{calc.title}</h3>
              <p className="calculator-description">{calc.description}</p>
              {calc.formula && (
                <div className="mt-4">
                  <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <strong>Formula:</strong> {calc.formula}
                  </small>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* MCQs Section */}
      <div className="mcqs-section fade-in-up">
        <div className="mcqs-section-header">
          <h2 className="mcqs-section-title">
            <BookOpen className="mcqs-icon" />
            Practice MCQs
          </h2>
          <p className="mcqs-section-subtitle">
            Test your knowledge with our comprehensive collection of percentage-related multiple choice questions
          </p>
        </div>
        
        <div className="mcqs-preview-grid">
          <motion.div
            className="mcqs-preview-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/mcqs')}
            style={{ cursor: 'pointer' }}
          >
            <div className="mcqs-preview-icon">
              <BookOpen size={24} />
            </div>
            <h3>Percentage MCQs</h3>
            <p>Practice with 5000+ questions covering all percentage concepts</p>
            <div className="mcqs-stats">
              <span className="mcqs-stat">
                <CheckCircle size={16} />
                5000+ Questions
              </span>
              <span className="mcqs-stat">
                <Target size={16} />
                Multiple Topics
              </span>
            </div>
            <div className="mcqs-action">
              <span>Start Practice</span>
              <TrendingUp size={16} />
            </div>
          </motion.div>
          
          <motion.div
            className="mcqs-preview-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/mcqs')}
            style={{ cursor: 'pointer' }}
          >
            <div className="mcqs-preview-icon">
              <GraduationCap size={24} />
            </div>
            <h3>Exam Preparation</h3>
            <p>Perfect for competitive exams, school tests, and interviews</p>
            <div className="mcqs-stats">
              <span className="mcqs-stat">
                <Star size={16} />
                Expert Curated
              </span>
              <span className="mcqs-stat">
                <Clock size={16} />
                Timed Practice
              </span>
            </div>
            <div className="mcqs-action">
              <span>Take Test</span>
              <TrendingUp size={16} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Section - Moved to bottom */}
      <div className="info-section">
        <h2 className="info-title">What is a Percentage?</h2>
        <div className="info-grid">
          <div className="info-card">
            <h4>Definition</h4>
            <p>A percentage is a number or ratio expressed as a fraction of 100. It's widely used in daily life to compare values, understand profits, discounts, and scores.</p>
          </div>
          <div className="info-card">
            <h4>Common Percentage Formulas</h4>
            <p>• Percentage of a number: (value / total) × 100<br/>
               • Percentage increase: ((new - old) / old) × 100<br/>
               • Percentage decrease: ((old - new) / old) × 100</p>
          </div>
          <div className="info-card">
            <h4>Real-life Examples</h4>
            <p>• Exam Scores: Convert marks to percentages easily.<br/>
               • Discounts: Understand how much you save during sales.<br/>
               • Investments: Measure returns on your savings or stocks.<br/>
               • Business: Calculate profit/loss or revenue changes.</p>
          </div>
          <div className="info-card">
            <h4>Why Use Our Calculator?</h4>
            <p>Our calculator is fast, ad-light, and easy to use. It works on mobile and desktop, requires no login, and supports quick calculation for students, professionals, and businesses.</p>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <AdsterraAd adType="BOTTOM_BANNER" refreshKey={adRefreshKey} />
    </div>
  );
}

function App() {
  const [adRefreshKey, setAdRefreshKey] = useState(0);

  // Auto refresh ads every 32 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAdRefreshKey(prev => prev + 1);
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  const refreshAds = () => {
    setAdRefreshKey(prev => prev + 1);
  };

  const handleMCQClick = () => {
    // Refresh ads immediately
    refreshAds();
    // Refresh the page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <ThemeProvider>
      <QuestionsProvider>
        <Router>
        <Helmet>
          {/* Basic Meta Tags */}
          <title>{DEFAULT_TITLE}</title>
          <meta name="description" content={DEFAULT_DESCRIPTION} />
          <meta name="keywords" content={DEFAULT_KEYWORDS} />
          <meta name="robots" content={DEFAULT_ROBOTS} />
          <meta name="author" content="Percentage Calculator" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={DEFAULT_TITLE} />
          <meta property="og:description" content={DEFAULT_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://percentageconvert.web.app" />
          <meta property="og:site_name" content="Percentage Calculator" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={DEFAULT_TITLE} />
          <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
          
          {/* Additional SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#667eea" />
          <meta name="msapplication-TileColor" content="#667eea" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Percentage Calculator" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://percentageconvert.web.app" />
          
          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://www.highperformanceformat.com" />
          <link rel="dns-prefetch" href="https://www.highperformanceformat.com" />
          <link rel="preconnect" href="https://pl27074557.profitableratecpm.com" />
          <link rel="dns-prefetch" href="https://pl27074557.profitableratecpm.com" />
        </Helmet>

        <div className="app">
          {/* Hidden SEO Keywords */}
          <SEOKeywords />
          
          {/* Navigation */}
          <Navigation />

          {/* Top Banner Ad Slot - Below Navigation */}
          <div className="top-banner-container">
            <AdsterraAd adType="TOP_BANNER" refreshKey={adRefreshKey} />
          </div>

          {/* Main Content */}
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calculator/:type" element={<CalculatorForm />} />
                <Route path="/mcqs" element={<MCQs />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/history" element={<HistoryComponent />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Bottom Banner Ad Slot - Sticky */}
          <AdsterraAd adType="BOTTOM_BANNER" refreshKey={adRefreshKey} />
        </div>
      </Router>
      </QuestionsProvider>
    </ThemeProvider>
  );
}

export default App; 