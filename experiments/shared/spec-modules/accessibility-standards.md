# Accessibility Standards Module

## WCAG 2.1 AA Compliance Requirements

### Core Accessibility Principles
- **Perceivable**: Information and UI components must be presentable to users in ways they can perceive
- **Operable**: UI components and navigation must be operable by all users
- **Understandable**: Information and operation of UI must be understandable
- **Robust**: Content must be robust enough to be interpreted by assistive technologies

### Technical Requirements

#### Color and Contrast
- **Text Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text (18px+ or 14px+ bold)
- **UI Elements**: Minimum 3:1 contrast ratio for interactive elements and their states
- **Color Independence**: Never rely solely on color to convey important information
- **Focus Indicators**: High contrast focus rings with minimum 2px outline and 2px offset

#### Keyboard Navigation
- **Tab Order**: Logical tab sequence that follows visual layout
- **Focus Management**: Clear focus indicators on all interactive elements
- **Skip Links**: Allow users to skip repetitive navigation
- **Keyboard Shortcuts**: All functionality accessible via keyboard alone
- **Focus Trapping**: Modal dialogs and dropdowns manage focus appropriately

#### Screen Reader Support
- **Semantic HTML**: Use proper heading hierarchy (h1-h6) and landmark roles
- **ARIA Labels**: Descriptive labels for complex interactive elements
- **ARIA Live Regions**: Announce dynamic content changes appropriately
- **Alternative Text**: Meaningful alt text for images and visual content
- **Form Labels**: Proper association between labels and form controls

#### Responsive and Touch Accessibility
- **Touch Targets**: Minimum 44px x 44px for interactive elements on mobile
- **Viewport Configuration**: Proper meta viewport tag allowing zoom up to 200%
- **Orientation Support**: Content works in both portrait and landscape
- **Motion Sensitivity**: Respect `prefers-reduced-motion` user preference

### Implementation Guidelines

#### HTML Structure
```html
<!-- Use semantic landmarks -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary">
<footer role="contentinfo">

<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

<!-- Form accessibility -->
<label for="email">Email Address</label>
<input type="email" id="email" required aria-describedby="email-help">
<div id="email-help">We'll never share your email</div>
```

#### CSS Accessibility Patterns
```css
/* Focus indicators */
.interactive-element:focus {
  outline: 2px solid #0070f3;
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid;
  }
}

/* Minimum touch targets */
@media (pointer: coarse) {
  .interactive {
    min-height: 44px;
    min-width: 44px;
  }
}
```

#### JavaScript Accessibility
```javascript
// Focus management for modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Trap focus within modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
  
  firstElement.focus();
}

// Announce dynamic content changes
function announceUpdate(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
```

### Testing Requirements

#### Automated Testing
- Run axe-core accessibility scanner
- Validate HTML semantics and ARIA usage
- Check color contrast ratios programmatically
- Verify proper focus order and keyboard navigation

#### Manual Testing
- Navigate entire interface using only keyboard
- Test with actual screen reader software (NVDA, JAWS, VoiceOver)
- Verify functionality with browser zoom at 200%
- Test in high contrast mode and with reduced motion enabled

#### User Testing
- Include users with disabilities in testing process
- Test with various assistive technologies
- Validate real-world usage scenarios
- Gather feedback on cognitive load and usability

### Success Criteria
- **100% keyboard accessible**: All functionality available via keyboard
- **Screen reader compatible**: Meaningful experience with assistive technology
- **WCAG 2.1 AA compliant**: Passes all Level AA success criteria
- **Cross-device accessible**: Works on mobile, tablet, and desktop
- **User-validated**: Tested and approved by users with disabilities