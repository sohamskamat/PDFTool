# Deployment Guide - Firebase Hosting

This guide will walk you through deploying the Percentage Calculator to Firebase Hosting.

## Prerequisites

1. **Node.js** (v14 or higher)
2. **npm** or **yarn**
3. **Firebase CLI**
4. **Google Account** (for Firebase)

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

## Step 3: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `percentage-calculator`
4. Follow the setup wizard
5. Note your project ID

## Step 4: Initialize Firebase in Your Project

```bash
firebase init hosting
```

When prompted:
- Select your project: `percentage-calculator`
- Public directory: `build`
- Configure as single-page app: `Yes`
- Overwrite index.html: `No`

## Step 5: Build the Application

```bash
npm install
npm run build
```

## Step 6: Deploy to Firebase

```bash
firebase deploy
```

Or use the npm script:
```bash
npm run deploy
```

## Step 7: Verify Deployment

Your app will be available at:
- **Production URL**: `https://percentage-calculator.web.app`
- **Alternative URL**: `https://percentage-calculator.firebaseapp.com`

## Custom Domain (Optional)

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Update DNS records as instructed

## Environment Variables

For production, you may want to set environment variables:

```bash
# Create .env.production file
REACT_APP_SITE_URL=https://percentage-calculator.web.app
REACT_APP_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## AdSense Setup

1. **Get AdSense Code**:
   - Go to [Google AdSense](https://www.google.com/adsense)
   - Create new ad units
   - Copy the ad code

2. **Replace Placeholders**:
   - Update `public/index.html` with your AdSense code
   - Replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID
   - Replace ad slot placeholders with actual ad units

3. **Ad Slots Available**:
   - `ad-slot-top-banner`: Top banner ad
   - `ad-slot-inline`: Inline ad after results
   - `ad-slot-bottom-sticky`: Bottom sticky ad

## Performance Optimization

### Enable Compression
Firebase automatically enables gzip compression.

### Cache Headers
Already configured in `firebase.json`:
- CSS/JS files: 1 year cache
- Images: 1 year cache
- HTML: No cache (for updates)

### CDN
Firebase Hosting uses Google's global CDN for fast loading worldwide.

### SEO Optimization
- **Dynamic Meta Tags**: React Helmet Async updates page titles and descriptions based on calculations
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Performance Preconnect**: DNS prefetch for AdSense domains
- **Mobile Optimization**: Proper viewport and PWA meta tags

## Monitoring

### Firebase Analytics (Optional)
1. Enable Analytics in Firebase Console
2. Add analytics code to your app
3. Monitor user behavior and performance

### Performance Monitoring
- Use Chrome DevTools Lighthouse
- Monitor Core Web Vitals
- Check mobile performance

## Troubleshooting

### Common Issues

1. **Build Fails**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Deploy Fails**:
   ```bash
   firebase logout
   firebase login
   firebase deploy
   ```

3. **AdSense Not Loading**:
   - Check if AdSense is approved
   - Verify ad code placement
   - Check browser console for errors

### Support
- [Firebase Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Support](https://firebase.google.com/support)
- [AdSense Help](https://support.google.com/adsense)

## Security

### HTTPS
Firebase Hosting automatically provides SSL certificates.

### Content Security Policy
Consider adding CSP headers in `firebase.json`:

```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "Content-Security-Policy",
            "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com;"
          }
        ]
      }
    ]
  }
}
```

## Backup & Version Control

1. **Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Firebase Backup**:
   - Firebase automatically backs up your hosting files
   - Use `firebase hosting:clone` for manual backups

## Cost

Firebase Hosting is **FREE** for:
- 10GB storage
- 360MB/day data transfer
- Custom domain support

Perfect for this type of application!

---

**Your app is now live and ready to use! 🚀** 