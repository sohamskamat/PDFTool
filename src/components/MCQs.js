import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  Trophy, 
  Target,
  Filter,
  Search,
  BarChart3,
  Clock,
  Star
} from 'lucide-react';
import { allMCQs, mcqCategories, difficultyLevels } from '../data/mcqs';
import { useTheme } from '../contexts/ThemeContext';
import { useQuestions } from '../contexts/QuestionsContext';

const MCQs = ({ onCorrectAnswer }) => {
  const { themeData } = useTheme();
  const { incrementQuestions } = useQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Filter questions based on category, difficulty, and search
  const filteredQuestions = allMCQs.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerRunning && !showResults) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, showResults]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(answerIndex);
    setTotalAnswered(prev => prev + 1);
    
    // Increment questions answered counter
    incrementQuestions();
    
    if (answerIndex === currentQuestion.correct) {
      setScore(prev => prev + 1);
      onCorrectAnswer && onCorrectAnswer();
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsTimerRunning(false);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setTotalAnswered(0);
    setShowResults(false);
    setTimeSpent(0);
    setIsTimerRunning(true);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case 'easy': return <Star size={16} />;
      case 'medium': return <Target size={16} />;
      case 'hard': return <Trophy size={16} />;
      default: return <Star size={16} />;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const percentage = Math.round((score / totalAnswered) * 100);
    const isPerfect = score === totalAnswered;
    
    return (
      <div className="mcqs-page">
        <motion.div
          className="mcqs-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="result-container">
            <motion.div
              className="result-header"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {isPerfect ? (
                <Trophy size={60} className="trophy-icon" />
              ) : (
                <BarChart3 size={60} className="result-icon" />
              )}
              <h2>Quiz Complete!</h2>
            </motion.div>

            <motion.div
              className="score-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="score-circle">
                <div className="score-number">{percentage}%</div>
                <div className="score-total">{score}/{totalAnswered}</div>
              </div>
              <div className="score-text">
                {isPerfect ? 'Perfect Score!' : `You got ${score} out of ${totalAnswered} questions correct`}
              </div>
            </motion.div>

            <motion.div
              className="performance-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {isPerfect && (
                <div className="perfect-score">
                  <Trophy size={20} />
                  <span>Outstanding Performance!</span>
                </div>
              )}
              <p>Time taken: {formatTime(timeSpent)}</p>
              <p>Average time per question: {formatTime(Math.round(timeSpent / totalAnswered))}</p>
            </motion.div>

            <motion.button
              onClick={handleRetry}
              className="retry-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="mcqs-page">
        <div className="mcqs-container">
          <div className="no-questions">
            <BookOpen size={60} />
            <h2>No Questions Found</h2>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mcqs-page">
      <motion.div
        className="mcqs-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mcqs-header">
          <div className="header-content">
            <h1>Percentage MCQs</h1>
            <p>Test your knowledge with {filteredQuestions.length} questions</p>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <Target size={16} />
              <span>Question {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
            </div>
            <div className="stat-item">
              <CheckCircle size={16} />
              <span>Score: {score}/{totalAnswered}</span>
            </div>
            <div className="stat-item">
              <Clock size={16} />
              <span>{formatTime(timeSpent)}</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <label>Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {mcqCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Difficulty:</label>
              <select 
                value={selectedDifficulty} 
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficultyLevels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
          <div className="progress-text">
            {Math.round(((currentQuestionIndex + 1) / filteredQuestions.length) * 100)}%
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            className="question-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="question-header">
              <div className="question-number">Question {currentQuestionIndex + 1}</div>
              <div 
                className="difficulty-badge"
                style={{ color: getDifficultyColor(currentQuestion.difficulty) }}
              >
                {getDifficultyIcon(currentQuestion.difficulty)}
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </div>
            </div>

            <div className="question-text">{currentQuestion.question}</div>

            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-btn ${
                    selectedAnswer === index 
                      ? index === currentQuestion.correct 
                        ? 'correct' 
                        : 'incorrect'
                      : selectedAnswer !== null && index === currentQuestion.correct
                        ? 'correct'
                        : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                >
                  <div className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="option-text">{option}</div>
                  {selectedAnswer !== null && (
                    <div className="result-icon">
                      {index === currentQuestion.correct ? (
                        <CheckCircle size={20} className="correct-icon" />
                      ) : selectedAnswer === index ? (
                        <XCircle size={20} className="incorrect-icon" />
                      ) : null}
                    </div>
                  )}
                </motion.button>
              ))}
            </div>

            {showExplanation && (
              <motion.div
                className="explanation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4>Explanation:</h4>
                <p>{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="question-navigation">
          <motion.button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="nav-btn prev-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            Previous
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="nav-btn next-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MCQs; 