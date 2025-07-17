# Geist Design System - Information & State Components

## Note

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

## Empty State

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

## Error

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