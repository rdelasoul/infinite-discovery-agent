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

# Generate banking interface patterns
/infinite multi-card-banking 3

# Generate banking relationship intelligence
/infinite bank-relationship-intelligence 3

# Generate website homepage iterations
/infinite website-homepages/perantara-reps 3

# Infinite generation mode
/infinite ui-components infinite
```

## 🚀 Enhanced Structure & Workflow

### **Shared Dependencies**
All experiments can now leverage shared components from `shared/`:
- **Design Systems** (`shared/design-systems/`): Geist and other design frameworks
- **Spec Modules** (`shared/spec-modules/`): Reusable requirements (accessibility, performance, data)
- **Moodboards** (`shared/moodboards/`): Visual inspiration and aesthetic direction
- **Data Sets** (`shared/data/`): Realistic business context (banking, e-commerce)

### **Run-Based Organization**
Each `/infinite` execution creates a timestamped run:
```
experiments/ui-components/
├── spec.md                    # Current working spec (edit freely)
├── spec-config.yml           # Dependency configuration
├── runs/                     # Execution history
│   ├── 2025-01-16-143022/   # Timestamped run
│   │   ├── spec-snapshot.md  # Spec version used
│   │   ├── config-snapshot.yml
│   │   ├── dependencies/     # Resolved dependencies
│   │   └── iterations/       # Generated results
│   └── 2025-01-17-091435/   # New run
├── current -> runs/[latest]  # Symlink to most recent
└── README.md
```

### **Iterative Workflow**
1. **Edit spec**: Modify `spec.md` and `spec-config.yml` as needed
2. **Run experiments**: `/infinite ui-components 5` (auto-creates timestamped run)
3. **Analyze results**: Check `current/iterations/` for latest results
4. **Compare approaches**: Previous runs preserved for comparison
5. **Refine and repeat**: No manual folder creation required

### **Dependency Configuration Example**
```yaml
# experiments/ui-components/spec-config.yml
dependencies:
  design-systems:
    - geist-core          # Typography, colors, spacing
    - geist-components    # Component patterns
  spec-modules:
    - accessibility-standards    # WCAG compliance
    - performance-requirements   # 60fps animations
  moodboards:
    - modern-minimalist   # Clean, professional aesthetic direction
  data:
    - ecommerce-data      # Product/shopping context
```

## Experiment Types

### 🎨 UI Components (`ui-components/`)
**Purpose**: Create themed hybrid UI components that combine multiple UI functions with distinctive design personalities.

**Command**: `/infinite ui-components [count]`

**Concept**: "Two birds with one stone" efficiency by combining functions like Search + Autocomplete + Filters + Recent Items into single components with themes like Organic Nature, Digital Minimalism, Cyberpunk, etc.

**Outputs**: Results appear in `runs/[timestamp]/iterations/`
- Themed hybrid components with distinctive design personalities
- Multiple UI functions combined into elegant solutions

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

### 🏦 Multi-Card Banking (`multi-card-banking/`)
**Purpose**: Create banking interface patterns for multiple account management and financial workflows.

**Command**: `/infinite multi-card-banking [count]`

**Focus**: Multi-account banking interfaces, transaction management, financial dashboard layouts, and card-based banking workflows.

**Examples**: Account overview patterns, transaction categorization, multi-card payment flows, balance management interfaces

---

### 💼 Bank Relationship Intelligence (`bank-relationship-intelligence/`)
**Purpose**: Develop financial relationship management and customer intelligence interfaces for banking advisors.

**Command**: `/infinite bank-relationship-intelligence [count]`

**Focus**: Relationship dashboards, financial health indicators, advisory recommendation interfaces, and customer intelligence tools.

**Examples**: Relationship scoring interfaces, financial wellness dashboards, advisory workflow tools, customer insight panels

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
   mkdir -p experiments/[experiment-name]/runs
   ```

2. **Create specification**:
   ```bash
   cp experiments/ui-components/spec.md experiments/[experiment-name]/spec.md
   # Edit spec.md with specific requirements for your experiment type
   ```

3. **Create dependency configuration**:
   ```bash
   cp experiments/ui-components/spec-config.yml experiments/[experiment-name]/spec-config.yml
   # Edit to specify needed dependencies from shared/
   ```

4. **Add README.md**:
   Document the experiment's purpose, usage, examples, and recommended dependencies.

5. **Test the setup**:
   ```bash
   /infinite [experiment-name] 1
   ```
   This will create the first timestamped run and verify the configuration works.

6. **Update this index**:
   Add the new experiment type to the list above with its dependency recommendations.

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


## Specification Examples

Existing experiment specifications can be used as templates for new experiment types:
- `ui-components/spec.md` - Themed hybrid component specification
- `functional-ux-patterns/spec.md` - Workflow optimization pattern specification  
- `website-homepages/*/spec.md` - Homepage iteration specifications
- `interactions/spec.md` - Micro-interaction pattern specification