# Anime.js Implementation Guide

## Overview
Your website now includes anime.js animations that are beautifully integrated, smooth, and optimized for mobile devices.

## What's Been Added

### 1. **AnimeBackground Component** (`src/components/AnimeBackground.jsx`)
- Floating particle system with anime.js
- Automatically reduces particle count on mobile (30 particles) vs desktop (60 particles)
- Particles animate with pulsing opacity and size
- Performance-optimized with canvas rendering

### 2. **AnimeText Component** (`src/components/AnimeText.jsx`)
- Animated text with character-by-character effects
- Multiple animation effects available:
  - `fadeUp`: Fade in while sliding up
  - `fadeIn`: Simple fade in
  - `scale`: Scale up with fade
  - `rotate`: Rotate in with fade
  - `slideRight`: Slide from left
  - `wave`: Wave motion effect

**Usage Example:**
```jsx
<AnimeText effect="fadeUp" delay={200} stagger={30}>
  Your Text Here
</AnimeText>
```

### 3. **Custom Hooks** (`src/hooks/useAnime.js`)
Three powerful hooks for anime.js animations:

#### `useAnime(animationConfig, dependencies)`
```jsx
const ref = useAnime({
  opacity: [0, 1],
  translateY: [-20, 0],
  duration: 1000,
  easing: 'easeOutExpo'
}, []);
```

#### `useStaggerAnime(selector, animationConfig, trigger)`
```jsx
const containerRef = useStaggerAnime('.item', {
  opacity: [0, 1],
  translateY: [20, 0],
  stagger: 100,
  duration: 800
}, true);
```

#### `useScrollAnime(animationConfig, options)`
```jsx
const ref = useScrollAnime({
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 1000
}, {
  threshold: 0.1,
  once: true
});
```

### 4. **Enhanced Hero Component**
The Hero component now includes:
- Staggered text animation for GCOEJ name
- Elastic bounce effect on main heading
- Smooth CTA button entrance with stagger
- All animations respect `prefers-reduced-motion`

## Mobile Optimization Features

✅ **Reduced Particle Count**: Automatically detects mobile devices and reduces animations
✅ **Respects User Preferences**: Honors `prefers-reduced-motion` accessibility setting
✅ **GPU Acceleration**: Uses CSS transforms for smooth 60fps animations
✅ **Performance Monitoring**: Cleanup functions prevent memory leaks
✅ **Adaptive Durations**: Animations are tuned for mobile performance

## How to Use in Other Components

### Example 1: Animate on Scroll
```jsx
import { useScrollAnime } from '../hooks/useAnime';

function MyComponent() {
  const ref = useScrollAnime({
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000
  });

  return <div ref={ref}>Content here</div>;
}
```

### Example 2: Stagger Animation
```jsx
import { useStaggerAnime } from '../hooks/useAnime';

function MyList() {
  const ref = useStaggerAnime('.list-item', {
    opacity: [0, 1],
    translateX: [-30, 0],
    stagger: 100,
    duration: 600
  }, true);

  return (
    <div ref={ref}>
      <div className="list-item">Item 1</div>
      <div className="list-item">Item 2</div>
      <div className="list-item">Item 3</div>
    </div>
  );
}
```

### Example 3: Complex Timeline
```jsx
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);

  useEffect(() => {
    anime.timeline()
      .add({
        targets: ref.current.querySelector('.title'),
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 800
      })
      .add({
        targets: ref.current.querySelector('.subtitle'),
        opacity: [0, 1],
        duration: 600
      }, '-=400');
  }, []);

  return (
    <div ref={ref}>
      <h2 className="title">Title</h2>
      <p className="subtitle">Subtitle</p>
    </div>
  );
}
```

## Animation Best Practices

1. **Always add cleanup**: Use `anime.pause()` in cleanup functions
2. **Check for reduced motion**: Respect accessibility preferences
3. **Use transforms**: Prefer `translateX`, `translateY`, `scale` over `left`, `top`
4. **Stagger wisely**: Use delays between 50-150ms for optimal perception
5. **Duration guidelines**:
   - Small elements: 300-600ms
   - Medium elements: 600-1000ms
   - Large sections: 1000-1500ms

## Performance Tips

- ✅ Use `opacity` and `transform` properties (GPU accelerated)
- ✅ Avoid animating `width`, `height`, `margin`, `padding`
- ✅ Use `will-change` CSS property sparingly
- ✅ Test on actual mobile devices
- ✅ Limit concurrent animations to 5-10 elements

## Accessibility

All animations automatically respect the user's motion preferences:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

When reduced motion is preferred, animations are skipped entirely.

## Available Easing Functions

- `linear`
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
- `easeInElastic`, `easeOutElastic`, `easeInOutElastic`
- `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

## Troubleshooting

**Q: Animations not playing?**
- Check browser console for errors
- Verify refs are attached correctly
- Ensure elements exist when animation runs

**Q: Performance issues?**
- Reduce number of animated elements
- Increase duration (slower = less processing)
- Check for conflicting CSS animations

**Q: Animations look janky on mobile?**
- Use `will-change` sparingly
- Avoid animating too many properties at once
- Test with Chrome DevTools mobile throttling

## Next Steps

You can now:
1. Add scroll-triggered animations to Events section
2. Enhance Science Exhibition with timeline animations
3. Add hover effects with anime.js to cards
4. Create loading transitions between sections

Enjoy your beautifully animated website! 🎉
