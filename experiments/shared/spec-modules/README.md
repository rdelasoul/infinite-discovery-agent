# Shared Specification Modules

## Purpose
Reusable specification components that can be included in experiment specs to ensure consistency and reduce duplication across different experiment types.

## Available Modules

### accessibility-standards.md
**When to Include**: For experiments that need comprehensive accessibility requirements
- WCAG 2.1 AA compliance guidelines
- Keyboard navigation patterns
- Screen reader support requirements
- Testing strategies and success criteria

### performance-requirements.md
**When to Include**: For experiments focusing on speed and efficiency
- Core Web Vitals targets (LCP, FID, CLS)
- Loading and runtime performance standards
- Code optimization patterns
- Monitoring and measurement guidelines

### realistic-data-requirements.md
**When to Include**: For experiments that need authentic dummy data
- Business domain data patterns (financial, e-commerce)
- Data state variations (loading, error, empty states)
- Cultural and geographic authenticity guidelines
- Quality assurance standards for data consistency

## Usage in Experiment Specs

### Method 1: Reference in spec-config.yml
```yaml
# experiments/ui-components/spec-config.yml
dependencies:
  design-systems:
    - geist-core
    - geist-components
  spec-modules:
    - accessibility-standards
    - performance-requirements
    - realistic-data-requirements
  moodboards:
    - modern-minimalist    # Aesthetic direction for visual consistency
```

### Method 2: Direct inclusion in spec.md
```markdown
# My Experiment Specification

## Core Challenge
[Your experiment description]

## Accessibility Requirements
Include: ../shared/spec-modules/accessibility-standards.md

## Performance Standards  
Include: ../shared/spec-modules/performance-requirements.md

## Data Requirements
Include: ../shared/spec-modules/realistic-data-requirements.md
```

### Method 3: Selective sections
```markdown
# For experiments that only need specific requirements

## Accessibility Focus
Include only keyboard navigation and screen reader sections from accessibility-standards.md

## Performance Focus
Include only Core Web Vitals and loading performance from performance-requirements.md
```

## Creating New Modules

### Guidelines for New Modules
1. **Single Responsibility**: Each module should cover one specific area
2. **Reusable Content**: Write for multiple experiment types
3. **Actionable Requirements**: Include specific, testable criteria
4. **Implementation Guidance**: Provide code examples and patterns
5. **Success Criteria**: Define measurable outcomes

### Naming Convention
- Use lowercase with hyphens: `accessibility-standards.md`
- Be descriptive but concise: `realistic-data-requirements.md`
- Group related concepts: `performance-requirements.md` vs separate loading/runtime files

### Template Structure
```markdown
# Module Name

## Core Standards
[High-level requirements and principles]

### Specific Requirements
[Detailed, testable requirements]

### Implementation Guidelines
[Code examples and patterns]

### Testing Requirements
[How to validate compliance]

### Success Criteria
[Measurable outcomes]
```

## Integration with /infinite Command

The enhanced `/infinite` command should:
1. Read experiment `spec-config.yml` for dependencies
2. Resolve and include referenced modules, design systems, data sets, and moodboards
3. Create consolidated spec for each run
4. Save dependency snapshots with iterations

This modular approach enables:
- ✅ Consistent quality standards across experiments
- ✅ Easy addition/removal of requirements and aesthetic guidance
- ✅ Reduced duplication and maintenance
- ✅ Flexible mix-and-match dependency management (technical + aesthetic)
- ✅ Version control of requirement evolution

## Related Shared Dependencies

### **Design Systems** (`../design-systems/`)
Technical visual frameworks like Geist that provide component patterns and design constraints.

### **Moodboards** (`../moodboards/`)
Visual inspiration and aesthetic direction that guide the personality and emotional character of generated designs.

### **Data Sets** (`../data/`)
Realistic business context data for authentic scenarios (banking, e-commerce, etc.).