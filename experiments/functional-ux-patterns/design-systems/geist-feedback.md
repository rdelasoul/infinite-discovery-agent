# Geist Design System - Feedback Components

## Toast/Notification

```html
<div class="geist-toast geist-toast--success">
  <div class="geist-toast-content">
    <span class="geist-toast-message">Successfully updated</span>
  </div>
</div>
```

**Types**: Success, error, warning, info
**Positions**: Top-right, top-center, bottom-right, bottom-center

## Loading States

```html
<!-- Spinner -->
<div class="geist-spinner"></div>

<!-- Skeleton -->
<div class="geist-skeleton geist-skeleton--text"></div>
<div class="geist-skeleton geist-skeleton--circle"></div>
<div class="geist-skeleton geist-skeleton--rect"></div>
```

## Tooltip

```html
<div class="geist-tooltip-trigger">
  Hover me
  <div class="geist-tooltip">Helpful tooltip text</div>
</div>
```