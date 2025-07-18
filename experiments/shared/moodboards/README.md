# Moodboards Directory

## Purpose

**Visual inspiration and aesthetic direction** for AI agents when creating themed designs. Moodboards bridge the gap between client aesthetic preferences ("I like this website") and actionable creative direction for businesses without established brands.

## Quick Start

```bash
# Use existing moodboard in experiment
# Edit experiments/[experiment-type]/spec-config.yml:
dependencies:
  moodboards:
    - modern-minimalist

# Run experiment with aesthetic guidance
/infinite ui-components 5

# Create new moodboard
/moodboard create client-project
```

## How Moodboards Work

### **The Problem Solved**
Many small businesses know what they like aesthetically but lack:
- Defined brand colors, fonts, or visual identity
- Design vocabulary to communicate preferences
- Systematic way to guide creative direction

**Moodboards solve this** by capturing visual inspiration in a structured format that AI agents can understand and implement.

### **Integration with Existing System**
Moodboards work alongside the current shared dependency system:

- **Design Systems** (`design-systems/`): Technical frameworks (Geist, Material, etc.)
- **Spec Modules** (`spec-modules/`): Quality standards (accessibility, performance)
- **Data Sets** (`data/`): Business context (banking, ecommerce scenarios)
- **Moodboards** (`moodboards/`): **NEW** - Visual inspiration and aesthetic direction

### **Workflow Integration**
```bash
# 1. Curate aesthetic inspiration
/moodboard create startup-energy
# → Analyzes reference sites, extracts key visual elements

# 2. Configure experiment to use moodboard
# Edit spec-config.yml:
dependencies:
  moodboards: [startup-energy]

# 3. Generate aligned variations  
/infinite website-homepages/client-project 5
# → Agents receive structured aesthetic guidance
```

## Moodboard File Structure

Each moodboard follows a consistent format that provides comprehensive aesthetic guidance:

### **Required Sections**

#### **1. Overview & Inspiration Sources**
- Brief description of the aesthetic direction
- Source URLs with specific elements noted
- Overall emotional/personality goals

#### **2. Color Palette Analysis**
- Primary colors with hex codes
- Secondary/accent colors
- Color emotional associations and usage contexts
- Contrast and accessibility considerations

#### **3. Typography Direction**
- Font personality descriptions (modern, classic, playful, etc.)
- Hierarchy patterns (how headings/body text relate)
- Specific font recommendations or characteristics
- Text treatment styles (letter spacing, weights, etc.)

#### **4. Visual Style Patterns**
- Layout approaches (grid-based, organic, asymmetrical)
- Spacing and whitespace usage
- Visual hierarchy techniques
- Image and media treatment

#### **5. Interaction & Animation Style**
- Transition and animation personality
- Hover states and micro-interactions
- Loading and feedback patterns
- Overall interaction feel (smooth, snappy, organic, etc.)

#### **6. Brand Personality & Emotion**
- Target user emotional response
- Brand personality traits (trustworthy, innovative, approachable)
- Cultural considerations and accessibility
- Premium vs accessible positioning

### **Example File Structure**
```markdown
# [Moodboard Name]

## Overview & Inspiration
Brief description and source analysis...

## Color Palette
Primary: #2563eb (Professional Blue)
Secondary: #f3f4f6 (Light Gray)
Accent: #10b981 (Success Green)

## Typography Direction
Clean, geometric sans-serif fonts...

## Visual Style Patterns  
Grid-based layouts with generous whitespace...

## Interaction Style
Smooth, purposeful micro-interactions...

## Brand Personality
Modern, trustworthy, approachable...
```

## Available Moodboards

### **🔹 Modern Minimalist** (`modern-minimalist.md`)
- **Aesthetic**: Clean geometry, generous whitespace, purposeful simplicity
- **Colors**: Monochromatic with single accent color
- **Typography**: Geometric sans-serif, clear hierarchy
- **Best for**: Professional services, SaaS products, portfolios

### **🌿 Organic Nature** (`organic-nature.md`)
- **Aesthetic**: Natural forms, flowing layouts, earth-inspired colors
- **Colors**: Earth tones, natural greens, warm neutrals
- **Typography**: Humanist fonts with organic character
- **Best for**: Wellness, sustainability, creative services

### **⚡ Tech Startup** (`tech-startup.md`)
- **Aesthetic**: Bold, energetic, contemporary, confident
- **Colors**: Vibrant primary with high contrast
- **Typography**: Modern sans-serif with strong personality
- **Best for**: Technology companies, startups, innovative products

### **💎 Luxury Boutique** (`luxury-boutique.md`)
- **Aesthetic**: Sophisticated, elegant, premium, exclusive
- **Colors**: Rich, deep tones with metallic accents  
- **Typography**: Refined serif or elegant sans-serif
- **Best for**: High-end retail, professional services, luxury brands

## Using Moodboards in Experiments

### **Method 1: spec-config.yml Integration**
```yaml
# experiments/website-homepages/client-project/spec-config.yml
dependencies:
  design-systems:
    - geist-core              # Technical framework
  spec-modules:
    - accessibility-standards # Quality requirements  
  moodboards:
    - modern-minimalist       # Aesthetic direction
  data:
    - ecommerce-data          # Business context
```

### **Method 2: Mix and Match Aesthetic Guidance**
```yaml
# For unique aesthetic combinations
dependencies:
  moodboards:
    - tech-startup           # Energy and boldness
    - modern-minimalist      # Clean execution
    # Agents blend aesthetic directions intelligently
```

### **Method 3: Project-Specific Moodboards**
```yaml
# For client work with curated inspiration
dependencies:
  moodboards:
    - client-abc-aesthetic   # Custom moodboard for specific project
  design-systems:
    - geist-core
```

## Creating New Moodboards

### **Manual Creation Process**
1. **Copy template**: Use existing moodboard as starting point
2. **Analyze inspiration**: Extract colors, typography, visual patterns
3. **Structure findings**: Follow the required section format
4. **Test integration**: Add to spec-config.yml and run experiment

### **Available `/moodboard` Command**
```bash
# Interactive curation with AI assistance
/moodboard create [name]

# Analyze specific websites and extract elements
/moodboard analyze [name] https://site1.com https://site2.com

# Add references to existing moodboard
/moodboard update [name] https://additional-site.com
```

The command:
- **Fetch and analyze** provided website references
- **Extract visual elements** (colors, typography, layout patterns)
- **Structure analysis** into the standard moodboard format
- **Save to moodboards directory** with consistent organization

### **Quality Standards for New Moodboards**
- **Comprehensive Analysis**: Cover all required sections thoroughly
- **Actionable Guidance**: Specific enough for AI agents to implement
- **Consistent Format**: Follow established structure and naming
- **Tested Integration**: Verify results when used in experiments
- **Clear Differentiation**: Unique aesthetic direction, not duplicating existing moodboards

## Best Practices

### **Aesthetic Guidance Precision**
- **Specific over Generic**: "Geometric sans-serif with 1.2x letter spacing" vs "clean font"
- **Emotional Context**: Explain why aesthetic choices support brand goals
- **Implementation Notes**: How to apply aesthetic in different contexts
- **Contrast Awareness**: Balance aesthetic goals with accessibility

### **Moodboard Selection**
- **Single Focus**: Choose moodboard that aligns with primary brand goal
- **Complementary Mixing**: Combine moodboards that enhance rather than conflict
- **Context Appropriate**: Match aesthetic to industry and user expectations  
- **Evolution Ready**: Select aesthetics that can grow with the brand

### **Quality Assurance**
- **Consistency Check**: Generated results should feel cohesive with moodboard
- **Brand Alignment**: Aesthetic supports business goals and user needs
- **Accessibility Preserved**: Visual choices don't compromise usability
- **Technical Feasibility**: Aesthetic direction implementable with current web standards

## Integration Examples

### **Example 1: Professional Service Website**
**Moodboard**: Modern Minimalist + Geist Design System
```yaml
dependencies:
  design-systems: [geist-core]
  moodboards: [modern-minimalist]
  spec-modules: [accessibility-standards]
```
**Result**: Clean, professional interface with systematic visual consistency

### **Example 2: Creative Portfolio**
**Moodboard**: Organic Nature + Custom Typography
```yaml
dependencies:
  moodboards: [organic-nature]
  spec-modules: [performance-requirements]
  # No design system for creative freedom
```
**Result**: Natural, flowing layouts with personality and smooth interactions

### **Example 3: Startup Product Landing**
**Moodboard**: Tech Startup + Performance Focus
```yaml
dependencies:
  moodboards: [tech-startup]
  spec-modules: [performance-requirements, accessibility-standards]
  data: [ecommerce-data]
```
**Result**: Bold, energetic product presentation with business context

## Troubleshooting

### **Common Issues**

**Problem**: Generated results don't match moodboard aesthetic
- **Solution**: Check moodboard specificity - add more detailed guidance
- **Solution**: Verify no conflicting dependencies (design systems vs aesthetic freedom)

**Problem**: Aesthetic choices compromise accessibility
- **Solution**: Include accessibility-standards module to balance aesthetic and usability
- **Solution**: Review moodboard color contrast requirements

**Problem**: Results feel generic despite moodboard guidance
- **Solution**: Add more specific personality and emotional direction
- **Solution**: Include more detailed interaction and animation style guidance

### **Dependency Conflicts**
- **Moodboards + Design Systems**: Can work together or independently based on goals
- **Multiple Moodboards**: Should complement, not contradict each other
- **Aesthetic vs Performance**: Balance visual goals with technical requirements

## Future Enhancements

### **Planned Features**
- **Visual Preview**: Generated thumbnails showing moodboard aesthetic
- **Industry Templates**: Pre-built moodboards for common business types
- **Collaborative Curation**: Multi-user moodboard development
- **Enhanced AI Analysis**: Deeper aesthetic pattern recognition

### **Advanced Integration**
- **Dynamic Aesthetic**: Moodboards that adapt based on user behavior
- **A/B Testing**: Multiple aesthetic directions for comparison
- **Cultural Adaptation**: Moodboards adjusted for different geographic markets
- **Seasonal Evolution**: Aesthetic guidance that evolves over time

Moodboards provide the missing link between client aesthetic preferences and systematic creative direction, enabling AI agents to generate designs that align with desired visual personality while maintaining technical excellence and usability standards.