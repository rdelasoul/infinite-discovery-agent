# Vercel Geist Design System - Core Foundation

## Overview

Vercel's Geist design system for building consistent, accessible, and delightful web experiences. This core specification provides the essential visual constraints and foundational elements for functional UX pattern exploration.

**Design Philosophy**: Simplicity, minimalism, and speed - drawing inspiration from Swiss design movement with a developer-first approach.

## Color System

### Primary Colors
```css
/* Gray Scale - Primary neutral palette */
--ds-gray-100: #fafafa;
--ds-gray-200: #eaeaea;
--ds-gray-300: #999999;
--ds-gray-400: #888888;
--ds-gray-500: #666666;
--ds-gray-600: #444444;
--ds-gray-700: #333333;
--ds-gray-800: #222222;
--ds-gray-900: #111111;
--ds-gray-1000: #000000;

/* Blue - Interactive elements */
--ds-blue-100: #e1f5fe;
--ds-blue-500: #0070f3;
--ds-blue-600: #0061d5;
--ds-blue-700: #004fc4;
--ds-blue-800: #0043a5;

/* Status Colors */
--ds-red-500: #ee0000;      /* Error states */
--ds-amber-500: #f5a623;    /* Warning states */
--ds-green-500: #0070f3;    /* Success states */
--ds-purple-500: #7c3aed;   /* Accent elements */
```

### Theme Support
- **Light Theme**: Default high-contrast palette
- **Dark Theme**: Inverted with appropriate contrast ratios
- **Auto-switching**: Respects user system preferences

## Typography

### Typefaces
```css
/* Geist Sans - Primary interface font */
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

/* Geist Mono - Code and technical content */
font-family: 'Geist Mono', 'SF Mono', 'Monaco', 'Consolas', monospace;
```

### Font Scale
```css
/* Headings */
--font-size-h1: 2.25rem;    /* 36px */
--font-size-h2: 1.875rem;   /* 30px */
--font-size-h3: 1.5rem;     /* 24px */
--font-size-h4: 1.25rem;    /* 20px */

/* Body Text */
--font-size-large: 1.125rem; /* 18px */
--font-size-base: 1rem;      /* 16px */
--font-size-small: 0.875rem; /* 14px */
--font-size-xs: 0.75rem;     /* 12px */

/* Line Heights */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

## Spacing System

### Base Units
```css
/* Spacing scale based on 8px grid */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

## Grid System

### Responsive Breakpoints
```css
/* Mobile-first responsive design */
--breakpoint-xs: 0px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Grid Configuration
- **12-column grid system**
- **Flexible gutters**: 16px mobile, 24px tablet, 32px desktop
- **Container max-widths**: Auto-responsive with comfortable reading widths

## Core Interaction Patterns

### Animation Principles
- **Duration**: 200-300ms for micro-interactions, 400-500ms for larger transitions
- **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)` for most transitions
- **Reduced Motion**: Respect `prefers-reduced-motion` media query

### Focus Management
- **Focus rings**: 2px solid blue with 2px offset
- **Keyboard navigation**: Logical tab order with skip links
- **Focus trapping**: Modal and dropdown focus management

### State Transitions
```css
/* Standard transition for interactive elements */
.geist-interactive {
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Hover states */
.geist-button:hover {
  transform: translateY(-1px);
}

/* Loading states */
.geist-loading {
  opacity: 0.6;
  cursor: not-allowed;
}
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus indicators**: Visible and high-contrast focus states
- **Screen reader support**: Proper ARIA labels and roles
- **Keyboard navigation**: Full functionality without mouse

### Semantic HTML
- Use proper heading hierarchy (h1-h6)
- Form labels properly associated with inputs
- Button vs link semantic distinction
- Landmark roles for page structure

## Implementation Guidelines

### CSS Architecture
```css
/* Component naming convention */
.geist-[component]
.geist-[component]--[variant]
.geist-[component]__[element]
.geist-[component]__[element]--[modifier]

/* Example */
.geist-button
.geist-button--primary
.geist-button__icon
.geist-button__icon--left
```

### Responsive Design
- **Mobile-first approach**: Base styles for mobile, enhance for larger screens
- **Flexible components**: Use relative units (rem, em, %) where appropriate
- **Touch targets**: Minimum 44px for interactive elements on mobile

### Performance Considerations
- **Critical CSS**: Inline critical component styles
- **Progressive enhancement**: Base functionality without JavaScript
- **Reduced motion**: Respect user preferences for animation

## Usage Constraints for UX Patterns

### What to Use (Design System Elements)
- ✅ Color tokens and theme variables
- ✅ Typography scale and font families
- ✅ Spacing system and grid layout
- ✅ Interaction states and animations
- ✅ Accessibility patterns and ARIA attributes

### What to Innovate (UX Pattern Focus)
- 🚀 Information architecture and content organization
- 🚀 Workflow optimization and task completion paths
- 🚀 Progressive disclosure and contextual revelation
- 🚀 Error prevention and recovery patterns
- 🚀 Multi-step process organization
- 🚀 Contextual help and guidance systems
- 🚀 Smart defaults and personalization
- 🚀 Cross-component interaction patterns

This core foundation provides the visual framework while enabling deep exploration of functional UX patterns within consistent, accessible, and performant constraints.

**For detailed component specifications, reference:**
- `geist-components.md` - Component overview and usage guidance
- `geist-forms.md` - Form component details
- `geist-layout.md` - Layout component details
- `geist-feedback.md` - Feedback component details
- `geist-status.md` - Status component details
- `geist-data.md` - Data display component details
- `geist-information.md` - Information component details