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

## Discovering Experiment Types

**Explore available experiments:**
```bash
# List all experiment types
ls experiments/*/README.md

# See specific experiment details
cat experiments/ui-components/README.md
cat experiments/website-homepages/README.md
```

**Basic usage pattern:**
```bash
# All experiments follow the same pattern
/infinite [experiment-type] [count]
/quick [experiment-type] [count]      # Fast iteration mode
```

**Examples with current experiments:**
- UI component themes: `/infinite ui-components 5`
- Website iterations: `/infinite website-homepages/perantara-reps 3`
- UX workflow patterns: `/infinite functional-ux-patterns 3`
- Banking interfaces: `/infinite multi-card-banking 3`

Each experiment type has its own README with detailed purpose, examples, and usage guidance.

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