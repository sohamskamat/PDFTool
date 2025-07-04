import percentageMCQs from './percentage_mcqs_5000.json';

// Convert JSON questions to match our format
const convertJSONQuestions = (jsonQuestions) => {
  return jsonQuestions.map((q, index) => {
    // Shuffle the options to randomize the correct answer position
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Find the new position of the correct answer after shuffling
    const correctIndex = shuffledOptions.indexOf(q.answer);
    
    return {
      id: `json_${q.id}`,
      question: q.question,
      options: shuffledOptions,
      correct: correctIndex,
      explanation: `The correct answer is ${q.answer}. This is calculated using percentage formulas.`,
      category: "percentage_calculations",
      difficulty: "medium"
    };
  });
};

// Converted questions from JSON file
const jsonQuestions = convertJSONQuestions(percentageMCQs);

// Function to shuffle options for original MCQs
const shuffleOriginalMCQs = (mcqs) => {
  return mcqs.map(mcq => {
    const shuffledOptions = [...mcq.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Find the new position of the correct answer after shuffling
    const correctIndex = shuffledOptions.indexOf(mcq.options[mcq.correct]);
    
    return {
      ...mcq,
      options: shuffledOptions,
      correct: correctIndex
    };
  });
};

// Original questions
const originalMCQs = [
  // Basic Percentage Concepts
  {
    id: 1,
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    correct: 1,
    explanation: "25% of 80 = (25/100) × 80 = 0.25 × 80 = 20",
    category: "basic",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "If 15% of a number is 45, what is the number?",
    options: ["200", "300", "250", "350"],
    correct: 1,
    explanation: "Let the number be x. Then 15% of x = 45. So, (15/100) × x = 45. Therefore, x = 45 × (100/15) = 300",
    category: "basic",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "What percentage is 18 out of 60?",
    options: ["25%", "30%", "35%", "40%"],
    correct: 1,
    explanation: "Percentage = (18/60) × 100 = 0.3 × 100 = 30%",
    category: "basic",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "If a price increases from $50 to $65, what is the percentage increase?",
    options: ["25%", "30%", "35%", "40%"],
    correct: 1,
    explanation: "Increase = $65 - $50 = $15. Percentage increase = (15/50) × 100 = 30%",
    category: "basic",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What is 12.5% as a decimal?",
    options: ["0.125", "0.0125", "1.25", "12.5"],
    correct: 0,
    explanation: "12.5% = 12.5/100 = 0.125",
    category: "basic",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "If 40% of students are girls and there are 250 students, how many are boys?",
    options: ["100", "150", "200", "250"],
    correct: 1,
    explanation: "Girls = 40% of 250 = 100. Boys = 250 - 100 = 150",
    category: "basic",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "What is 0.08 as a percentage?",
    options: ["0.8%", "8%", "80%", "800%"],
    correct: 1,
    explanation: "0.08 = 0.08 × 100 = 8%",
    category: "basic",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "If a discount of 20% reduces the price to $80, what was the original price?",
    options: ["$90", "$100", "$110", "$120"],
    correct: 1,
    explanation: "Let original price be x. After 20% discount: 0.8x = $80. So x = $80/0.8 = $100",
    category: "basic",
    difficulty: "hard"
  },
  {
    id: 9,
    question: "What is 150% of 40?",
    options: ["50", "60", "70", "80"],
    correct: 1,
    explanation: "150% of 40 = (150/100) × 40 = 1.5 × 40 = 60",
    category: "basic",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "If 25% of a number is 75, what is 50% of the same number?",
    options: ["100", "125", "150", "175"],
    correct: 2,
    explanation: "Let the number be x. 25% of x = 75, so x = 300. 50% of 300 = 150",
    category: "basic",
    difficulty: "medium"
  },
  // Percentage Change
  {
    id: 11,
    question: "A population increases from 1000 to 1200. What is the percentage increase?",
    options: ["15%", "20%", "25%", "30%"],
    correct: 1,
    explanation: "Increase = 1200 - 1000 = 200. Percentage increase = (200/1000) × 100 = 20%",
    category: "change",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "If a stock price falls from $100 to $75, what is the percentage decrease?",
    options: ["15%", "20%", "25%", "30%"],
    correct: 2,
    explanation: "Decrease = $100 - $75 = $25. Percentage decrease = (25/100) × 100 = 25%",
    category: "change",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "A company's profit increased by 15% this year. If last year's profit was $200,000, what is this year's profit?",
    options: ["$215,000", "$230,000", "$245,000", "$260,000"],
    correct: 1,
    explanation: "Increase = 15% of $200,000 = $30,000. This year's profit = $200,000 + $30,000 = $230,000",
    category: "change",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "If a temperature drops from 80°F to 60°F, what is the percentage decrease?",
    options: ["20%", "25%", "30%", "35%"],
    correct: 1,
    explanation: "Decrease = 80°F - 60°F = 20°F. Percentage decrease = (20/80) × 100 = 25%",
    category: "change",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "A car's fuel efficiency improved from 25 mpg to 30 mpg. What is the percentage improvement?",
    options: ["15%", "20%", "25%", "30%"],
    correct: 1,
    explanation: "Improvement = 30 - 25 = 5 mpg. Percentage improvement = (5/25) × 100 = 20%",
    category: "change",
    difficulty: "medium"
  },
  // Academic/Grades
  {
    id: 16,
    question: "If a student scored 85 out of 100, what percentage did they get?",
    options: ["80%", "85%", "90%", "95%"],
    correct: 1,
    explanation: "Percentage = (85/100) × 100 = 85%",
    category: "academic",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "A GPA of 3.6 on a 4.0 scale is equivalent to what percentage?",
    options: ["85%", "88%", "90%", "92%"],
    correct: 2,
    explanation: "GPA to percentage: 3.6 × 25 = 90%",
    category: "academic",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "If 75% of students passed an exam and there were 200 students, how many failed?",
    options: ["25", "50", "75", "100"],
    correct: 1,
    explanation: "Passed = 75% of 200 = 150. Failed = 200 - 150 = 50",
    category: "academic",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "A student needs 60% to pass. If the total marks are 500, what is the minimum score needed?",
    options: ["250", "300", "350", "400"],
    correct: 1,
    explanation: "Minimum score = 60% of 500 = (60/100) × 500 = 300",
    category: "academic",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "If a class has 80% attendance and there are 30 students, how many are present?",
    options: ["20", "24", "26", "28"],
    correct: 1,
    explanation: "Present students = 80% of 30 = (80/100) × 30 = 24",
    category: "academic",
    difficulty: "easy"
  },
  // Finance/Business
  {
    id: 21,
    question: "If a product costs $50 and is sold for $75, what is the profit percentage?",
    options: ["40%", "45%", "50%", "55%"],
    correct: 2,
    explanation: "Profit = $75 - $50 = $25. Profit percentage = (25/50) × 100 = 50%",
    category: "finance",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "A 15% discount on a $200 item saves how much money?",
    options: ["$25", "$30", "$35", "$40"],
    correct: 1,
    explanation: "Discount = 15% of $200 = (15/100) × $200 = $30",
    category: "finance",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "If a company's revenue increased by 25% from $1,000,000 to $1,250,000, what was the original revenue?",
    options: ["$800,000", "$1,000,000", "$1,200,000", "$1,500,000"],
    correct: 1,
    explanation: "Let original revenue be x. 1.25x = $1,250,000. So x = $1,250,000/1.25 = $1,000,000",
    category: "finance",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "A 20% tax on a $150 purchase adds how much to the total?",
    options: ["$25", "$30", "$35", "$40"],
    correct: 1,
    explanation: "Tax = 20% of $150 = (20/100) × $150 = $30",
    category: "finance",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "If an investment grows by 8% annually, what will $1,000 be worth after 2 years?",
    options: ["$1,080", "$1,160", "$1,166.40", "$1,200"],
    correct: 2,
    explanation: "Year 1: $1,000 × 1.08 = $1,080. Year 2: $1,080 × 1.08 = $1,166.40",
    category: "finance",
    difficulty: "hard"
  }
];

// Fisher-Yates shuffle algorithm for complete randomization
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Shuffle original MCQs options
const shuffledOriginalMCQs = shuffleOriginalMCQs(originalMCQs);

// Combine all questions and shuffle them completely
const allMCQs = shuffleArray([...shuffledOriginalMCQs, ...jsonQuestions]);

// Export the shuffled questions
export { allMCQs };

// Categories for filtering
export const mcqCategories = [
  { id: 'all', name: 'All Categories', icon: 'Grid' },
  { id: 'basic', name: 'Basic Concepts', icon: 'Calculator' },
  { id: 'change', name: 'Percentage Change', icon: 'TrendingUp' },
  { id: 'academic', name: 'Academic/Grades', icon: 'GraduationCap' },
  { id: 'finance', name: 'Finance/Business', icon: 'DollarSign' },
  { id: 'percentage_calculations', name: 'Percentage Calculations', icon: 'Percent' }
];

// Difficulty levels
export const difficultyLevels = [
  { id: 'all', name: 'All Difficulties' },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' }
];
