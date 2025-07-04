import React, { createContext, useContext, useState } from 'react';

const QuestionsContext = createContext();

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionsProvider');
  }
  return context;
};

const QuestionsProvider = ({ children }) => {
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Increment questions answered
  const incrementQuestions = () => {
    setQuestionsAnswered(prev => prev + 1);
  };

  // Reset questions answered (for new session)
  const resetQuestions = () => {
    setQuestionsAnswered(0);
  };

  const value = {
    questionsAnswered,
    incrementQuestions,
    resetQuestions
  };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider; 