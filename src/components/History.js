import React from 'react';
import { motion } from 'framer-motion';
import { History, Clock, TrendingUp, Calculator } from 'lucide-react';

const HistoryComponent = () => {
  // Mock history data - in a real app, this would come from localStorage or a database
  const historyItems = [
    {
      id: 1,
      type: 'Percentage Change',
      inputs: { oldValue: 100, newValue: 120 },
      result: '20.00%',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      category: 'basic',
      description: 'Calculated percentage increase from 100 to 120'
    },
    {
      id: 2,
      type: 'Percentage to Decimal',
      inputs: { percentage: 75 },
      result: '0.7500',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      category: 'conversion',
      description: 'Converted 75% to decimal format'
    },
    {
      id: 3,
      type: 'Discount Calculator',
      inputs: { originalPrice: 200, discountPercent: 15 },
      result: '170.00',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      category: 'finance',
      description: 'Applied 15% discount to $200 item'
    },
    {
      id: 4,
      type: 'Marks to Percentage',
      inputs: { obtained: 85, total: 100 },
      result: '85.00%',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      category: 'academic',
      description: 'Converted exam score 85/100 to percentage'
    },
    {
      id: 5,
      type: 'CGPA Calculator',
      inputs: { grades: '3.5, 4.0, 3.8', credits: '3, 4, 3' },
      result: '3.78',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      category: 'academic',
      description: 'Calculated CGPA for 3 courses'
    },
    {
      id: 6,
      type: 'Compound Interest',
      inputs: { principal: 1000, rate: 5, time: 2 },
      result: '1102.50',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
      category: 'finance',
      description: 'Calculated compound interest for $1000 at 5% for 2 years'
    },
    {
      id: 7,
      type: 'Percentage Difference',
      inputs: { value1: 80, value2: 100 },
      result: '22.22%',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      category: 'basic',
      description: 'Found percentage difference between 80 and 100'
    },
    {
      id: 8,
      type: 'Grade Calculator',
      inputs: { grades: '85, 90, 78', weights: '30, 40, 30' },
      result: '84.7',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // 6 days ago
      category: 'academic',
      description: 'Calculated weighted final grade'
    }
  ];

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'basic': return <Calculator size={16} />;
      case 'finance': return <TrendingUp size={16} />;
      default: return <Calculator size={16} />;
    }
  };

  return (
    <div className="history-page">
      <div className="history-container">
        <motion.div
          className="history-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="history-title">
            <History size={32} />
            Calculation History
          </h1>
          <p className="history-subtitle">
            View your recent calculations and results from percentage calculations
          </p>
        </motion.div>

        {historyItems.length === 0 ? (
          <div className="empty-history">
            <History size={64} />
            <h3>No calculations yet</h3>
            <p>Start calculating to see your history here</p>
          </div>
        ) : (
          <div>
            {historyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="history-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="history-item-left">
                  <div className="history-icon">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="history-content">
                    <h4 className="history-type">{item.type}</h4>
                    <p className="history-description">{item.description}</p>
                    <p className="history-inputs">
                      {Object.entries(item.inputs).map(([key, value]) => `${key}: ${value}`).join(', ')}
                    </p>
                  </div>
                </div>
                
                <div className="history-item-right">
                  <div className="history-result">{item.result}</div>
                  <div className="history-time">
                    <Clock size={12} />
                    {formatTimeAgo(item.timestamp)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryComponent; 