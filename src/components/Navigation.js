import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, BookOpen, Palette, History, Info, Moon, Sun, Coffee, HelpCircle, Menu, X, CheckCircle } from 'lucide-react';
import { useQuestions } from '../contexts/QuestionsContext';

const Navigation = () => {
  const location = useLocation();
  const { questionsAnswered } = useQuestions();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Calculator, label: 'Calculator' },
    { path: '/mcqs', icon: BookOpen, label: 'MCQs' },
    { path: '/themes', icon: Palette, label: 'Themes' },
    { path: '/faq', icon: Info, label: 'FAQ' },
    { path: '/history', icon: History, label: 'History' }
  ];

  // Removed dark mode toggle as it's now handled by themes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <motion.div 
            className="brand-logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calculator size={24} />
            <span className="brand-text">Percentage Pro</span>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.div
                key={item.path}
                className="nav-item-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  title={item.label}
                >
                  <Icon size={20} />
                  <span className="nav-label">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
          
          {/* Coffee Link */}
          <motion.div
            className="nav-item-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://coff.ee/myselfsk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item coffee-link"
              title="Buy Me a Coffee"
            >
              <Coffee size={20} />
              <span className="nav-label">Coffee</span>
            </a>
          </motion.div>
        </div>

        <div className="nav-actions">
          {/* Questions Answered Display */}
          <div className="questions-display">
            <CheckCircle className="questions-icon" />
            <span className="questions-amount">{questionsAnswered}</span>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="mobile-nav-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-nav-header">
                <h3>Menu</h3>
                <button className="close-mobile-menu" onClick={closeMobileMenu}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="mobile-nav-items">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      <Icon size={24} />
                      <span>{item.label}</span>
                      {isActive && <div className="mobile-active-indicator" />}
                    </Link>
                  );
                })}
                
                <a
                  href="https://coff.ee/myselfsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-item coffee-link"
                  onClick={closeMobileMenu}
                >
                  <Coffee size={24} />
                  <span>Coffee</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 