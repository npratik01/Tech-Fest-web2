# Quick Visual Reference - Tech Fest 2025

## 🎨 Font Usage Guide

### When to Use Each Font

#### Orbitron (`.font-display`)
```
✓ Main page titles (Tech Fest 2025)
✓ Large hero text
✓ Event card section titles
✓ Logo text
✓ Any text that needs MAXIMUM impact

Weight: 700-900 (Bold to Black)
Spacing: tracking-wider
```

#### Rajdhani (`.font-heading`)
```
✓ Section headings (Featured Events, About Us)
✓ Card titles
✓ Subheadings
✓ Navigation items (optional)
✓ Call-to-action text

Weight: 600-700 (Semibold to Bold)
Transform: UPPERCASE recommended
Spacing: tracking-wide to tracking-widest
```

#### Space Grotesk (`.font-body`)
```
✓ Paragraphs
✓ Descriptions
✓ Body text
✓ Regular content
✓ Small print

Weight: 300-500 (Light to Medium)
Spacing: normal to tracking-wide
```

---

## 🎴 Event Card Anatomy

```
┌──────────────────────────────────────┐
│  Top Accent Line (animated)          │ ← Gradient color, scales on hover
├──────────────────────────────────────┤
│                                      │
│  ┌──────┐               ┌────────┐  │
│  │  🎯  │               │   03   │  │ ← Icon + Number Badge
│  │ Icon │               │ Large  │  │   (Icon rotates & scales)
│  └──────┘               └────────┘  │
│                                      │
│  CARD TITLE IN UPPERCASE            │ ← Rajdhani font, changes color
│                                      │
│  Description text here shows up     │ ← Space Grotesk, 3-line clamp
│  to three lines before getting      │   (prevents overflow)
│  truncated with ellipsis...         │
│                                      │
│  ┌─────────────────┐  ┌──────────┐  │
│  │  Register Now   │  │ Details→ │  │ ← Action buttons
│  └─────────────────┘  └──────────┘  │   (gradient + outline)
│                                      │
│                      ╱               │ ← Corner accent
│                   ╱                  │   (appears on hover)
└──────────────────────────────────────┘

Hover Effects:
• Card lifts up 8px
• Border changes gray → cyan
• Glow shadow appears
• Icon rotates 6°
• Corner accent slides in
• Particles animate
• Background gradient fades in
```

---

## 📐 Responsive Grid Layout

### Mobile (< 640px)
```
┌─────────────────┐
│                 │
│   Event Card 1  │
│                 │
├─────────────────┤
│                 │
│   Event Card 2  │
│                 │
├─────────────────┤
│                 │
│   Event Card 3  │
│                 │
└─────────────────┘

• 1 column
• Full width
• Stacked buttons
• Reduced padding
```

### Tablet (640px - 1024px)
```
┌──────────────┬──────────────┐
│              │              │
│ Event Card 1 │ Event Card 2 │
│              │              │
├──────────────┼──────────────┤
│              │              │
│ Event Card 3 │ Event Card 4 │
│              │              │
├──────────────┼──────────────┤
│              │              │
│ Event Card 5 │ Event Card 6 │
│              │              │
└──────────────┴──────────────┘

• 2 columns
• Side-by-side buttons
• Medium spacing
```

### Desktop (> 1024px)
```
┌─────────┬─────────┬─────────┐
│         │         │         │
│ Card 1  │ Card 2  │ Card 3  │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│ Card 4  │ Card 5  │ Card 6  │
│         │         │         │
└─────────┴─────────┴─────────┘

• 3 columns
• Full effects
• Maximum spacing
```

---

## 🎯 Button States

### Register Button (Primary CTA)
```
Normal State:
├─────────────────┐
│ Register Now    │ ← Gradient background
│      →          │    White text
└─────────────────┘    Rounded corners

Hover State:
├─────────────────┐
│ Register Now    │ ← Lifts up slightly
│      →          │    Shadow glow appears
└─────────────────┘    Scale: 1.0 → 1.02

Active (Pressed):
├─────────────────┐
│ Register Now    │ ← Presses down
│      →          │    Scale: 0.98
└─────────────────┘
```

### Details Button (Secondary)
```
Normal State:
┌─────────────────┐
│ Details    →    │ ← Border outline
│                 │    Gray color
└─────────────────┘

Hover State:
┌─────────────────┐
│ Details    →    │ ← Border: cyan
│                 │    Text: cyan
└─────────────────┘    Background tint
```

---

## 🌈 Color System

### Gradient Variations
```
Cyan Gradient:    ████████ from-cyan-500 to-blue-600
Blue Gradient:    ████████ from-blue-500 to-cyan-500
Purple Gradient:  ████████ from-purple-500 to-pink-500
Yellow Gradient:  ████████ from-yellow-500 to-orange-500
Green Gradient:   ████████ from-green-500 to-emerald-500
Red Gradient:     ████████ from-red-500 to-pink-500
Indigo Gradient:  ████████ from-indigo-500 to-purple-500
```

### Interactive Colors
```
Default Border:   ─────── gray-800
Hover Border:     ─────── cyan-500/50
Text Default:     ─────── gray-400
Text Hover:       ─────── cyan-400
Background:       ─────── gray-900/40
Shadow Hover:     ─────── cyan-500/20
```

---

## 📏 Spacing Scale

### Mobile First Approach
```
Extra Small:  p-3      gap-2      text-sm
Small:        p-4      gap-3      text-base
Medium:       p-5      gap-4      text-lg
Large:        p-6      gap-6      text-xl
Extra Large:  p-8      gap-8      text-2xl

Breakpoint Progression:
Mobile:   p-5    sm:p-6    lg:p-8
Gaps:     gap-4  sm:gap-6  lg:gap-8
```

---

## ⚡ Animation Timing

### Standard Durations
```
Fast:         200ms   (micro-interactions)
Normal:       300ms   (hover states)
Medium:       500ms   (card transitions)
Slow:         800ms   (page transitions)
Very Slow:    1200ms  (scroll reveals)
```

### Easing Functions
```
ease-out:         Quick start, slow end (entering)
ease-in:          Slow start, quick end (exiting)
ease-in-out:      Smooth both ends (toggling)
cubic-bezier:     Custom curves (advanced)
```

---

## 🎬 Animation Sequence

### Card Hover Timeline
```
0ms      : Hover starts
0-500ms  : Card lifts (y: 0 → -8px)
0-500ms  : Border color changes
0-500ms  : Shadow appears
100ms    : Icon starts rotation
200ms    : Corner accent slides in
300ms    : Particles start pinging
500ms    : All animations complete
```

### Page Load Sequence
```
0ms      : Page starts loading
0-600ms  : GCOEJ text fades in
500ms    : Tech Fest title appears
700ms    : Subtitle fades in
900ms    : Description appears
1100ms   : Date/time info shows
1300ms   : CTA buttons reveal
1500ms   : All animations complete
```

---

## 🔍 Accessibility Features

### Keyboard Navigation
```
Tab         → Next focusable element
Shift+Tab   → Previous focusable element
Enter       → Activate button/link
Space       → Activate button
Esc         → Close modal/menu
```

### Focus Indicators
```
Visible outline on all interactive elements
Contrast ratio meets WCAG AA standards
Skip links for keyboard users
ARIA labels where needed
```

### Touch Targets
```
Minimum size: 44x44px (iOS standard)
Adequate spacing between elements
No overlapping touch zones
Visual feedback on tap
```

---

## 💡 Pro Tips

### For Best Performance
1. ✓ Use transform/opacity for animations
2. ✓ Avoid animating width/height
3. ✓ Enable hardware acceleration
4. ✓ Use will-change sparingly
5. ✓ Optimize images (WebP format)

### For Best Mobile UX
1. ✓ Test on real devices
2. ✓ Use thumb-friendly zones
3. ✓ Avoid tiny text (min 14px)
4. ✓ Provide clear tap feedback
5. ✓ Design for one-handed use

### For Best Readability
1. ✓ Line length 50-75 characters
2. ✓ Line height 1.5-1.8
3. ✓ Sufficient contrast (4.5:1)
4. ✓ Consistent hierarchy
5. ✓ Adequate whitespace

---

**Need Help?**
- Check `FONT_CARD_IMPROVEMENTS.md` for detailed documentation
- Check `RESPONSIVE_IMPROVEMENTS.md` for responsive details
- Check `TESTING_GUIDE.md` for testing procedures
