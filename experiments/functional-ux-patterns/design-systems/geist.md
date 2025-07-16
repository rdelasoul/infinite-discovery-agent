# Vercel Geist Design System Specification

## Overview

Vercel's Geist design system for building consistent, accessible, and delightful web experiences. This specification provides the visual constraints and component library for functional UX pattern exploration.

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

## Component Library

### Form Components

#### Button
```html
<!-- Primary button -->
<button class="geist-button geist-button--primary">
  Primary Action
</button>

<!-- Secondary button -->
<button class="geist-button geist-button--secondary">
  Secondary Action
</button>

<!-- Ghost button -->
<button class="geist-button geist-button--ghost">
  Ghost Action
</button>
```

**States**: Default, hover, active, disabled, loading
**Sizes**: Small (32px), medium (40px), large (48px)

#### Input Fields
```html
<!-- Text input -->
<div class="geist-input-group">
  <label class="geist-label">Email Address</label>
  <input type="email" class="geist-input" placeholder="you@example.com">
</div>

<!-- Input with prefix/suffix -->
<div class="geist-input-group">
  <input type="url" class="geist-input" placeholder="my-site">
  <span class="geist-input-suffix">.vercel.app</span>
</div>
```

#### Select/Dropdown
```html
<div class="geist-select">
  <select class="geist-select-input">
    <option>Select option</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

#### Checkbox & Switch
```html
<!-- Checkbox -->
<label class="geist-checkbox">
  <input type="checkbox">
  <span class="geist-checkbox-checkmark"></span>
  Enable notifications
</label>

<!-- Switch -->
<label class="geist-switch">
  <input type="checkbox">
  <span class="geist-switch-slider"></span>
</label>
```

#### Radio
```html
<!-- Radio group -->
<fieldset class="geist-radio-group">
  <legend class="geist-radio-group-label">Select an option</legend>
  <div class="geist-radio-group-items">
    <label class="geist-radio">
      <input type="radio" name="option" value="one" class="geist-radio-input">
      <span class="geist-radio-indicator"></span>
      <span class="geist-radio-label">Option 1</span>
    </label>
    <label class="geist-radio">
      <input type="radio" name="option" value="two" class="geist-radio-input">
      <span class="geist-radio-indicator"></span>
      <span class="geist-radio-label">Option 2</span>
    </label>
    <label class="geist-radio">
      <input type="radio" name="option" value="three" class="geist-radio-input">
      <span class="geist-radio-indicator"></span>
      <span class="geist-radio-label">Option 3</span>
    </label>
  </div>
</fieldset>

<!-- Disabled radio group -->
<fieldset class="geist-radio-group geist-radio-group--disabled" disabled>
  <legend class="geist-radio-group-label">Disabled options</legend>
  <div class="geist-radio-group-items">
    <label class="geist-radio geist-radio--disabled">
      <input type="radio" name="disabled-option" value="one" disabled>
      <span class="geist-radio-indicator"></span>
      <span class="geist-radio-label">Disabled Option 1</span>
    </label>
  </div>
</fieldset>

<!-- Required radio group -->
<fieldset class="geist-radio-group geist-radio-group--required">
  <legend class="geist-radio-group-label">Required selection *</legend>
  <div class="geist-radio-group-items">
    <label class="geist-radio">
      <input type="radio" name="required-option" value="one" required>
      <span class="geist-radio-indicator"></span>
      <span class="geist-radio-label">Required Option 1</span>
    </label>
  </div>
</fieldset>
```

#### Textarea
```html
<!-- Default textarea -->
<div class="geist-textarea-group">
  <label class="geist-label">Message</label>
  <textarea class="geist-textarea" placeholder="Enter your message..." rows="4"></textarea>
</div>

<!-- Textarea with description -->
<div class="geist-textarea-group">
  <label class="geist-label">Feedback</label>
  <p class="geist-description">Please provide detailed feedback about your experience.</p>
  <textarea class="geist-textarea" placeholder="Share your thoughts..." rows="6"></textarea>
</div>

<!-- Textarea sizes -->
<textarea class="geist-textarea geist-textarea--xsmall" rows="3"></textarea>
<textarea class="geist-textarea geist-textarea--small" rows="4"></textarea>
<textarea class="geist-textarea geist-textarea--medium" rows="5"></textarea>
<textarea class="geist-textarea geist-textarea--large" rows="6"></textarea>

<!-- Textarea with error -->
<div class="geist-textarea-group geist-textarea-group--error">
  <label class="geist-label">Description</label>
  <textarea class="geist-textarea geist-textarea--error" placeholder="Description is required..." rows="4"></textarea>
  <span class="geist-error-message">This field is required</span>
</div>

<!-- Disabled textarea -->
<textarea class="geist-textarea geist-textarea--disabled" disabled placeholder="This field is disabled" rows="4"></textarea>

<!-- Resizable textarea -->
<textarea class="geist-textarea geist-textarea--resizable" placeholder="Resizable textarea..." rows="4" style="resize: vertical;"></textarea>
```

#### Description
```html
<!-- Form field description -->
<div class="geist-description">
  <h4 class="geist-description-title">API Configuration</h4>
  <p class="geist-description-content">Configure your API endpoints and authentication settings. These values will be used across all integrations.</p>
  <div class="geist-description-tooltip">
    <span class="geist-description-tooltip-trigger">?</span>
    <div class="geist-description-tooltip-content">Additional context about API configuration settings and security considerations.</div>
  </div>
</div>

<!-- Simple description -->
<p class="geist-description-text">Enter your email address to receive notifications about account activity.</p>

<!-- Description with icon -->
<div class="geist-description geist-description--with-icon">
  <svg class="geist-description-icon"><!-- Info icon --></svg>
  <span class="geist-description-text">This setting affects all team members and cannot be undone.</span>
</div>

<!-- Warning description -->
<div class="geist-description geist-description--warning">
  <svg class="geist-description-icon"><!-- Warning icon --></svg>
  <span class="geist-description-text">Changing this setting will log out all active sessions.</span>
</div>

<!-- Success description -->
<div class="geist-description geist-description--success">
  <svg class="geist-description-icon"><!-- Check icon --></svg>
  <span class="geist-description-text">Your configuration has been saved successfully.</span>
</div>
```

### Typography Components

#### Text
```html
<!-- Text sizes -->
<p class="geist-text geist-text--48">Large heading text (48px)</p>
<p class="geist-text geist-text--32">Section heading (32px)</p>
<p class="geist-text geist-text--24">Subsection heading (24px)</p>
<p class="geist-text geist-text--20">Large body text (20px)</p>
<p class="geist-text geist-text--16">Normal body text (16px)</p>
<p class="geist-text geist-text--14">Small body text (14px)</p>
<p class="geist-text geist-text--12">Caption text (12px)</p>
<p class="geist-text geist-text--10">Fine print (10px)</p>

<!-- Text semantic variants -->
<h1 class="geist-text geist-text--heading-72">Major Heading</h1>
<h2 class="geist-text geist-text--heading-56">Section Heading</h2>
<h3 class="geist-text geist-text--heading-40">Subsection Heading</h3>
<h4 class="geist-text geist-text--heading-32">Content Heading</h4>

<!-- Text weights -->
<p class="geist-text geist-text--16 geist-text--light">Light weight text</p>
<p class="geist-text geist-text--16 geist-text--normal">Normal weight text</p>
<p class="geist-text geist-text--16 geist-text--medium">Medium weight text</p>
<p class="geist-text geist-text--16 geist-text--semibold">Semibold weight text</p>
<p class="geist-text geist-text--16 geist-text--bold">Bold weight text</p>

<!-- Button text variants -->
<span class="geist-text geist-text--button-16">Button Large</span>
<span class="geist-text geist-text--button-14">Button Medium</span>
<span class="geist-text geist-text--button-12">Button Small</span>

<!-- Label text variants -->
<label class="geist-text geist-text--label-20">Form Label Large</label>
<label class="geist-text geist-text--label-16">Form Label Medium</label>
<label class="geist-text geist-text--label-14">Form Label Small</label>

<!-- Copy text variants -->
<p class="geist-text geist-text--copy-24">Large copy text for marketing</p>
<p class="geist-text geist-text--copy-20">Medium copy text</p>
<p class="geist-text geist-text--copy-18">Standard copy text</p>
<p class="geist-text geist-text--copy-16">Small copy text</p>

<!-- Responsive text -->
<p class="geist-text geist-text--responsive" data-sm="24" data-md="32" data-lg="48">
  Responsive text that scales with breakpoints
</p>

<!-- Text colors -->
<p class="geist-text geist-text--16 geist-text--gray-1000">Primary text color</p>
<p class="geist-text geist-text--16 geist-text--gray-700">Secondary text color</p>
<p class="geist-text geist-text--16 geist-text--gray-500">Muted text color</p>
<p class="geist-text geist-text--16 geist-text--blue-600">Link text color</p>
<p class="geist-text geist-text--16 geist-text--red-600">Error text color</p>
<p class="geist-text geist-text--16 geist-text--green-600">Success text color</p>
```

**Usage**: All text content with semantic meaning and responsive scaling
**Variants**: Size-based, semantic, weight-based, and color variants

### Layout Components

#### Stack
```html
<!-- Vertical stack with default gap -->
<div class="geist-stack geist-stack--vertical">
  <div class="geist-stack-item">Item 1</div>
  <div class="geist-stack-item">Item 2</div>
  <div class="geist-stack-item">Item 3</div>
</div>

<!-- Horizontal stack -->
<div class="geist-stack geist-stack--horizontal">
  <div class="geist-stack-item">Item 1</div>
  <div class="geist-stack-item">Item 2</div>
  <div class="geist-stack-item">Item 3</div>
</div>

<!-- Stack with custom gaps -->
<div class="geist-stack geist-stack--vertical geist-stack--gap-2">
  <div class="geist-stack-item">Tight spacing (8px)</div>
  <div class="geist-stack-item">Between items</div>
</div>

<div class="geist-stack geist-stack--vertical geist-stack--gap-4">
  <div class="geist-stack-item">Normal spacing (16px)</div>
  <div class="geist-stack-item">Between items</div>
</div>

<div class="geist-stack geist-stack--vertical geist-stack--gap-8">
  <div class="geist-stack-item">Large spacing (32px)</div>
  <div class="geist-stack-item">Between items</div>
</div>

<!-- Stack with alignment -->
<div class="geist-stack geist-stack--horizontal geist-stack--align-center">
  <div class="geist-stack-item">Centered</div>
  <div class="geist-stack-item">Alignment</div>
</div>

<div class="geist-stack geist-stack--horizontal geist-stack--align-start">
  <div class="geist-stack-item">Start</div>
  <div class="geist-stack-item">Aligned</div>
</div>

<div class="geist-stack geist-stack--horizontal geist-stack--align-end">
  <div class="geist-stack-item">End</div>
  <div class="geist-stack-item">Aligned</div>
</div>

<!-- Stack with justify content -->
<div class="geist-stack geist-stack--horizontal geist-stack--justify-between">
  <div class="geist-stack-item">Space</div>
  <div class="geist-stack-item">Between</div>
</div>

<div class="geist-stack geist-stack--horizontal geist-stack--justify-around">
  <div class="geist-stack-item">Space</div>
  <div class="geist-stack-item">Around</div>
</div>

<!-- Responsive stack -->
<div class="geist-stack geist-stack--responsive">
  <div class="geist-stack-item">Responsive</div>
  <div class="geist-stack-item">Layout</div>
</div>
```

**Usage**: Layout and spacing management for component arrangement
**Directions**: Vertical, horizontal with flexible gap and alignment options

#### Grid
```html
<!-- 12-column grid -->
<div class="geist-grid">
  <div class="geist-grid-col geist-grid-col--12">Full width</div>
  <div class="geist-grid-col geist-grid-col--6">Half width</div>
  <div class="geist-grid-col geist-grid-col--6">Half width</div>
  <div class="geist-grid-col geist-grid-col--4">Third width</div>
  <div class="geist-grid-col geist-grid-col--4">Third width</div>
  <div class="geist-grid-col geist-grid-col--4">Third width</div>
</div>

<!-- Responsive grid columns -->
<div class="geist-grid">
  <div class="geist-grid-col geist-grid-col--12 geist-grid-col--md-6 geist-grid-col--lg-4">
    Responsive: 12 cols (mobile), 6 cols (tablet), 4 cols (desktop)
  </div>
  <div class="geist-grid-col geist-grid-col--12 geist-grid-col--md-6 geist-grid-col--lg-4">
    Same responsive behavior
  </div>
  <div class="geist-grid-col geist-grid-col--12 geist-grid-col--md-12 geist-grid-col--lg-4">
    Full width on mobile/tablet, 4 cols on desktop
  </div>
</div>

<!-- Grid with gaps -->
<div class="geist-grid geist-grid--gap-4">
  <div class="geist-grid-col geist-grid-col--6">With gap</div>
  <div class="geist-grid-col geist-grid-col--6">Between columns</div>
</div>

<!-- Grid alignment -->
<div class="geist-grid geist-grid--align-center">
  <div class="geist-grid-col geist-grid-col--4">Centered</div>
  <div class="geist-grid-col geist-grid-col--4">Grid</div>
  <div class="geist-grid-col geist-grid-col--4">Content</div>
</div>

<!-- Auto-fit grid -->
<div class="geist-grid geist-grid--auto-fit">
  <div class="geist-grid-item">Auto</div>
  <div class="geist-grid-item">Sizing</div>
  <div class="geist-grid-item">Items</div>
  <div class="geist-grid-item">Based</div>
  <div class="geist-grid-item">On</div>
  <div class="geist-grid-item">Content</div>
</div>
```

**Usage**: Responsive grid layouts with flexible column sizing
**Features**: 12-column system, responsive breakpoints, auto-sizing

#### Modal
```html
<div class="geist-modal-backdrop">
  <div class="geist-modal">
    <div class="geist-modal-header">
      <h3>Modal Title</h3>
      <button class="geist-modal-close">×</button>
    </div>
    <div class="geist-modal-body">
      <!-- Content -->
    </div>
    <div class="geist-modal-footer">
      <button class="geist-button geist-button--secondary">Cancel</button>
      <button class="geist-button geist-button--primary">Confirm</button>
    </div>
  </div>
</div>
```

#### Card
```html
<div class="geist-card">
  <div class="geist-card-header">
    <h4>Card Title</h4>
  </div>
  <div class="geist-card-body">
    <!-- Content -->
  </div>
  <div class="geist-card-footer">
    <!-- Actions -->
  </div>
</div>
```

#### Tabs
```html
<div class="geist-tabs">
  <div class="geist-tabs-nav">
    <button class="geist-tab geist-tab--active">Overview</button>
    <button class="geist-tab">Settings</button>
    <button class="geist-tab">Analytics</button>
  </div>
  <div class="geist-tab-content">
    <!-- Tab panel content -->
  </div>
</div>
```

### Feedback Components

#### Toast/Notification
```html
<div class="geist-toast geist-toast--success">
  <div class="geist-toast-content">
    <span class="geist-toast-message">Successfully updated</span>
  </div>
</div>
```

**Types**: Success, error, warning, info
**Positions**: Top-right, top-center, bottom-right, bottom-center

#### Loading States
```html
<!-- Spinner -->
<div class="geist-spinner"></div>

<!-- Skeleton -->
<div class="geist-skeleton geist-skeleton--text"></div>
<div class="geist-skeleton geist-skeleton--circle"></div>
<div class="geist-skeleton geist-skeleton--rect"></div>
```

#### Tooltip
```html
<div class="geist-tooltip-trigger">
  Hover me
  <div class="geist-tooltip">Helpful tooltip text</div>
</div>
```

### Status & Information Components

#### Badge
```html
<!-- Status badges -->
<span class="geist-badge geist-badge--gray">Default</span>
<span class="geist-badge geist-badge--gray-subtle">Gray Subtle</span>
<span class="geist-badge geist-badge--blue">Active</span>
<span class="geist-badge geist-badge--blue-subtle">Info</span>
<span class="geist-badge geist-badge--green">Success</span>
<span class="geist-badge geist-badge--green-subtle">Success Subtle</span>
<span class="geist-badge geist-badge--amber">Warning</span>
<span class="geist-badge geist-badge--amber-subtle">Warning Subtle</span>
<span class="geist-badge geist-badge--red">Error</span>
<span class="geist-badge geist-badge--red-subtle">Error Subtle</span>

<!-- Special badges -->
<span class="geist-badge geist-badge--purple">Featured</span>
<span class="geist-badge geist-badge--purple-subtle">Purple Subtle</span>
<span class="geist-badge geist-badge--pink">Special</span>
<span class="geist-badge geist-badge--pink-subtle">Pink Subtle</span>
<span class="geist-badge geist-badge--teal">New</span>
<span class="geist-badge geist-badge--teal-subtle">Teal Subtle</span>
<span class="geist-badge geist-badge--inverted">Inverted</span>

<!-- Product badges -->
<span class="geist-badge geist-badge--trial">Trial</span>
<span class="geist-badge geist-badge--turbo">Turborepo</span>
```

**Usage**: Status indicators, categorization labels, feature highlighting
**Variants**: Color-coded for different message types and brand elements

#### Avatar
```html
<!-- Single avatar -->
<div class="geist-avatar geist-avatar--32">
  <img src="/avatar.jpg" alt="User Name" class="geist-avatar-image">
  <div class="geist-avatar-fallback">UN</div>
</div>

<!-- Avatar sizes -->
<div class="geist-avatar geist-avatar--24">...</div>
<div class="geist-avatar geist-avatar--32">...</div>
<div class="geist-avatar geist-avatar--48">...</div>
<div class="geist-avatar geist-avatar--64">...</div>

<!-- Avatar group -->
<div class="geist-avatar-group">
  <div class="geist-avatar geist-avatar--32">
    <img src="/user1.jpg" alt="User 1">
  </div>
  <div class="geist-avatar geist-avatar--32">
    <img src="/user2.jpg" alt="User 2">
  </div>
  <div class="geist-avatar geist-avatar--32">
    <img src="/user3.jpg" alt="User 3">
  </div>
  <div class="geist-avatar geist-avatar--32 geist-avatar--overflow">
    <span class="geist-avatar-count">+2</span>
  </div>
</div>

<!-- Platform avatars -->
<div class="geist-avatar geist-avatar--32 geist-avatar--github">
  <img src="https://github.com/username.png" alt="GitHub User">
</div>
<div class="geist-avatar geist-avatar--32 geist-avatar--gitlab">
  <img src="https://gitlab.com/uploads/-/system/user/avatar/123/avatar.png" alt="GitLab User">
</div>

<!-- Avatar with icon -->
<div class="geist-avatar geist-avatar--32 geist-avatar--icon">
  <div class="geist-avatar-icon">
    <svg class="geist-icon"><!-- Icon SVG --></svg>
  </div>
  <div class="geist-avatar-indicator">
    <svg class="geist-icon geist-icon--small"><!-- Indicator icon --></svg>
  </div>
</div>
```

**Usage**: User identification, team members, collaboration indicators
**Sizes**: 24px, 32px, 48px, 64px with responsive scaling

### Data Display Components

#### Table
```html
<div class="geist-table-container">
  <table class="geist-table">
    <thead class="geist-table-header">
      <tr class="geist-table-row">
        <th class="geist-table-head">Name</th>
        <th class="geist-table-head">Status</th>
        <th class="geist-table-head">Last Updated</th>
        <th class="geist-table-head">Actions</th>
      </tr>
    </thead>
    <tbody class="geist-table-body">
      <tr class="geist-table-row">
        <td class="geist-table-cell">
          <div class="geist-table-cell-content">
            <span class="geist-table-primary">Project Alpha</span>
            <span class="geist-table-secondary">Description text</span>
          </div>
        </td>
        <td class="geist-table-cell">
          <span class="geist-badge geist-badge--green">Active</span>
        </td>
        <td class="geist-table-cell">
          <span class="geist-table-timestamp">2 hours ago</span>
        </td>
        <td class="geist-table-cell">
          <div class="geist-table-actions">
            <button class="geist-button geist-button--ghost geist-button--small">Edit</button>
            <button class="geist-button geist-button--ghost geist-button--small">Delete</button>
          </div>
        </td>
      </tr>
      <tr class="geist-table-row">
        <td class="geist-table-cell">
          <div class="geist-table-cell-content">
            <span class="geist-table-primary">Project Beta</span>
            <span class="geist-table-secondary">Another description</span>
          </div>
        </td>
        <td class="geist-table-cell">
          <span class="geist-badge geist-badge--amber">Pending</span>
        </td>
        <td class="geist-table-cell">
          <span class="geist-table-timestamp">1 day ago</span>
        </td>
        <td class="geist-table-cell">
          <div class="geist-table-actions">
            <button class="geist-button geist-button--ghost geist-button--small">Edit</button>
            <button class="geist-button geist-button--ghost geist-button--small">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Striped table variant -->
<table class="geist-table geist-table--striped">
  <!-- Same structure as above -->
</table>

<!-- Compact table variant -->
<table class="geist-table geist-table--compact">
  <!-- Same structure with reduced padding -->
</table>
```

**Usage**: Data organization, comparison, detailed information display
**Variants**: Default, striped, compact with responsive horizontal scrolling

#### Drawer
```html
<!-- Drawer overlay -->
<div class="geist-drawer-backdrop geist-drawer-backdrop--visible">
  <div class="geist-drawer geist-drawer--bottom">
    <div class="geist-drawer-header">
      <div class="geist-drawer-handle"></div>
      <h3 class="geist-drawer-title">Drawer Title</h3>
      <button class="geist-drawer-close">
        <svg class="geist-icon"><!-- Close icon --></svg>
      </button>
    </div>
    <div class="geist-drawer-content">
      <div class="geist-drawer-section">
        <h4>Section Title</h4>
        <p>Drawer content goes here. This is a flexible container for any type of content.</p>
      </div>
      <div class="geist-drawer-section">
        <!-- More content sections -->
      </div>
    </div>
    <div class="geist-drawer-footer">
      <button class="geist-button geist-button--secondary">Cancel</button>
      <button class="geist-button geist-button--primary">Save Changes</button>
    </div>
  </div>
</div>

<!-- Right-side drawer -->
<div class="geist-drawer geist-drawer--right">
  <!-- Same content structure -->
</div>

<!-- Left-side drawer -->
<div class="geist-drawer geist-drawer--left">
  <!-- Same content structure -->
</div>

<!-- Custom height drawer -->
<div class="geist-drawer geist-drawer--bottom geist-drawer--height-200">
  <!-- Content with fixed 200px height -->
</div>
```

**Usage**: Side panels, contextual information, alternative to modals
**Positions**: Bottom, right, left with customizable height and content

#### Progress
```html
<!-- Linear progress bar -->
<div class="geist-progress">
  <div class="geist-progress-bar" style="width: 65%"></div>
</div>

<!-- Progress with label -->
<div class="geist-progress-container">
  <div class="geist-progress-label">
    <span>Upload Progress</span>
    <span class="geist-progress-percentage">65%</span>
  </div>
  <div class="geist-progress">
    <div class="geist-progress-bar" style="width: 65%"></div>
  </div>
</div>

<!-- Progress states -->
<div class="geist-progress geist-progress--success">
  <div class="geist-progress-bar" style="width: 100%"></div>
</div>
<div class="geist-progress geist-progress--error">
  <div class="geist-progress-bar" style="width: 45%"></div>
</div>
<div class="geist-progress geist-progress--warning">
  <div class="geist-progress-bar" style="width: 80%"></div>
</div>

<!-- Step indicator -->
<div class="geist-progress-steps">
  <div class="geist-progress-step geist-progress-step--completed">
    <div class="geist-progress-step-indicator">1</div>
    <span class="geist-progress-step-label">Account Setup</span>
  </div>
  <div class="geist-progress-step geist-progress-step--completed">
    <div class="geist-progress-step-indicator">2</div>
    <span class="geist-progress-step-label">Profile Information</span>
  </div>
  <div class="geist-progress-step geist-progress-step--active">
    <div class="geist-progress-step-indicator">3</div>
    <span class="geist-progress-step-label">Verification</span>
  </div>
  <div class="geist-progress-step">
    <div class="geist-progress-step-indicator">4</div>
    <span class="geist-progress-step-label">Complete</span>
  </div>
</div>

<!-- Circular progress -->
<div class="geist-progress-circle">
  <svg class="geist-progress-circle-svg" viewBox="0 0 36 36">
    <path class="geist-progress-circle-bg" d="M18 2.0845..."></path>
    <path class="geist-progress-circle-bar" stroke-dasharray="65, 100" d="M18 2.0845..."></path>
  </svg>
  <div class="geist-progress-circle-text">65%</div>
</div>
```

**Usage**: Loading states, completion tracking, multi-step processes
**Variants**: Linear, circular, stepped with success/error/warning states

### Information & State Components

#### Note
```html
<!-- Default note -->
<div class="geist-note">
  <div class="geist-note-content">
    <p>This is an important note with general information.</p>
  </div>
</div>

<!-- Note types -->
<div class="geist-note geist-note--success">
  <div class="geist-note-icon">
    <svg class="geist-icon"><!-- Success icon --></svg>
  </div>
  <div class="geist-note-content">
    <p>Your changes have been saved successfully.</p>
  </div>
</div>

<div class="geist-note geist-note--error">
  <div class="geist-note-icon">
    <svg class="geist-icon"><!-- Error icon --></svg>
  </div>
  <div class="geist-note-content">
    <p>There was an error processing your request.</p>
  </div>
</div>

<div class="geist-note geist-note--warning">
  <div class="geist-note-icon">
    <svg class="geist-icon"><!-- Warning icon --></svg>
  </div>
  <div class="geist-note-content">
    <p>This action cannot be undone. Please proceed with caution.</p>
  </div>
</div>

<div class="geist-note geist-note--secondary">
  <div class="geist-note-content">
    <p>Additional information that might be helpful to know.</p>
  </div>
</div>

<div class="geist-note geist-note--violet">
  <div class="geist-note-content">
    <p>Special highlighted information with violet theme.</p>
  </div>
</div>

<div class="geist-note geist-note--cyan">
  <div class="geist-note-content">
    <p>Special highlighted information with cyan theme.</p>
  </div>
</div>

<!-- Note sizes -->
<div class="geist-note geist-note--small">
  <div class="geist-note-content">
    <p>Small note with compact spacing.</p>
  </div>
</div>

<div class="geist-note geist-note--large">
  <div class="geist-note-content">
    <p>Large note with generous spacing for important information.</p>
  </div>
</div>

<!-- Note with action -->
<div class="geist-note geist-note--success">
  <div class="geist-note-icon">
    <svg class="geist-icon"><!-- Success icon --></svg>
  </div>
  <div class="geist-note-content">
    <p>Your trial period is ending soon.</p>
  </div>
  <div class="geist-note-action">
    <button class="geist-button geist-button--small">Upgrade</button>
  </div>
</div>

<!-- Filled note variants -->
<div class="geist-note geist-note--success geist-note--fill">
  <div class="geist-note-content">
    <p>Filled success note with background color.</p>
  </div>
</div>

<div class="geist-note geist-note--error geist-note--fill">
  <div class="geist-note-content">
    <p>Filled error note with background color.</p>
  </div>
</div>
```

**Usage**: Informational messages, alerts, callouts, and status communication
**Types**: Default, success, error, warning, secondary, violet, cyan
**Variants**: Small, large, filled, with actions

#### Empty State
```html
<!-- Basic empty state -->
<div class="geist-empty-state">
  <div class="geist-empty-state-icon">
    <svg class="geist-icon geist-icon--large"><!-- Empty state icon --></svg>
  </div>
  <div class="geist-empty-state-content">
    <h3 class="geist-empty-state-title">No data available</h3>
    <p class="geist-empty-state-description">
      There's nothing to display here yet. Get started by adding your first item.
    </p>
  </div>
</div>

<!-- Empty state with action -->
<div class="geist-empty-state">
  <div class="geist-empty-state-icon">
    <svg class="geist-icon geist-icon--large"><!-- Folder icon --></svg>
  </div>
  <div class="geist-empty-state-content">
    <h3 class="geist-empty-state-title">No projects found</h3>
    <p class="geist-empty-state-description">
      Create your first project to get started with the platform.
    </p>
    <div class="geist-empty-state-actions">
      <button class="geist-button geist-button--primary">Create Project</button>
      <button class="geist-button geist-button--ghost">Import Project</button>
    </div>
  </div>
</div>

<!-- Empty state variants -->
<div class="geist-empty-state geist-empty-state--search">
  <div class="geist-empty-state-icon">
    <svg class="geist-icon geist-icon--large"><!-- Search icon --></svg>
  </div>
  <div class="geist-empty-state-content">
    <h3 class="geist-empty-state-title">No results found</h3>
    <p class="geist-empty-state-description">
      Try adjusting your search terms or filters.
    </p>
    <div class="geist-empty-state-actions">
      <button class="geist-button geist-button--secondary">Clear filters</button>
    </div>
  </div>
</div>

<div class="geist-empty-state geist-empty-state--error">
  <div class="geist-empty-state-icon">
    <svg class="geist-icon geist-icon--large"><!-- Error icon --></svg>
  </div>
  <div class="geist-empty-state-content">
    <h3 class="geist-empty-state-title">Unable to load data</h3>
    <p class="geist-empty-state-description">
      Something went wrong while fetching your data. Please try again.
    </p>
    <div class="geist-empty-state-actions">
      <button class="geist-button geist-button--primary">Retry</button>
    </div>
  </div>
</div>

<!-- Onboarding empty state -->
<div class="geist-empty-state geist-empty-state--onboarding">
  <div class="geist-empty-state-icon">
    <svg class="geist-icon geist-icon--large"><!-- Welcome icon --></svg>
  </div>
  <div class="geist-empty-state-content">
    <h3 class="geist-empty-state-title">Welcome to your dashboard</h3>
    <p class="geist-empty-state-description">
      Let's get you set up with your first integration. It only takes a few minutes.
    </p>
    <div class="geist-empty-state-actions">
      <button class="geist-button geist-button--primary">Get Started</button>
    </div>
    <div class="geist-empty-state-links">
      <a href="#" class="geist-link">View documentation</a>
      <a href="#" class="geist-link">Watch tutorial</a>
    </div>
  </div>
</div>
```

**Usage**: No data states, search results, error states, onboarding flows
**Types**: Default, search, error, onboarding with contextual messaging

#### Error
```html
<!-- General error message -->
<div class="geist-error">
  <div class="geist-error-icon">
    <svg class="geist-icon"><!-- Error icon --></svg>
  </div>
  <div class="geist-error-content">
    <h4 class="geist-error-title">Something went wrong</h4>
    <p class="geist-error-message">An unexpected error occurred. Please try again later.</p>
  </div>
</div>

<!-- Form field error -->
<div class="geist-error geist-error--field">
  <span class="geist-error-message">This field is required</span>
</div>

<!-- API error with details -->
<div class="geist-error geist-error--api">
  <div class="geist-error-icon">
    <svg class="geist-icon"><!-- Warning icon --></svg>
  </div>
  <div class="geist-error-content">
    <h4 class="geist-error-title">API Error</h4>
    <p class="geist-error-message">Failed to connect to the server. Please check your connection and try again.</p>
    <details class="geist-error-details">
      <summary>Technical details</summary>
      <pre class="geist-error-code">Error 500: Internal Server Error</pre>
    </details>
  </div>
  <div class="geist-error-actions">
    <button class="geist-button geist-button--secondary geist-button--small">Retry</button>
  </div>
</div>

<!-- Validation errors -->
<div class="geist-error geist-error--validation">
  <div class="geist-error-content">
    <h4 class="geist-error-title">Validation Failed</h4>
    <ul class="geist-error-list">
      <li class="geist-error-item">Email address is required</li>
      <li class="geist-error-item">Password must be at least 8 characters</li>
      <li class="geist-error-item">Please accept the terms of service</li>
    </ul>
  </div>
</div>

<!-- Network error -->
<div class="geist-error geist-error--network">
  <div class="geist-error-icon">
    <svg class="geist-icon"><!-- Network icon --></svg>
  </div>
  <div class="geist-error-content">
    <h4 class="geist-error-title">Connection Error</h4>
    <p class="geist-error-message">Unable to connect to the internet. Please check your network connection.</p>
  </div>
  <div class="geist-error-actions">
    <button class="geist-button geist-button--primary geist-button--small">Check Connection</button>
  </div>
</div>

<!-- Permission error -->
<div class="geist-error geist-error--permission">
  <div class="geist-error-icon">
    <svg class="geist-icon"><!-- Lock icon --></svg>
  </div>
  <div class="geist-error-content">
    <h4 class="geist-error-title">Access Denied</h4>
    <p class="geist-error-message">You don't have permission to perform this action. Please contact your administrator.</p>
  </div>
</div>

<!-- Inline error for specific components -->
<div class="geist-input-group geist-input-group--error">
  <label class="geist-label">Email</label>
  <input type="email" class="geist-input geist-input--error" value="invalid-email">
  <div class="geist-error geist-error--inline">
    <span class="geist-error-message">Please enter a valid email address</span>
  </div>
</div>
```

**Usage**: Error communication, validation feedback, system failures
**Types**: General, field, API, validation, network, permission, inline errors

## Interaction Patterns

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
- ✅ Component structure and variants
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

### Integration Example
```html
<!-- Use Geist components for visual consistency -->
<div class="geist-card">
  <div class="geist-card-header">
    <h3>Connect Application</h3>
  </div>
  
  <!-- Innovate UX pattern within component constraints -->
  <div class="geist-card-body">
    <!-- Pattern innovation: Progressive disclosure for app permissions -->
    <div class="connection-flow">
      <!-- Smart grouping of permissions by impact level -->
      <!-- Contextual explanations appear on demand -->
      <!-- One-click vs advanced configuration paths -->
    </div>
  </div>
  
  <!-- Use standard action patterns -->
  <div class="geist-card-footer">
    <button class="geist-button geist-button--secondary">Cancel</button>
    <button class="geist-button geist-button--primary">Connect</button>
  </div>
</div>
```

This design system provides the visual foundation while enabling deep exploration of functional UX patterns within consistent, accessible, and performant constraints.