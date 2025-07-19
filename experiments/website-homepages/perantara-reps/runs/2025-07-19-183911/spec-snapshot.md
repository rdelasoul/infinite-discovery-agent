# Perantara Reps Homepage Specification

## Core Challenge

Create a **professional, results-focused website** for Perantara Reps - the established local DMC helping travel professionals deliver seamless client experiences in New Zealand and Indonesia markets with 30 years of expertise. Serve three distinct customer segments through one cohesive homepage experience that demonstrates local market expertise and proven operational excellence.

## Brand Identity

**Positioning**: "Local expertise that delivers seamless client experiences"  
**Personality**: Professional, established, culturally intelligent, trustworthy  
**Visual Approach**: Split NZ/Indonesia imagery showing local market expertise
**Design Character**: Clean, professional aesthetic that builds trust across both markets

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

#### **Desktop Header Structure - Floating Panel Design (64px height)**
- **Container**: Fixed position floating panel with backdrop blur and subtle shadow
  - Position: `fixed top: 24px, left: 50%, transform: translateX(-50%)`
  - Width: `calc(100% - 48px)` with max-width 1280px
  - Background: `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`
  - Border radius: 1rem, Box shadow: medium elevation
- **Logo**: Perantara Reps (left, 24px margin, links to Home)
- **Navigation Links**: Center horizontal alignment
  - "Why Perantara" → `/why-perantara`
  - "Solutions" (mega-menu trigger)
  - "Services" (standard dropdown)  
  - "Contact" → `/contact`
- **Primary CTA**: "Get a quote" button (right, 24px margin, coral background)

#### **Mobile Header Structure - Floating Panel Adaptation (64px height, ≤768px)**
- **Container**: Maintains floating panel design with reduced margins
  - Position: `fixed top: 16px, width: calc(100% - 32px)`
  - Same backdrop blur and border radius as desktop
- **Logo**: Perantara Reps (left, 16px margin, maintains brand visibility)
- **Navigation**: Hidden, replaced by hamburger menu
- **Hamburger Icon**: Right side, 24px padding from edge
- **Primary CTA**: Hidden in mobile header, appears in slide-in menu
- **Z-index**: Header remains above backdrop overlay but below menu panel

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

### Mobile Navigation (Partial Overlay Design)

#### **Mobile Menu Trigger (≤768px)**
- **Hamburger icon**: Right side of header, 24px padding from edge
- **Visual style**: Three horizontal lines (2px height, 18px width, 4px spacing)
- **Accessibility**: Proper ARIA labels and keyboard activation
- **Animation**: Smooth transform to X icon when opened (300ms ease-out)

#### **Slide-in Menu Panel**
- **Width**: 320px maximum, 80% of screen width minimum
- **Position**: Slides in from right edge of screen
- **Height**: Full viewport height minus header (calc(100vh - 64px))
- **Background**: White with subtle box shadow (-4px 0 8px rgba(0,0,0,0.1))
- **Animation**: 300ms ease-out transform translateX(100% to 0)

#### **Backdrop Overlay**
- **Coverage**: Full screen behind menu panel
- **Background**: Semi-transparent (rgba(0,0,0,0.5))
- **Interaction**: Tap to close menu
- **Z-index**: Lower than menu panel but higher than page content

#### **Menu Content Structure**
- **Header preservation**: Logo remains visible in main header
- **Navigation items**: Stacked vertically with 48px touch targets
- **Solutions section**: Accordion-style expansion for the 3 customer segments
- **Services dropdown**: Simple stacked list
- **Primary CTA**: "Get a quote" button at bottom of menu
- **Close interaction**: X button, backdrop tap, or ESC key

#### **Responsive Behavior**
- **Desktop (≥769px)**: Standard horizontal navigation
- **Mobile (≤768px)**: Hamburger menu with partial overlay
- **Mega-menu adaptation**: 3-column grid becomes stacked accordion
- **Touch optimization**: All interactive elements 44px minimum

## Required Homepage Sections

### 1. Hero Section - Asymmetric Grid with Cascading Cards

#### **Layout Structure - Proven Pattern from Iteration 31**
- **Grid**: Two-column asymmetric layout (content left, visual right)
- **Content positioning**: Left column with generous whitespace
- **Visual element**: Right column with cascading card system
- **Background**: Subtle gradient (Light Cream to White) rather than split imagery
- **Spacing**: 96px top margin to accommodate floating header, 96px section padding

#### **Primary Value Proposition**
- **Main Headline**: "Helping travel professionals deliver seamless client experiences in New Zealand & Indonesia"
- **Subtitle**: "30 years of local expertise. Zero operational headaches."
- **Typography**: H1 scale (2.5rem) with proper line-height 1.1

#### **Primary CTAs (Market-Focused)**
- **"Sell NZ with Confidence"** → `/travel-wholesalers-nz-inbound` (A1 focus)
- **"Indonesia Made Safe & Simple"** → `/travel-wholesalers-id-inbound` (A2 focus)
- **Styling**: Coral background (#E63946), 48px height, 1rem border radius
- **Layout**: Side-by-side on desktop, stacked on mobile
- **Positioning**: Below subtitle with 32px margin

#### **Cascading Cards Visual System (Right Column)**
- **Purpose**: Create depth and visual interest while showcasing expertise
- **Layout**: Three overlapping cards with staggered positioning
- **Card 1 (Top/Front)**: 
  - Size: 320px × 200px
  - Position: `top: 0, left: 0, z-index: 3`
  - Background: Primary Blue gradient with white text
  - Content: "New Zealand Expertise" with outcome description
- **Card 2 (Middle)**: 
  - Size: 280px × 180px
  - Position: `top: 80px, left: 160px, z-index: 2`
  - Background: Teal gradient
  - Content: "Indonesia Operations" with logistics description
- **Card 3 (Back)**: 
  - Size: 300px × 160px
  - Position: `top: 200px, left: 80px, z-index: 1`
  - Background: White with subtle shadow
  - Content: "30 Years Track Record" with metrics
- **Interactions**: Hover transforms with `translateY(-8px)` and enhanced shadows
- **Container**: Relative positioning with 600px height for card containment

#### **Services Tiles (Integrated Below CTAs)**

**Purpose**: Immediate clarity of service offerings for all three customer segments

**Layout Structure**:
- **Position**: Below primary CTAs, within hero section left column
- **Desktop**: 3-column grid with 24px gaps
- **Mobile**: Stacked single column with 16px gaps
- **Container**: Max-width 800px, part of hero content flow
- **Spacing**: 48px margin above services tiles from CTAs

**Tile Specifications**:

**Tile 1 - NZ Inbound DMC (A1)**
- **Icon**: Professional service icon (24px, Primary Blue #1D3557)
- **Title**: "NZ Inbound DMC" (H4 style: 1.125rem, font-weight 500)
- **Outcome**: "Seamless tours without vendor hassles" (0.875rem, font-weight 400)
- **Link**: `/travel-wholesalers-nz-inbound`
- **Background**: Light Cream (#F1FAEE) with 1rem border radius

**Tile 2 - Indonesia Inbound DMC (A2)**
- **Icon**: Adventure/exploration icon (24px, Primary Blue #1D3557)
- **Title**: "Indonesia Inbound DMC" (H4 style: 1.125rem, font-weight 500)
- **Outcome**: "Safe, vetted Indonesian adventures" (0.875rem, font-weight 400)
- **Link**: `/travel-wholesalers-id-inbound`
- **Background**: Light Cream (#F1FAEE) with 1rem border radius

**Tile 3 - Indonesia Sales Representation (B1)**
- **Icon**: Market expansion icon (24px, Primary Blue #1D3557)
- **Title**: "Indonesia Sales Rep" (H4 style: 1.125rem, font-weight 500)
- **Outcome**: "Local office without the overhead" (0.875rem, font-weight 400)
- **Link**: `/overseas-dmcs-indonesia-rep`
- **Background**: Light Cream (#F1FAEE) with 1rem border radius

**Tile Styling Standards**:
- **Padding**: 24px internal spacing
- **Min height**: 120px for content consistency
- **Hover state**: Subtle transform (scale 1.02) and shadow enhancement
- **Transition**: 200ms ease-out for all interactions
- **Icon spacing**: 8px between icon and title, 4px between title and outcome

**Responsive Behavior**:
- **Desktop (≥1024px)**: 3-column grid, 200px min-width per tile
- **Tablet (768px-1023px)**: 3-column grid, flexible widths
- **Mobile (≤767px)**: Single column stack, full-width tiles

**Visual Hierarchy**:
- **Primary**: Main headline and subtitle
- **Secondary**: Primary CTAs (larger, more prominent)
- **Tertiary**: Services tiles (smaller, supporting clarity)

**Note**: Services tiles provide immediate offering clarity while maintaining focus on primary CTAs for main conversion paths

### 2. Trust & Credibility Section - Asymmetric Grid with Sticky Sidebar

#### **Layout Structure - Proven Pattern from Iteration 31**
- **Grid**: Asymmetric 2fr 1fr layout (content left, metrics right)
- **Content flow**: Trust header + proof logos in left column (2fr)
- **Metrics sidebar**: Sticky positioned metrics panel in right column (1fr)
- **Spacing**: 96px section padding with 64px gap between columns
- **Background**: Clean white background for professional credibility

#### **Trust Header (Centered, Full Width)**
- **Headline**: "Trusted by Leading Travel Brands" (H2 scale: 2rem)
- **Subheading**: "Building seamless experiences with industry leaders since 1994"
- **Typography**: 1.25rem size with Medium text color
- **Spacing**: Center-aligned with 48px bottom margin

#### **Proof Logos Strip (Left Column - 2fr)**
- **Container**: Light Cream background (#F1FAEE) with 1rem border radius
- **Layout**: Flexible grid with 32px gaps, center-aligned
- **Partners**: Air New Zealand, Garuda Indonesia, Singapore Airlines (greyscale)
- **Certifications**: Tourism New Zealand, Indonesia Tourism Board
- **Memberships**: Silver Africa, IATA, PATA
- **Styling**: 120px × 48px logos, grayscale filter, 0.6 opacity
- **Hover**: Remove grayscale, full opacity transition
- **Responsive**: Grid → carousel on mobile (≤ 768px)

#### **Sticky Metrics Sidebar (Right Column - 1fr)**
- **Position**: `sticky top: 112px` to account for floating header
- **Background**: Primary Blue (#1D3557) with white text
- **Padding**: 48px internal spacing
- **Border radius**: 1rem for consistency
- **Grid**: Single column with 32px gaps between metrics
- **Metrics Layout**:
  - **30** (2.5rem font, 600 weight) / "Years in Market" (0.875rem, 0.9 opacity)
  - **4,000+** / "Passengers/Year" 
  - **150+** / "Supplier Partners"
  - **2** / "Language Support"
- **Responsive**: Below 1024px, converts to static horizontal grid

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
**IMPORTANT**: Focus iterations on **proven layout patterns** from iteration 31 - floating headers, cascading cards, asymmetric grids, and sticky sidebars - rather than color exploration. Build on successful structural foundations.

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

#### **Component Standards - Iteration 31 Proven Patterns**
- **Floating elements**: Backdrop blur, subtle shadows, proper z-index layering
- **Consistent buttons**: Same height (48px minimum), same border radius (1rem), same font-weight (500)
- **Card styling**: Subtle shadows with hover enhancement, consistent padding (24px), rounded corners (1rem)
- **Cascading systems**: Proper z-index hierarchy (3, 2, 1), overlapping positioning, staggered transforms
- **Sticky elements**: Proper top positioning to account for floating header (112px)
- **Form elements**: Same height as buttons, proper label spacing, consistent validation states
- **Icon sizing**: 24px base size, consistent stroke width (1.5px)
- **Grid systems**: Asymmetric layouts (2fr 1fr), proper gap spacing (64px), responsive adaptation

#### **Professional Polish Requirements - Based on Iteration 31 Standards**
- **Cultural balance**: Equal visual weight to NZ and Indonesian elements through layout, not color
- **Professional imagery**: Behind-the-scenes authenticity, business contexts, real team members
- **Clean execution**: No overlapping elements, proper contrast, readable text sizes
- **Interaction Standards** (Proven from Iteration 31):
  - **Smooth transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1) for all interactions
  - **Hover transforms**: `translateY(-2px)` for CTAs, `scale(1.02)` for cards
  - **Shadow progression**: Soft → Medium → Strong shadow on interaction states
  - **Backdrop effects**: `backdrop-filter: blur(12px)` for floating elements
  - **Micro-animations**: Subtle transforms with proper easing curves

### Layout Innovation Areas - Building on Iteration 31 Success
- **Floating navigation refinements**: Variations on backdrop blur, panel positioning, and interaction patterns
- **Cascading card arrangements**: Different overlapping patterns, z-index hierarchies, and content organization
- **Asymmetric grid systems**: Various 2fr/1fr combinations, sticky element positioning, and content distribution
- **Trust section variations**: Different approaches to proof logos, metrics sidebars, and credibility content flow
- **Hero visual systems**: Alternatives to cascading cards while maintaining depth and engagement
- **Responsive transformations**: How asymmetric grids and sticky elements adapt across breakpoints
- **Interaction refinements**: Hover patterns, transition timing, and micro-animation details

### Multi-Market Credibility Patterns - Iteration 31 Approach
- **Floating header credibility**: Professional backdrop blur and spacing creates premium perception
- **Cascading expertise**: Overlapping cards demonstrate multi-market depth and experience layers
- **Asymmetric authority**: 2fr/1fr layouts position content flow against condensed metrics for impact
- **Sticky prominence**: Key metrics remain visible during scroll for continuous credibility reinforcement
- **Established authority**: Layout structures that communicate 30-year track record through spatial hierarchy
- **Bi-directional capability**: Balanced content presentation showing expertise in both market directions
- **Professional trust**: Enterprise-grade layout polish with sophisticated interaction patterns
- **Segment clarity**: Clear differentiation between customer types through layout hierarchy without confusion

## Technical Specifications

### Responsive Design
- **Mobile-first approach**: Primary design for 320px+
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Touch optimization**: 44px minimum touch targets

#### **Navigation Responsiveness**
- **Desktop (≥769px)**: Full horizontal navigation with mega-menu
- **Mobile (≤768px)**: Hamburger partial overlay (320px max width, 80% screen min)
- **Mega-menu adaptation**: 3-column grid → stacked accordion in mobile menu
- **CTA visibility**: Desktop header → mobile menu footer

#### **Hero Section Responsiveness**
- **Services tiles**: 3-column grid → single column stack below 768px
- **Primary CTAs**: Side-by-side desktop → stacked mobile
- **Background image**: Split view desktop → single image mobile with overlay
- **Typography scaling**: Maintains hierarchy across all breakpoints

#### **Content Grid Adaptation**
- **Trust section**: Horizontal logo grid → carousel on mobile (≤768px)
- **Growth section**: Two-column → single column below 1024px
- **Contact form**: Side-by-side → stacked below 768px
- **Section spacing**: 96px desktop → 64px tablet → 48px mobile

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

## Layout Iteration Focus - Building on Iteration 31 Success

Each iteration should explore different **layout approaches** while maintaining the successful structural foundation from iteration 31:

### Proven Layout Foundation (Maintain These)
- **Floating header pattern**: Backdrop blur navigation with proper spacing and shadows
- **Asymmetric hero grid**: Content left, cascading cards right for visual engagement
- **2fr/1fr trust layout**: Content flow left, sticky metrics sidebar right
- **Smooth interaction patterns**: 300ms transitions with proper transform hierarchies

### Layout Variation Areas (Iterate Within This Framework)
- **Cascading card arrangements**: Different overlapping patterns while maintaining depth
- **Navigation refinements**: Mega-menu layout variations within floating header system
- **Trust content arrangements**: Alternative proof logo layouts and metrics sidebar designs
- **Section transitions**: Creative approaches to connecting asymmetric grid sections
- **Content hierarchy**: Different information architecture within proven grid structures
- **Sticky element positioning**: Various approaches to sidebar content and positioning

### Consistency Requirements - Enhanced from Iteration 31
- **Use defined color palette**: Stick to Primary Blue, Accent Blue, Teal, Light Cream, and Coral
- **Follow typography system**: Use only the defined font scale (2.5rem, 2rem, 1.5rem, 1rem, 0.875rem)
- **Apply spacing system**: Use only multiples of 8px for all margins and padding
- **Maintain proven patterns**: Floating headers, cascading cards, asymmetric grids, sticky sidebars
- **Preserve interaction standards**: 300ms cubic-bezier transitions, proper transform hierarchies
- **Professional credibility**: Layout patterns appropriate for 30-year established company
- **Trust-building focus**: Layout hierarchy that emphasizes credibility and expertise
- **Clear navigation paths**: Layout flows that guide users to Solutions/Services navigation
- **Cultural sensitivity**: Balanced spatial treatment of NZ and Indonesian elements

### Quality Assurance Checklist - Enhanced with Iteration 31 Standards
Before considering an iteration complete, verify:

#### **Foundation Standards**
- ✅ **Typography**: All text uses defined scale, no arbitrary font sizes
- ✅ **Spacing**: All margins/padding use 8px multiples (8, 16, 24, 32, 48, 64, 96, 128px)
- ✅ **Color palette**: Only Primary Blue, Accent Blue, Teal, Light Cream, Coral used
- ✅ **Grid alignment**: All elements align to 12-column grid system
- ✅ **Visual hierarchy**: Clear size differentiation between heading levels

#### **Iteration 31 Proven Patterns**
- ✅ **Floating header**: Backdrop blur, proper positioning (top: 24px), 64px height
- ✅ **Cascading cards**: Three-card overlap system with proper z-index (3,2,1)
- ✅ **Asymmetric grids**: 2fr/1fr layouts with 64px gaps properly implemented
- ✅ **Sticky elements**: Proper top positioning (112px) accounting for floating header
- ✅ **Smooth transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1) consistently applied

#### **Interaction Excellence**
- ✅ **Hover transforms**: `translateY(-2px)` for CTAs, `scale(1.02)` for cards
- ✅ **Shadow progression**: Soft → Medium → Strong on interaction states
- ✅ **Solutions mega-menu**: 3-column grid, hover trigger, 300ms transition, proper card styling
- ✅ **Responsive behavior**: Mega-menu adapts correctly (3-col → 2-col → accordion)
- ✅ **Focus indicators**: Proper accessibility support with visible focus states

#### **Professional Polish**
- ✅ **Clean execution**: No overlapping elements, proper white space, readable contrast
- ✅ **Component consistency**: Button heights (48px), border radius (1rem), font-weight (500)
- ✅ **Cultural balance**: Equal spatial treatment of NZ and Indonesian elements
- ✅ **Trust hierarchy**: Credibility content properly emphasized through layout

The goal is distinctive **layout variations** that build upon iteration 31's successful foundation - floating headers, cascading cards, asymmetric grids, and sticky sidebars - while reinforcing Perantara's unique local expertise and proven results through systematic design quality.