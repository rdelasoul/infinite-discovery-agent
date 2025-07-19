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

### Header Navigation
- **Logo**: Perantara Reps (links to Home)
- **Why Perantara** → `/why-perantara` (timeline, leadership, accreditations)
- **Solutions** (mega-menu) → Three persona landing pages:
  - "Travel Wholesalers & Agencies – NZ Inbound" → `/travel-wholesalers-nz-inbound`
  - "Travel Wholesalers & Agencies – Indonesia Inbound" → `/travel-wholesalers-id-inbound`
  - "Overseas DMCs – Indonesia Sales Representation" → `/overseas-dmcs-indonesia-rep`
  - Each card: icon, outcome line (≤ 60 char), 40-char subcopy
- **Services** (dropdown) → Three service pages:
  - "NZ Inbound DMC" → `/nz-inbound-dmc`
  - "Indonesia Inbound DMC" → `/indonesia-inbound-dmc`
  - "Indonesia Sales Representation" → `/indonesia-sales-representation`
- **Contact** → `/contact`
- **Primary CTA**: "Get a quote" button (positioned right in header)

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

### Professional Brand Expression
- **Typography hierarchy**: Clear information architecture appropriate for B2B audiences using Inter font stack
- **Layout patterns**: Strategic use of white space and thoughtful content organization
- **Component arrangement**: Innovative approaches to trust-building content, navigation mega-menu, and section flow
- **Cultural balance**: Equal visual weight to NZ and Indonesian elements through layout, not color
- **Professional imagery**: Behind-the-scenes authenticity, business contexts, real team members

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
- **Professional credibility**: Layout patterns appropriate for 30-year established company
- **Trust-building focus**: Layout hierarchy that emphasizes credibility and expertise
- **Clear navigation paths**: Layout flows that guide users to Solutions/Services navigation
- **Cultural sensitivity**: Balanced spatial treatment of NZ and Indonesian elements

The goal is distinctive **layout patterns** that reinforce Perantara's unique local expertise and proven results while using the established color scheme consistently.