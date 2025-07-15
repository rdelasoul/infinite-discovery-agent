# **Foundational MVP for Personal Web Presence \- Product Requirements Document (PRD)**

### **Change Log**

| Date | Version | Description | Author |
| :---- | :---- | :---- | :---- |
| 2025-07-14 | 1.0 | Initial PRD draft | John, PM |

## **1\. Goals and Background Context**

### **Goals**

* Successfully build and deploy the single-page MVP to a live URL on Vercel or Netlify.  
* Establish a CI/CD workflow where the main branch auto-deploys to production and preview URLs are generated for pull requests.  
* The layout must be fully responsive, supporting both desktop and mobile views.  
* Achieve excellent performance and accessibility metrics, including Lighthouse scores of 90+ and a sub-150kB initial load size.

### **Background Context**

The primary goal is to launch a modern, professional, and unique online portfolio quickly as an MVP. This portfolio needs to be built on a foundation that can scale for future content like a blog engine and curated project collections. The project addresses the need for a distinctive online presence that stands out from generic portfolio templates, incorporating a specific blend of layout and interactivity inspired by leading designers' sites.

## **2\. Requirements**

### **Functional**

* **FR1: Desktop Layout** \- The site must display a dual-column layout on viewports ≥ 1024px, with a sticky left column (25-30% width) and a scrollable right column (70-75% width).  
* **FR2: Left Column Content** \- The sticky left column must contain the site title, role subtitle, a short tagline, a social icon row, the facts widget, and section navigation (table-of-contents).  
* **FR3: Right Column Content** \- The scrollable right column must contain sections for "About", "Experience", "Projects" (placeholder), and "Contact" (placeholder).  
* **FR4: Mobile Layout** \- The site must display a single-column layout on viewports ≤ 767px. The title, tagline, and icon row must stack vertically at the top. The table-of-contents section navigation must not be visible on mobile.  
* **FR5: Scroll Spy** \- The section navigation on desktop must automatically highlight the link corresponding to the section currently in the viewport (using a 50% viewport rule). Clicking a navigation link must smoothly scroll to the corresponding section. The navigation must be keyboard-navigable.  
* **FR6: Facts Widget** \- The widget must display a random fact on load from a predefined list of strings. On user click/tap, it must cycle to the next fact with a fade/slide animation. The trigger must be an accessible, ARIA-labelled button.

### **Non-Functional**

* **NFR1: Performance Score** \- The deployed site must achieve a Lighthouse score of 90 or higher for Performance, Accessibility, and Best Practices.  
* **NFR2: Page Weight** \- The initial page load must be under 150 kB gzipped.  
* **NFR3: Build & Deployment** \- The project must be built to support either Server-Side Rendering (SSR) or static export and be deployable on Vercel or Netlify. The CI/CD pipeline must create preview builds for pull requests and automatically deploy the main branch to production.  
* **NFR4: Accessibility** \- The site must pass WCAG AA color contrast standards. The active navigation item in the scroll spy must have the aria-current="true" attribute set.

## **3\. User Interface Design Goals**

### **Overall UX Vision**

The user experience will be clean, professional, and engaging, fusing the structured, dual-column layout of Brittany Chiang's portfolio with the interactive "Keep going" facts widget from Paul Stamatiou's site. The vision is to create a fast, modern, and easily navigable single-page portfolio that makes a strong first impression.

### **Key Interaction Paradigms**

* **Scroll Spy Navigation:** The core navigation paradigm. The user's scroll position in the main content pane will automatically update a sticky navigation menu, providing constant context and orientation.  
* **Interactive Content Rotator:** A small, delightful interaction where users can click or tap the "Facts Widget" to cycle through a list of curated facts with a subtle animation.  
* **Smooth Scrolling:** All internal navigation clicks will result in a smooth scroll to the corresponding section, creating a fluid, seamless experience.

### **Core Screens and Views**

For the MVP, the entire experience is contained within a single **Home page**. The "views" are the distinct anchor-linked sections within this page, which include:

* About  
* Experience  
* Projects (placeholder)  
* Contact (placeholder)

### **Accessibility**

The accessibility target for this project is **WCAG 2.1 AA**. This will be validated by achieving a Lighthouse accessibility score of 90 or higher.

### **Branding**

The initial branding is defined by the following design tokens provided in the specification:

* \--font-primary: Inter, system-ui, sans-serif  
* \--color-bg: \#0f172a  
* \--color-fg: \#f1f5f9  
* \--color-accent: \#38bdf8  
* \--radius: 0.5rem

### **Target Device and Platforms**

The application will be a **Web Responsive** site, targeting all modern desktop and mobile browsers. The layout must adapt fluidly between a dual-column desktop view (≥1024px) and a single-column mobile view (≤767px).

## **4\. Technical Assumptions**

### **Repository Structure**

* A **Monorepo** structure will be used. This will allow the main portfolio site, future blog/collections features, and distinct project demos (e.g., /projects/sql-viz) to coexist within a single repository, enabling a unified build process and easy code sharing.

### **Service Architecture**

* The application will be architected as a **Static Site Generation (SSG) or Server-Side Rendered (SSR) single-page application**. This aligns with the recommendation for Next.js or Astro and supports the high-performance goals. There is no complex backend service architecture for the MVP.

### **Testing requirements**

* A baseline of **unit tests** for key interactive components (like the Facts Widget) is required to ensure functionality and prevent regressions.  
* The project should be configured for **End-to-End (E2E) tests** to validate user flows and acceptance criteria, such as the scroll spy behavior.

### **Additional Technical Assumptions and Requests**

* **Framework:** The project will be built using either **Next.js 14 (App Router)** or **Astro**.  
* **Styling:** **Tailwind CSS** with the @tailwindcss/typography plugin will be used for all styling.  
* **Animation:** **Framer Motion** is the preferred library for animations.  
* **Icons:** The icon set will be sourced from **Lucide** or **Tabler Icons**.

## **5\. Epics and Stories**

### **Epic 1: Foundational MVP for Personal Web Presence**

The goal of this epic is to build, test, and deploy the foundational, interactive single-page digital home as defined in the requirements, from initial project setup to live deployment.

#### **Story 1.1: Project Scaffolding and Initial Setup**

As a developer, I want to set up the initial project structure with the chosen framework (Next.js or Astro) and install all core dependencies, so that I have a clean, working foundation for development.

* **Acceptance Criteria:**  
  1. A new repository is created and initialized with a main branch.  
  2. The chosen framework (Next.js or Astro) is installed and configured with the recommended settings.  
  3. Tailwind CSS and the typography plugin are installed and configured.  
  4. Framer Motion and the chosen icon library (Lucide or Tabler) are installed.  
  5. A basic "Hello World" or starter page is visible when running the local development server.

#### **Story 1.2: Implement Core Layout and Design Tokens**

As a developer, I want to implement the main responsive layout structure (dual-column desktop, single-column mobile) and apply the core design tokens, so that the site's foundational visual structure is in place.

* **Acceptance Criteria:**  
  1. The application has a dual-column layout on viewports ≥ 1024px.  
  2. The left column is sticky and occupies \~25-30% of the width.  
  3. The right column is scrollable and occupies \~70-75% of the width.  
  4. The application stacks to a single column on viewports ≤ 767px.  
  5. The CSS variables for font, colors, and radius from the design tokens are implemented and applied globally.

#### **Story 1.3: Build Static UI Components**

As a developer, I want to build the static UI components for the left column (title, tagline, social icons) and the placeholder sections for the right column, so that the page content structure is complete.

* **Acceptance Criteria:**  
  1. The site title, role subtitle, and tagline are displayed in the left column.  
  2. The social icon row is present with placeholder links for GitHub, LinkedIn, and Goodreads.  
  3. The right column contains placeholder div elements with ids for "About", "Experience", "Projects", and "Contact".  
  4. All text and icons use the globally defined design tokens for styling.

#### **Story 1.4: Implement Scroll Spy Navigation**

As a developer, I want to implement the scroll spy navigation functionality for the desktop view, so that users can see their location on the page and navigate easily.

* **Acceptance Criteria:**  
  1. The left column contains a navigation menu with links pointing to the section ids in the right column.  
  2. As the user scrolls, the navigation link corresponding to the section in view receives an aria-current="true" attribute.  
  3. Clicking a navigation link smoothly scrolls the page to the corresponding section.  
  4. The navigation is fully keyboard accessible.  
  5. The navigation menu is not visible on mobile viewports (≤ 767px).

#### **Story 1.5: Implement Interactive Facts Widget**

As a developer, I want to build the interactive "Facts Widget" with its animation, so that the site has an engaging, interactive element.

* **Acceptance Criteria:**  
  1. The widget displays an initial fact from a predefined list upon page load.  
  2. Clicking the widget's button cycles to the next fact in the list.  
  3. The transition between facts uses a 300ms fade/slide animation.  
  4. The widget loops back to the first fact after the last one is shown.  
  5. The widget's trigger button is accessible and properly labelled for screen readers.

#### **Story 1.6: Finalize CI/CD and Deploy MVP**

As a developer, I want to configure the CI/CD pipeline on Vercel/Netlify and deploy the completed MVP, so that the site is live and future changes can be deployed automatically.

* **Acceptance Criteria:**  
  1. The repository is connected to Vercel or Netlify.  
  2. A successful push to the main branch triggers a production deployment.  
  3. Opening a pull request automatically generates a preview deployment.  
  4. The final deployed site meets all NFRs, including Lighthouse scores of 90+ and a sub-150kB page weight.