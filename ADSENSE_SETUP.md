# Google AdSense Setup Guide for Percentage Calculator

## Step 1: Apply for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense)
2. Click "Get Started"
3. Sign in with your Google account
4. Fill out the application form:
   - Website URL: `https://your-firebase-app.web.app`
   - Content language: English
   - Content type: Calculator/Tools
   - Traffic sources: Organic search, Direct, Social media
   - Monetization goals: Display ads

## Step 2: Wait for Approval

- Google will review your site (usually 1-2 weeks)
- Ensure your site has:
  - Original, high-quality content
  - Clear navigation
  - Privacy policy
  - Terms of service
  - No copyright violations
  - Mobile-friendly design

## Step 3: Get Your Publisher ID

Once approved, you'll receive:
- **Publisher ID**: `ca-pub-XXXXXXXXXXXXXXXX` (16 digits)
- Access to AdSense dashboard

## Step 4: Create Ad Units

In your AdSense dashboard, create these ad units:

### 1. Top Banner Ad
- **Name**: Top Banner
- **Size**: Responsive (728x90 recommended)
- **Type**: Display ads
- **Ad unit ID**: Copy this ID

### 2. Inline Ad
- **Name**: Inline Ad
- **Size**: Responsive (300x250 recommended)
- **Type**: Display ads
- **Ad unit ID**: Copy this ID

### 3. Bottom Sticky Ad
- **Name**: Bottom Sticky
- **Size**: Responsive (320x50 recommended)
- **Type**: Display ads
- **Ad unit ID**: Copy this ID

## Step 5: Update Configuration

Replace the placeholder values in these files:

### 1. Update `src/AdSenseConfig.js`:
```javascript
export const AD_UNITS = {
  TOP_BANNER: {
    id: 'ca-pub-XXXXXXXXXXXXXXXX', // Your publisher ID
    adSlot: '1234567890', // Your top banner ad unit ID
    // ... rest of config
  },
  INLINE: {
    id: 'ca-pub-XXXXXXXXXXXXXXXX', // Your publisher ID
    adSlot: '1234567891', // Your inline ad unit ID
    // ... rest of config
  },
  BOTTOM_STICKY: {
    id: 'ca-pub-XXXXXXXXXXXXXXXX', // Your publisher ID
    adSlot: '1234567892', // Your bottom sticky ad unit ID
    // ... rest of config
  }
};
```

### 2. Update `src/App.js`:
```javascript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
```

## Step 6: Deploy and Test

1. Build and deploy your app:
   ```bash
   npm run build
   firebase deploy
   ```

2. Test ad display:
   - Visit your live site
   - Check if ads appear in all three locations
   - Use browser dev tools to check for errors

## Step 7: AdSense Dashboard Setup

### Enable Auto Ads (Optional)
1. Go to AdSense dashboard
2. Navigate to "Ads" → "By ad unit"
3. Enable "Auto ads" for additional revenue

### Set Up Payment
1. Go to "Payments" section
2. Add payment method
3. Set up tax information
4. Verify your address

### Monitor Performance
- Check "Reports" section for earnings
- Monitor "Policy center" for violations
- Review "Ad serving" for blocked ads

## Important Notes

### AdSense Policies
- **Content**: Must be original and valuable
- **Traffic**: Should be organic, not purchased
- **Placement**: Don't place too many ads
- **Prohibited**: No clickbait, adult content, or copyright violations

### Best Practices
- **Ad Placement**: Don't overwhelm users
- **Loading**: Ensure ads don't slow down your site
- **Mobile**: Test on mobile devices
- **Compliance**: Follow AdSense program policies

### Troubleshooting
- **Ads not showing**: Check ad unit IDs and publisher ID
- **Low earnings**: Improve site traffic and content quality
- **Policy violations**: Review and fix issues promptly

## Revenue Optimization Tips

1. **Content Quality**: Create valuable, original content
2. **SEO**: Optimize for search engines
3. **User Experience**: Keep site fast and mobile-friendly
4. **Ad Placement**: Test different positions
5. **Traffic**: Focus on organic growth

## Support Resources

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Community](https://support.google.com/adsense/community)

---

**Remember**: AdSense approval can take time. Focus on creating quality content and building organic traffic while waiting for approval. 