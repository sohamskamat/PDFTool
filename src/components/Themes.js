import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check, Lock, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Themes = () => {
  const { 
    themes, 
    currentTheme, 
    changeTheme, 
    purchaseTheme, 
    isThemeUnlocked 
  } = useTheme();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Themes' },
    { id: 'vibrant', name: 'Vibrant' },
    { id: 'pastel', name: 'Pastel' },
    { id: 'dark', name: 'Dark' },
    { id: 'nature', name: 'Nature' },
    { id: 'gradient', name: 'Gradient' },
    { id: 'premium', name: 'Premium' }
  ];

  const filteredThemes = themes.filter(theme => {
    const matchesCategory = selectedCategory === 'all' || theme.category === selectedCategory;
    const matchesSearch = theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleThemeClick = (theme) => {
    if (isThemeUnlocked(theme.id)) {
      changeTheme(theme.id);
    } else {
      const success = purchaseTheme(theme.id);
      if (success) {
        changeTheme(theme.id);
      }
    }
  };

  return (
    <div className="themes-container">
      <div className="themes-header">
        <h1>
          <Palette className="icon" />
          Themes
        </h1>
        <p>Choose from our collection of beautiful themes to customize your experience</p>

      </div>

      {/* Search and Filter */}
      <div className="themes-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search themes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
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
      </div>

      {/* Themes Grid */}
      <div className="themes-grid">
        {filteredThemes.map((theme) => {
          const isUnlocked = isThemeUnlocked(theme.id);
          const isActive = currentTheme === theme.id;
          
          return (
            <motion.div
              key={theme.id}
              className={`theme-card ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`}
              onClick={() => handleThemeClick(theme)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="theme-preview"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.accent} 100%)`
                }}
              >
                {isActive && (
                  <div className="active-indicator">
                    <Check size={20} />
                  </div>
                )}
                {!isUnlocked && (
                  <div className="lock-indicator">
                    <Lock size={20} />
                  </div>
                )}
                {theme.category === 'premium' && (
                  <div className="premium-badge">
                    <Sparkles size={16} />
                  </div>
                )}
              </div>
              
              <div className="theme-info">
                <h3>{theme.name}</h3>
                <p>{theme.description}</p>
                <div className="theme-colors">
                  <span 
                    className="color-swatch" 
                    style={{ backgroundColor: theme.primary }}
                    title="Primary Color"
                  />
                  <span 
                    className="color-swatch" 
                    style={{ backgroundColor: theme.secondary }}
                    title="Secondary Color"
                  />
                  <span 
                    className="color-swatch" 
                    style={{ backgroundColor: theme.accent }}
                    title="Accent Color"
                  />
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredThemes.length === 0 && (
        <div className="no-themes">
          <Palette size={48} />
          <h3>No themes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Themes; 