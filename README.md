# 🌐 Azeem Freelance Services Website

**Dr. Azeem Alam | BAMS · MBA (HR & Marketing)**  
Professional Freelancing Website — Healthcare & Business Services

---

## 📁 Project Structure

```
azeem-freelance/
├── index.html       ← Main website (all pages in one file)
├── style.css        ← All styles (dark/light mode, responsive)
├── script.js        ← All JS logic (forms, auth, data, animations)
└── README.md        ← This file
```

---

## 🚀 HOW TO DEPLOY ON GITHUB PAGES (Free)

### Step 1: Create GitHub Account
Go to https://github.com and sign up free.

### Step 2: Create New Repository
- Click **"New Repository"**
- Name it: `azeem-freelance`
- Set to **Public**
- Click **"Create Repository"**

### Step 3: Upload Files
- Click **"uploading an existing file"**
- Drag and drop: `index.html`, `style.css`, `script.js`
- Click **"Commit changes"**

### Step 4: Enable GitHub Pages
- Go to **Settings** → **Pages**
- Under "Source" select **"Deploy from a branch"**
- Branch: **main** | Folder: **/ (root)**
- Click **Save**

### Step 5: Your Site is LIVE! 🎉
Your URL: `https://YOUR-USERNAME.github.io/azeem-freelance/`

---

## 🔧 CUSTOMIZATION GUIDE

### Update Contact Info
In `index.html`, find and replace:
- `azeem.freelance@gmail.com` → your real email
- `+91 XXXXX XXXXX` → your WhatsApp number
- `wa.me/91XXXXXXXXXX` → `wa.me/91YOURNUMBER`
- `azeem@upi` → your real UPI ID

### Update LinkedIn URL
In `index.html`, find `href="#"` next to LinkedIn and replace with your LinkedIn URL.

### Update WhatsApp Float Button
Find `.whatsapp-float` href and replace with `https://wa.me/91YOURNUMBER`

### Change Admin Password
In `script.js`, line:
```js
const ADMIN_EMAIL = "admin@azeem.com";
const ADMIN_PASS = "admin123";
```
Change to your own secure credentials.

---

## 🔐 FIREBASE SETUP (Optional - for real backend)

### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Create a project" → name it `azeem-freelance`
3. Enable Google Analytics (optional)

### Step 2: Enable Authentication
- Go to **Authentication** → **Get Started**
- Enable **Email/Password**

### Step 3: Enable Firestore Database
- Go to **Firestore Database** → **Create Database**
- Start in **Test mode** (update rules before launch)

### Step 4: Get Config
- Go to **Project Settings** → **Your Apps** → **Web App**
- Copy the `firebaseConfig` object

### Step 5: Add to script.js
At the top of `script.js`, add:
```html
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>
```

Then initialize in `script.js`:
```js
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ... rest of config
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
```

---

## 💳 PAYMENT SETUP

### UPI
Replace `azeem@upi` with your actual UPI ID.
Generate a QR code at https://upilinks.in and add as an image.

### PayPal
Get your PayPal.me link from https://paypal.com/paypalme
Replace the PayPal button href with your link.

### Razorpay (Free Indian Payment Gateway)
1. Sign up at https://razorpay.com
2. Get your API Key from Dashboard
3. In `script.js`, find the Razorpay button and replace with:
```js
var options = {
  key: "YOUR_RAZORPAY_KEY",
  amount: 2500, // amount in paise (25 USD)
  currency: "INR",
  name: "Azeem Freelance Services",
  handler: function(response) { alert("Payment successful!"); }
};
var rzp = new Razorpay(options);
rzp.open();
```

---

## 📧 SEO CHECKLIST

- [x] Meta title & description
- [x] Open Graph tags
- [x] Schema markup (Person + Offer)
- [x] Semantic HTML structure
- [ ] Create `sitemap.xml` (use https://www.xml-sitemaps.com)
- [ ] Create `robots.txt` with: `User-agent: * Allow: /`
- [ ] Submit sitemap to Google Search Console

---

## 📱 FEATURES INCLUDED

- ✅ Dark / Light Mode
- ✅ Mobile Responsive
- ✅ All 18 Services Listed
- ✅ Portfolio with Filter
- ✅ Pricing Packages
- ✅ Testimonials
- ✅ Blog Section
- ✅ Contact Form (saved to localStorage)
- ✅ Project Request Form
- ✅ Feedback Form with Star Rating
- ✅ Login / Signup / Logout
- ✅ User Dashboard
- ✅ Admin Dashboard
- ✅ Payment Page (UPI, PayPal, Razorpay)
- ✅ WhatsApp Floating Button
- ✅ Scroll Animations
- ✅ SEO Meta Tags

---

## 🆓 FREE TECHNOLOGIES USED

| Technology | Purpose | Cost |
|---|---|---|
| HTML5/CSS3/JS | Website | Free |
| GitHub Pages | Hosting | Free |
| Firebase | Backend/Auth | Free tier |
| Font Awesome | Icons | Free |
| Google Fonts | Typography | Free |
| Razorpay | Payments | Free (2% fee) |

---

**Built for Dr. Azeem Alam | Uttar Pradesh, India | Serving Worldwide 🌍**
