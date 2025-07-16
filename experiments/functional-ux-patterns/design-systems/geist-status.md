# Geist Design System - Status & Information Components

## Badge

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

## Avatar

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