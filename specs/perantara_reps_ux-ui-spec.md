# **Perantara Reps Digital Platform UI/UX Specification**

## **Introduction**

This document defines the user experience goals, information architecture, user flows, and visual design specifications for the Perantara Reps digital platform. It is guided by the core philosophy of creating a "human-centric" digital space that is personal, calm, and powerful, ensuring a cohesive and delightful experience for our partners and their clients. This specification serves as the foundation for visual design and frontend development.

### **Overall UX Goals & Principles**

#### **Target User Personas**

* **Primary Persona (B2B):** The Indonesian Travel Partner. An experienced tour operator or travel agent who is digitally proficient. They value efficiency, reliability, and clear communication. They seek a ground partner in New Zealand that demonstrates a deep understanding of their specific market's cultural and logistical needs.  
* **Secondary Persona (B2C Influence):** The Discerning Indonesian Traveler. An affluent, family-oriented individual planning a trip to New Zealand for the first time. They value safety, premium quality, and experiences that are culturally and religiously considerate (e.g., Halal dining options). Our public-facing content must resonate with this persona to empower our B2B partners.

#### **Usability Goals**

* **Clarity:** A new travel partner must understand Perantara Reps' unique value proposition within seconds of landing on the homepage.  
* **Trust:** The design must feel modern, professional, and reliable, instilling confidence and encouraging partnership inquiries.  
* **Delight:** The experience should be calm and visually engaging, using subtle animations and beautiful imagery to reflect the premium quality of the travel experiences offered.

#### **Design Principles**

* **Optimize for Feelings:** Design decisions will be guided by the desired emotional response from our partners—trust, confidence, and a sense of being understood.  
* **Center People, Not Products:** The brand narrative will celebrate our partners, our team, and the local communities we work with, creating an authentic, human connection.  
* **Human & Authentic Voice:** All website copy will be approachable, expert, and conversational, avoiding sterile corporate jargon to build a strong, trust-based relationship.

### **Change Log**

| Date | Version | Description | Author |
| :---- | :---- | :---- | :---- |
| 2025-06-29 | 1.0 | Initial Draft | Sally (UX) |

Export to Sheets

## **Information Architecture (IA)**

### **Site Map / Screen Inventory**

A simple and scalable site map for the MVP.

Code snippet  
graph TD  
    A\[Homepage\] \--\> B\[About Us / Our Promise\]  
    A \--\> C\[Sample Itineraries\]  
    A \--\> D\[For Partners (Inquiry Page)\]  
    A \--\> E\[Contact Us\]  
    C \--\> C1\[Itinerary Detail Page\]

### **Navigation Structure**

* **Primary Navigation:** The main site header will contain links to: About Us, Itineraries, For Partners, and Contact.  
* **Breadcrumb Strategy:** Breadcrumbs will be used on Itinerary Detail pages to allow for easy navigation back to the main Itineraries index (e.g., `Home > Itineraries > South Island Winter Magic`).

## **User Flows**

### **B2B Partner Inquiry Flow**

* **User Goal:** For a prospective Indonesian travel agent to understand Perantara Reps' value and register their interest in a partnership.  
* **Entry Points:** Homepage CTA ("For Travel Partners"), direct link.  
* **Success Criteria:** The partner successfully submits the inquiry form and receives a confirmation message.

#### **Flow Diagram**

Code snippet  
graph TD  
    A\[Homepage\] \--\>|Clicks 'For Partners'| B(Partner Inquiry Page)  
    B \--\> C{Fills out form fields}  
    C \--\> D\[Clicks 'Submit Inquiry'\]  
    D \--\> E{Form validation}  
    E \--\>|Passes| F\[Show Success Message\]  
    E \--\>|Fails| G\[Show Inline Errors\]  
    G \--\> C

## **Wireframes & Mockups**

* **Primary Design Files:** Detailed high-fidelity mockups will be created and maintained in a dedicated Figma project, which will be the single source of truth for the visual design.

## **Component Library / Design System**

The system will be built using a foundational component library inspired by the "Human-Centric" blueprint.

### **Core Components**

#### **Button**

Buttons are used for primary actions and will have a clear hierarchy.

| Variant | Description | Use Case |
| :---- | :---- | :---- |
| **Primary** | Solid fill with the brand's primary accent color. | The main call-to-action on a page (e.g., "Submit Inquiry"). |
| **Outline** | Transparent background with a colored border. | Secondary actions (e.g., "Learn More"). |
| **Ghost** | Appears as text-only until hovered. | Tertiary actions, often used in navigation. |

Export to Sheets

All buttons must have clear `default`, `hover`, `active`, and `focus` states to ensure accessibility and provide clear user feedback.

## **Branding & Style Guide**

The visual language will be clean, calm, and professional, using inspiration from the "Human-Centric" blueprint's dynamic color system.

### **Color Palette**

The palette will be inspired by New Zealand's natural landscapes—earthy tones, deep blues, and clean whites—to feel both premium and authentic. The following semantic tokens will be used.

| Token Name | Example Hex Value | Semantic Role & Usage |
| :---- | :---- | :---- |
| `--palette-background` | \#F8F7F5 | Main UI background, warm and soft. |
| `--palette-foregroundPrimary` | \#333333 | Primary text color for maximum readability. |
| `--palette-maxContrastColor` | \#005A6A | A deep teal for primary actions and focus indicators. |
| `--palette-subtitle` | \#6B7280 | A muted gray for supplementary text. |

Export to Sheets

### **Typography**

* **Font Stack:** A system font stack will be used to feel native to the user's operating system (e.g., SF Pro for macOS/iOS, Segoe UI for Windows, Roboto for Android).  
* **Type Scale:** A clear and harmonious typographic scale will be established to guide the user's focus. Page titles will be large and impactful, while body copy will be optimized for legibility.

### **Iconography**

* **Style:** Icons will be soft, rounded, and stroke-based to align with the friendly and approachable brand voice. They will be used sparingly to support content, not dominate it.

## **Accessibility Requirements**

### **Compliance Target**

The website will target **WCAG 2.1 AA** compliance to ensure it is usable by the widest possible audience.

### **Key Requirements**

* **Visual:** All text will meet a minimum 4.5:1 color contrast ratio. All interactive elements will have clear, visible focus indicators.  
* **Interaction:** The entire website will be navigable and operable using only a keyboard.  
* **Content:** All images will have descriptive `alt` tags. Headings will be used in a logical, hierarchical order.

## **Responsiveness Strategy**

### **Breakpoints**

Standard breakpoints will be used to ensure an optimal layout on all devices.

* **Mobile:** Up to 767px  
* **Tablet:** 768px to 1023px  
* **Desktop:** 1024px and up

### **Adaptation Patterns**

* Layouts will transition from single-column on mobile to multi-column grids on larger screens.  
* The primary navigation will collapse into a "hamburger" menu on mobile devices.  
* Touch targets will be sufficiently large for easy interaction on mobile devices.

## **Animation & Micro-interactions**

Motion will be purposeful and fluid, designed to enhance the user experience, not distract from it.

* **Motion Principles:** Animations will be gentle and responsive, using `ease-in-out` easing curves for a natural feel.  
* **Key Animations:** Subtle page transitions, interactive hover effects on buttons and links, and smooth "reveal" animations for content as the user scrolls.

## **Performance Considerations**

### **Performance Goals**

* The site will target a Google Lighthouse Performance score of 90+ to ensure a fast and responsive experience, in line with NFR2 from the PRD.  
* Images will be optimized and lazy-loaded to reduce initial page load time.

