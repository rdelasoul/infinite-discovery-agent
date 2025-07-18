# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Infinite Discovery Agent** is an enhanced infinite agentic loop system for UI/UX experimentation through parallel AI iteration. The project orchestrates multiple AI agents to generate themed hybrid components, website variations, interactions, and UI innovations with progressive sophistication.

Built on the brilliant foundation of the original infinite agentic loop concept, this enhanced version provides clean organization, simplified commands, and scalable experiment types for unlimited creative discovery.

## Key Commands

### Running the Infinite Discovery Agent

```bash
claude
```

Then use the `/infinite` slash command with simplified syntax and auto-discovery:

```bash
# UI Components (themed hybrid components)
/infinite ui-components 1          # Single themed component
/infinite ui-components 5          # Small batch (5 parallel agents)
/infinite ui-components 20         # Large batch (batched parallel execution)
/infinite ui-components infinite   # Continuous generation with progressive sophistication

# Functional UX Patterns (workflow optimization through pattern innovation)
/infinite functional-ux-patterns 1 # Single UX pattern exploration
/infinite functional-ux-patterns 5 # Small batch (5 parallel pattern agents)
/infinite functional-ux-patterns 10 # Large batch of pattern variations

# Multi-Card Banking (banking interface patterns)
/infinite multi-card-banking 1     # Single banking interface pattern
/infinite multi-card-banking 5     # Small batch of banking UX patterns

# Bank Relationship Intelligence (financial relationship management)
/infinite bank-relationship-intelligence 3  # Relationship intelligence patterns

# Website Homepages (complete page iterations)
/infinite website-homepages/perantara-reps 3      # NZ DMC homepage variations
/infinite website-homepages/portfolio-site 5     # Portfolio homepage iterations

# Interactions (micro-interactions and animations)
/infinite interactions 10          # When interaction specs are added

# UI Innovations (novel interaction paradigms)  
/infinite ui-innovations 5         # When innovation specs are added
```

### Auto-Discovery System
- **Automatic spec detection**: Finds `experiments/{experiment-path}/spec.md`
- **Smart output routing**: Uses appropriate directories (`single-file/`, `iterations/`, etc.)
- **Zero configuration**: Just specify experiment type and count

## Architecture & Structure

### Enhanced Command System
The project uses Claude Code's custom commands feature with enhanced auto-discovery:
- `.claude/commands/infinite.md` - Enhanced infinite loop orchestrator with auto-discovery
- `.claude/commands/prime.md` - Context priming command for repository familiarization
- `.claude/commands/moodboard.md` - Visual inspiration and aesthetic direction management
- `.claude/settings.json` - Permissions configuration allowing Write, MultiEdit, Edit, and Bash

### Enhanced Specification & Dependency System
- **Experiment-specific specs**: Each experiment type has its own `experiments/{type}/spec.md`
- **Dependency configuration**: `experiments/{type}/spec-config.yml` controls shared component inclusion
- **Shared dependencies**: `experiments/shared/` provides reusable components across all experiment types
- **Reusable patterns**: Existing experiment specs can be copied and adapted for new experiment types
- **Quality standards**: Ultra-detailed specifications with modular quality requirements
- **Evolution strategies**: How iterations should build upon each other with progressive sophistication

#### **Shared Dependencies Structure**
- **`experiments/shared/design-systems/`** - Reusable design frameworks (Geist system with 10 comprehensive files)
- **`experiments/shared/spec-modules/`** - Modular quality standards (accessibility, performance, realistic data)
- **`experiments/shared/moodboards/`** - Visual inspiration and aesthetic direction for brand personality
- **`experiments/shared/data/`** - Realistic business context (banking, e-commerce scenarios)

#### **Dependency Resolution Process**
1. Read experiment's `spec-config.yml` for dependency requirements
2. Resolve and include content from `shared/design-systems/`, `shared/spec-modules/`, `shared/moodboards/`, and `shared/data/`
3. Create consolidated specification with all dependencies integrated
4. Provide complete context to AI agents for enhanced generation quality with aesthetic guidance

### Experiment Types with Enhanced Run Management
- **`experiments/ui-components/`** - Themed hybrid UI components (original focus)
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/single-file/ui_hybrid_X.html` OR `runs/YYYY-MM-DD-HHMMSS/multi-file/ui_hybrid_X/`
  - **Dependencies**: Optional design systems, performance standards
  - **Spec**: Ultra-detailed specification for themed hybrid components
  - **Current access**: Via `current/` symlink to most recent run

- **`experiments/functional-ux-patterns/`** - Workflow optimization through pattern innovation
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/ux_pattern_X.html`
  - **Dependencies**: Geist design system + banking data + realistic data requirements
  - **Focus**: Function-first exploration with design system constraints
  - **Patterns**: Information architecture, interaction models, cognitive load optimization

- **`experiments/multi-card-banking/`** - Banking interface patterns and workflows
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/ux_pattern_X.html`
  - **Dependencies**: Banking data + Geist design system + accessibility standards
  - **Focus**: Multi-account banking interfaces and financial workflows

- **`experiments/bank-relationship-intelligence/`** - Financial relationship management UX
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/ux_pattern_X.html`
  - **Dependencies**: Banking data + relationship intelligence patterns
  - **Focus**: Customer financial relationship insights and management interfaces

- **`experiments/website-homepages/`** - Complete homepage iterations
  - **Project-specific**: `perantara-reps/`, `portfolio-site/`
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/[project_name]_homepage_X.html`
  - **Dependencies**: Accessibility + performance standards per project
  - **Focus**: Brand consistency with design approach variations

- **`experiments/interactions/`** - Micro-interactions and animations
  - **Dependencies**: Accessibility + performance standards (essential for 60fps)
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/interaction_X.html`

- **`experiments/ui-innovations/`** - Novel UI paradigms
  - **Dependencies**: Accessibility + performance (innovations must remain inclusive)
  - **Run pattern**: `runs/YYYY-MM-DD-HHMMSS/iterations/ui_innovation_X.html`

### Multi-Agent Orchestration Pattern
The infinite command implements sophisticated parallel agent coordination:
1. **Specification Analysis** - Deeply understands the spec requirements
2. **Directory Reconnaissance** - Analyzes existing iterations to maintain uniqueness
3. **Parallel Sub-Agent Deployment** - Launches multiple agents with distinct creative directions
4. **Wave-Based Generation** - For infinite mode, manages successive agent waves
5. **Context Management** - Optimizes context usage across all agents

### Enhanced Content Organization with Run Management
- **`experiments/shared/`** - Reusable components across all experiment types
  - `design-systems/` - 10 comprehensive Geist design system files (including archived original)
  - `spec-modules/` - Accessibility, performance, and data quality standards
  - `moodboards/` - Visual inspiration and aesthetic direction (modern-minimalist, organic-nature, tech-startup)
  - `data/` - Realistic business context (banking, e-commerce scenarios)
- **`experiments/ui-components/runs/`** - Timestamped execution history
  - `2025-01-16-legacy-migration/` - 35+ themed hybrid components (legacy)
  - `[current-timestamp]/iterations/` - Latest generated components
  - `current/` - Symlink to most recent run
- **`experiments/functional-ux-patterns/runs/`** - UX pattern execution history with Geist constraints
- **`experiments/website-homepages/*/runs/`** - Project-specific homepage execution history
- **`experiments/interactions/runs/`** - Animation and micro-interaction execution history
- **`experiments/ui-innovations/runs/`** - Novel paradigm execution history
- **`archive/`** - All original experiments preserved with full attribution and date stamps
- **Example specs** - Existing experiment specifications can be copied and adapted for new types

#### **Run Directory Structure**
Each timestamped run contains:
```
runs/YYYY-MM-DD-HHMMSS/
├── spec-snapshot.md          # Exact spec version used
├── config-snapshot.yml       # Dependency configuration used
├── dependencies/             # Resolved shared components
│   ├── design-systems/      # Design system files used
│   ├── spec-modules/        # Quality modules used
│   ├── moodboards/          # Aesthetic direction used
│   └── data/                # Data sets used
└── iterations/              # Generated results
```

### Enhanced Implementation Details
- **Dependency resolution**: Automatic inclusion of shared design systems, modules, and data based on `spec-config.yml`
- **Run-based execution**: Each `/infinite` command creates timestamped runs with complete snapshots
- **Enhanced context sharing**: Complete specification analysis, resolved dependencies, historical runs, and unique creative assignments
- **Multi-experiment coordination**: Sub-agents can work across different experiment types with shared dependencies
- **Intelligent parallel execution**: Task tool coordination with dependency-aware batch optimization
- **Progressive sophistication**: Each wave explores more advanced innovation dimensions with enhanced dependency utilization
- **Quality consistency**: Shared modules ensure consistent accessibility, performance, and data standards across all experiment types
- **Iterative workflow**: Easy spec refinement with preserved history and dependency evolution tracking
- **Scalable architecture**: Easy addition of new experiment types, shared components, and dependency configurations

#### **Dependency Resolution Workflow**
1. **Configuration Analysis**: Read `spec-config.yml` for dependency requirements
2. **Component Resolution**: Include content from `shared/design-systems/`, `shared/spec-modules/`, `shared/moodboards/`, and `shared/data/`
3. **Snapshot Creation**: Create timestamped run with spec, config, and resolved dependencies
4. **Agent Context**: Provide sub-agents with complete consolidated specification, aesthetic guidance, and dependency context
5. **Historical Awareness**: Ensure uniqueness across all previous runs and dependency configurations

### Theme-First Development Approach
- **Distinctive personalities**: Every iteration embodies a unique design language and emotional character
- **Functional innovation**: "Two birds, one stone" efficiency by combining multiple UI functions elegantly
- **Authentic expression**: Themes feel genuine rather than superficial decoration
- **Parallel creative directions**: Each agent explores distinct innovation dimensions to maximize diversity

## Experiment Selection Guidance

### When to Use Each Experiment Type

**UI Components** (`/infinite ui-components X`):
- Creating themed hybrid components that combine multiple UI functions
- Exploring design languages (Organic Nature, Digital Minimalism, Cyberpunk, etc.)
- Developing reusable interface patterns with distinctive personalities
- Examples: Search Hub, Input Intelligence, Action Controller, File Manager

**Functional UX Patterns** (`/infinite functional-ux-patterns X`):
- Optimizing user workflows through innovative interaction and information architecture patterns
- Working within design system constraints to focus on functional excellence over visual variation
- Reducing cognitive load and improving task completion efficiency
- Examples: Modal vs inline patterns, progressive disclosure systems, contextual actions, error prevention flows

**Multi-Card Banking** (`/infinite multi-card-banking X`):
- Banking interface patterns for multiple account management
- Financial dashboard layouts and multi-account workflows
- Card-based banking interfaces with transaction management
- Examples: Account overview patterns, transaction categorization, multi-card payment flows

**Bank Relationship Intelligence** (`/infinite bank-relationship-intelligence X`):
- Financial relationship management and customer intelligence interfaces
- Banking advisor tools and relationship insights
- Customer financial health and advisory workflows
- Examples: Relationship dashboards, financial health indicators, advisory recommendation interfaces

**Website Homepages** (`/infinite website-homepages/project-name X`):
- Generating complete homepage variations for specific projects
- Exploring different design approaches while maintaining brand consistency
- Testing cultural authenticity, premium positioning, trust-building themes
- Current projects: Perantara Reps (NZ DMC), Portfolio Site

**Interactions** (`/infinite interactions X`):
- Micro-interactions and animation patterns (when specs are added)
- Performance-optimized 60fps animations with accessibility considerations
- Touch-optimized interactions for mobile-first design

**UI Innovations** (`/infinite ui-innovations X`):
- Completely novel UI paradigms that replace existing interaction patterns
- Revolutionary approaches to common interface elements
- Experimental interaction models while maintaining usability

## Iterative Spec Development Workflow

### **Enhanced Workflow for Continuous Improvement**
The new architecture enables effortless iteration on specifications based on results without any manual folder management:

#### **1. Initial Exploration**
```bash
# Start with a basic configuration
/infinite ui-components 5
```
- Creates `runs/[timestamp]/` with initial spec and dependencies
- Generates 5 iterations with current specification approach
- Results accessible via `current/iterations/`

#### **2. Analysis & Refinement**
```bash
# Analyze results and identify improvements needed
# Edit spec.md to narrow scope or change approach
# Edit spec-config.yml to add/remove dependencies
```
- **Spec Evolution**: Modify `spec.md` based on what worked/didn't work
- **Dependency Adjustment**: Add design systems for consistency, remove for creative freedom
- **Aesthetic Guidance**: Include moodboards for consistent brand personality and visual direction
- **Data Context**: Include realistic data for business contexts, exclude for pure visual exploration

#### **3. Refined Execution**
```bash
# Run with refined specification
/infinite ui-components 3
```
- Creates new `runs/[timestamp]/` with updated spec and dependencies  
- Preserves complete history of previous approach
- Updates `current/` symlink to latest run

#### **4. Comparative Analysis**
```bash
# Compare approaches easily
ls experiments/ui-components/runs/
# 2025-01-16-143022/ (initial approach)
# 2025-01-17-091435/ (refined approach)
```
- **Side-by-side comparison**: Different spec versions and their results
- **Dependency impact**: See how shared components affected quality
- **Evolution tracking**: Clear progression from initial to refined approaches

#### **5. Continuous Iteration**
- **No folder proliferation**: Edit specs freely, automatic organization
- **Complete context preservation**: Every run preserves its complete context
- **Easy rollback**: Return to previous approaches anytime
- **Dependency evolution**: Track how shared components improve over iterations

### **Dependency Configuration Evolution Examples**

#### **Visual Theme Focus**
```yaml
# experiments/ui-components/spec-config.yml
dependencies:
  design-systems: []  # No constraints for creative freedom
  spec-modules: 
    - performance-requirements  # Essential for animations
  moodboards:
    - organic-nature  # Natural, flowing aesthetic direction
  data: []  # Pure visual exploration
```

#### **Business Context Focus**  
```yaml
# experiments/functional-ux-patterns/spec-config.yml
dependencies:
  design-systems:
    - geist-core
    - geist-components  # Consistent business interface
  spec-modules:
    - accessibility-standards   # Professional compliance
    - realistic-data-requirements
  moodboards:
    - modern-minimalist  # Professional, trustworthy aesthetic
  data:
    - banking-data  # Rich business context
```

#### **Innovation with Constraints**
```yaml
# experiments/ui-innovations/spec-config.yml  
dependencies:
  design-systems:
    - geist-core  # Base framework to innovate within
  spec-modules:
    - accessibility-standards  # Non-negotiable inclusivity
    - performance-requirements # Revolutionary but performant
  moodboards:
    - tech-startup  # Bold, future-focused innovation personality
  data: []  # Focus on interaction paradigms
```

### **Benefits of Enhanced Workflow**
- ✅ **Effortless iteration**: Edit specs freely without manual setup
- ✅ **Complete history**: Every approach preserved with its context
- ✅ **Dependency flexibility**: Mix and match shared components between runs
- ✅ **Easy comparison**: Clear evolution tracking across spec versions
- ✅ **No context loss**: Return to any previous approach with complete reproducibility
- ✅ **Scalable exploration**: Add new dependencies or experiment types seamlessly

## Enhanced Aesthetic Guidance Workflow

### **Moodboard-Driven Design Process**
Bridge client aesthetic preferences to actionable AI creative direction:

#### **1. Curate Visual Inspiration**
```bash
# Create moodboard from client-provided inspiration
/moodboard create client-aesthetic

# Or analyze specific websites for aesthetic extraction
/moodboard analyze modern-healthcare https://stripe.com https://linear.app
```

#### **2. Configure Aesthetic Dependencies**
```yaml
# Add moodboard to experiment configuration
dependencies:
  moodboards:
    - client-aesthetic  # Custom aesthetic direction
  design-systems:
    - geist-core       # Technical framework
  spec-modules:
    - accessibility-standards
```

#### **3. Generate with Aesthetic Guidance**
```bash
# Agents receive structured aesthetic direction
/infinite website-homepages/client-project 5
```

#### **4. Iterate and Refine**
```bash
# Update moodboard based on results
/moodboard update client-aesthetic https://additional-inspiration.com

# Generate new variations with refined aesthetic
/infinite website-homepages/client-project 3
```

### **Available Moodboards**
- **🔹 modern-minimalist**: Clean geometry, professional aesthetic, geometric precision
- **🌿 organic-nature**: Natural forms, earth-inspired colors, flowing layouts
- **⚡ tech-startup**: Bold, energetic, innovation-focused, vibrant gradients

### **Moodboard Integration Benefits**
- ✅ **Bridge client preferences** to systematic creative direction
- ✅ **Consistent brand personality** across all generated variations
- ✅ **Structured aesthetic guidance** for AI agents
- ✅ **Effortless workflow** from inspiration to implementation

## Quality Standards for All Experiments

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

### AI Coordination Standards
- **Parallel Efficiency**: Multiple agents work simultaneously without duplication
- **Context Optimization**: Smart management of AI context across all agents and waves
- **Progressive Sophistication**: Later iterations push boundaries further while maintaining quality
- **Quality Assurance**: Every iteration reviewed for uniqueness, functionality, and spec compliance