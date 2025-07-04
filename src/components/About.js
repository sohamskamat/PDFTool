import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Palette, BookOpen, Calculator, Trophy, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Multiple Calculator Modes',
      description: 'Basic, Exam, Salary, and Weight percentage calculations with specialized inputs and units.'
    },
    {
      icon: BookOpen,
      title: 'Interactive MCQs',
      description: 'Test your knowledge with percentage-related questions and earn coins for correct answers.'
    },
    {
      icon: Palette,
      title: '1000+ Beautiful Themes',
      description: 'Unlock and customize your experience with a vast collection of color themes.'
    },
    {
      icon: Trophy,
      title: 'Coin Reward System',
      description: 'Earn coins by answering MCQs correctly and use them to unlock new themes.'
    },
    {
      icon: Star,
      title: 'Educational Content',
      description: 'Learn about the history of percentages and their real-life applications.'
    },
    {
      icon: Code,
      title: 'Modern Technology',
      description: 'Built with React, Framer Motion, and modern web technologies for the best experience.'
    }
  ];

  const stats = [
    { label: 'Calculator Modes', value: '4' },
    { label: 'Available Themes', value: '1000+' },
    { label: 'MCQ Questions', value: '10' },
    { label: 'Real-Life Applications', value: '6' }
  ];

  return (
    <div className="about-page">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="about-header">
          <h1>About Percentage Pro</h1>
          <p>Your ultimate companion for percentage calculations and learning</p>
        </header>

        <section className="mission-section">
          <motion.div
            className="mission-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>About the Developer</h2>
            <p>
              Hi there! 👋
            </p>
            <p>
              I'm a solo developer building helpful tools like percentage calculators, smart quizzes, and minimal distraction-free utilities — all designed to save you time and effort.
            </p>
            <p>
              If this project helped you in any way, consider buying me a coffee ☕ — it supports free access for everyone and helps keep the site fast and light.
            </p>
            <p>
              Your support truly matters. Thank you! ❤️
            </p>
            <motion.a
              href="https://coff.ee/myselfsk"
              target="_blank"
              rel="noopener noreferrer"
              className="coffee-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ☕ Buy Me a Coffee
            </motion.a>
          </motion.div>
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="stats-section">
          <h2>App Statistics</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="technology-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <motion.div
              className="tech-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Frontend</h3>
              <ul>
                <li>React 18</li>
                <li>React Router DOM</li>
                <li>Framer Motion</li>
                <li>Lucide React Icons</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="tech-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Styling</h3>
              <ul>
                <li>CSS3 with Custom Properties</li>
                <li>Responsive Design</li>
                <li>Dark/Light Mode Support</li>
                <li>Smooth Animations</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="tech-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3>Features</h3>
              <ul>
                <li>Local Storage</li>
                <li>SEO Optimization</li>
                <li>AdSense Integration</li>
                <li>Google Analytics</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="credits-section">
          <h2>Credits & Acknowledgments</h2>
          <div className="credits-content">
            <motion.div
              className="credits-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Development</h3>
              <p>Built with passion and dedication to create the best percentage calculator experience.</p>
            </motion.div>
            
            <motion.div
              className="credits-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Icons & Design</h3>
              <p>Icons provided by Lucide React. Design inspired by modern web applications and user experience best practices.</p>
            </motion.div>
            
            <motion.div
              className="credits-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3>Content</h3>
              <p>Educational content and historical information compiled from reliable mathematical and historical sources.</p>
            </motion.div>
          </div>
        </section>

        <footer className="about-footer">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>
              Made with <Heart size={16} className="heart-icon" /> for the love of mathematics and learning.
            </p>
            <p className="version">Version 2.0.0</p>
          </motion.div>
        </footer>
      </motion.div>
    </div>
  );
};

export default About; 