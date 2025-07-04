# Complete AdSense Setup Guide for Percentage Calculator

## 🎯 Your AdSense Publisher ID: `ca-pub-9271595483784297`

## Step 1: Create Ad Units in AdSense Dashboard

### 1.1 Login to AdSense
- Go to: https://www.google.com/adsense
- Sign in with your Google account

### 1.2 Create Top Banner Ad Unit
1. Click **"Ads"** in the left sidebar
2. Click **"By ad unit"**
3. Click **"Create new ad unit"**
4. Fill in the details:
   - **Name**: `Top Banner`
   - **Size**: Select **"Responsive"**
   - **Type**: **"Display ads"**
   - **Ad unit ID**: Copy this ID (you'll need it)
5. Click **"Create"**

### 1.3 Create Inline Ad Unit
1. Click **"Create new ad unit"** again
2. Fill in the details:
   - **Name**: `Inline Ad`
   - **Size**: Select **"Responsive"**
   - **Type**: **"Display ads"**
   - **Ad unit ID**: Copy this ID (you'll need it)
5. Click **"Create"**

### 1.4 Create Bottom Sticky Ad Unit
1. Click **"Create new ad unit"** again
2. Fill in the details:
   - **Name**: `Bottom Sticky`
   - **Size**: Select **"Responsive"**
   - **Type**: **"Display ads"**
   - **Ad unit ID**: Copy this ID (you'll need it)
5. Click **"Create"**

## Step 2: Update Your Code with Real Ad Unit IDs

### 2.1 Update `src/AdSenseConfig.js`
Replace the placeholder ad unit IDs with your real ones:

```javascript
export const AD_UNITS = {
  TOP_BANNER: {
    id: 'ca-pub-9271595483784297',
    adSlot: 'YOUR_TOP_BANNER_AD_UNIT_ID', // Replace this
    // ... rest stays same
  },
  INLINE: {
    id: 'ca-pub-9271595483784297',
    adSlot: 'YOUR_INLINE_AD_UNIT_ID', // Replace this
    // ... rest stays same
  },
  BOTTOM_STICKY: {
    id: 'ca-pub-9271595483784297',
    adSlot: 'YOUR_BOTTOM_STICKY_AD_UNIT_ID', // Replace this
    // ... rest stays same
  }
};
```

## Step 3: Deploy Your Site

### 3.1 Build the App
```bash
npm run build
```

### 3.2 Deploy to Firebase
```bash
firebase deploy
```

## Step 4: Test Your Ads

### 4.1 Check Ad Display
1. Visit your live site
2. Check if ads appear in:
   - **Top banner** (at the top of the page)
   - **Inline ad** (after you calculate a percentage)
   - **Bottom sticky** (fixed at the bottom)

### 4.2 Check Browser Console
1. Open browser dev tools (F12)
2. Go to Console tab
3. Look for any AdSense errors

## Step 5: AdSense Dashboard Verification

### 5.1 Check Ad Serving
1. Go to AdSense dashboard
2. Click **"Ads"** → **"By ad unit"**
3. Check if your ad units show:
   - **Status**: Active
   - **Impressions**: Should start showing numbers
   - **Clicks**: Should start showing numbers

### 5.2 Check Reports
1. Go to **"Reports"** section
2. Check **"Overview"** for:
   - Page views
   - Impressions
   - Clicks
   - Revenue

## Step 6: Optimize for Better Performance

### 6.1 Enable Auto Ads (Optional)
1. Go to **"Ads"** → **"By ad unit"**
2. Click **"Auto ads"**
3. Enable **"Display ads"**
4. Click **"Save"**

### 6.2 Set Up Payment
1. Go to **"Payments"** section
2. Add your payment method
3. Set up tax information
4. Verify your address

## Troubleshooting

### Ads Not Showing?
1. **Check ad unit IDs**: Make sure you copied the correct IDs
2. **Check publisher ID**: Should be `ca-pub-9271595483784297`
3. **Wait for approval**: New ad units can take 24-48 hours to start showing
4. **Check site approval**: Make sure your site is approved in AdSense

### Low Earnings?
1. **Improve traffic**: Focus on SEO and content quality
2. **Test ad positions**: Try different ad placements
3. **Mobile optimization**: Ensure ads work well on mobile
4. **Content quality**: Create valuable, original content

### Policy Violations?
1. **Check Policy center**: Go to AdSense dashboard → Policy center
2. **Fix violations**: Address any policy issues promptly
3. **Follow guidelines**: Ensure compliance with AdSense policies

## Important Notes

### AdSense Policies
- ✅ **Content**: Must be original and valuable
- ✅ **Traffic**: Should be organic, not purchased
- ✅ **Placement**: Don't place too many ads
- ❌ **Prohibited**: No clickbait, adult content, copyright violations

### Best Practices
- **Ad Placement**: Don't overwhelm users
- **Loading Speed**: Ensure ads don't slow down your site
- **Mobile Experience**: Test on mobile devices
- **User Experience**: Keep site fast and professional

## Support Resources

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Community](https://support.google.com/adsense/community)

---

## 🚀 Quick Checklist

- [ ] Created 3 ad units in AdSense dashboard
- [ ] Copied ad unit IDs
- [ ] Updated `src/AdSenseConfig.js` with real IDs
- [ ] Built and deployed the app
- [ ] Tested ads on live site
- [ ] Verified ads are showing in AdSense dashboard
- [ ] Set up payment information

**Your site is ready to monetize!** 🎉 