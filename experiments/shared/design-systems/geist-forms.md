# Geist Design System - Form Components

## Button

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

## Input Fields

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

## Select/Dropdown

```html
<div class="geist-select">
  <select class="geist-select-input">
    <option>Select option</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

## Checkbox & Switch

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

## Radio

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

## Textarea

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

## Description

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