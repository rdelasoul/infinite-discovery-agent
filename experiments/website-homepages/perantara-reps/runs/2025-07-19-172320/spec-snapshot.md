# Perantara Reps Homepage Specification

## Core Challenge

Create a **professional, results-focused website** for Perantara Reps - the established local DMC helping travel professionals deliver seamless client experiences in New Zealand and Indonesia markets with 30 years of expertise. Serve three distinct customer segments through one cohesive homepage experience that demonstrates local market expertise and proven operational excellence.

## Brand Identity

**Positioning**: "Local expertise that delivers seamless client experiences"  
**Personality**: Professional, established, culturally intelligent, trustworthy  
**Visual Approach**: Split NZ/Indonesia imagery showing local market expertise
**Design Character**: Clean, professional aesthetic that builds trust across both markets

## Design Tokens & Color Palette

**Primary Blue**: `#1D3557` (very dark)  
**Accent Blue**: `#457B9D`  
**Teal**: `#A8DADC` (secondary accent)  
**Light Cream**: `#F1FAEE` (background panels)  
**Coral**: `#E63946` (CTA buttons / highlights)  
**Font Stack**: `Inter, sans-serif`  
**Border Radius**: `rounded-xl` (1rem) for cards & buttons

## Three Customer Segments

### A1: Travel Wholesalers & Agencies – NZ Inbound
- **Path**: `/travel-wholesalers-nz-inbound`
- **Pain Points**: Vendor-coordination hassles, on-ground quality risk, time-zone friction
- **Need**: Seamless NZ tours for travel wholesalers & agencies
- **Outcome**: "Sell profitable NZ itineraries without extra admin"
- **Primary CTA**: "Request sample itinerary"

### A2: Travel Wholesalers & Agencies – Indonesia Inbound
- **Path**: `/travel-wholesalers-id-inbound`
- **Pain Points**: Safety concerns, need vetted suppliers, multi-island logistics
- **Need**: Curated Indonesia trips for travel wholesalers & agencies
- **Outcome**: "Deliver Indonesian adventures your clients will rave about"
- **Primary CTA**: "Get Indonesia sample pack"

### B1: Overseas DMCs – Indonesia Sales Representation
- **Path**: `/overseas-dmcs-indonesia-rep`
- **Pain Points**: Bureaucracy maze, high office CAPEX, market-intel gap
- **Need**: Grow Indonesia sales without opening a local office
- **Outcome**: "Jakarta sales rep acting as your in-market team"
- **Primary CTA**: "Book discovery call"

## Complete Site Navigation Requirements

The homepage must include navigation that links to these required pages:

### Header Layout Requirements

#### **Desktop Header Structure (64px height)**
- **Logo**: Perantara Reps (left, 24px margin, links to Home)
- **Navigation Links**: Center horizontal alignment
  - "Why Perantara" → `/why-perantara`
  - "Solutions" (mega-menu trigger)
  - "Services" (standard dropdown)  
  - "Contact" → `/contact`
- **Primary CTA**: "Get a quote" button (right, 24px margin, coral background)

#### **Solutions Mega-Menu Implementation (HubSpot Style)**

**Trigger & Behavior:**
- **Hover activation**: Opens on mouse enter, closes on mouse leave
- **Transition**: Smooth slide-down animation (300ms ease-out)
- **Positioning**: Full-width dropdown, centered, max-width 1200px
- **Overlay**: Semi-transparent background overlay on desktop
- **Accessibility**: Opens with Enter key, closes with ESC, proper ARIA labels

**Visual Structure:**
- **Container**: White background, subtle box shadow (0 4px 6px rgba(0,0,0,0.1))
- **Padding**: 24px around entire content area
- **Layout**: 3-column CSS grid, 16px gap between columns

**Solution Cards (3 columns):**
- **Column 1**: "Travel Wholesalers & Agencies – NZ Inbound"
  - Icon: Professional service icon (24px)
  - Headline: "Seamless NZ tours for travel wholesalers & agencies"
  - Outcome: "Sell profitable NZ itineraries without extra admin"
  - Link: `/travel-wholesalers-nz-inbound`

- **Column 2**: "Travel Wholesalers & Agencies – Indonesia Inbound"
  - Icon: Adventure/exploration icon (24px)
  - Headline: "Curated Indonesia trips for travel wholesalers & agencies"
  - Outcome: "Deliver Indonesian adventures your clients will rave about"
  - Link: `/travel-wholesalers-id-inbound`

- **Column 3**: "Overseas DMCs – Indonesia Sales Representation"
  - Icon: Market expansion icon (24px)
  - Headline: "Grow Indonesia sales without opening a local office"
  - Outcome: "Jakarta sales rep acting as your in-market team"
  - Link: `/overseas-dmcs-indonesia-rep`

**Card Styling:**
- **Padding**: 16px per card
- **Hover state**: Light background color change (Light Cream #F1FAEE)
- **Typography**: H3 style headlines, body text for outcomes
- **Spacing**: 8px between icon and headline, 4px between headline and outcome

**Responsive Behavior:**
- **Desktop (≥1024px)**: 3-column grid as described above
- **Tablet (768px-1023px)**: 2-column grid, third card below spanning both columns
- **Mobile (≤767px)**: Convert to accordion-style stacked list

#### **Services Dropdown (Standard)**
- **Simple dropdown**: Vertical list, white background, box shadow
- **Items**: 
  - "NZ Inbound DMC" → `/nz-inbound-dmc`
  - "Indonesia Inbound DMC" → `/indonesia-inbound-dmc`
  - "Indonesia Sales Representation" → `/indonesia-sales-representation`
- **Styling**: 12px padding per item, hover background color change

### Mobile Navigation
- Collapsible hamburger slide-in menu
- Mega-menu becomes accordion
- All links stacked vertically

## Required Homepage Sections

### 1. Hero Section - Success-Focused Value Proposition
- **Main Headline**: "Helping travel professionals deliver seamless client experiences in New Zealand & Indonesia"
- **Subtitle**: "30 years of local expertise. Zero operational headaches."
- **Market-Focused CTAs**: 
  - "Sell NZ with Confidence" → `/travel-wholesalers-nz-inbound` (A1 focus)
  - "Indonesia Made Safe & Simple" → `/travel-wholesalers-id-inbound` (A2 focus)
- **Background**: Full-bleed split background image (NZ left / Indonesia right)
- **Note**: Direct value proposition that speaks to travel professional success and specific business outcomes

### 2. Trust & Credibility Section
Comprehensive trust-building content combining multiple proof elements:

#### Proof Logos Strip
- **Airline partners**: Air New Zealand, Garuda Indonesia, Singapore Airlines (greyscale)
- **Tourism boards**: Tourism New Zealand, Indonesia Tourism Board certifications
- **Industry partnerships**: Silver Africa, IATA, PATA memberships
- **Layout**: Responsive grid → carousel on mobile (≤ 768px)

#### Impact Metrics
Big numerals with expanded credibility metrics:
- **30 years** in market (established presence)
- **4,000+ passengers/year** (proven volume capability)
- **150+ supplier partnerships** (network strength)
- **Multi-language support** (English, Bahasa Indonesia)

### 3. Growth Opportunities Section
**Focus**: Indonesia market expansion for overseas DMCs (B1)

#### Market Expansion Value Proposition
- **Headline**: "Want to grow Indonesia sales without a local office?"
- **Subheading**: "Our Jakarta team becomes your in-market sales representation"
- **Key Benefits**:
  - Local market intelligence and business development
  - Established supplier relationships and operational support
  - Cultural expertise and regulatory navigation
  - No office overhead or staff investment required

#### Success Proof
- **Silver Africa case study snippet**: Revenue growth metrics and market penetration results
- **Indonesia market statistics**: Growth potential and opportunity size
- **Client testimonials**: Specific results from overseas DMCs using representation services

#### Primary CTA
- **"Book Discovery Call"** → `/overseas-dmcs-indonesia-rep`
- **Secondary**: "Download Market Intelligence" (lead magnet)

### 4. Contact Section - CTA Footer
- **Slim form**: Name · Email · Service dropdown (A1/A2/B1/Unsure)
- **Form action**: Posts to `/contact`
- **WhatsApp integration**: Click-to-chat for immediate connection
- **Response commitment**: "We'll respond with relevant information within 24 hours"

### 5. Footer
- **Brand tagline** + social (LinkedIn / WhatsApp icons)
- **Mini contact info** (email, phone)
- **Copyright year**

## Design Implementation Requirements

### Layout-Focused Iteration Priority
**IMPORTANT**: Color scheme is pre-defined above. Focus iterations on layout patterns, component arrangements, and structural design rather than color exploration.

### Professional Brand Expression & Design Standards

#### **Typography System (Strict Requirements)**
- **Font Family**: Inter, sans-serif (consistently applied throughout)
- **Hierarchy Scale**: 
  - H1: 2.5rem (40px), font-weight 600, line-height 1.1, letter-spacing -0.025em
  - H2: 2rem (32px), font-weight 600, line-height 1.2
  - H3: 1.5rem (24px), font-weight 500, line-height 1.3
  - Body: 1rem (16px), font-weight 400, line-height 1.6
  - Small: 0.875rem (14px), font-weight 400, line-height 1.5
- **No arbitrary font sizes**: Use only the defined scale, no random px values

#### **Spacing System (8px Base Unit)**
- **Systematic scaling**: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- **Section margins**: Minimum 64px between major sections, 96px preferred
- **Component spacing**: 24px minimum between unrelated content blocks
- **Text spacing**: 16px between paragraphs, 8px between related elements
- **No arbitrary spacing**: Use only multiples of 8px for margins and padding

#### **Layout Principles**
- **12-column grid system**: Consistent margins and gutters across breakpoints
- **Generous whitespace**: 2:1 ratio (twice as much space around important elements)
- **Visual hierarchy**: Clear scale differentiation (1.5x minimum between hierarchy levels)
- **Clean alignment**: Everything aligns to grid, no random positioning
- **Purposeful density**: Avoid cramming content, let elements breathe

#### **Component Standards**
- **Consistent buttons**: Same height (48px minimum), same border radius (1rem), same font-weight (500)
- **Card styling**: Subtle shadows, consistent padding (24px), rounded corners (1rem)
- **Form elements**: Same height as buttons, proper label spacing, consistent validation states
- **Icon sizing**: 24px base size, consistent stroke width (1.5px)

#### **Professional Polish Requirements**
- **Cultural balance**: Equal visual weight to NZ and Indonesian elements through layout, not color
- **Professional imagery**: Behind-the-scenes authenticity, business contexts, real team members
- **Clean execution**: No overlapping elements, proper contrast, readable text sizes
- **Interaction feedback**: Subtle hover states (opacity 0.8 or scale 1.02), smooth transitions (200-300ms)

### Layout Innovation Areas
- **Navigation patterns**: Creative approaches to mega-menu design and mobile hamburger implementation
- **Trust section layouts**: Innovative arrangements of proof logos, company story, and metrics
- **Hero section composition**: Various approaches to split imagery and trust-building CTA positioning
- **Credibility content flow**: Different ways to organize and present trust-building elements
- **Section transitions**: Creative approaches to connecting homepage trust-building sections
- **Responsive breakpoints**: Creative mobile-to-desktop layout transformations

### Multi-Market Credibility Patterns
- **Established authority**: Layout structures that communicate 30-year track record
- **Bi-directional capability**: Spatial design elements showing expertise in both market directions
- **Professional trust**: Enterprise-grade layout polish appropriate for B2B audiences
- **Segment clarity**: Clear differentiation between customer types through layout hierarchy without confusion

## Technical Specifications

### Responsive Design
- **Mobile-first approach**: Primary design for 320px+
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Navigation adaptation**: Hamburger slide-in menu below 768px
- **Grid responsiveness**: Single column mobile → multi-column desktop
- **Touch optimization**: 44px minimum touch targets

### Form Functionality  
- **Validation**: Real-time validation with helpful error messages
- **Persona routing**: Different form actions based on customer type selection (A1/A2/B1/Unsure)
- **Progressive enhancement**: Core functionality works without JavaScript
- **Accessibility**: Proper labels, ARIA attributes, keyboard navigation

### Performance Optimization
- **Global loading**: Optimized for NZ, Indonesia, and international users
- **Image optimization**: WebP with fallbacks, appropriate sizing
- **Font loading**: Efficient Inter font loading strategy
- **Mobile performance**: Optimized for varying connection speeds

## Output Format

**File naming**: `perantara_homepage_[iteration].html`

**Structure**: Single self-contained HTML file with:
- Embedded CSS using the defined color palette and design tokens
- Embedded JavaScript for interactions and form handling
- No external dependencies except Inter font
- Mobile-responsive design using CSS Grid and Flexbox
- Accessible markup with proper semantic structure
- `rounded-xl` border radius for cards and buttons (1rem)

## Layout Iteration Focus

Each iteration should explore different **layout approaches** to the local expertise and seamless experience concept:

### Layout Variation Areas
- **Navigation structure**: Different mega-menu layouts and mobile navigation patterns
- **Hero composition**: Various split-image arrangements and trust-building CTA positioning strategies
- **Trust content arrangements**: Different layouts for proof logos, company story, and metrics sections
- **Section transitions**: Creative approaches to connecting homepage trust-building sections
- **Content hierarchy**: Different information architecture approaches for credibility content

### Consistency Requirements
- **Use defined color palette**: Stick to Primary Blue, Accent Blue, Teal, Light Cream, and Coral
- **Follow typography system**: Use only the defined font scale (2.5rem, 2rem, 1.5rem, 1rem, 0.875rem)
- **Apply spacing system**: Use only multiples of 8px for all margins and padding
- **Maintain component standards**: Consistent button heights, card padding, icon sizes
- **Professional credibility**: Layout patterns appropriate for 30-year established company
- **Trust-building focus**: Layout hierarchy that emphasizes credibility and expertise
- **Clear navigation paths**: Layout flows that guide users to Solutions/Services navigation
- **Cultural sensitivity**: Balanced spatial treatment of NZ and Indonesian elements

### Quality Assurance Checklist
Before considering an iteration complete, verify:
- ✅ **Typography**: All text uses defined scale, no arbitrary font sizes
- ✅ **Spacing**: All margins/padding use 8px multiples (8, 16, 24, 32, 48, 64, 96, 128px)
- ✅ **Buttons**: Consistent height (48px min), border radius (1rem), font-weight (500)
- ✅ **Grid alignment**: All elements align to 12-column grid system
- ✅ **Visual hierarchy**: Clear size differentiation between heading levels
- ✅ **Clean execution**: No overlapping elements, proper white space, readable contrast
- ✅ **Header implementation**: 64px height, proper logo/navigation/CTA positioning
- ✅ **Solutions mega-menu**: 3-column grid, hover trigger, 300ms transition, proper card styling
- ✅ **Responsive behavior**: Mega-menu adapts correctly (3-col → 2-col → accordion)
- ✅ **Interaction states**: Hover effects on cards, proper focus indicators, accessibility support

The goal is distinctive **layout patterns** that reinforce Perantara's unique local expertise and proven results while maintaining systematic design quality and using the established color scheme consistently.