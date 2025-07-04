import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../data/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [unlockedThemes, setUnlockedThemes] = useState(themes.map(theme => theme.id));

  // Apply theme to CSS variables
  const applyTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--light-background', theme.lightBackground);
    root.style.setProperty('--dark-background', theme.darkBackground);
    root.style.setProperty('--light-text', theme.lightText);
    root.style.setProperty('--dark-text', theme.darkText);
    root.style.setProperty('--light-card', theme.lightCard);
    root.style.setProperty('--dark-card', theme.darkCard);
    
    // Apply gradient backgrounds
    root.style.setProperty('--primary-gradient', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.accent} 100%)`);
    root.style.setProperty('--secondary-gradient', `linear-gradient(45deg, ${theme.secondary} 0%, ${theme.accent} 100%)`);
    root.style.setProperty('--accent-gradient', `linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%)`);
  };

  // Purchase theme (now free)
  const purchaseTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme || theme.unlocked) return false;
    
    setUnlockedThemes(prev => [...prev, themeId]);
    return true;
  };

  // Check if theme is unlocked
  const isThemeUnlocked = (themeId) => {
    return unlockedThemes.includes(themeId);
  };

  // Change theme
  const changeTheme = (themeId) => {
    if (!isThemeUnlocked(themeId)) return false;
    setCurrentTheme(themeId);
    applyTheme(themeId);
    return true;
  };

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const value = {
    currentTheme,
    changeTheme,
    unlockedThemes,
    purchaseTheme,
    isThemeUnlocked,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 