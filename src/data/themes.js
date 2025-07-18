// Rich theme collection with diverse color palettes
export const themes = [
  // Free themes
  {
    id: 'default',
    name: 'Ocean Blue',
    description: 'Classic blue theme with calming ocean vibes',
    category: 'vibrant',
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb',
    lightBackground: '#f8fafc',
    darkBackground: '#0f172a',
    lightText: '#1e293b',
    darkText: '#f1f5f9',
    lightCard: '#ffffff',
    darkCard: '#1e293b',
    cost: 0,
    unlocked: true
  },

  // Vibrant Themes
  {
    id: 'sunset',
    name: 'Sunset Orange',
    description: 'Warm sunset colors for a cozy feel',
    category: 'vibrant',
    primary: '#ff6b6b',
    secondary: '#ee5a24',
    accent: '#ffa726',
    lightBackground: '#fff5f5',
    darkBackground: '#1a0f0f',
    lightText: '#2d1b1b',
    darkText: '#fef2f2',
    lightCard: '#ffffff',
    darkCard: '#2d1b1b',
    cost: 100,
    unlocked: true
  },
  {
    id: 'neon',
    name: 'Neon Cyber',
    description: 'Bold neon colors for a futuristic look',
    category: 'vibrant',
    primary: '#00ff88',
    secondary: '#ff0080',
    accent: '#00ffff',
    lightBackground: '#0a0a0a',
    darkBackground: '#000000',
    lightText: '#ffffff',
    darkText: '#ffffff',
    lightCard: '#1a1a1a',
    darkCard: '#1a1a1a',
    cost: 150,
    unlocked: true
  },
  {
    id: 'electric',
    name: 'Electric Purple',
    description: 'High-energy purple with electric vibes',
    category: 'vibrant',
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a855f7',
    lightBackground: '#faf5ff',
    darkBackground: '#1a0f2e',
    lightText: '#2d1b4e',
    darkText: '#faf5ff',
    lightCard: '#ffffff',
    darkCard: '#2d1b4e',
    cost: 200,
    unlocked: true
  },

  // Nature Themes
  {
    id: 'forest',
    name: 'Forest Green',
    description: 'Natural green theme inspired by forests',
    category: 'nature',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    lightBackground: '#f0fdf4',
    darkBackground: '#0f1f0f',
    lightText: '#1f2e1f',
    darkText: '#f0fdf4',
    lightCard: '#ffffff',
    darkCard: '#1f2e1f',
    cost: 250,
    unlocked: true
  },
  {
    id: 'autumn',
    name: 'Autumn Leaves',
    description: 'Warm autumn colors with earthy tones',
    category: 'nature',
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#fbbf24',
    lightBackground: '#fffbeb',
    darkBackground: '#1a0f0a',
    lightText: '#2d1b0f',
    darkText: '#fffbeb',
    lightCard: '#ffffff',
    darkCard: '#2d1b0f',
    cost: 300,
    unlocked: true
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    description: 'Deep blue ocean theme with marine vibes',
    category: 'nature',
    primary: '#0ea5e9',
    secondary: '#0284c7',
    accent: '#38bdf8',
    lightBackground: '#f0f9ff',
    darkBackground: '#0a0f1a',
    lightText: '#1e293b',
    darkText: '#f0f9ff',
    lightCard: '#ffffff',
    darkCard: '#1e293b',
    cost: 350,
    unlocked: true
  },

  // Pastel Themes
  {
    id: 'lavender',
    name: 'Lavender Dream',
    description: 'Soft purple theme for peaceful vibes',
    category: 'pastel',
    primary: '#c4b5fd',
    secondary: '#a78bfa',
    accent: '#ddd6fe',
    lightBackground: '#faf5ff',
    darkBackground: '#1a0f2e',
    lightText: '#2d1b4e',
    darkText: '#faf5ff',
    lightCard: '#ffffff',
    darkCard: '#2d1b4e',
    cost: 400,
    unlocked: true
  },
  {
    id: 'mint',
    name: 'Mint Fresh',
    description: 'Cool mint green for a refreshing feel',
    category: 'pastel',
    primary: '#a7f3d0',
    secondary: '#6ee7b7',
    accent: '#d1fae5',
    lightBackground: '#ecfdf5',
    darkBackground: '#0f1f0f',
    lightText: '#1f2e1f',
    darkText: '#ecfdf5',
    lightCard: '#ffffff',
    darkCard: '#1f2e1f',
    cost: 450,
    unlocked: true
  },
  {
    id: 'peach',
    name: 'Peach Blossom',
    description: 'Soft peach theme with gentle warmth',
    category: 'pastel',
    primary: '#fed7aa',
    secondary: '#fdba74',
    accent: '#ffedd5',
    lightBackground: '#fff7ed',
    darkBackground: '#1f0f0a',
    lightText: '#2d1b0f',
    darkText: '#fff7ed',
    lightCard: '#ffffff',
    darkCard: '#2d1b0f',
    cost: 500,
    unlocked: true
  },

  // Dark Themes
  {
    id: 'midnight',
    name: 'Midnight Blue',
    description: 'Deep blue theme for night owls',
    category: 'dark',
    primary: '#1e40af',
    secondary: '#1d4ed8',
    accent: '#3b82f6',
    lightBackground: '#eff6ff',
    darkBackground: '#0a0f1a',
    lightText: '#1e293b',
    darkText: '#eff6ff',
    lightCard: '#ffffff',
    darkCard: '#1e293b',
    cost: 550,
    unlocked: true
  },
  {
    id: 'obsidian',
    name: 'Obsidian Black',
    description: 'Pure black theme for minimalists',
    category: 'dark',
    primary: '#374151',
    secondary: '#1f2937',
    accent: '#6b7280',
    lightBackground: '#f9fafb',
    darkBackground: '#000000',
    lightText: '#111827',
    darkText: '#f9fafb',
    lightCard: '#ffffff',
    darkCard: '#111827',
    cost: 600,
    unlocked: true
  },
  {
    id: 'charcoal',
    name: 'Charcoal Gray',
    description: 'Sophisticated gray theme',
    category: 'dark',
    primary: '#6b7280',
    secondary: '#4b5563',
    accent: '#9ca3af',
    lightBackground: '#f9fafb',
    darkBackground: '#111827',
    lightText: '#374151',
    darkText: '#f9fafb',
    lightCard: '#ffffff',
    darkCard: '#374151',
    cost: 650,
    unlocked: true
  },

  // Gradient Themes
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    description: 'Northern lights inspired gradient',
    category: 'gradient',
    primary: '#10b981',
    secondary: '#06b6d4',
    accent: '#8b5cf6',
    lightBackground: '#f0fdf4',
    darkBackground: '#0f1f0f',
    lightText: '#1f2e1f',
    darkText: '#f0fdf4',
    lightCard: '#ffffff',
    darkCard: '#1f2e1f',
    cost: 700,
    unlocked: true
  },
  {
    id: 'sunset_gradient',
    name: 'Sunset Gradient',
    description: 'Beautiful sunset gradient colors',
    category: 'gradient',
    primary: '#ff6b6b',
    secondary: '#ffa726',
    accent: '#ffd54f',
    lightBackground: '#fff5f5',
    darkBackground: '#1a0f0f',
    lightText: '#2d1b1b',
    darkText: '#fef2f2',
    lightCard: '#ffffff',
    darkCard: '#2d1b1b',
    cost: 750,
    unlocked: true
  },
  {
    id: 'ocean_gradient',
    name: 'Ocean Gradient',
    description: 'Deep ocean to sky gradient',
    category: 'gradient',
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#22d3ee',
    lightBackground: '#f0f9ff',
    darkBackground: '#0a0f1a',
    lightText: '#1e293b',
    darkText: '#f0f9ff',
    lightCard: '#ffffff',
    darkCard: '#1e293b',
    cost: 800,
    unlocked: true
  },
  {
    id: 'cosmic_gradient',
    name: 'Cosmic Purple',
    description: 'Deep space purple gradient',
    category: 'gradient',
    primary: '#7c3aed',
    secondary: '#a855f7',
    accent: '#c084fc',
    lightBackground: '#faf5ff',
    darkBackground: '#1a0f2e',
    lightText: '#2d1b4e',
    darkText: '#faf5ff',
    lightCard: '#ffffff',
    darkCard: '#2d1b4e',
    cost: 850,
    unlocked: true
  },
  {
    id: 'fire_gradient',
    name: 'Fire Gradient',
    description: 'Hot fire orange to red gradient',
    category: 'gradient',
    primary: '#f97316',
    secondary: '#ef4444',
    accent: '#dc2626',
    lightBackground: '#fff7ed',
    darkBackground: '#1f0f0a',
    lightText: '#2d1b0f',
    darkText: '#fff7ed',
    lightCard: '#ffffff',
    darkCard: '#2d1b0f',
    cost: 900,
    unlocked: true
  },
  {
    id: 'forest_gradient',
    name: 'Forest Gradient',
    description: 'Lush forest green gradient',
    category: 'gradient',
    primary: '#059669',
    secondary: '#10b981',
    accent: '#34d399',
    lightBackground: '#ecfdf5',
    darkBackground: '#0f1f0f',
    lightText: '#1f2e1f',
    darkText: '#ecfdf5',
    lightCard: '#ffffff',
    darkCard: '#1f2e1f',
    cost: 950,
    unlocked: true
  },
  {
    id: 'neon_gradient',
    name: 'Neon Gradient',
    description: 'Bright neon cyber gradient',
    category: 'gradient',
    primary: '#00ff88',
    secondary: '#00ffff',
    accent: '#ff0080',
    lightBackground: '#0a0a0a',
    darkBackground: '#000000',
    lightText: '#ffffff',
    darkText: '#ffffff',
    lightCard: '#1a1a1a',
    darkCard: '#1a1a1a',
    cost: 1000,
    unlocked: true
  },
  {
    id: 'golden_gradient',
    name: 'Golden Gradient',
    description: 'Luxurious golden gradient',
    category: 'gradient',
    primary: '#fbbf24',
    secondary: '#f59e0b',
    accent: '#d97706',
    lightBackground: '#fffbeb',
    darkBackground: '#1a0f0a',
    lightText: '#2d1b0f',
    darkText: '#fffbeb',
    lightCard: '#ffffff',
    darkCard: '#2d1b0f',
    cost: 1050,
    unlocked: true
  },
  {
    id: 'rose_gradient',
    name: 'Rose Gradient',
    description: 'Elegant rose pink gradient',
    category: 'gradient',
    primary: '#ec4899',
    secondary: '#f472b6',
    accent: '#f9a8d4',
    lightBackground: '#fdf2f8',
    darkBackground: '#1a0f1a',
    lightText: '#2d1b2d',
    darkText: '#fdf2f8',
    lightCard: '#ffffff',
    darkCard: '#2d1b2d',
    cost: 1100,
    unlocked: true
  },

  // Premium Themes
  {
    id: 'rose_gold',
    name: 'Rose Gold',
    description: 'Elegant rose gold theme',
    category: 'premium',
    primary: '#e11d48',
    secondary: '#be123c',
    accent: '#f43f5e',
    lightBackground: '#fff1f2',
    darkBackground: '#1a0f0f',
    lightText: '#2d1b1b',
    darkText: '#fff1f2',
    lightCard: '#ffffff',
    darkCard: '#2d1b1b',
    cost: 900,
    unlocked: true
  },
  {
    id: 'emerald',
    name: 'Emerald City',
    description: 'Rich emerald green theme',
    category: 'premium',
    primary: '#059669',
    secondary: '#047857',
    accent: '#10b981',
    lightBackground: '#ecfdf5',
    darkBackground: '#0f1f0f',
    lightText: '#1f2e1f',
    darkText: '#ecfdf5',
    lightCard: '#ffffff',
    darkCard: '#1f2e1f',
    cost: 1000,
    unlocked: true
  },
  {
    id: 'amethyst',
    name: 'Amethyst Purple',
    description: 'Royal purple amethyst theme',
    category: 'premium',
    primary: '#7c3aed',
    secondary: '#6d28d9',
    accent: '#8b5cf6',
    lightBackground: '#faf5ff',
    darkBackground: '#1a0f2e',
    lightText: '#2d1b4e',
    darkText: '#faf5ff',
    lightCard: '#ffffff',
    darkCard: '#2d1b4e',
    cost: 1100,
    unlocked: true
  },
  {
    id: 'golden',
    name: 'Golden Hour',
    description: 'Warm golden theme for sunset vibes',
    category: 'premium',
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#fbbf24',
    lightBackground: '#fffbeb',
    darkBackground: '#1a0f0a',
    lightText: '#2d1b0f',
    darkText: '#fffbeb',
    lightCard: '#ffffff',
    darkCard: '#2d1b0f',
    cost: 1200,
    unlocked: true
  },
  {
    id: 'sapphire',
    name: 'Sapphire Blue',
    description: 'Deep sapphire blue theme',
    category: 'premium',
    primary: '#1e40af',
    secondary: '#1d4ed8',
    accent: '#3b82f6',
    lightBackground: '#eff6ff',
    darkBackground: '#0a0f1a',
    lightText: '#1e293b',
    darkText: '#eff6ff',
    lightCard: '#ffffff',
    darkCard: '#1e293b',
    cost: 1300,
    unlocked: true
  },
  {
    id: 'ruby',
    name: 'Ruby Red',
    description: 'Bold ruby red theme',
    category: 'premium',
    primary: '#dc2626',
    secondary: '#b91c1c',
    accent: '#ef4444',
    lightBackground: '#fef2f2',
    darkBackground: '#1a0f0f',
    lightText: '#2d1b1b',
    darkText: '#fef2f2',
    lightCard: '#ffffff',
    darkCard: '#2d1b1b',
    cost: 1400,
    unlocked: true
  }
]; 