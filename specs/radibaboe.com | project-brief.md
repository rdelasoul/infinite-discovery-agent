### **Executive Summary**

The project's purpose is to create an immediately-shippable personal portfolio website, focusing on a single Home page for the Minimum Viable Product (MVP). The site's design will fuse the dual-column layout and navigation concepts from Brittany Chiang's portfolio with an interactive "Keep going" facts widget inspired by Paul Stamatiou's site. The target market is anyone viewing a professional creative/technical portfolio. The key value proposition is a unique, engaging, and modern personal site that can be extended with blog and collection features in later phases.

### **Problem Statement**

The core problem is the need for a modern, professional, and unique online portfolio that can be launched quickly (as an MVP) but is built with a foundation that can scale for future content like blog posts and curated collections. Existing portfolio solutions may be generic or lack the specific blend of layout and interactive features desired, such as a sticky table-of-contents scroll spy and a dynamic facts rotator. The current state is the absence of this personal site, and the impact is a missed opportunity for a professional online presence.

### **Proposed Solution**

The proposed solution is a single-page portfolio website that serves as a Minimum Viable Product (MVP) focused exclusively on the Home page. The core concept is to create a responsive layout inspired by Brittany Chiang's portfolio and an interactive facts widget inspired by Paul Stamatiou's site.  
The layout will be composed of two distinct columns on desktop screens:

* **Left Column (Sticky):** This persistent column will contain the core identity and navigation elements:  
  * Site title and role subtitle.  
  * A short, descriptive tagline.  
  * A row of social link icons including GitHub, LinkedIn, and Goodreads.  
  * The interactive "Keep going" facts widget.  
  * A table of contents with scroll spy functionality that highlights the user's position on the page.  
* **Right Column (Scrollable):** This main content area will feature distinct sections for "About," "Experience," and placeholders for "Projects" and "Contact".

On mobile devices, these elements will stack into a single, responsive column. The site will be built to be extensible, allowing for a blog engine and content collections to be added in a later phase.

### **Target Users**

* **Primary User Segment: Professional Peers & Recruiters**  
  * This group includes hiring managers, recruiters, potential clients, and colleagues within the tech and creative industries. They are looking to quickly assess skills, experience, and personality from the portfolio. They value a clean, fast, and professional presentation that is easy to navigate.

### **Goals & Success Metrics**

#### **Business Objectives**

* Successfully build and deploy the single-page MVP to a live URL on Vercel or Netlify.  
* Establish a CI/CD workflow where the main branch auto-deploys to production and preview URLs are generated for pull requests.

#### **User Success Metrics**

* The layout is fully responsive, displaying a dual-column view on desktops (≥1024px) and a single-column view on mobile devices (≤767px).  
* The scroll spy navigation accurately highlights the active section and provides smooth scrolling.  
* The "Facts Widget" is interactive, cycling through facts on click/tap.

#### **Key Performance Indicators (KPIs)**

* Achieve Lighthouse scores of ≥90 for Performance, Accessibility, and Best Practices.  
* The initial page load size must be less than 150 kB gzipped.  
* The site must pass WCAG AA color contrast standards.

### **MVP Scope**

The scope of this project is strictly limited to the Minimum Viable Product (MVP) to ensure a fast initial deployment.

#### **Core Features (In-Scope)**

* A fully built and deployed Home page.  
* A responsive layout for both desktop and mobile viewports.  
* A functional table-of-contents with scroll spy behavior.  
* A row of social link icons.  
* The interactive "'Keep going'" facts component.

#### **Out of Scope for MVP**

The following features are explicitly planned for a later phase and are not part of this MVP:

* A blog engine and the associated "Collections" taxonomy.  
* A Content Management System (CMS) or markdown-based workflow.  
* Integrations with services like Supabase or Stripe.  
* Features such as search, RSS feeds, or analytics.  
* A dark-mode toggle is considered a "nice-to-have" and is out of scope.

### **Post-MVP Vision**

* **Phase 2 Features:** Following the successful launch of the MVP, the next phase will focus on introducing a blog engine and a "Collections" taxonomy for content curation.  
* **Long-term Vision:** The site will evolve into a richer content platform, taking inspiration from sites like technically.dev for its collection-based organization. Your goal of hosting project prototypes will also be incorporated in a future phase.

### **Technical Considerations**

#### **Platform Requirements**

* The application must be deployable to Vercel or Netlify.  
* The architecture must support either Server-Side Rendering (SSR) or static export.  
* The final output must be responsive, with a dual-column layout for desktops and a single-column layout for mobile (max-width 680px).

#### **Technology Preferences**

Your specification suggests the following flexible tech stack:

* **Framework:** Next.js 14 (App Router) or Astro.  
* **Styling:** Tailwind CSS, including the @tailwindcss/typography plugin.  
* **Animation:** Framer Motion for specific interactive elements.  
* **Icons:** Lucide or Tabler SVG icons.

### **Constraints & Assumptions**

* **Constraints:** The primary constraint is the tight scope of the MVP, which is limited to the single Home page. The project must also adhere to strict performance and accessibility goals, including a Lighthouse score of ≥90 and an initial load size under 150 kB.  
* **Assumptions:** It is assumed that the suggested technology stack (Next.js/Astro, Tailwind CSS) is approved and will be used for development. It is also assumed that the final content for the tagline and the list of facts for the widget will be provided.

### **Risks & Open Questions**

* **Risks:** The animations and interactive elements (Facts Widget, scroll spy), if not implemented efficiently, could pose a risk to achieving the stated performance goals.  
* **Open Questions:** The following questions were listed in the specification and need to be resolved:  
  1. Should the site default to dark-mode, or be light-mode with a toggle?  
  2. What is the exact copy for the tagline and the list of facts?  
  3. Should the "Experience" section use an accordion-style collapse on mobile?