# 🎴 Events Cards - Anime.js Effects

## ✨ New Cool Effects Added!

Your Events section now features stunning anime.js animations that bring the cards to life!

## 🎬 Entrance Animations (On Scroll)

### 1. **Staggered Card Entrance**
- Cards fade in and slide up from below
- 3D rotation effect (rotateX) for depth
- Scale animation from 90% to 100%
- Each card appears 150ms after the previous one
- Duration: 1000ms with `easeOutExpo` easing

### 2. **Icon Spin Animation**
- Icons scale from 0 to full size
- 180° rotation entrance
- Elastic bounce effect
- Delayed by 600ms, staggered by 150ms
- Easing: `easeOutElastic(1, .6)`

### 3. **Event Number Reveal**
- Background numbers fade in with scale effect
- Start at 150% size, scale down to 100%
- Staggered delay: 500ms + 150ms per card
- Duration: 600ms

## 🎯 Hover Effects (Interactive)

### 1. **Icon Rotation & Scale**
On hover:
- Icon rotates 360°
- Scales to 120% then back to 100%
- Elastic bounce effect
- Duration: 600ms

### 2. **Top Accent Line**
- Cyan gradient line sweeps across the top
- Animates from 0% to 100% width
- Duration: 400ms with `easeOutExpo`

### 3. **Floating Particles**
- 6 colorful particles shoot upward on hover
- Random horizontal movement
- Fade in, then fade out
- Staggered by 100ms
- Each particle travels -20px to -60px upward

### 4. **Pulse Ring**
- Cyan ring emanates from the center
- CSS animate-ping for continuous pulsing
- Only visible on hover

### 5. **Framer Motion Effects**
- Card lifts up by 8px
- Scales to 102%
- Shadow expands with cyan glow

## 📱 Mobile Optimization

All animations respect:
- ✅ `prefers-reduced-motion` accessibility setting
- ✅ Smooth 60fps performance
- ✅ GPU acceleration
- ✅ Conditional rendering based on viewport

## 🎨 Visual Features

### Card Components:
1. **Gradient Background** - Fades in on hover
2. **Icon Glow** - Blur effect intensifies
3. **Number Badge** - Changes color on hover
4. **Bottom Corner Accent** - Slides into view
5. **Animated Particles** - Burst effect on hover

## 🔧 Technical Implementation

### Key Anime.js Features Used:
- `anime.stagger()` - Sequential delays
- `anime.random()` - Random particle movement
- `easeOutExpo` - Smooth deceleration
- `easeOutElastic()` - Bouncy effects
- `easeOutQuad` - Natural motion

### Event Handlers:
```javascript
onMouseEnter={(e) => {
  // Triggers multiple simultaneous animations
  // - Icon rotation & scale
  // - Top accent line sweep
  // - Particle burst effect
}}
```

## 🎭 Animation Timeline

### On Scroll Into View:
```
0ms     → Start
300ms   → Cards begin appearing (staggered)
500ms   → Event numbers start revealing
600ms   → Icons start spinning in
1500ms  → All animations complete
```

### On Hover:
```
0ms     → Hover detected
0ms     → Icon rotation starts
0ms     → Top line sweep starts
0-600ms → Particles animate
600ms   → Icon animation completes
1000ms  → All hover effects complete
```

## 💡 Pro Tips

1. **Stagger Delays** - 150ms creates perfect rhythm
2. **Elastic Easing** - Makes icons feel playful
3. **Particle Count** - 6 particles = optimal visual without lag
4. **Opacity Control** - Cards start at 0, preventing flash

## 🎪 Effect Combinations

Each card combines:
- **3 entrance animations** (card, icon, number)
- **5 hover effects** (icon, line, particles, ring, shadow)
- **5 static effects** (gradients, glows, accents)

Total: **13 simultaneous animation effects per card!**

## 🚀 Performance

- ✅ Hardware-accelerated transforms
- ✅ requestAnimationFrame for smooth rendering
- ✅ Optimized for 60fps
- ✅ No layout thrashing
- ✅ Efficient DOM queries

## 🌈 Color Gradients

Each event has unique gradient:
1. **Coding** - Blue → Cyan
2. **Hackathon** - Purple → Pink
3. **Innovation** - Yellow → Orange
4. **Robotics** - Green → Emerald
5. **Tech Quiz** - Red → Pink
6. **Project Showcase** - Indigo → Purple

All effects use the event's gradient for consistency!

## 🎉 Result

Your Events section now features:
- Professional entrance animations
- Delightful hover interactions
- Smooth 60fps performance
- Mobile-optimized effects
- Accessibility support

**The cards feel alive and engaging!** 🔥
