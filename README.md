# 🎓 Tech Fest 2025 - GCOEJ Technical Council

A modern, responsive, and animated single-page website for Tech Fest 2025, organized by Government College of Engineering, Jalgaon's Technical Council.

## 🌟 Features

- **Modern UI/UX**: Dark theme with glowing neon gradients and smooth animations
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Event Countdown**: Real-time countdown timer to the event
- **Contact Form**: Integrated contact form for inquiries
- **Science Exhibition Section**: Special showcase for school students
- **Team Section**: Display team members with social links
- **Loading Screen**: Elegant initial loading animation

## 🚀 Tech Stack

- **React 19** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "Tech Fest web2"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation bar
│   ├── Hero.jsx            # Hero section with CTA
│   ├── Countdown.jsx       # Event countdown timer
│   ├── Events.jsx          # Events showcase grid
│   ├── ScienceExhibition.jsx  # Science exhibition section
│   ├── AboutUs.jsx         # About GCOEJ Technical Council
│   ├── Team.jsx            # Team members display
│   ├── Contact.jsx         # Contact form and info
│   ├── Footer.jsx          # Footer with quick links
│   └── LoadingScreen.jsx   # Initial loading animation
├── assets/                 # Images and static files
├── App.jsx                # Main application component
├── App.css                # Custom CSS animations
├── index.css              # Tailwind imports and global styles
└── main.jsx               # Application entry point
```

## 🎨 Customization

### Colors

Update the neon colors in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',
    purple: '#a855f7',
    pink: '#ec4899',
    green: '#10b981',
  },
}
```

### Event Date

Change the countdown date in `src/components/Countdown.jsx`:

```javascript
const eventDate = new Date("2025-11-14T09:00:00").getTime();
```

### Content

- Update event details in `src/components/Events.jsx`
- Modify team members in `src/components/Team.jsx`
- Change contact information in `src/components/Contact.jsx`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🚀 Deploy

You can deploy the built files to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📧 Contact

For any queries, reach out to:

- Email: techcouncil@gcoej.ac.in
- Phone: +91 257 225 7333

## 📅 Event Details

- **Date**: 14th November 2025
- **Time**: 9:00 AM onwards
- **Venue**: Government College of Engineering, Jalgaon

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

© 2025 GCOEJ Technical Council. All rights reserved.

---

Made with ❤️ by GCOEJ Technical Council

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
