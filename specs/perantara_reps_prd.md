# **Perantara Reps Digital Platform Product Requirements Document (PRD)**

## **Goals and Background Context**

### **Goals**

* To establish Perantara Reps as the leading and most credible New Zealand Inbound Tour Operator (ITO) for the Indonesian travel trade.  
* To generate a consistent stream of qualified B2B partnership inquiries via the new digital platform.  
* To build a defensible brand that competes on specialized value and cultural expertise, not simply on price.

### **Background Context**

The New Zealand tourism industry's digital presence is largely fragmented and outdated, creating a significant credibility gap. Concurrently, the Indonesian visitor market—a rapidly growing demographic whose peak travel season aligns with New Zealand's winter—remains underserved by specialist operators. This project will create a modern, B2B-first digital platform for Perantara Reps to capitalize on this opportunity, positioning the company as the expert "Global-Local Connector" for this niche.

### **Change Log**

| Date | Version | Description | Author |
| :---- | :---- | :---- | :---- |
| 2025-06-29 | 1.0 | Initial Draft | John (PM) |

### Export to Sheets

## **Requirements**

### **Functional**

* **FR1:** The website must be professionally designed and fully responsive, providing an optimal viewing experience across all devices (mobile, tablet, and desktop).  
* **FR2:** The platform must clearly and consistently communicate the "Global-Local Connector" brand identity and the "Perantara Promise" of sustainable, respectful tourism.  
* **FR3:** The platform will feature a public-facing section ("B2C Halo") containing sample itineraries and destination guides to showcase expertise and serve as marketing collateral for partners.  
* **FR4:** The platform must provide a secure web form for B2B travel partners to submit inquiries and register their interest, with form data handled securely.

### **Non-Functional**

* **NFR1:** The website must be built using the Astro framework and deployed on the Netlify platform.  
* **NFR2:** The website must be highly performant, targeting excellent Google Lighthouse scores (90+) for performance, accessibility, and SEO to differentiate from digitally lagging competitors.  
* **NFR3:** The platform's codebase must be well-structured and maintainable to allow for future expansion, such as the development of a full Partner Hub.

## **User Interface Design Goals**

### **Overall UX Vision**

A clean, premium, and trustworthy user experience that feels both globally competent and authentically local. The design must be intuitive for two key journeys: the B2B partner seeking information and the end-traveler exploring inspirational content.

### **Key Interaction Paradigms**

The user journey is split into two primary paths, accessible from the homepage: a B2B-focused path ("For Travel Partners") and a B2C-influence path ("Explore Our Destinations"). Navigation should be simple and predictable.

### **Core Screens and Views**

* Homepage  
* About Us / Our Promise Page  
* Sample Itineraries (Index Page and Detail Page)  
* Partner Inquiry Page  
* Contact Page  
* Privacy Policy / Terms of Service

### **Branding**

The visual identity must embody the "Global-Local Connector" concept. It should feel professional, modern, and reliable, while incorporating visual elements that reflect the unique cultures and landscapes of New Zealand and Oceania.

### **Target Device and Platforms**

The website will be built for the modern web and must be fully responsive on all major browsers and device sizes (mobile, tablet, desktop).

## **Technical Assumptions**

### **Repository Structure**

A **Monorepo** structure will be used to facilitate future growth, allowing for shared packages between the frontend website and any future backend services.

### **Service Architecture**

The initial architecture will be **Static Site Generation (SSG)** using Astro, with **Serverless Functions** (via Netlify Functions) to handle the partner inquiry form submissions.

### **Testing requirements**

The project will require **Unit Tests** for any complex UI components or utility functions and **End-to-End (E2E) Tests** to validate the partner inquiry form submission flow.

## **Epics**

### **Epic 1: MVP Launch: "Global-Local Connector" Digital Platform Foundation**

**Goal:** To launch a professional, mobile-first marketing and lead-generation website that establishes the Perantara Reps brand, showcases its unique value proposition to the Indonesian market, and captures initial B2B partner interest.

---

### **Story 1.1: Project Setup & Deployment Pipeline**

*As a Project Owner, I want the initial project structure and a continuous deployment pipeline set up, so that development can begin efficiently and all changes are automatically deployed.*

#### **Acceptance Criteria**

1. A new project is initialized using the Astro framework.  
2. A new Git repository is created and pushed to a provider (e.g., GitHub).  
3. The project is linked to a new site on Netlify.  
4. A basic CI/CD pipeline is configured in Netlify so that any push to the `main` branch automatically triggers a new build and deployment.  
5. The deployed site displays a simple "Hello World" or placeholder page.

### **Story 1.2: Homepage Implementation**

*As a Website Visitor, I want a clear and compelling homepage, so that I immediately understand the unique value of Perantara Reps.*

#### **Acceptance Criteria**

1. The homepage is built with a modern, responsive layout.  
2. It prominently features the "Global-Local Connector" headline and brand statement.  
3. It includes two primary calls-to-action: "For Travel Partners" (linking to the inquiry page) and "Explore Our Destinations" (linking to the sample itineraries page).  
4. A section is included to introduce the "Perantara Promise."  
5. Placeholder sections for trust signals (e.g., "As seen on...") are created.

### **Story 1.3: Static Content Pages**

*As a Website Visitor, I want to learn more about the company and its values, so that I can build trust in the brand.*

#### **Acceptance Criteria**

1. An "About Us / Our Promise" page is created, detailing the company's mission and commitment to sustainable tourism.  
2. A "Contact Us" page is created with company contact details and a simple contact form.  
3. All static pages use a consistent layout and are fully responsive.

### **Story 1.4: Sample Itinerary Template & Content**

*As a B2B Partner, I want to see examples of the travel experiences offered, so that I can gauge the quality and style of the product for my clients.*

#### **Acceptance Criteria**

1. A reusable Astro component/layout is created for displaying a detailed itinerary.  
2. An index page is created to list all available sample itineraries.  
3. At least two sample itineraries (e.g., "7-Day South Island Winter Magic") are created using the template, populated with compelling text and high-quality placeholder images.  
4. The itinerary pages are public-facing and designed to be easily shared.

### **Story 1.5: Partner Inquiry Form & Serverless Function**

*As a B2B Partner, I want a simple and secure way to register my interest in a partnership, so that I can begin a business relationship with Perantara Reps.*

#### **Acceptance Criteria**

1. A "Partner Inquiry" page is created with a web form.  
2. The form includes fields for contact information, agency details, and specific interests.  
3. Form submissions are handled by a Netlify serverless function.  
4. Upon successful submission, the function sends a formatted email notification to a designated Perantara Reps email address.  
5. The user is shown a "Thank You" message on the website after a successful submission.  
6. Basic validation is implemented on both the client and server side.

### **Story 1.6: Final Polish & Launch Prep**

*As a Project Owner, I want the website to be fully optimized for SEO and accessibility, so that it can be found easily and used by everyone.*

#### **Acceptance Criteria**

1. All pages have unique and descriptive `<title>` tags and `meta` descriptions.  
2. Basic schema markup (e.g., for `Organization`) is implemented.  
3. All images have descriptive `alt` tags.  
4. The website passes automated accessibility checks (e.g., Lighthouse score of 90+).  
5. A `robots.txt` and `sitemap.xml` are generated for the site.

