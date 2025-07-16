# Geist Design System - Layout Components

## Stack

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

## Grid

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

## Modal

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

## Card

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

## Tabs

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

## Text Component

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