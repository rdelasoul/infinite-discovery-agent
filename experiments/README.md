# Experiments Directory

This directory contains all UI ideation and iteration experiments, organized by type for clean scalability and easy discovery.

## Quick Start

```bash
# Start Claude Code
claude

# Generate themed UI components
/infinite ui-components 5

# Generate functional UX patterns
/infinite functional-ux-patterns 3

# Generate website homepage iterations
/infinite website-homepages/perantara-reps 3

# Infinite generation mode
/infinite ui-components infinite
```

## Experiment Types

### 🎨 UI Components (`ui-components/`)
**Purpose**: Create themed hybrid UI components that combine multiple UI functions with distinctive design personalities.

**Command**: `/infinite ui-components [count]`

**Concept**: "Two birds with one stone" efficiency by combining functions like Search + Autocomplete + Filters + Recent Items into single components with themes like Organic Nature, Digital Minimalism, Cyberpunk, etc.

**Outputs**: 
- `single-file/` - All-in-one HTML files
- `multi-file/` - Separated HTML/CSS/JS

---

### 🌐 Website Homepages (`website-homepages/`)
**Purpose**: Generate complete homepage iterations for specific website projects.

**Commands**: 
- `/infinite website-homepages/perantara-reps [count]`
- `/infinite website-homepages/portfolio-site [count]`

**Focus**: Different design approaches while maintaining brand consistency and UX goals.

**Active Projects**:
- **Perantara Reps**: NZ DMC targeting Indonesian travel agents
- **Portfolio Site**: Personal portfolio showcasing capabilities

---

### 🎯 Functional UX Patterns (`functional-ux-patterns/`)
**Purpose**: Optimize user workflows through innovative UX patterns while working within design system constraints.

**Command**: `/infinite functional-ux-patterns [count]`

**Concept**: Function-first exploration focusing on task completion efficiency, cognitive load reduction, and workflow optimization rather than visual variation. Design system elements provide consistent visual framework while patterns explore information architecture, interaction models, and user journey optimization.

**Focus**: Information architecture patterns, interaction model innovation, workflow optimization, and cognitive load reduction.

**Pattern Categories**:
- **Information Architecture**: Contextual clustering, progressive disclosure, adaptive hierarchy
- **Interaction Models**: Modal vs inline, drawer vs page, progressive forms, contextual actions
- **Workflow Optimization**: Task continuation, error prevention, intelligent defaults, recovery assistance
- **Cognitive Load**: Attention management, memory assistance, decision support, complexity abstraction

---

### ⚡ Interactions (`interactions/`)
**Purpose**: Explore micro-interactions, animations, and novel interaction patterns.

**Command**: `/infinite interactions [count]`

**Focus**: Performance-optimized animations, accessibility-conscious design, and innovative interaction paradigms.

*Note: This experiment type is ready for specifications and iterations.*

---

### 🧪 UI Innovations (`ui-innovations/`)
**Purpose**: Completely novel UI paradigms that replace existing interaction patterns.

**Command**: `/infinite ui-innovations [count]`

**Focus**: Revolutionary approaches to common UI elements with entirely new interaction models.

*Note: This experiment type is ready for specifications and iterations.*

## Adding New Experiment Types

1. **Create directory structure**:
   ```bash
   mkdir -p experiments/[experiment-name]/iterations
   ```

2. **Create specification**:
   ```bash
   cp templates/[appropriate-template].md experiments/[experiment-name]/spec.md
   # Edit spec.md with specific requirements
   ```

3. **Add README.md**:
   Document the experiment's purpose, usage, and examples.

4. **Update this index**:
   Add the new experiment type to the list above.

## Best Practices

### Specification Quality
- **Ultra-detailed specs**: Follow the pattern of `ui-components/spec.md` (236 lines of detailed guidance)
- **Theme-first approach**: Strong thematic consistency across all elements
- **Quality standards**: Accessibility, performance, and user experience requirements
- **Evolution strategy**: How iterations should build upon each other

### Command Usage
- **Simple syntax**: `/infinite [experiment-path] [count]`
- **Auto-discovery**: Specs and output directories discovered automatically
- **Parallel generation**: Multiple agents create iterations simultaneously for efficiency

### Iteration Principles
- **Genuine uniqueness**: Each iteration must be meaningfully different
- **Progressive sophistication**: Later iterations push boundaries further
- **Thematic consistency**: Strong design personality throughout
- **Technical excellence**: Accessible, performant, responsive design

## Archive

Original experimental outputs are preserved in `../archive/` with date stamps for reference while maintaining the clean new structure.

## Templates

Specification templates for new experiment types are available in `../templates/`:
- `ui-component-spec-template.md`
- `website-spec-template.md`
- `interaction-spec-template.md`
- `functional-ux-pattern-spec-template.md`