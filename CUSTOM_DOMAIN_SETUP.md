# Custom Domain Setup Guide for www.percentageconvert.com

## ✅ **Current Status**

Your site is now deployed to:
- **Firebase URL**: https://percentageconvert.web.app
- **Custom Domain**: www.percentageconvert.com (needs DNS configuration)

## 🎯 **Next Steps to Connect Custom Domain**

### **Step 1: Add Custom Domain in Firebase Console**

1. **Go to Firebase Console**: https://console.firebase.google.com/project/pdftool-d873a/hosting
2. **Click on your project**: `pdftool-d873a`
3. **Go to Hosting section**
4. **Click "Add custom domain"**
5. **Enter your domain**: `www.percentageconvert.com`
6. **Click "Continue"**

### **Step 2: Configure DNS Records**

Firebase will provide you with DNS records to add. You'll need to add these to your domain registrar:

#### **A Records:**
```
151.101.1.195
151.101.65.195
```

#### **CNAME Record:**
```
www.percentageconvert.com → percentageconvert.web.app
```

### **Step 3: Add DNS Records at Your Domain Registrar**

1. **Login to your domain registrar** (where you bought percentageconvert.com)
2. **Go to DNS management**
3. **Add the A records and CNAME record** provided by Firebase
4. **Wait for DNS propagation** (can take 24-48 hours)

### **Step 4: Verify Domain Ownership**

1. **In Firebase Console**, go to the custom domain section
2. **Click "Verify"** when the DNS records are added
3. **Wait for verification** (usually takes a few minutes to hours)

### **Step 5: Enable SSL Certificate**

1. **Once verified**, Firebase will automatically provision an SSL certificate
2. **Wait for SSL activation** (can take up to 24 hours)
3. **Your site will be accessible at**: https://www.percentageconvert.com

## 🔧 **Alternative: Quick Test**

### **For Immediate Google Analytics Verification:**

You can temporarily verify Google Analytics using the Firebase URL:

1. **Go to Google Analytics**
2. **Add site**: `https://percentageconvert.web.app`
3. **Verify the tag** (it should work immediately)
4. **Later update to**: `www.percentageconvert.com`

## 📋 **DNS Configuration Example**

### **If using GoDaddy, Namecheap, or similar:**

#### **A Records:**
```
Type: A
Name: @
Value: 151.101.1.195
TTL: 600

Type: A  
Name: @
Value: 151.101.65.195
TTL: 600
```

#### **CNAME Record:**
```
Type: CNAME
Name: www
Value: percentageconvert.web.app
TTL: 600
```

## 🚀 **After Domain Setup**

### **Your Site Will Be Available At:**
- ✅ https://www.percentageconvert.com (main domain)
- ✅ https://percentageconvert.web.app (Firebase URL)
- ✅ https://pdftool-d873a.web.app (original Firebase URL)

### **All Features Will Work:**
- ✅ Google Analytics tracking
- ✅ AdSense monetization
- ✅ SEO optimization
- ✅ Mobile responsiveness

## 📞 **If You Need Help**

### **Common Issues:**
1. **DNS not propagating**: Wait 24-48 hours
2. **SSL certificate pending**: Wait up to 24 hours
3. **Domain verification failed**: Check DNS records are correct

### **Support Resources:**
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting/custom-domain)
- [Firebase Support](https://firebase.google.com/support)

---

## 🎉 **Quick Solution for Google Analytics**

**For immediate verification, use**: `https://percentageconvert.web.app`

This URL already has the Google Analytics tag and will work right away for verification! 