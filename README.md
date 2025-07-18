# Infinite Discovery Agent

Enhanced infinite agentic loop system for UI/UX experimentation through parallel AI iteration. Built on [disler/infinite-agentic-loop](https://github.com/disler/infinite-agentic-loop) with improved organization and simplified commands.

## Quick Reference

| Command | Purpose |
|---------|---------|
| `/infinite multi-card-banking 5` | Generate 5 banking interface patterns (full analysis) |
| `/quick multi-card-banking 5` | Generate 5 banking interface patterns (fast iteration) |
| `/infinite website-homepages/project 3` | Generate 3 homepage variations (complete workflow) |
| `/quick website-homepages/project 3` | Generate 3 homepage variations (rapid prototyping) |
| `/infinite [type] infinite` | Continuous generation mode |
| `/moodboard create name` | Create aesthetic direction guide |
| `/prime` | Load repository context |

## Core Concepts

- **Experiments**: Self-contained generation types in `experiments/[type]/`
- **Specs**: Generation instructions in `spec.md` files
- **Dependencies**: Shared components (design systems, moodboards, data) via `spec-config.yml`
- **Runs**: Timestamped execution history with complete snapshots
- **Parallel Agents**: Multiple AI agents generate simultaneously for efficiency

## Directory Structure

```
experiments/
├── shared/
│   ├── design-systems/     # Geist design system files
│   ├── spec-modules/       # Reusable quality standards
│   ├── moodboards/         # Visual aesthetic direction
│   ├── data/              # Realistic business contexts
│   └── enhancement-strategies/  # Systematic improvement methodologies
├── multi-card-banking/
│   ├── spec.md            # Generation specification
│   ├── spec-config.yml    # Dependency configuration
│   ├── runs/              # Timestamped execution history
│   └── current/           # Symlink to latest run
├── bank-relationship-intelligence/
└── website-homepages/
```

## Getting Started

```bash
# Start Claude Code
claude

# Generate your first banking interface (full analysis)
/infinite multi-card-banking 1

# Or use fast iteration mode
/quick multi-card-banking 1

# View result
open experiments/multi-card-banking/current/iterations/
```

## Command Syntax

```bash
# Basic patterns
/infinite [experiment-type] [count]          # Full analysis with complete dependency resolution
/quick [experiment-type] [count]             # Fast iteration mode (70-80% fewer tokens)

# Examples
/infinite multi-card-banking 5              # 5 banking interfaces (full analysis)
/quick multi-card-banking 5                 # 5 banking interfaces (fast iteration)
/infinite website-homepages/project-name 3  # 3 homepage variations (complete workflow)
/quick website-homepages/project-name 3     # 3 homepage variations (rapid prototyping)
/infinite multi-card-banking infinite       # Continuous mode
```

## Available Experiment Types

| Type | Purpose | Dependencies |
|------|---------|--------------|
| `multi-card-banking` | Multi-card banking interface patterns | Geist + banking data |
| `bank-relationship-intelligence` | Banking relationship management UX | Geist + banking data |
| `website-homepages/[project]` | Project-specific homepages | Custom per project |

See `experiments/README.md` for complete list and details.

## Dependency System

Each experiment can include shared components via `spec-config.yml`:

```yaml
dependencies:
  design-systems:
    - geist-core           # Design framework
  spec-modules:
    - accessibility-standards
    - performance-requirements
  moodboards:
    - modern-minimalist   # Aesthetic direction
  data:
    - banking-data        # Business context
  
  # Enhancement capabilities (NEW)
  references:
    - multi-card-banking/current/iterations/ux_pattern_14.html  # Reference existing work
  enhancement-strategies:
    - interactions         # Apply systematic improvement methodologies
```

## Run Management

Each command execution creates:
- `runs/YYYY-MM-DD-HHMMSS/` - Timestamped directory
- `spec-snapshot.md` - Exact spec version used
- `config-snapshot.yml` - Dependencies configuration
- `dependencies/` - Resolved shared components
- `iterations/` - Generated results

The `current/` symlink always points to the latest run.

## Workflow: Iterative Spec Development

1. **Initial run**: `/infinite multi-card-banking 5` (or `/quick multi-card-banking 5` for rapid prototyping)
2. **Analyze results**: Check `current/iterations/`
3. **Refine spec**: Edit `spec.md` and `spec-config.yml`
4. **New run**: `/infinite multi-card-banking 3` (or `/quick` for fast iteration)
5. **Compare**: Previous runs preserved in `runs/` directory

Benefits:
- Complete history of spec evolution
- Mix dependencies between runs
- Easy rollback to previous approaches
- No manual folder management
- Systematic enhancement of existing work through references and enhancement strategies

## Moodboard Workflow

Bridge client aesthetic preferences to AI creative direction:

```bash
# Create aesthetic guide
/moodboard create client-aesthetic

# Configure experiment to use it
# Edit spec-config.yml to include moodboard

# Generate with aesthetic guidance
/infinite website-homepages/client-project 5
```

## Creating New Experiment Types

1. Copy existing spec: `cp experiments/multi-card-banking/spec.md experiments/my-type/spec.md`
2. Create config: `cp experiments/multi-card-banking/spec-config.yml experiments/my-type/spec-config.yml`
3. Customize both files for your needs
4. Run: `/infinite my-type 5`

## Advanced Features

- **Infinite Mode**: Continuous generation with progressive sophistication
- **Parallel Coordination**: Multiple agents work simultaneously
- **Context Optimization**: Smart AI context management across agents
- **Quality Standards**: WCAG compliance, performance requirements
- **Theme-First Development**: Distinctive design personalities
- **Enhancement Framework**: Systematic improvement of existing work through reference summaries and enhancement strategies

## Technical Requirements

- Claude Code installed and configured
- Write, Edit, MultiEdit, and Bash permissions enabled
- Git repository (for run tracking)

---

[![AI Agents](https://img.shields.io/badge/AI-Agents-blue?style=flat-square)](https://github.com/topics/ai-agents)
[![UI Design](https://img.shields.io/badge/UI-Design-green?style=flat-square)](https://github.com/topics/ui-design)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-purple?style=flat-square)](https://docs.anthropic.com/en/docs/claude-code/overview)

**Built on**: [@disler/infinite-agentic-loop](https://github.com/disler/infinite-agentic-loop) | **Platform**: [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)