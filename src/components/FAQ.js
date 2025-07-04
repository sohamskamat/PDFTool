import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to calculate percentage?",
      answer: "To calculate a percentage, divide the value by the total and multiply the result by 100. Formula: (value / total) × 100. For example, if you scored 85 out of 100, the percentage is (85/100) × 100 = 85%."
    },
    {
      question: "What is a percentage increase?",
      answer: "Percentage increase is calculated using the formula: ((new value - old value) / old value) × 100. This shows how much a value has grown compared to its original amount."
    },
    {
      question: "What is a percentage decrease?",
      answer: "Percentage decrease is calculated using: ((old value - new value) / old value) × 100. This shows how much a value has reduced compared to its original amount."
    },
    {
      question: "Is this percentage calculator free to use?",
      answer: "Yes, this percentage calculator is completely free to use with no sign-up required. It's fast, mobile-friendly, secure, and works on all devices."
    },
    {
      question: "What can I calculate with this tool?",
      answer: "You can calculate percentage increase, decrease, percentage of marks, price changes, salary hikes, discount calculations, profit margins, exam scores, and much more."
    },
    {
      question: "How do I calculate percentage of marks?",
      answer: "To calculate percentage of marks, divide your obtained marks by total marks and multiply by 100. Formula: (obtained marks / total marks) × 100."
    },
    {
      question: "How to calculate discount percentage?",
      answer: "Discount percentage = ((original price - sale price) / original price) × 100. This shows how much you save as a percentage of the original price."
    },
    {
      question: "What is the difference between percentage and percentile?",
      answer: "Percentage is a fraction of 100 (e.g., 85% means 85 out of 100), while percentile indicates your position in a group (e.g., 85th percentile means you scored better than 85% of people)."
    },
    {
      question: "How to convert percentage to decimal?",
      answer: "To convert percentage to decimal, divide by 100. For example, 75% = 75 ÷ 100 = 0.75. You can also move the decimal point two places to the left."
    },
    {
      question: "How to convert decimal to percentage?",
      answer: "To convert decimal to percentage, multiply by 100. For example, 0.85 = 0.85 × 100 = 85%. You can also move the decimal point two places to the right."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about percentages and our calculator</p>
          </div>
        </motion.div>

        <motion.div 
          className="faq-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="question-content">
                  <HelpCircle size={20} className="question-icon" />
                  <span>{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 