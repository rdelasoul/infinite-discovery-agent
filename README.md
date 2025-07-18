# Infinite Discovery Agent

Enhanced infinite agentic loop system for UI/UX experimentation through parallel AI iteration. Built on [disler/infinite-agentic-loop](https://github.com/disler/infinite-agentic-loop) with improved organization and simplified commands.

## Quick Reference

| Command | Purpose |
|---------|---------|
| `/infinite ui-components 5` | Generate 5 themed UI components (full analysis) |
| `/quick ui-components 5` | Generate 5 themed UI components (fast iteration) |
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
│   └── data/              # Realistic business contexts
├── ui-components/
│   ├── spec.md            # Generation specification
│   ├── spec-config.yml    # Dependency configuration
│   ├── runs/              # Timestamped execution history
│   └── current/           # Symlink to latest run
├── functional-ux-patterns/
├── website-homepages/
├── interactions/
└── ui-innovations/
```

## Getting Started

```bash
# Start Claude Code
claude

# Generate your first component (full analysis)
/infinite ui-components 1

# Or use fast iteration mode
/quick ui-components 1

# View result
open experiments/ui-components/current/iterations/
```

## Command Syntax

```bash
# Basic patterns
/infinite [experiment-type] [count]          # Full analysis with complete dependency resolution
/quick [experiment-type] [count]             # Fast iteration mode (70-80% fewer tokens)

# Examples
/infinite ui-components 5                    # 5 themed components (full analysis)
/quick ui-components 5                       # 5 themed components (fast iteration)
/infinite website-homepages/project-name 3  # 3 homepage variations (complete workflow)
/quick website-homepages/project-name 3     # 3 homepage variations (rapid prototyping)
/infinite interactions infinite              # Continuous mode
```

## Available Experiment Types

| Type | Purpose | Dependencies |
|------|---------|--------------|
| `ui-components` | Themed hybrid UI components | Optional design systems |
| `functional-ux-patterns` | Workflow optimization patterns | Geist + banking data |
| `website-homepages/[project]` | Project-specific homepages | Custom per project |
| `interactions` | Micro-interactions & animations | Performance modules |
| `ui-innovations` | Novel UI paradigms | Accessibility standards |

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

1. **Initial run**: `/infinite ui-components 5` (or `/quick ui-components 5` for rapid prototyping)
2. **Analyze results**: Check `current/iterations/`
3. **Refine spec**: Edit `spec.md` and `spec-config.yml`
4. **New run**: `/infinite ui-components 3` (or `/quick` for fast iteration)
5. **Compare**: Previous runs preserved in `runs/` directory

Benefits:
- Complete history of spec evolution
- Mix dependencies between runs
- Easy rollback to previous approaches
- No manual folder management

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

1. Copy existing spec: `cp experiments/ui-components/spec.md experiments/my-type/spec.md`
2. Create config: `cp experiments/ui-components/spec-config.yml experiments/my-type/spec-config.yml`
3. Customize both files for your needs
4. Run: `/infinite my-type 5`

## Advanced Features

- **Infinite Mode**: Continuous generation with progressive sophistication
- **Parallel Coordination**: Multiple agents work simultaneously
- **Context Optimization**: Smart AI context management across agents
- **Quality Standards**: WCAG compliance, performance requirements
- **Theme-First Development**: Distinctive design personalities

## Technical Requirements

- Claude Code installed and configured
- Write, Edit, MultiEdit, and Bash permissions enabled
- Git repository (for run tracking)

---

[![AI Agents](https://img.shields.io/badge/AI-Agents-blue?style=flat-square)](https://github.com/topics/ai-agents)
[![UI Design](https://img.shields.io/badge/UI-Design-green?style=flat-square)](https://github.com/topics/ui-design)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-purple?style=flat-square)](https://docs.anthropic.com/en/docs/claude-code/overview)

**Built on**: [@disler/infinite-agentic-loop](https://github.com/disler/infinite-agentic-loop) | **Platform**: [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)