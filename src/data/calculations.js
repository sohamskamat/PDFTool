export const calculations = [
  {
    id: 'percentage-change',
    name: 'Percentage Change',
    description: 'Calculate percentage increase or decrease between two values',
    category: 'basic',
    icon: 'TrendingUp',
    inputs: [
      { name: 'oldValue', label: 'Old Value', type: 'number', placeholder: 'Enter original value' },
      { name: 'newValue', label: 'New Value', type: 'number', placeholder: 'Enter new value' }
    ],
    formula: '((newValue - oldValue) / oldValue) × 100',
    calculate: (values) => {
      const { oldValue, newValue } = values;
      if (oldValue === 0) return { error: 'Old value cannot be zero' };
      const change = ((newValue - oldValue) / oldValue) * 100;
      return {
        result: Math.abs(change),
        type: change > 0 ? 'Increase' : 'Decrease',
        isIncrease: change > 0,
        oldValue,
        newValue
      };
    }
  },
  {
    id: 'percentage-to-decimal',
    name: 'Percentage to Decimal',
    description: 'Convert percentage to decimal format',
    category: 'conversion',
    icon: 'ArrowRight',
    inputs: [
      { name: 'percentage', label: 'Percentage', type: 'number', placeholder: 'Enter percentage' }
    ],
    formula: 'percentage ÷ 100',
    calculate: (values) => {
      const { percentage } = values;
      const decimal = percentage / 100;
      return {
        result: decimal,
        percentage,
        decimal
      };
    }
  },
  {
    id: 'decimal-to-percentage',
    name: 'Decimal to Percentage',
    description: 'Convert decimal to percentage format',
    category: 'conversion',
    icon: 'ArrowLeft',
    inputs: [
      { name: 'decimal', label: 'Decimal', type: 'number', placeholder: 'Enter decimal' }
    ],
    formula: 'decimal × 100',
    calculate: (values) => {
      const { decimal } = values;
      const percentage = decimal * 100;
      return {
        result: percentage,
        decimal,
        percentage
      };
    }
  },
  {
    id: 'percentage-of-number',
    name: 'Percentage of Number',
    description: 'Calculate what percentage one number is of another',
    category: 'basic',
    icon: 'Percent',
    inputs: [
      { name: 'part', label: 'Part', type: 'number', placeholder: 'Enter part value' },
      { name: 'whole', label: 'Whole', type: 'number', placeholder: 'Enter whole value' }
    ],
    formula: '(part ÷ whole) × 100',
    calculate: (values) => {
      const { part, whole } = values;
      if (whole === 0) return { error: 'Whole value cannot be zero' };
      const percentage = (part / whole) * 100;
      return {
        result: percentage,
        part,
        whole,
        percentage
      };
    }
  },
  {
    id: 'cgpa-calculator',
    name: 'CGPA Calculator',
    description: 'Calculate Cumulative Grade Point Average',
    category: 'academic',
    icon: 'GraduationCap',
    inputs: [
      { name: 'grades', label: 'Grades (comma separated)', type: 'text', placeholder: 'e.g., 3.5, 3.8, 4.0, 3.2' }
    ],
    formula: 'Sum of all grades ÷ Number of subjects',
    calculate: (values) => {
      const { grades } = values;
      const gradeArray = grades.split(',').map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
      if (gradeArray.length === 0) return { error: 'Please enter valid grades' };
      const cgpa = gradeArray.reduce((sum, grade) => sum + grade, 0) / gradeArray.length;
      return {
        result: cgpa,
        grades: gradeArray,
        cgpa,
        totalSubjects: gradeArray.length
      };
    }
  },
  {
    id: 'gpa-to-percentage',
    name: 'GPA to Percentage',
    description: 'Convert GPA to percentage (4.0 scale)',
    category: 'academic',
    icon: 'BookOpen',
    inputs: [
      { name: 'gpa', label: 'GPA (4.0 scale)', type: 'number', placeholder: 'Enter GPA', min: 0, max: 4, step: 0.01 }
    ],
    formula: 'GPA × 25',
    calculate: (values) => {
      const { gpa } = values;
      if (gpa < 0 || gpa > 4) return { error: 'GPA must be between 0 and 4' };
      const percentage = gpa * 25;
      return {
        result: percentage,
        gpa,
        percentage
      };
    }
  },
  {
    id: 'marks-to-percentage',
    name: 'Marks to Percentage',
    description: 'Convert marks to percentage',
    category: 'academic',
    icon: 'FileText',
    inputs: [
      { name: 'obtainedMarks', label: 'Obtained Marks', type: 'number', placeholder: 'Enter obtained marks' },
      { name: 'totalMarks', label: 'Total Marks', type: 'number', placeholder: 'Enter total marks' }
    ],
    formula: '(obtainedMarks ÷ totalMarks) × 100',
    calculate: (values) => {
      const { obtainedMarks, totalMarks } = values;
      if (totalMarks === 0) return { error: 'Total marks cannot be zero' };
      if (obtainedMarks > totalMarks) return { error: 'Obtained marks cannot exceed total marks' };
      const percentage = (obtainedMarks / totalMarks) * 100;
      return {
        result: percentage,
        obtainedMarks,
        totalMarks,
        percentage
      };
    }
  },
  {
    id: 'percentile-calculator',
    name: 'Percentile Calculator',
    description: 'Calculate percentile rank',
    category: 'statistics',
    icon: 'BarChart3',
    inputs: [
      { name: 'score', label: 'Your Score', type: 'number', placeholder: 'Enter your score' },
      { name: 'scores', label: 'All Scores (comma separated)', type: 'text', placeholder: 'e.g., 85, 90, 75, 95, 80' }
    ],
    formula: '(Number of scores below yours ÷ Total number of scores) × 100',
    calculate: (values) => {
      const { score, scores } = values;
      const scoreArray = scores.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s));
      if (scoreArray.length === 0) return { error: 'Please enter valid scores' };
      const scoresBelow = scoreArray.filter(s => s < score).length;
      const percentile = (scoresBelow / scoreArray.length) * 100;
      return {
        result: percentile,
        score,
        scores: scoreArray,
        percentile,
        scoresBelow,
        totalScores: scoreArray.length
      };
    }
  },
  {
    id: 'percentage-difference',
    name: 'Percentage Difference',
    description: 'Calculate percentage difference between two values',
    category: 'basic',
    icon: 'Minus',
    inputs: [
      { name: 'value1', label: 'Value 1', type: 'number', placeholder: 'Enter first value' },
      { name: 'value2', label: 'Value 2', type: 'number', placeholder: 'Enter second value' }
    ],
    formula: '|value1 - value2| ÷ ((value1 + value2) ÷ 2) × 100',
    calculate: (values) => {
      const { value1, value2 } = values;
      if (value1 === 0 && value2 === 0) return { error: 'Both values cannot be zero' };
      const difference = Math.abs(value1 - value2);
      const average = (value1 + value2) / 2;
      const percentageDiff = (difference / average) * 100;
      return {
        result: percentageDiff,
        value1,
        value2,
        difference,
        average,
        percentageDiff
      };
    }
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    description: 'Calculate compound interest with percentage rate',
    category: 'finance',
    icon: 'DollarSign',
    inputs: [
      { name: 'principal', label: 'Principal Amount', type: 'number', placeholder: 'Enter principal amount' },
      { name: 'rate', label: 'Interest Rate (%)', type: 'number', placeholder: 'Enter annual interest rate' },
      { name: 'time', label: 'Time (years)', type: 'number', placeholder: 'Enter time period' },
      { name: 'compounds', label: 'Compounds per year', type: 'number', placeholder: 'Enter compounds per year', defaultValue: 1 }
    ],
    formula: 'P(1 + r/n)^(nt) - P',
    calculate: (values) => {
      const { principal, rate, time, compounds } = values;
      const r = rate / 100;
      const amount = principal * Math.pow(1 + r / compounds, compounds * time);
      const interest = amount - principal;
      return {
        result: interest,
        principal,
        rate,
        time,
        compounds,
        amount,
        interest
      };
    }
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate discount amount and final price',
    category: 'finance',
    icon: 'Tag',
    inputs: [
      { name: 'originalPrice', label: 'Original Price', type: 'number', placeholder: 'Enter original price' },
      { name: 'discountPercent', label: 'Discount (%)', type: 'number', placeholder: 'Enter discount percentage' }
    ],
    formula: 'Original Price - (Original Price × Discount %)',
    calculate: (values) => {
      const { originalPrice, discountPercent } = values;
      const discountAmount = (originalPrice * discountPercent) / 100;
      const finalPrice = originalPrice - discountAmount;
      return {
        result: finalPrice,
        originalPrice,
        discountPercent,
        discountAmount,
        finalPrice
      };
    }
  },
  {
    id: 'markup-calculator',
    name: 'Markup Calculator',
    description: 'Calculate markup percentage and selling price',
    category: 'finance',
    icon: 'TrendingUp',
    inputs: [
      { name: 'cost', label: 'Cost Price', type: 'number', placeholder: 'Enter cost price' },
      { name: 'markupPercent', label: 'Markup (%)', type: 'number', placeholder: 'Enter markup percentage' }
    ],
    formula: 'Cost Price + (Cost Price × Markup %)',
    calculate: (values) => {
      const { cost, markupPercent } = values;
      const markupAmount = (cost * markupPercent) / 100;
      const sellingPrice = cost + markupAmount;
      return {
        result: sellingPrice,
        cost,
        markupPercent,
        markupAmount,
        sellingPrice
      };
    }
  },
  {
    id: 'profit-loss',
    name: 'Profit/Loss Calculator',
    description: 'Calculate profit or loss percentage',
    category: 'finance',
    icon: 'TrendingUp',
    inputs: [
      { name: 'costPrice', label: 'Cost Price', type: 'number', placeholder: 'Enter cost price' },
      { name: 'sellingPrice', label: 'Selling Price', type: 'number', placeholder: 'Enter selling price' }
    ],
    formula: '((Selling Price - Cost Price) ÷ Cost Price) × 100',
    calculate: (values) => {
      const { costPrice, sellingPrice } = values;
      if (costPrice === 0) return { error: 'Cost price cannot be zero' };
      const difference = sellingPrice - costPrice;
      const percentage = (difference / costPrice) * 100;
      return {
        result: Math.abs(percentage),
        costPrice,
        sellingPrice,
        difference,
        percentage,
        type: difference > 0 ? 'Profit' : 'Loss',
        isProfit: difference > 0
      };
    }
  },
  {
    id: 'percentage-error',
    name: 'Percentage Error',
    description: 'Calculate percentage error between actual and estimated values',
    category: 'statistics',
    icon: 'AlertTriangle',
    inputs: [
      { name: 'actual', label: 'Actual Value', type: 'number', placeholder: 'Enter actual value' },
      { name: 'estimated', label: 'Estimated Value', type: 'number', placeholder: 'Enter estimated value' }
    ],
    formula: '|Actual - Estimated| ÷ Actual × 100',
    calculate: (values) => {
      const { actual, estimated } = values;
      if (actual === 0) return { error: 'Actual value cannot be zero' };
      const error = Math.abs(actual - estimated);
      const percentageError = (error / actual) * 100;
      return {
        result: percentageError,
        actual,
        estimated,
        error,
        percentageError
      };
    }
  },
  {
    id: 'percentage-completion',
    name: 'Percentage Completion',
    description: 'Calculate percentage of task completion',
    category: 'basic',
    icon: 'CheckCircle',
    inputs: [
      { name: 'completed', label: 'Completed Tasks', type: 'number', placeholder: 'Enter completed tasks' },
      { name: 'total', label: 'Total Tasks', type: 'number', placeholder: 'Enter total tasks' }
    ],
    formula: '(Completed Tasks ÷ Total Tasks) × 100',
    calculate: (values) => {
      const { completed, total } = values;
      if (total === 0) return { error: 'Total tasks cannot be zero' };
      if (completed > total) return { error: 'Completed tasks cannot exceed total tasks' };
      const percentage = (completed / total) * 100;
      return {
        result: percentage,
        completed,
        total,
        percentage,
        remaining: total - completed
      };
    }
  },
  {
    id: 'grade-calculator',
    name: 'Grade Calculator',
    description: 'Calculate final grade based on weighted percentages',
    category: 'academic',
    icon: 'Award',
    inputs: [
      { name: 'assignments', label: 'Assignments Score (%)', type: 'number', placeholder: 'Enter assignments score' },
      { name: 'assignmentsWeight', label: 'Assignments Weight (%)', type: 'number', placeholder: 'Enter assignments weight', defaultValue: 30 },
      { name: 'midterm', label: 'Midterm Score (%)', type: 'number', placeholder: 'Enter midterm score' },
      { name: 'midtermWeight', label: 'Midterm Weight (%)', type: 'number', placeholder: 'Enter midterm weight', defaultValue: 30 },
      { name: 'final', label: 'Final Score (%)', type: 'number', placeholder: 'Enter final score' },
      { name: 'finalWeight', label: 'Final Weight (%)', type: 'number', placeholder: 'Enter final weight', defaultValue: 40 }
    ],
    formula: 'Sum of (Score × Weight) for all components',
    calculate: (values) => {
      const { assignments, assignmentsWeight, midterm, midtermWeight, final, finalWeight } = values;
      const totalWeight = assignmentsWeight + midtermWeight + finalWeight;
      if (totalWeight !== 100) return { error: 'Weights must sum to 100%' };
      
      const finalGrade = (assignments * assignmentsWeight + midterm * midtermWeight + final * finalWeight) / 100;
      
      let letterGrade = '';
      if (finalGrade >= 90) letterGrade = 'A';
      else if (finalGrade >= 80) letterGrade = 'B';
      else if (finalGrade >= 70) letterGrade = 'C';
      else if (finalGrade >= 60) letterGrade = 'D';
      else letterGrade = 'F';
      
      return {
        result: finalGrade,
        assignments,
        assignmentsWeight,
        midterm,
        midtermWeight,
        final,
        finalWeight,
        finalGrade,
        letterGrade
      };
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Calculations', icon: 'Grid' },
  { id: 'basic', name: 'Basic', icon: 'Calculator' },
  { id: 'conversion', name: 'Conversion', icon: 'ArrowRight' },
  { id: 'academic', name: 'Academic', icon: 'GraduationCap' },
  { id: 'finance', name: 'Finance', icon: 'DollarSign' },
  { id: 'statistics', name: 'Statistics', icon: 'BarChart3' }
]; 