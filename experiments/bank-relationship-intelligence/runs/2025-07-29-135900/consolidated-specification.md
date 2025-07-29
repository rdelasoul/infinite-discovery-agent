# Bank Relationship Intelligence - Consolidated Specification
## Enhanced Infinite Discovery Agent Run: 2025-07-29-135900

---

# CORE SPECIFICATION
# SMB Banking Sales Intelligence UX Pattern Specification

## Core Challenge

Create **innovative UX patterns** that demonstrate how connected data platforms transform small business banking sales workflows. Focus on showcasing how **unified access to banking, accounting, and merchant data** enables unprecedented prospect intelligence, product recommendations, and sales optimization that fragmented systems cannot achieve.

**Primary Business Context**: Demonstrating the transformative power of connected datasets for small business banking sales teams. Show how unified access to banking relationships, accounting records, and merchant transactions creates superior prospect insights and conversion capabilities compared to traditional fragmented data approaches.

**Parent Job-to-be-Done**: "Understand SMB financial needs to tailor pitches and acquire customers, increasing revenue"

## Connected Data Platform Value Proposition

**The Transformation**: Traditional banking sales teams work with fragmented data sources - separate views of banking relationships, accounting records, and merchant transactions. This prototype demonstrates what becomes possible when these data sources are **unified in real-time** through a connected data platform.

**Platform Demonstration Purpose**: Showcase familiar SMB banking sales workflows **transformed by connected datasets** that provide:
- **Unified Financial View**: Real-time integration of banking, accounting, and merchant data
- **Cross-Source Intelligence**: Insights only possible when all financial data sources connect  
- **Enhanced Sales Capabilities**: Prospect assessment, product recommendations, and pipeline management powered by complete financial picture
- **Competitive Advantage**: Sales intelligence that fragmented systems simply cannot provide

**What This Prototype Shows**: How connected data transforms routine banking sales workflows into sophisticated intelligence systems that deliver superior prospect insights and conversion outcomes.

**Target Customer Profile**: Small business banking sales teams focused on SMB client acquisition and revenue growth

**End User Roles**:
- **Relationship Manager**: Direct client interaction, pitch preparation, product recommendations
- **Business Development Manager**: Prospect identification, market analysis, pipeline management  
- **Small Business Loan Officer**: Credit assessment, loan product matching, risk evaluation

## Core Jobs-to-be-Done Framework

### **Job 1: Pre-Contact Intelligence Assessment**
*"Assess SMB financial health and operational challenges to prepare relevant approaches before initial contact"*

**Key Capabilities Needed**:
- **Financial Health Scoring**: Automated assessment of SMB financial stability and growth potential
- **Operational Challenge Identification**: Detect cash flow issues, seasonal patterns, growth constraints
- **Conversation Starter Intelligence**: Identify specific pain points and opportunities for initial discussions
- **Risk Assessment**: Early evaluation of credit worthiness and potential banking relationship value
- **Competitive Analysis**: Understanding current banking relationships and switching likelihood
- **Industry Context**: Sector-specific challenges and opportunities relevant to the prospect

### **Job 2: Product Recommendation Engine**
*"Recommend suitable banking products to directly address SMBs' unique situations and increase product adoption"*

**Key Capabilities Needed**:
- **Product-Need Matching**: Intelligent mapping of SMB challenges to specific banking solutions
- **Product Fit Scoring**: Quantified assessment of how well each product addresses prospect needs
- **Cross-sell Sequencing**: Optimal order and timing for introducing multiple banking products
- **Value Proposition Personalization**: Tailored benefits messaging based on specific SMB situation
- **Competitive Differentiation**: How bank products compare to prospect's current solutions
- **ROI Calculation**: Clear financial benefits and cost savings for each recommended product

### **Job 3: High-Potential Prospect Identification**
*"Identify high-potential SMB prospects to focus sales efforts and maximize conversion rates"*

**Key Capabilities Needed**:
- **Conversion Probability Scoring**: Data-driven assessment of likelihood to become a client
- **Revenue Potential Analysis**: Estimated lifetime value and product adoption potential
- **Sales Effort Optimization**: Match prospect potential with appropriate sales resource allocation
- **Timing Intelligence**: Identify optimal moments for outreach based on business lifecycle
- **Pipeline Prioritization**: Rank prospects by conversion probability and revenue potential
- **Market Opportunity Sizing**: Understand addressable market within specific territories or industries

---

# DEPENDENCY INTEGRATION

## GEIST DESIGN SYSTEM FOUNDATION

### Core Visual Framework (geist-core.md)

**Design Philosophy**: Simplicity, minimalism, and speed - drawing inspiration from Swiss design movement with a developer-first approach.

#### Color System
```css
/* Gray Scale - Primary neutral palette */
--ds-gray-100: #fafafa;
--ds-gray-200: #eaeaea;
--ds-gray-300: #999999;
--ds-gray-400: #888888;
--ds-gray-500: #666666;
--ds-gray-600: #444444;
--ds-gray-700: #333333;
--ds-gray-800: #222222;
--ds-gray-900: #111111;
--ds-gray-1000: #000000;

/* Blue - Interactive elements */
--ds-blue-100: #e1f5fe;
--ds-blue-500: #0070f3;
--ds-blue-600: #0061d5;
--ds-blue-700: #004fc4;
--ds-blue-800: #0043a5;

/* Status Colors */
--ds-red-500: #ee0000;      /* Error states */
--ds-amber-500: #f5a623;    /* Warning states */
--ds-green-500: #0070f3;    /* Success states */
--ds-purple-500: #7c3aed;   /* Accent elements */
```

#### Typography
```css
/* Geist Sans - Primary interface font */
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

/* Font Scale */
--font-size-h1: 2.25rem;    /* 36px */
--font-size-h2: 1.875rem;   /* 30px */
--font-size-h3: 1.5rem;     /* 24px */
--font-size-h4: 1.25rem;    /* 20px */
--font-size-base: 1rem;     /* 16px */
--font-size-small: 0.875rem; /* 14px */
--font-size-xs: 0.75rem;     /* 12px */
```

#### Spacing System
```css
/* Spacing scale based on 8px grid */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Component Library Overview (geist-components.md)

#### Form Components
- **Button**: Primary, secondary, and ghost actions with states (default, hover, active, disabled, loading)
- **Input Fields**: Text input, email, URL, password, search with labels, placeholders, validation states
- **Select/Dropdown**: Single choice from predefined options with custom styling
- **Checkbox & Switch**: Boolean inputs and toggles with indeterminate and disabled states
- **Radio**: Single choice from multiple options with groups and validation
- **Textarea**: Multi-line text input with resizable, character limits, descriptions

#### Layout Components
- **Stack**: Vertical and horizontal arrangement with consistent spacing
- **Grid**: Responsive 12-column layout system with breakpoints
- **Modal**: Overlay dialogs for focused tasks with header, body, footer
- **Card**: Grouped content container with header, body, footer sections
- **Tabs**: Content organization with tabbed navigation

#### Data Display Components (geist-data.md)
- **Table**: Structured data presentation with sortable headers, action columns, responsive scrolling
- **Drawer**: Side panels for contextual information (bottom, right, left positions)
- **Progress**: Task completion and loading indication (linear, circular, stepped)

#### Feedback Components
- **Toast/Notification**: Temporary status messages (success, error, warning, info)
- **Loading States**: Spinner, skeleton (text, circle, rectangle)
- **Tooltip**: Contextual information on hover/focus

#### Status & Information Components
- **Badge**: Status indicators and labels with types (status, special, product-specific)
- **Avatar**: User identification and representation with images, fallbacks, groups
- **Note**: Important messages and callouts with various types and features
- **Empty State**: No data or empty content scenarios with icons, descriptions, actions
- **Error**: Error communication and validation feedback with recovery actions

## ACCESSIBILITY STANDARDS (accessibility-standards.md)

### WCAG 2.1 AA Compliance Requirements
- **Color and Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Keyboard Navigation**: Logical tab sequence, focus management, skip links
- **Screen Reader Support**: Semantic HTML, ARIA labels, live regions, alternative text
- **Responsive and Touch**: Minimum 44px touch targets, viewport zoom support
- **Motion Sensitivity**: Respect `prefers-reduced-motion` user preference

### Implementation Guidelines
```html
<!-- Semantic landmarks -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary">
<footer role="contentinfo">

<!-- Form accessibility -->
<label for="email">Email Address</label>
<input type="email" id="email" required aria-describedby="email-help">
<div id="email-help">We'll never share your email</div>
```

```css
/* Focus indicators */
.interactive-element:focus {
  outline: 2px solid #0070f3;
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## PERFORMANCE REQUIREMENTS (performance-requirements.md)

### Core Performance Standards
- **First Contentful Paint (FCP)**: < 1.8 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds  
- **Time to Interactive (TTI)**: < 3.8 seconds
- **Total Blocking Time (TBT)**: < 300ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Runtime Performance
- **Frame Rate**: Maintain 60fps during animations and interactions
- **Input Delay**: < 100ms response time for all user interactions
- **Memory Usage**: Efficient memory management with proper cleanup
- **Network Efficiency**: Optimize for 3G and slower connections

### Performance Budget
- **JavaScript**: < 170KB compressed on mobile
- **CSS**: < 50KB compressed
- **Images**: Optimize for < 500KB total initial load
- **Fonts**: < 100KB for primary font family

## REALISTIC DATA REQUIREMENTS (realistic-data-requirements.md)

### Core Data Quality Standards
All dummy data MUST feel genuine and enable complete workflow testing. Avoid placeholder text like "Lorem ipsum" or generic entries.

### Data Completeness Principles
- **Full Working Examples**: Complete data sets that demonstrate the entire user journey
- **Realistic Business Context**: Authentic scenarios appropriate to the workflow domain
- **Multiple Data States**: Various states (completed, pending, error, loading)
- **Edge Case Coverage**: Data scenarios that test pattern boundaries and error handling
- **Volume Simulation**: Realistic data quantities that reflect actual usage patterns

### New Zealand Context
```javascript
const nzBusinessData = {
  addresses: [
    "Level 12, 123 Queen Street, Auckland 1010",
    "45 Lambton Quay, Wellington 6011", 
    "87 Worcester Street, Christchurch 8013"
  ],
  phoneNumbers: ["+64 9 123 4567", "+64 21 456 789"],
  businessNumbers: ["123-456-789", "987-654-321"],
  postcodes: ["1010", "6011", "8013"],
  currencies: "NZD",
  taxNumbers: ["125-456-789", "GST 123-456-789"]
};
```

## BANKING DATA CONTEXT (banking-data.md)

### Personal Banking Accounts
```javascript
const accounts = [
  {
    id: "ACC-2024-847293",
    accountNumber: "03-1234-5678901-00",
    name: "Everyday Account", 
    type: "Transaction",
    balance: 4847.23,
    availableBalance: 4347.23,
    currency: "NZD",
    status: "Active",
    overdraftLimit: 500.00,
    lastUpdated: "2025-01-17T15:42:00Z",
    branch: "Auckland Queen Street",
    features: ["EFTPOS", "Online Banking", "Mobile Pay"]
  }
];
```

### Business Banking Accounts
```javascript
const businessAccounts = [
  {
    id: "BIZ-2024-584729",
    accountNumber: "03-5847-2938475-00",
    businessName: "Tech Solutions Ltd",
    tradingName: "TechSol NZ",
    type: "Business Transaction",
    balance: 73842.57,
    availableBalance: 68342.57,
    currency: "NZD",
    status: "Active",
    overdraftLimit: 25000.00,
    accountManager: "Sarah Williams",
    features: ["Payroll", "Direct Debits", "International Transfers"]
  }
];
```

### Transaction History
Comprehensive transaction data including personal and business transactions, credit card transactions, with proper categorization, status tracking, and reference numbers.

### Customer Profile
```javascript
const customer = {
  customerId: "CUST-2024-847293",
  title: "Ms",
  firstName: "Jennifer",
  middleName: "Marie", 
  lastName: "Walsh",
  preferredName: "Jen",
  dateOfBirth: "1987-03-15",
  email: "jen.walsh@example.com",
  phone: "+64 21 847 3920",
  address: {
    street: "45B Queen Street",
    suburb: "Auckland Central", 
    city: "Auckland",
    postcode: "1010",
    country: "New Zealand"
  },
  employment: {
    employer: "Tech Solutions Ltd",
    position: "Senior Product Manager",
    industry: "Technology",
    annualIncome: 95000,
    startDate: "2022-03-01"
  },
  relationshipManager: "David Park",
  customerSince: "2019-08-15",
  riskProfile: "Moderate"
};
```

---

# IMPLEMENTATION REQUIREMENTS

## Output Requirements

**File Naming**: `ux_pattern_[iteration_number].html`

**Content Structure**: SMB banking sales intelligence UX pattern exploration within Geist design system constraints with comprehensive realistic sales workflow data

**Implementation Requirements**:
- **Complete Sales Example**: Pattern must include full functional demonstration using realistic SMB sales data for prospect assessment, product recommendation, and pipeline management
- **Sales Intelligence Context**: All interface components should reflect prospect research, product matching, and conversion optimization
- **Sales Role Coverage**: Different user types (relationship manager, business development manager, loan officer) with appropriate access levels
- **Sales Workflow Coverage**: Complete user journeys from prospect identification to product recommendation to conversion tracking

## Pattern Implementation Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Pattern Name] - SMB Banking Sales Intelligence</title>
    <style>
        /* Geist Design System implementation */
        /* Use Geist color tokens, typography, spacing, and component patterns */
        /* SMB banking sales intelligence optimized layout and interaction patterns within Geist constraints */
        /* Focus on sales workflow efficiency and conversion optimization */
    </style>
</head>
<body>
    <main>
        <h1>[Pattern Name] - SMB Banking Sales Intelligence Pattern</h1>
        
        <!-- The UX pattern showcasing SMB banking sales intelligence innovation -->
        <div class="smb-sales-intelligence-pattern">
            <!-- SMB sales prospect intelligence interface with realistic sales data and comprehensive prospect analysis -->
            <!-- Smart information architecture for sales workflow across prospect research, product recommendation, and pipeline management -->
            <!-- Demonstrates complete sales team user journey from prospect assessment to product recommendation to conversion tracking -->
            <!-- Include prospect scoring, product fit assessments, and conversion probability rankings -->
        </div>
        
        <!-- Pattern variations for different sales roles and prospect management scenarios -->
        <!-- Use realistic sales data to demonstrate prospect intelligence and sales optimization patterns -->
        
    </main>

    <script>
        // Prospect intelligence and sales workflow optimization
        // Product recommendation engine and conversion tracking
        // Progressive disclosure for complex sales intelligence
        // Performance-optimized sales pipeline management task completion
    </script>
</body>
</html>
```

## Quality Standards

### Sales Task Completion Optimization
- **Sales Team Efficiency**: Measurably faster prospect analysis and opportunity identification
- **Conversion Performance**: Improved conversion rates and revenue growth through sales intelligence
- **Sales Decision Support Quality**: Better prospect insights leading to improved sales outcomes
- **User Adoption**: High usage rates across different sales team roles
- **Predictive Accuracy**: Reduced false positives and improved conversion prediction reliability

### Technical Excellence
- **Accessibility**: WCAG 2.1 AA compliance with keyboard navigation and screen reader support
- **Performance**: 90+ Lighthouse scores with optimized loading and interactions
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Browser Compatibility**: Consistent experience across modern browsers

### Creative Standards
- **Genuine Uniqueness**: Each iteration must be meaningfully different from existing work
- **Spec Compliance**: Strict adherence to specification requirements while encouraging innovation
- **Theme Consistency**: All design decisions must reinforce the chosen theme or brand identity
- **Functional Value**: Innovations must solve real problems, not just add novelty

---

# PATTERN DIMENSIONS & CONSTRAINTS

## SMB Banking Sales Intelligence Pattern Categories

### **Pre-Contact Intelligence Patterns**
- **Prospect Financial Health Dashboard**: Comprehensive assessment of SMB financial stability and growth potential
- **Challenge Identification Interface**: Automated detection of operational pain points and growth constraints
- **Conversation Preparation Tools**: Key talking points and value propositions tailored to prospect situation
- **Competitive Context Analysis**: Understanding current banking relationships and switching opportunities
- **Risk Assessment Workflows**: Initial credit evaluation and relationship potential scoring
- **Industry Intelligence**: Sector-specific challenges and opportunities relevant to prospect
- **Timing Intelligence**: Optimal outreach moments based on business lifecycle indicators
- **Research Automation**: Streamlined prospect analysis and opportunity assessment

### **Product Recommendation Engine Patterns**
- **Need-Product Matching**: Intelligent mapping of SMB challenges to specific banking solutions
- **Product Fit Scoring**: Quantified assessment of product relevance and adoption probability
- **Cross-sell Sequencing**: Optimal timing and order for introducing multiple banking products
- **Value Proposition Personalization**: Tailored benefits messaging based on prospect-specific context
- **ROI Calculator**: Clear financial benefits and cost savings analysis for each recommended product
- **Competitive Differentiation**: How bank products compare to prospect's current solutions
- **Implementation Planning**: Step-by-step adoption pathway for recommended banking products
- **Success Prediction**: Likelihood of product adoption and usage based on prospect profile

### **Prospect Prioritization Patterns**
- **Conversion Probability Scoring**: Data-driven assessment of likelihood to become a client
- **Revenue Potential Analysis**: Estimated lifetime value and product adoption potential
- **Sales Effort Optimization**: Resource allocation based on prospect potential and conversion likelihood
- **Pipeline Management**: Visual workflow for tracking prospects through sales stages
- **Territory Intelligence**: Geographic and industry segment optimization for sales focus
- **Performance Analytics**: Conversion rates, revenue per prospect, and sales cycle tracking
- **Team Collaboration**: Shared prospect intelligence and handoff workflows
- **Market Opportunity Sizing**: Addressable market analysis within specific territories

### **Sales Workflow Optimization Patterns**
- **Outreach Sequencing**: Optimal timing and messaging for prospect engagement
- **Response Tracking**: Engagement patterns and interest indicators across touchpoints
- **Meeting Preparation**: Comprehensive prospect briefings and conversation guides
- **Proposal Generation**: Automated product recommendation packages and pricing
- **Follow-up Intelligence**: Smart reminders and next best action suggestions
- **Competitive Battle Cards**: Real-time competitive positioning and objection handling
- **Sales Stage Progression**: Guided workflows for advancing prospects through the pipeline
- **Conversion Optimization**: Continuous improvement of sales processes and messaging

---

# EXECUTION CONTEXT

## Current Run Information
- **Run Timestamp**: 2025-07-29-135900
- **Experiment Path**: experiments/bank-relationship-intelligence
- **Output Directory**: experiments/bank-relationship-intelligence/runs/2025-07-29-135900/iterations/
- **Starting Iteration**: 6 (continuing from existing iterations 1-5)
- **Target Iterations**: ux_pattern_6.html, ux_pattern_7.html, ux_pattern_8.html

## Historical Context
Previous iterations 1-5 exist from 2025-01-16-legacy-migration run. New iterations must be globally unique across all historical runs while building upon the evolution trajectory established by previous work.

## Success Criteria
- **Platform-Showcase-Optimized**: Specifically designed to demonstrate unified data advantages for banking sales workflows
- **Connected-Data-Powered**: Built-in demonstration of banking, accounting, and merchant data integration capabilities
- **Cross-Source-Intelligence-Enabled**: Showcase insights only possible through unified financial data access
- **Unified-Data-Focused**: Effective demonstration of connected dataset advantages over fragmented systems
- **Platform-Integration-Demonstrative**: Designed to showcase connected data platform capabilities and advantages
- **Connected-Data-Transparent**: Complete visibility into how unified datasets create superior intelligence
- **Platform-Advantage-Enhanced**: Smart demonstrations that clearly show connected data competitive advantages