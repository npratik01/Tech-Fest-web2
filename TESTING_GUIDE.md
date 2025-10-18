# Responsive Testing Quick Guide

## How to Test Responsiveness

### Using Browser DevTools (Chrome/Edge)
1. Press `F12` to open DevTools
2. Press `Ctrl+Shift+M` (or `Cmd+Shift+M` on Mac) to toggle device toolbar
3. Test these preset sizes:
   - iPhone SE (375px)
   - iPhone 12/13/14 (390px)
   - Samsung Galaxy S20 (360px)
   - iPad Mini (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### What to Check on Each Screen Size

#### Mobile (375px - 480px)
- ✅ GCOEJ text is readable and not cut off
- ✅ "Tech Fest 2025" heading is prominent
- ✅ Both CTA buttons are full width
- ✅ Logo in navbar is visible
- ✅ Mobile menu opens/closes smoothly
- ✅ Floating shapes are subtle but visible
- ✅ Science Exhibition poster displays properly
- ✅ Stats cards don't overlap poster
- ✅ Technical Council logo in About Us is centered

#### Tablet (768px - 1024px)
- ✅ Two-column layouts work
- ✅ Buttons are side-by-side
- ✅ Text sizes are balanced
- ✅ Images scale properly
- ✅ Navigation shows all items

#### Desktop (1280px+)
- ✅ Content is centered with max-width
- ✅ All effects at full strength
- ✅ Hover effects work on buttons
- ✅ Four-column grid in About Us
- ✅ Large text is impactful

### Common Issues to Check
- ❌ Horizontal scrolling (should never happen)
- ❌ Text overlapping
- ❌ Images distorted or stretched
- ❌ Buttons too small to tap
- ❌ Menu items cut off
- ❌ Background effects too strong/invisible

### Quick Fix Commands
```bash
# If you need to rebuild
npm run build

# Start dev server
npm run dev

# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

## Breakpoint Reference
```
sm:  640px   (Small tablets, large phones)
md:  768px   (Tablets)
lg:  1024px  (Small laptops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large desktops)
```

## Component-Specific Notes

### Hero Section
- Background shapes scale with screen size
- Text wraps naturally on narrow screens
- Buttons stack vertically on mobile

### Navbar
- Auto-collapses to hamburger menu below 768px
- Logo scales: 32px (mobile) → 40px (tablet) → 48px (desktop)

### Science Exhibition
- Poster maintains 3:4 aspect ratio
- Stats cards scale proportionally
- Content order changes: Poster first on desktop, content first on mobile

### About Us
- Grid changes: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
- Tech logo padding adjusts with screen size

## Performance Check
- All pages should load in < 3 seconds
- Animations should be smooth (60fps)
- No layout shift when loading
- Images should be optimized

## Accessibility Test
- Use keyboard only to navigate (Tab key)
- Zoom to 200% - text should still be readable
- Check color contrast (minimum 4.5:1 for normal text)

---
**Test Date**: _____________
**Tested By**: _____________
**Status**: ⬜ Pass / ⬜ Fail
**Notes**: _____________________________________________
