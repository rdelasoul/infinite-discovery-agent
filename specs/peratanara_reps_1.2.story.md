# Story 1.2: One-Page Homepage Implementation

## Status
**SUPERSEDED** - This story has been broken down into smaller, focused stories

## Story
**As a** Website Visitor,
**I want** a simple, effective one-page homepage that clearly explains Perantara Reps' value and captures my interest as a potential partner,
**so that** I can quickly understand the company's offerings and take action to engage with them.

## Acceptance Criteria
1. **Fixed Header:** Navigation bar with company name, section links, and "Request Itinerary" CTA button that stays at top of screen.
2. **Hero Section:** Large background image with "Your On-the-Ground NZ DMC" headline, key value propositions subheading, and primary call-to-action button.
3. **About Section ("What We Do"):** Brief centered text explaining core business, followed by three key specializations displayed clearly.
4. **"Why Partner" Section:** Grid of benefit cards highlighting specific advantages (e.g., "Halal-verified network," "48-hour custom quotes").
5. **"How It Works" Section:** Simple 3-step visual guide showing customer engagement process from inquiry to delivery.
6. **Testimonials Section:** Social proof quotes from satisfied partners to build trust and credibility.
7. **Contact Section:** Prominent lead capture form using Netlify Forms with name, email, trip details fields, plus direct email link for immediate contact.
8. **Footer:** Standard footer with copyright and privacy policy link.

## Tasks / Subtasks
- [ ] Task 1: Create homepage layout structure (AC: 1, 2, 8)
  - [ ] Modify `apps/web/src/pages/index.astro` to implement one-page layout
  - [ ] Create fixed header component with navigation and CTA button
  - [ ] Implement hero section with background image and headline
  - [ ] Add footer component with copyright and privacy policy link
  - [ ] Ensure proper semantic HTML structure for accessibility
- [ ] Task 2: Implement core content sections (AC: 3, 4, 5, 6)
  - [ ] Create "What We Do" about section with centered text and specializations
  - [ ] Build "Why Partner" benefits grid with card components
  - [ ] Develop "How It Works" 3-step process section with visual guides
  - [ ] Add testimonials section with partner quotes
  - [ ] Ensure responsive design across all sections
- [ ] Task 3: Build lead capture form with Netlify Forms (AC: 7)
  - [ ] Create HTML form with `netlify` attribute for automatic form handling
  - [ ] Implement form fields: name, email, trip details with proper naming
  - [ ] Add client-side validation for form inputs using progressive enhancement
  - [ ] Style form to match overall page design
  - [ ] Configure Netlify Forms to send email notifications automatically
  - [ ] Add honeypot field for spam protection
- [ ] Task 4: Apply styling and responsive design
  - [ ] Implement Tailwind CSS styling throughout all components
  - [ ] Ensure mobile-first responsive design
  - [ ] Apply brand-consistent color scheme following docs/color-specification.md exactly
  - [ ] Implement typography system following docs/front-end-design-system.yaml scale
  - [ ] Apply component specifications from design system for buttons, cards, forms
  - [ ] Use 8px spacing grid system throughout all layouts
  - [ ] Optimize for performance and accessibility
  - [ ] Test across different screen sizes and browsers
- [ ] Task 5: Create and test interactive components (AC: 1, 7)
  - [ ] Implement navigation menu interactions
  - [ ] Add smooth scrolling for section navigation
  - [ ] Create hover effects for CTA buttons and cards
  - [ ] Implement form interaction states (focus, error, success)
  - [ ] Test all interactive elements for accessibility

## Dev Notes

### **Dependencies**
- **Required:** Story 1.1a (Project & Repository Foundation) - requires basic Astro project structure ✅ **COMPLETED**
- **Required:** Story 1.1c (Basic UI Foundation) - provides layout components and Tailwind CSS setup ✅ **COMPLETED**
- **Optional:** Story 1.1d (Testing Infrastructure) - enables component testing ✅ **COMPLETED**
- **Required:** docs/color-specification.md - Apple-inspired color system with grey foundation and red/blue accents ✅ **COMPLETED**
- **Required:** docs/front-end-design-system.yaml - Complete component specifications and Apple-inspired design patterns ✅ **COMPLETED**
- **Note:** Story 1.3 (Contact Form Backend) is now unnecessary - Netlify Forms handles email notifications automatically

### **Architecture Context**

#### **Technology Requirements**
[Source: architecture/tech-stack.md]
- **Frontend Framework:** Astro ~5.11 for static site generation with SEO optimization
- **UI Library:** React ~19.1 for interactive components (contact form, navigation)
- **Styling:** Tailwind CSS ~4.1 with @tailwindcss/vite plugin integration
- **Language:** TypeScript ~5.8 for type safety and maintainability
- **State Management:** Nano Stores ~0.10 for form state management if needed

#### **Component Architecture Requirements**
[Source: architecture/coding-standards.md]
- **Interactive components** MUST be React components (.tsx) used within Astro (.astro) files
- **Styling** MUST use Tailwind CSS utility classes directly in markup
- **Astro Islands** pattern for client-side interactivity (navigation menu, contact form)
- **Environment Variables** for client-side use MUST be prefixed with `PUBLIC_`

#### **Project Structure Context**
[Source: architecture/unified-project-structure.md]

**File Locations for Implementation:**
- **Homepage:** `apps/web/src/pages/index.astro` - main homepage file
- **Components:** `apps/web/src/components/` - reusable UI components
  - `Header.astro` - fixed navigation header
  - `Hero.astro` - hero section component
  - `ContactForm.astro` - HTML form component with Netlify Forms integration
  - `Footer.astro` - page footer component
- **Layouts:** `apps/web/src/layouts/BaseLayout.astro` - main page layout wrapper
- **Styles:** `apps/web/src/styles/global.css` - global Tailwind CSS imports
- **Assets:** `apps/web/src/assets/` - images processed by Astro
- **Static Assets:** `apps/web/public/` - hero background image, favicon

#### **Design Requirements**
[Source: prd/user-interface-design-goals.md, prd/requirements.md, docs/color-specification.md]
- **Responsive Design:** Fully responsive across mobile, tablet, desktop (FR1)
- **Brand Identity:** Communicate "Global-Local Connector" concept professionally (FR2)
- **Color System:** MUST follow Apple-inspired grey/greyscale foundation with red and blue accents as specified in docs/color-specification.md
- **Design System:** MUST follow complete component specifications, typography, spacing, and interaction patterns as defined in docs/front-end-design-system.yaml
- **Performance:** Target 90+ Lighthouse scores for performance, accessibility, SEO (NFR2)
- **Visual Identity:** Professional, modern, reliable with NZ/Oceania cultural elements
- **Target Devices:** Modern web browsers, all device sizes

#### **Content Requirements**
[Source: prd/epics.md]
- **Hero Headline:** "Your On-the-Ground NZ DMC"
- **Key Specializations:** Three core business areas to highlight
- **Benefits Grid:** Specific advantages like "Halal-verified network," "48-hour custom quotes"
- **Process Steps:** 3-step visual guide for customer engagement
- **Social Proof:** Partner testimonials for credibility
- **CTA Elements:** "Request Itinerary" buttons and lead capture form

#### **Netlify Forms Integration**
[Source: Netlify Forms documentation]
- **Form Setup:** HTML form with `netlify` attribute enables automatic form handling
- **Email Notifications:** Configure in Netlify UI to send submissions to designated email
- **Spam Protection:** Built-in honeypot field and reCAPTCHA integration available
- **Form Fields:** Name, email, trip details with proper field naming for easy processing
- **User Journey:** Support both B2B partner path and B2C influence path from homepage

### **Testing Requirements**
[Source: architecture/testing-strategy.md]
- **Unit Tests:** React components for form validation and interaction logic
- **Component Tests:** Contact form rendering and prop handling
- **E2E Tests:** Homepage navigation, form interaction flow, responsive behavior
- **Test Locations:** 
  - Unit tests co-located: `src/components/ContactForm.test.tsx`
  - E2E tests: `tests/e2e/homepage.spec.ts`

### **Technical Constraints**
- **Performance:** Optimize images and assets for fast loading
- **SEO:** Proper meta tags, semantic HTML structure, alt text for images
- **Accessibility:** WCAG compliance, keyboard navigation, screen reader support
- **Security:** Form validation, no sensitive data exposure, CSRF protection preparation
- **Color Compliance:** ALL components MUST use semantic color classes from docs/color-specification.md (e.g., bg-action-primary for red CTAs, bg-action-secondary for blue links)
- **Design System Compliance:** ALL components MUST follow specifications in docs/front-end-design-system.yaml including typography, spacing, and interaction patterns

### **Content Architecture Notes**
Based on PRD requirements, the homepage must serve two primary user journeys:
1. **B2B Partner Path:** Clear value proposition, partnership benefits, contact form
2. **B2C Influence Path:** Inspirational content showcasing expertise and destinations

The one-page design consolidates these paths while maintaining focus on B2B lead generation as the primary goal.

## Testing

### Definition of Done
- [ ] Homepage displays correctly across all device sizes (mobile, tablet, desktop)
- [ ] All interactive elements function properly (navigation, form, buttons)
- [ ] Contact form validates input and provides user feedback
- [ ] Page achieves 90+ Lighthouse performance score
- [ ] All images have proper alt text for accessibility
- [ ] Page loads within 3 seconds on standard broadband connection
- [ ] All CTA buttons and links are clearly visible and accessible
- [ ] Netlify Forms is properly configured with email notifications enabled
- [ ] Code follows established coding standards and best practices
- [ ] All colors used match exactly the semantic classes defined in docs/color-specification.md
- [ ] Red accents used only for primary CTAs ("Request Itinerary" buttons)
- [ ] Blue accents used only for secondary actions and trust elements
- [ ] Grey foundation used for all backgrounds, text, and non-action elements
- [ ] All components match design system specifications exactly
- [ ] Typography hierarchy follows defined scale from design system
- [ ] Spacing uses 8px grid system consistently throughout
- [ ] Button variants match design system interaction states
- [ ] Card components follow design system layout specifications

### Test Scenarios
1. **Layout and Visual Testing:**
   - Verify fixed header stays in position during scroll
   - Test hero section displays properly with background image
   - Validate grid layouts work correctly on different screen sizes
   - Check color scheme matches docs/color-specification.md exactly
   - Verify red accents only on primary CTAs, blue accents only on secondary actions
   - Confirm grey foundation creates clean, professional appearance
   - Validate typography follows design system scale and hierarchy
   - Test 8px spacing grid consistency across all components
   - Verify button hover/focus states match design system specifications

2. **Interactive Component Testing:**
   - Test navigation menu functionality and smooth scrolling
   - Validate form field interactions (focus, validation, error states)
   - Verify CTA button hover effects and click handlers
   - Test keyboard navigation for accessibility

3. **Content and SEO Testing:**
   - Verify all content sections display with proper hierarchy
   - Test meta tags and page title are correctly set
   - Validate semantic HTML structure for screen readers
   - Check image optimization and alt text implementation

4. **Performance Testing:**
   - Run Lighthouse audit for performance, accessibility, SEO scores
   - Test page load times across different connection speeds
   - Validate image compression and lazy loading if implemented
   - Check for any console errors or warnings

### Sample Tests to Create
1. **Unit Test Example (ContactForm.test.tsx):**
   ```typescript
   import { render, screen, fireEvent } from '@testing-library/react';
   import ContactForm from './ContactForm';
   
   describe('ContactForm Component', () => {
     test('validates required fields', () => {
       render(<ContactForm />);
       const submitButton = screen.getByRole('button', { name: /submit/i });
       fireEvent.click(submitButton);
       expect(screen.getByText(/name is required/i)).toBeInTheDocument();
     });
   });
   ```

2. **E2E Test Example (homepage.spec.ts):**
   ```typescript
   import { test, expect } from '@playwright/test';
   
   test('homepage loads and displays all sections', async ({ page }) => {
     await page.goto('/');
     await expect(page.locator('header')).toBeVisible();
     await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
     await expect(page.locator('[data-testid="contact-form"]')).toBeVisible();
   });
   ```

## Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-07-12 | 1.0 | Initial story creation using BMad Method | Story Creator |

## Dev Agent Record

### Agent Model Used
*To be filled by implementing agent*

### Debug Log References
*To be filled by implementing agent*

### Completion Notes List
*To be filled by implementing agent*

### File List
*To be filled by implementing agent*

## QA Results
*To be filled after implementation and QA review*