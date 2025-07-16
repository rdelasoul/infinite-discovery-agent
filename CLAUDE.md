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
- `.claude/settings.json` - Permissions configuration allowing Write, MultiEdit, Edit, and Bash

### Distributed Specification System
- **Experiment-specific specs**: Each experiment type has its own `experiments/{type}/spec.md`
- **Template library**: `templates/` directory provides specification templates for new experiment types
- **Quality standards**: Ultra-detailed specifications (236+ lines) with theme development guidance
- **Evolution strategies**: How iterations should build upon each other with progressive sophistication

### Experiment Types
- **`experiments/ui-components/`** - Themed hybrid UI components (original focus)
  - Single-file format: `single-file/ui_hybrid_X.html`
  - Multi-file format: `multi-file/ui_hybrid_X/index.html`
  - Spec: Ultra-detailed 236-line specification for themed hybrid components

- **`experiments/functional-ux-patterns/`** - Workflow optimization through pattern innovation
  - Format: `iterations/ux_pattern_X.html`
  - Focus: Function-first exploration with design system constraints
  - Patterns: Information architecture, interaction models, cognitive load optimization

- **`experiments/website-homepages/`** - Complete homepage iterations
  - Project-specific: `perantara-reps/`, `portfolio-site/`
  - Format: `iterations/[project_name]_homepage_X.html`
  - Focus: Brand consistency with design approach variations

- **`experiments/interactions/`** - Micro-interactions and animations (ready for specs)
- **`experiments/ui-innovations/`** - Novel UI paradigms (ready for specs)

### Multi-Agent Orchestration Pattern
The infinite command implements sophisticated parallel agent coordination:
1. **Specification Analysis** - Deeply understands the spec requirements
2. **Directory Reconnaissance** - Analyzes existing iterations to maintain uniqueness
3. **Parallel Sub-Agent Deployment** - Launches multiple agents with distinct creative directions
4. **Wave-Based Generation** - For infinite mode, manages successive agent waves
5. **Context Management** - Optimizes context usage across all agents

### Enhanced Content Organization
- **`experiments/ui-components/single-file/`** - 35+ themed hybrid components in single HTML files
- **`experiments/ui-components/multi-file/`** - Component examples with separated HTML/CSS/JS
- **`experiments/website-homepages/perantara-reps/iterations/`** - NZ DMC homepage variations
- **`experiments/website-homepages/portfolio-site/iterations/`** - Portfolio homepage iterations
- **`archive/`** - All original experiments preserved with full attribution and date stamps
- **`templates/`** - Specification templates for creating new experiment types

### Key Implementation Details
- **Multi-experiment coordination**: Sub-agents can work across different experiment types simultaneously
- **Enhanced context sharing**: Complete specification analysis, existing iterations, and unique creative assignments
- **Intelligent parallel execution**: Task tool coordination with batch sizes optimized by count and experiment type
- **Progressive sophistication**: Each wave explores more advanced innovation dimensions
- **Quality consistency**: Theme-first development and spec compliance maintained across all experiment types
- **Scalable architecture**: Easy addition of new experiment types using template specifications

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