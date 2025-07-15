# **UI/UX Specification: Personal Web Presence**

## **1\. Overall UX Goals & Principles**

#### **Target User Personas**

The primary user is a "Professional Peer & Recruiter." This user values a fast, scannable, and professional presentation that quickly communicates your skills and experience.

#### **Usability Goals**

* **Clarity:** The layout and content should be immediately understandable.  
* **Efficiency:** Users should be able to navigate to any section of the single page with a single click.  
* **Delight:** Subtle animations and interactions, like the Facts Widget, should provide a delightful and engaging experience without hindering performance.

#### **Design Principles**

1. **Performance by Default:** Every design decision must prioritize a fast, lightweight user experience, in line with the sub-150kB page weight goal.  
2. **Clarity and Hierarchy:** A strong visual hierarchy will guide the user's eye from your identity (left column) to your detailed content (right column).  
3. **Accessible by Design:** Accessibility is a core requirement, not an afterthought. All components must meet WCAG 2.1 AA standards.  
4. **Engaging Interactivity:** Motion and interaction should be purposeful, providing user feedback (like the scroll spy) or a moment of delight (the facts widget).

## **2\. Information Architecture (IA)**

### **Site Map / Screen Inventory**

The MVP consists of a single **Home Page** which contains several anchor-linked sections. The relationship is as follows:  
graph TD  
    A\[Home Page\] \--\> B\[About Section\]  
    A\[Home-Page\] \--\> C\[Experience Section\]  
    A\[Home-Page\] \--\> D\[Projects Section\]  
    A\[Home-Page\] \--\> E\[Contact Section\]

### **Navigation Structure**

* **Primary Navigation (Desktop):** The primary navigation is the list of links ("About", "Experience", "Projects", "Contact") located in the sticky left column. This menu is powered by the scroll spy functionality.  
* **Primary Navigation (Mobile):** The primary navigation menu is **hidden** on mobile viewports (≤ 767px) to provide a cleaner reading experience.  
* **Breadcrumb Strategy:** Breadcrumbs are not applicable for this single-page application MVP.

## **3\. User Flows**

### **Flow 1: Section Navigation via Scroll Spy (Desktop)**

* **User Goal:** To quickly navigate to a specific content section on the page.  
* **Entry Points:** Clicking a link in the desktop navigation menu.  
* **Success Criteria:** The viewport smoothly scrolls to the top of the corresponding section within 600ms.

graph TD  
    A\[User sees a topic of interest in the nav\] \--\> B{User Clicks 'Experience' Link};  
    B \--\> C\[Page smoothly scrolls down\];  
    C \--\> D\[Top of 'Experience' section is aligned to top of viewport\];  
    D \--\> E\[Nav link for 'Experience' has active state\];

### **Flow 2: Interacting with the Facts Widget**

* **User Goal:** To see a new interesting fact.  
* **Entry Points:** Clicking or tapping the facts widget button.  
* **Success Criteria:** A new fact from the list is displayed with a subtle 300ms animation.

graph TD  
    A\[User reads current fact\] \--\> B{User Clicks Widget Button};  
    B \--\> C\[Current fact animates out\];  
    C \--\> D\[Next fact animates in\];  
    D \--\> A;

## **4\. Branding & Style Guide**

This guide establishes the visual foundation of the project, based on your specific best practices.

### **Layout & Spacing**

* **Rule:** An **8-point grid system** must be used for all spacing.  
* **Implementation:** All margins, padding, and gaps will be in multiples of 0.5rem (8px).  
* **Tailwind:** This is achieved using Tailwind's default spacing scale (e.g., p-2 for 8px, m-4 for 16px).

### **Color Tokens**

* **Rule:** Use semantic color tokens. Contrast must meet **WCAG AA**.  
* **Implementation:** The following CSS variables and corresponding Tailwind classes will be configured.

| CSS Variable | Tailwind Class | Hex Value (Example) | Usage |
| :---- | :---- | :---- | :---- |
| \--color-surface | bg-surface | \#1e293b (slate-800) | Base surface for cards. |
| \--color-surface-elevated | bg-surface-elevated | \#334155 (slate-700) | Hovered or elevated surfaces. |
| \--color-accent | bg-accent / text-accent | \#38bdf8 (sky-400) | Interactive elements, links. |
| \--text-primary | text-primary | \#f1f5f9 (slate-100) | Primary text, headings. |
| \--text-secondary | text-secondary | \#94a3b8 (slate-400) | Secondary text, subtitles. |

*(Note: The main page background would use a separate token like \--color-bg (bg-slate-900) as defined in your original spec.)*

### **Typography**

* **Rule:** Use Inter or system-ui. Scale is 12, 14, 16, 20, 24 px.  
* **Implementation:** This maps directly to Tailwind's default type scale.

| Size | Tailwind Class | Usage |
| :---- | :---- | :---- |
| 12px | text-xs | Small print, captions |
| 14px | text-sm | Secondary body text |
| 16px | text-base | Primary body text |
| 20px | text-xl | Subheadings |
| 24px | text-2xl | Primary headings |

### **Shadows & Corners**

* **Rule:** Specific shadow for raised cards only. 6px radius for cards/inputs, 12px for avatars.  
* **Implementation:**  
  * **Shadow:** A custom shadow will be configured in Tailwind: box-shadow: 0 4px 16px rgba(0,0,0,0.14);  
  * **Corners:** Use rounded-md (6px) and rounded-xl (12px).

### **Motion & Animation**

* **Rule:** ease-out 200ms for entry, ease-in 120ms for exit. Respect prefers-reduced-motion.  
* **Implementation:** These timings will be configured as custom Tailwind animation properties.

## **5\. Component Library / Design System**

Here are sample React components demonstrating how to apply the design tokens and best practices.

### **Card Component**

// components/Card.jsx  
// Implements \--color-surface, 6px radius, and the specified shadow.  
export function Card({ children }) {  
  return (  
    \<div className="bg-surface rounded-md shadow-lg p-4"\>  
      {children}  
    \</div\>  
  );  
}

### **Button Component**

// components/Button.jsx  
// Uses accent color, 6px radius, and has no shadow as per the rules.  
export function Button({ children, variant \= 'primary' }) {  
  const baseStyles \= "px-4 py-2 rounded-md font-semibold transition-colors ease-out duration-200";  
    
  const variants \= {  
    primary: "bg-accent text-slate-900 hover:bg-sky-500", // Using accent color  
    secondary: "bg-surface-elevated text-text-primary hover:bg-slate-600",  
  };

  return (  
    \<button className={\`${baseStyles} ${variants\[variant\]}\`}\>  
      {children}  
    \</button\>  
  );  
}

### **Modal Component (Conceptual)**

// components/Modal.jsx  
import { Card } from './Card';

// Reuses the Card component to inherit its styling (surface, radius, shadow).  
export function Modal({ title, children, onClose }) {  
  return (  
    \<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"\>  
      \<Card\>  
        \<div className="flex justify-between items-center mb-4"\>  
          \<h2 className="text-xl font-bold text-text-primary"\>{title}\</h2\>  
          \<button onClick={onClose} className="text-text-secondary hover:text-text-primary"\>×\</button\>  
        \</div\>  
        \<div className="text-text-secondary"\>{children}\</div\>  
      \</Card\>  
    \</div\>  
  );  
}

## **6\. High-Level Requirements**

### **Accessibility Requirements**

* **Compliance Target:** The project must meet **WCAG 2.1 Level AA** standards.  
* **Key Requirements:** All interactive elements must be fully keyboard-focusable and navigable. The active navigation item must use aria-current="true", and the facts widget's trigger must be an ARIA-labelled button.

### **Responsiveness Strategy**

* **Breakpoints:** The layout will adapt at two primary breakpoints: Desktop (≥ 1024px) and Mobile (≤ 767px).  
* **Tablet State (768px \- 1023px):** The recommended approach is for the layout to switch to the single-column mobile view at 1023px and below.

### **Performance Considerations**

* **Performance Goals:** Achieve a Lighthouse Performance score of 90+, keep the initial gzipped page load under 150 kB, and ensure all animations are smooth and responsive.