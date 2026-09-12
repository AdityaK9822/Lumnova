# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---
**Project:** Lumnova Stellar Wallet
**Generated:** 2026-08-06
**Category:** Fintech/Crypto Payment App
---

## Global Rules

### Color Palette
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#6366F1` | `--color-primary` |
| Secondary | `#8B5CF6` | `--color-secondary` |
| CTA/Accent | `#10B981` | `--color-cta` |
| Background | `#F8FAFC` | `--color-background` |
| Text | `#1E293B` | `--color-text` |

**Color Notes:** Soft neumorphism palette with indigo primary, violet secondary, and emerald accent for trust and growth in fintech context.

### Typography
- **Heading Font:** Inter
- **Body Font:** Inter
- **Mood:** Professional + Clear hierarchy
- **Google Fonts:** [Inter](https://fonts.google.com/specimen/Inter)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths (Neumorphism Focused)
| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-neumorphism-light` | `8px 8px 16px rgba(173, 181, 189, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.7)` | Neumorphism elements (light) |
| `--shadow-neumorphism-dark` | `8px 8px 16px rgba(173, 181, 189, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.5)` | Neumorphism elements (dark) |
| `--shadow-inner` | `inset 4px 4px 8px rgba(173, 181, 189, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.7)` | Pressed neumorphism state |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |

## Component Specs

### Buttons (Neumorphism Style)
```css
/* Primary Neumorphism Button */
.btn-primary {
  background: var(--color-background);
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-primary);
  box-shadow: var(--shadow-neumorphism-light);
  transition: all 200ms ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  box-shadow: var(--shadow-neumorphism-dark);
  transform: translateY(-2px);
}

.btn-primary:active {
  box-shadow: var(--shadow-inner);
  transform: translateY(0);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

/* Secondary Neumorphism Button */
.btn-secondary {
  background: var(--color-background);
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-text);
  box-shadow: var(--shadow-neumorphism-light);
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  box-shadow: var(--shadow-neumorphism-dark);
  transform: translateY(-2px);
}

.btn-secondary:active {
  box-shadow: var(--shadow-inner);
  transform: translateY(0);
}
```

### Cards (Neumorphism Style)
```css
.card {
  background: var(--color-background);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow-neumorphism-light);
  transition: all 300ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-neumorphism-dark);
  transform: translateY(-4px);
}

.card:active {
  box-shadow: var(--shadow-inner);
  transform: translateY(0);
}

/* Elevated Card Variant */
.card-elevated {
  background: var(--color-background);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    12px 12px 20px rgba(173, 181, 189, 0.25),
    -12px -12px 20px rgba(255, 255, 255, 0.6);
  transition: all 300ms ease;
}

.card-elevated:hover {
  box-shadow: 
    16px 16px 24px rgba(173, 181, 189, 0.35),
    -16px -16px 24px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.card-elevated:active {
  box-shadow: inset 8px 8px 16px rgba(173, 181, 189, 0.25), inset -8px -8px 16px rgba(255, 255, 255, 0.5);
  transform: translateY(0);
}
```

### Inputs (Neumorphism Style)
```css
.input {
  background: var(--color-background);
  border: none;
  border-radius: 16px;
  padding: 16px 20px;
  font-size: 16px;
  color: var(--color-text);
  box-shadow: var(--shadow-neumorphism-light);
  transition: all 300ms ease;
  width: 100%;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  box-shadow: 
    0 0 0 3px var(--color-primary)20,
    var(--shadow-neumorphism-light);
}

.input:active {
  box-shadow: var(--shadow-inner);
}

/* Input with icon */
.input-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--color-background);
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: var(--shadow-neumorphism-light);
  transition: all 300ms ease;
}

.input-with-icon:focus-within {
  outline: none;
  box-shadow: 
    0 0 0 3px var(--color-primary)20,
    var(--shadow-neumorphism-light);
}

.input-with-icon input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--color-text);
  width: 100%;
}

.input-with-icon input::placeholder {
  color: #94A3B8;
  opacity: 0.7;
}
```

### Modals (Neumorphism Style)
```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--color-background);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 
    24px 24px 36px rgba(173, 181, 189, 0.25),
    -24px -24px 36px rgba(255, 255, 255, 0.5);
  transition: all 400ms ease;
  max-width: 500px;
  width: 90%;
  position: relative;
  border: 1px solid rgba(173, 181, 189, 0.1);
}

.modal:hover {
  box-shadow: 
    28px 28px 42px rgba(173, 181, 189, 0.3),
    -28px -28px 42px rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

.modal:active {
  box-shadow: inset 12px 12px 20px rgba(173, 181, 189, 0.25), inset -12px -12px 20px rgba(255, 255, 255, 0.5);
  transform: translateY(0);
}
```

## Style Guidelines

**Style:** Neumorphism + Accessible & Ethical

**Keywords:** Soft shadows, depth through shadows, subtle gradients, minimal color palette

**Best For:** Fintech applications requiring trust, modern aesthetics, and excellent accessibility

**Key Effects:** Soft box-shadow + Smooth press (150ms) + Gentle hover transitions (200-300ms)

## Layout Pattern

**Pattern Name:** Financial App Dashboard

- **Conversion Strategy:** Trust-first design with clear visual hierarchy and immediate feedback
- **CTA Placement:** Primary CTA above fold, secondary CTAs in natural flow
- **Section Order:** Header > Wallet Overview > Transaction History > Action Buttons
- **Color Strategy:** Use accent colors sparingly for critical actions and status indicators

## Anti-Patterns (Do NOT Use)

- ��� **Hard shadows** - Neumorphism relies on soft, subtle shadows
- ��� **Pure black or white backgrounds** - Use off-whites and soft grays for depth
- ��� **Excessive color variety** - Stick to 2-3 main colors with accent variations
- ��� **Sharp corners** - Use border-radius of 12px+ for softness
- ��� **Lack of hover/active states** - Provide clear visual feedback for all interactions
- ��� **Insufficient contrast** - Maintain 4.5:1 minimum contrast ratio for text
- ��� **Instant state changes** - Always use transitions (150-350ms) for smooth UX
- ��� **Invisible focus states** - Focus states must be visible for accessibility
- ��� **Overflowing shadows** - Ensure containers have enough padding to contain shadow effects
- ��� **Misaligned light source** - Keep shadow direction consistent (typically top-left for light, bottom-right for dark)

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] Neumorphism shadows are soft and subtle (not harsh or dramatic)
- [ ] Consistent light source for all neumorphism elements
- [ ] Proper padding to contain shadow effects without clipping