import React, { useState, useEffect } from 'react';
import { calculations, categories } from '../data/calculations';
import { 
  Calculator as CalculatorIcon, 
  Search, 
  X, 
  TrendingUp, 
  TrendingDown,
  ArrowRight,
  ArrowLeft,
  Percent,
  GraduationCap,
  BookOpen,
  FileText,
  BarChart3,
  Minus,
  DollarSign,
  Tag,
  AlertTriangle,
  CheckCircle,
  Award,
  Grid
} from 'lucide-react';

const Calculator = ({ onCalculate }) => {
  const [selectedCalculation, setSelectedCalculation] = useState(calculations[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const iconMap = {
    TrendingUp, TrendingDown, ArrowRight, ArrowLeft, Percent, GraduationCap,
    BookOpen, FileText, BarChart3, Minus, DollarSign, Tag, AlertTriangle,
    CheckCircle, Award, Grid, Calculator: CalculatorIcon
  };

  const filteredCalculations = calculations.filter(calc => {
    const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (name, value) => {
    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateResult = () => {
    try {
      setError('');
      const result = selectedCalculation.calculate(inputValues);
      if (result.error) {
        setError(result.error);
        setResult(null);
      } else {
        setResult(result);
        // Refresh ads when calculation is successful
        if (onCalculate) {
          onCalculate();
        }
      }
    } catch (err) {
      setError('An error occurred during calculation');
      setResult(null);
    }
  };

  const resetCalculator = () => {
    setInputValues({});
    setResult(null);
    setError('');
  };

  useEffect(() => {
    resetCalculator();
  }, [selectedCalculation]);

  const formatResult = (result) => {
    if (typeof result === 'number') {
      return result.toFixed(2);
    }
    return result;
  };

  return (
    <div className="calculator-container">
      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search calculations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="clear-search">
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className="category-filters">
          {categories.map(category => {
            const IconComponent = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <IconComponent size={16} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculation Selection */}
      <div className="calculation-grid">
        {filteredCalculations.map(calc => {
          const IconComponent = iconMap[calc.icon];
          return (
            <button
              key={calc.id}
              onClick={() => setSelectedCalculation(calc)}
              className={`calc-option ${selectedCalculation.id === calc.id ? 'active' : ''}`}
            >
              <IconComponent size={20} />
              <div className="calc-info">
                <h4>{calc.name}</h4>
                <p>{calc.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Calculator Interface */}
      <div className="calculator-interface">
        <div className="calc-header">
          <div className="calc-title">
            {(() => {
              const IconComponent = iconMap[selectedCalculation.icon];
              return <IconComponent size={24} />;
            })()}
            <h2>{selectedCalculation.name}</h2>
          </div>
          <p className="calc-description">{selectedCalculation.description}</p>
        </div>

        <div className="calc-formula">
          <strong>Formula:</strong> {selectedCalculation.formula}
        </div>

        <div className="input-section">
          {selectedCalculation.inputs.map(input => (
            <div key={input.name} className="input-group">
              <label htmlFor={input.name}>{input.label}</label>
              <input
                id={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={inputValues[input.name] || ''}
                onChange={(e) => handleInputChange(input.name, e.target.value)}
                min={input.min}
                max={input.max}
                step={input.step}
                className="calc-input"
              />
            </div>
          ))}
        </div>

        <div className="calc-actions">
          <button onClick={calculateResult} className="calculate-btn">
            Calculate
          </button>
          <button onClick={resetCalculator} className="reset-btn">
            Reset
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {result && (
          <div className="result-section">
            <h3>Result</h3>
            <div className="result-display">
              {result.type && (
                <div className={`result-type ${result.isIncrease ? 'positive' : 'negative'}`}>
                  {result.type}: {formatResult(result.result)}%
                </div>
              )}
              {!result.type && (
                <div className="result-value">
                  {formatResult(result.result)}
                  {selectedCalculation.id.includes('percentage') && !selectedCalculation.id.includes('to-decimal') && '%'}
                </div>
              )}
            </div>
            
            <div className="result-details">
              {Object.entries(result).map(([key, value]) => {
                if (key === 'result' || key === 'error') return null;
                if (typeof value === 'number') {
                  return (
                    <div key={key} className="detail-item">
                      <span className="detail-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                      <span className="detail-value">{formatResult(value)}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>

      {/* SEO-Friendly Content Section */}
      <section id="seo-explainer" className="seo-content">
        <h2>What is a Percentage?</h2>
        <p>A percentage is a number or ratio expressed as a fraction of 100. It's widely used in daily life to compare values, understand profits, discounts, and scores.</p>

        <h3>Common Percentage Formulas</h3>
        <ul>
          <li><strong>Percentage of a number:</strong> (value / total) × 100</li>
          <li><strong>Percentage increase:</strong> ((new - old) / old) × 100</li>
          <li><strong>Percentage decrease:</strong> ((old - new) / old) × 100</li>
        </ul>

        <h3>Real-life Examples</h3>
        <p>• Exam Scores: Convert marks to percentages easily. <br />
           • Discounts: Understand how much you save during sales. <br />
           • Investments: Measure returns on your savings or stocks. <br />
           • Business: Calculate profit/loss or revenue changes.</p>

        <h3>Why Use Our Calculator?</h3>
        <p>Our calculator is fast, ad-light, and easy to use. It works on mobile and desktop, requires no login, and supports quick calculation for students, professionals, and businesses.</p>
      </section>
    </div>
  );
};

export default Calculator; 