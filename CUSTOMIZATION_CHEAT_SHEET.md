# 🎨 Customization Cheat Sheet

## Quick Reference for Common Changes

---

## 🎯 Event Information

### Change Event Date & Time

**File:** `src/components/Hero.jsx`

```jsx
// Line ~80
<span className="text-sm sm:text-base">14th November 2025</span>

// Line ~88
<span className="text-sm sm:text-base">9:00 AM onwards</span>
```

**File:** `src/components/Countdown.jsx`

```jsx
// Line ~14
const eventDate = new Date("2025-11-14T09:00:00").getTime();
```

### Change Event Name

**File:** `src/components/Hero.jsx`

```jsx
// Line ~41
<span className="block gradient-text">Tech Fest</span>
<span className="block text-white mt-2">2025</span>
```

**File:** `src/components/Navbar.jsx`

```jsx
// Line ~44
Tech Fest 2025
```

---

## 🎨 Colors

### Neon Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  neon: {
    blue: '#00d4ff',    // ← Change here
    purple: '#a855f7',  // ← Change here
    pink: '#ec4899',    // ← Change here
    green: '#10b981',   // ← Change here
  },
}
```

### Background Color

**File:** `src/index.css`

```css
body {
  @apply bg-gray-950; /* Change gray-950 to your color */
}
```

---

## 🎪 Events

### Add/Remove Events

**File:** `src/components/Events.jsx`

```jsx
// Line ~8 - Add new event to this array
const events = [
  {
    id: 1,
    title: "Your Event Name",
    description: "Event description here",
    icon: Code, // Choose from lucide-react
    color: "from-blue-500 to-cyan-500",
    registerLink: "#register",
  },
  // Add more events...
];
```

### Change Event Icons

Import from lucide-react:

```jsx
import { Code, Cpu, Lightbulb, Rocket, Zap, Trophy } from "lucide-react";
```

Available icons: Code, Cpu, Lightbulb, Rocket, Zap, Trophy, Award, Star, Heart, etc.

---

## 👥 Team Members

### Update Team

**File:** `src/components/Team.jsx`

```jsx
// Line ~8 - Modify this array
const team = [
  {
    name: "Member Name",
    role: "Their Position",
    image: "👨‍💼", // Use emoji or 'URL'
    social: {
      linkedin: "https://linkedin.com/in/username",
      email: "mailto:email@example.com",
      github: "https://github.com/username",
      instagram: "https://instagram.com/username",
    },
  },
  // Add more members...
];
```

### Use Real Images

Replace emoji with image URL:

```jsx
image: '/path/to/image.jpg',
// or
image: require('./assets/team/member.jpg'),
```

---

## 📧 Contact Information

### Email, Phone, Address

**File:** `src/components/Contact.jsx`

```jsx
// Line ~107 - Email
<a href="mailto:techcouncil@gcoej.ac.in">
  techcouncil@gcoej.ac.in
</a>

// Line ~123 - Phone
<a href="tel:+912572257333">
  +91 257 225 7333
</a>

// Line ~139 - Address
<p className="text-gray-400">
  Government College of Engineering<br />
  Jalgaon, Maharashtra 425002
</p>
```

### Social Media Links

**File:** `src/components/Contact.jsx`

```jsx
// Line ~162+ - Update hrefs
<a href="https://instagram.com/yourhandle">
<a href="https://linkedin.com/company/yourpage">
<a href="https://twitter.com/yourhandle">
```

---

## 🔗 Navigation Links

### Modify Menu Items

**File:** `src/components/Navbar.jsx`

```jsx
// Line ~16
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Science Exhibition", href: "#science-exhibition" },
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];
```

Add new section:

```jsx
{ name: 'Gallery', href: '#gallery' },
```

---

## 🎬 Animations

### Disable Loading Screen

**File:** `src/App.jsx`

```jsx
// Line ~13 - Set to false
const [loading, setLoading] = useState(false); // ← Change true to false
```

### Disable Particles

**File:** `src/App.jsx`

```jsx
// Line ~33 - Comment out
// <ParticlesBackground />
```

### Adjust Animation Speed

**File:** `tailwind.config.js`

```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',  // ← Change 8s
  'float': 'float 6s ease-in-out infinite',   // ← Change 6s
}
```

---

## 📝 Text Content

### Hero Description

**File:** `src/components/Hero.jsx`

```jsx
// Line ~63
<motion.p>A celebration of innovation, creativity... // ← Change text</motion.p>
```

### About Us Content

**File:** `src/components/AboutUs.jsx`

```jsx
// Line ~83+
<p>The Technical Council of Government College... // ← Update</p>
```

---

## 🖼️ Images

### Add Images

1. Place images in `src/assets/`
2. Import in component:

```jsx
import myImage from "./assets/my-image.jpg";
```

3. Use in JSX:

```jsx
<img src={myImage} alt="Description" />
```

### Replace Emoji Placeholders

**Files:** `src/components/ScienceExhibition.jsx`, `AboutUs.jsx`

```jsx
// Current
<div>🔬</div>

// Replace with
<img src={scienceImage} alt="Science Exhibition" />
```

---

## 🔘 Buttons

### Change Button Colors

**File:** Component files (Hero, Events, etc.)

```jsx
// Current
className = "bg-gradient-to-r from-neon-blue to-neon-purple";

// Change to
className = "bg-gradient-to-r from-red-500 to-pink-500";
```

### Add New Button

```jsx
<motion.a
  href="#link"
  whileHover={{ scale: 1.05 }}
  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
>
  Button Text
</motion.a>
```

---

## 📱 Responsive Breakpoints

### Adjust Grid Columns

```jsx
// Current
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

// Mobile: 1 column
// Tablet (md:): 2 columns
// Desktop (lg:): 3 columns
```

### Change Breakpoint Behavior

```jsx
className = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
// Mobile: 2xl
// Small (sm:): 3xl
// Medium (md:): 4xl
// Large (lg:): 5xl
```

---

## 🎯 Registration Links

### Update Registration Forms

**File:** `src/components/Events.jsx`

```jsx
// Line ~15+
registerLink: 'https://forms.google.com/your-form-id',
```

**File:** `src/components/Hero.jsx`

```jsx
// Line ~103 - Register Now button
<motion.a href="https://forms.google.com/your-form-id">
```

---

## 📊 Statistics

### Science Exhibition Stats

**File:** `src/components/ScienceExhibition.jsx`

```jsx
// Line ~103
<div className="text-3xl font-bold">500+</div>  // ← Change number
<div className="text-sm">Expected Participants</div>

// Line ~114
<div className="text-3xl font-bold">20+</div>  // ← Change number
<div className="text-sm">Schools Invited</div>
```

---

## 🎨 Font Styles

### Change Font Family

**File:** `tailwind.config.js`

```javascript
extend: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
}
```

**Import Font:**
In `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 🚀 Performance

### Reduce Particles Count

**File:** `src/components/ParticlesBackground.jsx`

```jsx
// Line ~12
const particleCount = 50; // ← Reduce to 20-30 for better performance
```

### Disable Blur Effects

Search for `backdrop-blur` in components and remove/replace with solid background.

---

## 🎬 Quick Copy-Paste

### Add New Section

```jsx
<section id="new-section" className="py-20 bg-gray-950">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold gradient-text mb-8">Section Title</h2>
    <p className="text-gray-400">Section content here</p>
  </div>
</section>
```

### Add New Event Card

```jsx
{
  id: 7,
  title: 'New Event',
  description: 'Description of the event',
  icon: Star,  // Import from lucide-react
  color: 'from-teal-500 to-cyan-500',
  registerLink: '#register',
}
```

### Add New Team Member

```jsx
{
  name: 'New Member',
  role: 'Member Role',
  image: '👤',
  social: {
    linkedin: '#',
    email: 'mailto:member@gcoej.ac.in',
  },
}
```

---

## 💡 Pro Tips

1. **Use Constants File**: `src/config/constants.js` for easy updates
2. **Test After Changes**: Check localhost after each modification
3. **Git Commits**: Commit after each major change
4. **Backup**: Keep original files before major edits
5. **Browser DevTools**: Use for live CSS editing

---

## 🆘 Quick Fixes

**Text too small?**

- Increase `text-base` to `text-lg` or `text-xl`

**Section too cramped?**

- Increase `py-20` to `py-32`

**Colors too bright?**

- Reduce opacity: `bg-neon-blue/50` (50% opacity)

**Animation too fast?**

- Increase duration: `duration-300` to `duration-500`

---

**Happy Customizing! 🎨**
