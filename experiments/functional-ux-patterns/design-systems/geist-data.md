# Geist Design System - Data Display Components

## Table

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

## Drawer

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

## Progress

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