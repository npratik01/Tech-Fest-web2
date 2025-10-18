# 🚀 Quick Start Guide - Tech Fest 2025 Website

## Getting Started in 3 Easy Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to: `http://localhost:5173`

---

## 📝 Quick Customization Guide

### Change Event Date

**File:** `src/components/Countdown.jsx`

```javascript
// Line 14
const eventDate = new Date("2025-11-14T09:00:00").getTime();
```

### Update Hero Section Text

**File:** `src/components/Hero.jsx`

```javascript
// Update main heading, description, date, time
```

### Modify Events

**File:** `src/components/Events.jsx`

```javascript
// Update the events array with your event details
const events = [
  {
    title: "Your Event Name",
    description: "Event description",
    // ... more fields
  },
];
```

### Update Team Members

**File:** `src/components/Team.jsx`

```javascript
// Update the team array
const team = [
  {
    name: "Member Name",
    role: "Their Role",
    image: "👤", // Use emoji or replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/...",
      email: "mailto:...",
    },
  },
];
```

### Change Contact Information

**File:** `src/components/Contact.jsx`

```javascript
// Update email, phone, address in the contact cards section
```

### Customize Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  neon: {
    blue: '#00d4ff',    // Change to your blue
    purple: '#a855f7',  // Change to your purple
    pink: '#ec4899',    // Change to your pink
    green: '#10b981',   // Change to your green
  },
}
```

---

## 🎨 Add Your Own Images

1. Place images in `src/assets/` folder
2. Import in your component:

```javascript
import myImage from "./assets/my-image.jpg";
```

3. Use in JSX:

```jsx
<img src={myImage} alt="Description" />
```

---

## 📱 Test Responsiveness

- **Desktop**: Default view at `http://localhost:5173`
- **Tablet**: Open browser DevTools (F12) → Toggle device toolbar
- **Mobile**: Open browser DevTools → Select mobile device

---

## 🌐 Deploy Your Website

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Option 2: Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

---

## 🐛 Common Issues

### Issue: "Module not found"

**Solution:**

```bash
npm install
```

### Issue: Port 5173 already in use

**Solution:**

```bash
# Kill the process using port 5173, then run:
npm run dev
```

### Issue: Tailwind styles not working

**Solution:**

```bash
# Make sure postcss.config.js and tailwind.config.js exist
# Restart dev server
npm run dev
```

---

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review component files - they have clear structure
- All components are well-commented

---

## ✨ Features You Can Add

- [ ] Google Forms integration for registration
- [ ] Gallery section with photos
- [ ] Sponsors section
- [ ] Event schedule/timeline
- [ ] Live chat widget
- [ ] Newsletter signup
- [ ] Social media feed integration

---

**Happy Coding! 🎉**

Made with ❤️ by GCOEJ Technical Council
