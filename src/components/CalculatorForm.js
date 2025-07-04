import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, RotateCcw } from 'lucide-react';

// Calculator configurations - moved outside component to prevent recreation
const calculatorConfigs = {
    'percentage-change': {
      title: 'Percentage Change',
      description: 'Calculate percentage increase or decrease between two values',
      formula: '((newValue - oldValue) / oldValue) × 100',
      fields: [
        { name: 'oldValue', label: 'Old Value', placeholder: 'Enter original value', type: 'number' },
        { name: 'newValue', label: 'New Value', placeholder: 'Enter new value', type: 'number' }
      ],
      calculate: (data) => {
        const { oldValue, newValue } = data;
        if (!oldValue || !newValue) return null;
        const change = ((newValue - oldValue) / oldValue) * 100;
        return {
          value: change.toFixed(2),
          label: change >= 0 ? 'Percentage Increase' : 'Percentage Decrease',
          details: `${Math.abs(change).toFixed(2)}% ${change >= 0 ? 'increase' : 'decrease'}`
        };
      }
    },
    'percentage-to-decimal': {
      title: 'Percentage to Decimal',
      description: 'Convert percentage to decimal format',
      formula: 'decimal = percentage ÷ 100',
      fields: [
        { name: 'percentage', label: 'Percentage', placeholder: 'Enter percentage value', type: 'number' }
      ],
      calculate: (data) => {
        const { percentage } = data;
        if (!percentage) return null;
        const decimal = percentage / 100;
        return {
          value: decimal.toFixed(4),
          label: 'Decimal Value',
          details: `${percentage}% = ${decimal.toFixed(4)}`
        };
      }
    },
    'decimal-to-percentage': {
      title: 'Decimal to Percentage',
      description: 'Convert decimal to percentage format',
      formula: 'percentage = decimal × 100',
      fields: [
        { name: 'decimal', label: 'Decimal', placeholder: 'Enter decimal value', type: 'number' }
      ],
      calculate: (data) => {
        const { decimal } = data;
        if (!decimal) return null;
        const percentage = decimal * 100;
        return {
          value: percentage.toFixed(2),
          label: 'Percentage Value',
          details: `${decimal} = ${percentage.toFixed(2)}%`
        };
      }
    },
    'percentage-to-gpa': {
      title: 'Percentage to GPA',
      description: 'Convert percentage to GPA with custom scale',
      formula: 'GPA = (Percentage / 100) × Scale',
      fields: [
        { name: 'percentage', label: 'Percentage', placeholder: 'Enter percentage value', type: 'number', step: '0.01', min: '0', max: '100' },
        { name: 'scale', label: 'GPA Scale', placeholder: 'e.g., 4.0, 10.0, 5.0', type: 'number', step: '0.1', min: '0.1' }
      ],
      calculate: (data) => {
        const { percentage, scale } = data;
        if (!percentage || !scale || percentage < 0 || percentage > 100 || scale <= 0) return null;
        
        const gpa = (percentage / 100) * scale;
        
        return {
          value: gpa.toFixed(2),
          label: 'GPA',
          details: `${percentage}% on ${scale} scale = GPA ${gpa.toFixed(2)}`,
          calculation: `Step 1: Calculate GPA\nGPA = (Percentage ÷ 100) × Scale\nGPA = (${percentage} ÷ 100) × ${scale}\nGPA = ${(percentage / 100).toFixed(3)} × ${scale}\nGPA = ${gpa.toFixed(2)}`
        };
      }
    },
    'percentage-of-number': {
      title: 'Percentage of Number',
      description: 'Calculate what percentage one number is of another',
      formula: '(part / whole) × 100',
      fields: [
        { name: 'part', label: 'Part', placeholder: 'Enter part value', type: 'number' },
        { name: 'whole', label: 'Whole', placeholder: 'Enter whole value', type: 'number' }
      ],
      calculate: (data) => {
        const { part, whole } = data;
        if (!part || !whole) return null;
        const percentage = (part / whole) * 100;
        return {
          value: percentage.toFixed(2),
          label: 'Percentage',
          details: `${part} is ${percentage.toFixed(2)}% of ${whole}`
        };
      }
    },
    'cgpa-calculator': {
      title: 'CGPA Calculator',
      description: 'Calculate Cumulative Grade Point Average',
      formula: 'CGPA = Σ(Grade Points × Credits) / Σ(Credits)',
      fields: [
        { name: 'grades', label: 'Grades (comma separated)', placeholder: 'e.g., 3.5, 4.0, 3.8', type: 'text' },
        { name: 'credits', label: 'Credits (comma separated)', placeholder: 'e.g., 3, 4, 3', type: 'text' }
      ],
      calculate: (data) => {
        const { grades, credits } = data;
        if (!grades || !credits) return null;
        
        const gradeArray = grades.split(',').map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
        const creditArray = credits.split(',').map(c => parseFloat(c.trim())).filter(c => !isNaN(c));
        
        if (gradeArray.length !== creditArray.length || gradeArray.length === 0) return null;
        
        const totalPoints = gradeArray.reduce((sum, grade, index) => sum + (grade * creditArray[index]), 0);
        const totalCredits = creditArray.reduce((sum, credit) => sum + credit, 0);
        const cgpa = totalPoints / totalCredits;
        
        return {
          value: cgpa.toFixed(2),
          label: 'CGPA',
          details: `Total Points: ${totalPoints.toFixed(2)}, Total Credits: ${totalCredits}`
        };
      }
    },
    'gpa-to-percentage': {
      title: 'GPA to Percentage',
      description: 'Convert GPA to percentage with custom scale',
      formula: 'Percentage = (GPA / Scale) × 100',
      fields: [
        { name: 'gpa', label: 'GPA', placeholder: 'Enter GPA value', type: 'number', step: '0.01', min: '0' },
        { name: 'scale', label: 'GPA Scale', placeholder: 'e.g., 4.0, 10.0, 5.0', type: 'number', step: '0.1', min: '0.1' }
      ],
      calculate: (data) => {
        const { gpa, scale } = data;
        console.log('GPA Calculator Input:', { gpa, scale, data });
        
        if (!gpa || !scale || gpa < 0 || scale <= 0) {
          console.log('GPA Calculator: Invalid input - missing values or negative/zero scale');
          return null;
        }
        if (gpa > scale) {
          console.log('GPA Calculator: Invalid input - GPA exceeds scale');
          return null;
        }
        
        const percentage = (gpa / scale) * 100;
        console.log('GPA Calculator Result:', percentage);
        
        return {
          value: percentage.toFixed(2),
          label: 'Percentage',
          details: `GPA ${gpa} on ${scale} scale = ${percentage.toFixed(2)}%`,
          calculation: `Step 1: Calculate percentage\nPercentage = (GPA ÷ Scale) × 100\nPercentage = (${gpa} ÷ ${scale}) × 100\nPercentage = ${(gpa / scale).toFixed(3)} × 100\nPercentage = ${percentage.toFixed(2)}%`
        };
      }
    },
    'marks-to-percentage': {
      title: 'Marks to Percentage',
      description: 'Convert marks to percentage',
      formula: '(obtained marks / total marks) × 100',
      fields: [
        { name: 'obtained', label: 'Obtained Marks', placeholder: 'Enter obtained marks', type: 'number' },
        { name: 'total', label: 'Total Marks', placeholder: 'Enter total marks', type: 'number' }
      ],
      calculate: (data) => {
        const { obtained, total } = data;
        if (!obtained || !total) return null;
        const percentage = (obtained / total) * 100;
        return {
          value: percentage.toFixed(2),
          label: 'Percentage',
          details: `${obtained} out of ${total} = ${percentage.toFixed(2)}%`
        };
      }
    },
    'percentile-calculator': {
      title: 'Percentile Calculator',
      description: 'Calculate percentile rank',
      formula: 'Percentile = (Number of values below X / Total number of values) × 100',
      fields: [
        { name: 'score', label: 'Your Score', placeholder: 'Enter your score', type: 'number' },
        { name: 'scores', label: 'All Scores (comma separated)', placeholder: 'e.g., 85, 90, 75, 95', type: 'text' }
      ],
      calculate: (data) => {
        const { score, scores } = data;
        if (!score || !scores) return null;
        
        const scoreArray = scores.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s));
        if (scoreArray.length === 0) return null;
        
        const belowCount = scoreArray.filter(s => s < score).length;
        const percentile = (belowCount / scoreArray.length) * 100;
        
        return {
          value: percentile.toFixed(1),
          label: 'Percentile Rank',
          details: `${belowCount} out of ${scoreArray.length} scores are below ${score}`
        };
      }
    },
    'percentage-difference': {
      title: 'Percentage Difference',
      description: 'Calculate percentage difference between two values',
      formula: '|(A - B) / ((A + B) / 2)| × 100',
      fields: [
        { name: 'value1', label: 'First Value', placeholder: 'Enter first value', type: 'number' },
        { name: 'value2', label: 'Second Value', placeholder: 'Enter second value', type: 'number' }
      ],
      calculate: (data) => {
        const { value1, value2 } = data;
        if (!value1 || !value2) return null;
        const difference = Math.abs((value1 - value2) / ((value1 + value2) / 2)) * 100;
        return {
          value: difference.toFixed(2),
          label: 'Percentage Difference',
          details: `Difference between ${value1} and ${value2}`
        };
      }
    },
    'compound-interest': {
      title: 'Compound Interest',
      description: 'Calculate compound interest with percentage rate',
      formula: 'A = P(1 + r/n)^(nt)',
      fields: [
        { name: 'principal', label: 'Principal Amount', placeholder: 'Enter principal amount', type: 'number' },
        { name: 'rate', label: 'Annual Rate (%)', placeholder: 'Enter annual interest rate', type: 'number' },
        { name: 'time', label: 'Time (years)', placeholder: 'Enter time period', type: 'number' },
        { name: 'compounds', label: 'Compounds per year', placeholder: 'e.g., 12 for monthly', type: 'number' }
      ],
      calculate: (data) => {
        const { principal, rate, time, compounds } = data;
        if (!principal || !rate || !time || !compounds) return null;
        
        const r = rate / 100;
        const amount = principal * Math.pow(1 + r / compounds, compounds * time);
        const interest = amount - principal;
        
        return {
          value: amount.toFixed(2),
          label: 'Final Amount',
          details: `Interest earned: $${interest.toFixed(2)}`
        };
      }
    },
    'discount-calculator': {
      title: 'Discount Calculator',
      description: 'Calculate discount amount and final price',
      formula: 'Discount = Original Price × (Discount % / 100)',
      fields: [
        { name: 'originalPrice', label: 'Original Price', placeholder: 'Enter original price', type: 'number' },
        { name: 'discountPercent', label: 'Discount (%)', placeholder: 'Enter discount percentage', type: 'number' }
      ],
      calculate: (data) => {
        const { originalPrice, discountPercent } = data;
        if (!originalPrice || !discountPercent) return null;
        
        const discountAmount = originalPrice * (discountPercent / 100);
        const finalPrice = originalPrice - discountAmount;
        
        return {
          value: finalPrice.toFixed(2),
          label: 'Final Price',
          details: `Discount: $${discountAmount.toFixed(2)} (${discountPercent}% off)`,
          calculation: `Step 1: Calculate discount amount\nDiscount = $${originalPrice} × (${discountPercent} ÷ 100)\nDiscount = $${originalPrice} × ${(discountPercent / 100).toFixed(3)}\nDiscount = $${discountAmount.toFixed(2)}\n\nStep 2: Calculate final price\nFinal Price = Original Price - Discount\nFinal Price = $${originalPrice} - $${discountAmount.toFixed(2)}\nFinal Price = $${finalPrice.toFixed(2)}`
        };
      }
    },
    'markup-calculator': {
      title: 'Markup Calculator',
      description: 'Calculate markup percentage and selling price',
      formula: 'Markup = ((Selling Price - Cost) / Cost) × 100',
      fields: [
        { name: 'cost', label: 'Cost Price', placeholder: 'Enter cost price', type: 'number' },
        { name: 'markupPercent', label: 'Markup (%)', placeholder: 'Enter markup percentage', type: 'number' }
      ],
      calculate: (data) => {
        const { cost, markupPercent } = data;
        if (!cost || !markupPercent) return null;
        
        const markupAmount = cost * (markupPercent / 100);
        const sellingPrice = cost + markupAmount;
        
        return {
          value: sellingPrice.toFixed(2),
          label: 'Selling Price',
          details: `Markup: $${markupAmount.toFixed(2)} (${markupPercent}%)`
        };
      }
    },
    'profit-loss-calculator': {
      title: 'Profit/Loss Calculator',
      description: 'Calculate profit or loss percentage',
      formula: 'Profit/Loss % = ((Selling Price - Cost Price) / Cost Price) × 100',
      fields: [
        { name: 'costPrice', label: 'Cost Price', placeholder: 'Enter cost price', type: 'number' },
        { name: 'sellingPrice', label: 'Selling Price', placeholder: 'Enter selling price', type: 'number' }
      ],
      calculate: (data) => {
        const { costPrice, sellingPrice } = data;
        if (!costPrice || !sellingPrice) return null;
        
        const difference = sellingPrice - costPrice;
        const percentage = (difference / costPrice) * 100;
        
        return {
          value: Math.abs(percentage).toFixed(2),
          label: percentage >= 0 ? 'Profit Percentage' : 'Loss Percentage',
          details: `${percentage >= 0 ? 'Profit' : 'Loss'}: $${Math.abs(difference).toFixed(2)}`
        };
      }
    },
    'percentage-error': {
      title: 'Percentage Error',
      description: 'Calculate percentage error between actual and estimated values',
      formula: '|(Actual - Estimated) / Actual| × 100',
      fields: [
        { name: 'actual', label: 'Actual Value', placeholder: 'Enter actual value', type: 'number' },
        { name: 'estimated', label: 'Estimated Value', placeholder: 'Enter estimated value', type: 'number' }
      ],
      calculate: (data) => {
        const { actual, estimated } = data;
        if (!actual || !estimated) return null;
        
        const error = Math.abs((actual - estimated) / actual) * 100;
        
        return {
          value: error.toFixed(2),
          label: 'Percentage Error',
          details: `Error: ${Math.abs(actual - estimated).toFixed(2)}`
        };
      }
    },
    'percentage-completion': {
      title: 'Percentage Completion',
      description: 'Calculate percentage of task completion',
      formula: '(Completed / Total) × 100',
      fields: [
        { name: 'completed', label: 'Completed Tasks', placeholder: 'Enter completed tasks', type: 'number' },
        { name: 'total', label: 'Total Tasks', placeholder: 'Enter total tasks', type: 'number' }
      ],
      calculate: (data) => {
        const { completed, total } = data;
        if (!completed || !total) return null;
        
        const percentage = (completed / total) * 100;
        
        return {
          value: percentage.toFixed(1),
          label: 'Completion Percentage',
          details: `${completed} out of ${total} tasks completed`
        };
      }
    },
    'grade-calculator': {
      title: 'Grade Calculator',
      description: 'Calculate final grade based on weighted percentages',
      formula: 'Final Grade = Σ(Grade × Weight) / Σ(Weights)',
      fields: [
        { name: 'grades', label: 'Grades (comma separated)', placeholder: 'e.g., 85, 90, 78', type: 'text' },
        { name: 'weights', label: 'Weights (comma separated)', placeholder: 'e.g., 30, 40, 30', type: 'text' }
      ],
      calculate: (data) => {
        const { grades, weights } = data;
        if (!grades || !weights) return null;
        
        const gradeArray = grades.split(',').map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
        const weightArray = weights.split(',').map(w => parseFloat(w.trim())).filter(w => !isNaN(w));
        
        if (gradeArray.length !== weightArray.length || gradeArray.length === 0) return null;
        
        const weightedSum = gradeArray.reduce((sum, grade, index) => sum + (grade * weightArray[index]), 0);
        const totalWeight = weightArray.reduce((sum, weight) => sum + weight, 0);
        const finalGrade = weightedSum / totalWeight;
        
        return {
          value: finalGrade.toFixed(1),
          label: 'Final Grade',
          details: `Weighted average of ${gradeArray.length} components`
        };
      }
    }
  };

const CalculatorForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const config = calculatorConfigs[type];

  useEffect(() => {
    if (!config) {
      navigate('/');
      return;
    }

    // Initialize form data
    const initialData = {};
    config.fields.forEach(field => {
      initialData[field.name] = '';
    });
    setFormData(initialData);
  }, [type, navigate]);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setIsCalculated(false);
  };

  const handleCalculate = () => {
    const calculatedResult = config.calculate(formData);
    setResult(calculatedResult);
    setIsCalculated(true);
  };

  const handleReset = () => {
    const initialData = {};
    config.fields.forEach(field => {
      initialData[field.name] = '';
    });
    setFormData(initialData);
    setResult(null);
    setIsCalculated(false);
  };

  if (!config) {
    return <div>Calculator not found</div>;
  }



  return (
    <div className="main-content">
      {/* Back Button */}
      <motion.button
        className="btn btn-secondary mb-6"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </motion.button>

      {/* Calculator Form */}
      <motion.div
        className="calculator-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-header">
          <h1 className="form-title">{config.title}</h1>
          <p className="form-subtitle">{config.description}</p>
          {config.formula && (
            <div className="mt-4">
              <small style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                <strong>Formula:</strong> {config.formula}
              </small>
            </div>
          )}
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}>
          <div className="form-grid">
            {config.fields.length === 1 ? (
              // Single field - no row wrapper needed
              <div className="form-group">
                <label className="form-label">{config.fields[0].label}</label>
                <input
                  type={config.fields[0].type}
                  className="form-input"
                  placeholder={config.fields[0].placeholder}
                  value={formData[config.fields[0].name] || ''}
                  onChange={(e) => handleInputChange(config.fields[0].name, e.target.value)}
                  step={config.fields[0].step}
                  min={config.fields[0].min}
                  max={config.fields[0].max}
                />
              </div>
            ) : (
              // Multiple fields - group them in rows
              config.fields.map((field, index) => {
                if (index % 2 === 0) {
                  // Start of a new row
                  const nextField = config.fields[index + 1];
                  return (
                    <div key={`row-${index}`} className="form-row">
                      <div className="form-group">
                        <label className="form-label">{field.label}</label>
                        <input
                          type={field.type}
                          className="form-input"
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          step={field.step}
                          min={field.min}
                          max={field.max}
                        />
                      </div>
                      {nextField && (
                        <div className="form-group">
                          <label className="form-label">{nextField.label}</label>
                          <input
                            type={nextField.type}
                            className="form-input"
                            placeholder={nextField.placeholder}
                            value={formData[nextField.name] || ''}
                            onChange={(e) => handleInputChange(nextField.name, e.target.value)}
                            step={nextField.step}
                            min={nextField.min}
                            max={nextField.max}
                          />
                        </div>
                      )}
                    </div>
                  );
                }
                return null; // Skip odd indices as they're handled in the previous iteration
              })
            )}
          </div>

          <div className="form-actions">
            <button 
              type="submit"
              className="btn btn-primary" 
            >
              <Calculator size={16} />
              Calculate
            </button>
            <button 
              type="button"
              className="btn btn-secondary" 
              onClick={handleReset}
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </form>
      </motion.div>

      {/* Results */}
      {result && (
        <motion.div
          className="result-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="result-value">{result.value}</div>
          <div className="result-label">{result.label}</div>
          {result.details && (
            <div style={{ marginTop: 'var(--space-4)', opacity: 0.8 }}>
              {result.details}
            </div>
          )}
          {result.calculation && (
            <div className="calculation-steps">
              <h4 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)', fontSize: '1.125rem', fontWeight: '600' }}>
                How it's calculated:
              </h4>
              <pre style={{ 
                fontFamily: 'monospace', 
                fontSize: '0.875rem', 
                lineHeight: '1.5', 
                whiteSpace: 'pre-wrap',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                {result.calculation}
              </pre>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CalculatorForm;