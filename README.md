# Percentage Increase/Decrease Calculator

A responsive React web application for calculating percentage changes between two values. Features a modern, mobile-friendly design with AdSense integration.

## Features

- ✅ **Simple & Intuitive UI**: Clean interface with two input fields
- ✅ **Real-time Calculation**: Instant percentage change results
- ✅ **Responsive Design**: Works perfectly on mobile and desktop
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **AdSense Ready**: Pre-configured ad slots for monetization
- ✅ **Fast Loading**: Optimized for performance
- ✅ **Error Handling**: Validates inputs and shows helpful error messages

## Live Demo

[View Live Demo](https://percentage-calculator.web.app)

## Screenshots

- **Desktop View**: Modern card-based design with gradient backgrounds
- **Mobile View**: Responsive layout that adapts to all screen sizes
- **Results Display**: Color-coded results (blue for increase, orange for decrease)

## Technology Stack

- **Frontend**: React 18.2.0
- **SEO Management**: React Helmet Async
- **Styling**: CSS3 with modern gradients and animations
- **Deployment**: Firebase Hosting
- **Build Tool**: Create React App

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd percentage-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Deployment to Firebase

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Firebase Project

```bash
firebase init hosting
```

### 4. Deploy to Firebase

```bash
npm run deploy
```

Or manually:
```bash
npm run build
firebase deploy
```

## AdSense Integration

The app includes three ad slots:

1. **Top Banner Ad** (`ad-slot-top-banner`)
2. **Inline Ad** (`ad-slot-inline`) - appears after calculation results
3. **Bottom Sticky Ad** (`ad-slot-bottom-sticky`) - fixed at bottom

### To enable AdSense:

1. Replace the placeholder AdSense code in `public/index.html`
2. Update the publisher ID: `ca-pub-XXXXXXXXXXXXXXXX`
3. Replace ad slot placeholders with actual AdSense ad units

## Project Structure

```
percentage-calculator/
├── public/
│   ├── index.html          # Main HTML with SEO meta tags
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.js             # Main React component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── firebase.json          # Firebase hosting config
├── .firebaserc           # Firebase project config
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Features Explained

### Percentage Calculation
- Formula: `((New Value - Old Value) / Old Value) × 100`
- Results rounded to 2 decimal places
- Handles both increases and decreases
- Color-coded results for better UX

### Responsive Design
- Mobile-first approach
- Flexbox layout
- CSS Grid for complex layouts
- Media queries for different screen sizes

### SEO Optimization
- **Dynamic Meta Tags**: React Helmet Async for real-time SEO updates
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Semantic HTML structure**
- **Meta description and keywords**
- **Open Graph tags for social sharing**
- **Twitter Card support**
- **Fast loading with optimized assets**
- **Dynamic page titles** based on calculation results

### Error Handling
- Input validation
- Zero division protection
- User-friendly error messages
- Form state management

## Customization

### Styling
- Modify `src/index.css` for design changes
- Update color schemes in CSS variables
- Adjust responsive breakpoints

### Functionality
- Add more calculation types in `src/App.js`
- Implement additional validation rules
- Add calculation history feature
- Customize dynamic SEO content in `getPageTitle()` and `getPageDescription()` functions

### AdSense
- Replace placeholder ad slots with actual AdSense code
- Adjust ad positioning in CSS
- Implement ad loading callbacks

## Performance Optimizations

- **Code Splitting**: React.lazy for component loading
- **Asset Optimization**: Compressed images and minified CSS/JS
- **Caching**: Firebase hosting with proper cache headers
- **Bundle Size**: Optimized dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:
- Create an issue in the repository
- Contact: [your-email@example.com]

---

**Built with ❤️ using React and Firebase** 