# Enhanced Infinite Discovery Agent Context Prime

Prime your understanding of the **Enhanced Infinite Discovery Agent** - a sophisticated infinite agentic loop system with dependency management, run tracking, and iterative spec development for UI/UX experimentation through parallel AI iteration.

## Repository Structure Analysis

RUN:
    git ls-files

## Core System Documentation

READ:
    README.md
    CLAUDE.md
    experiments/README.md

## Shared Dependencies Understanding

READ:
    experiments/shared/README.md
    experiments/shared/design-systems/README.md
    experiments/shared/spec-modules/README.md
    experiments/shared/moodboards/README.md
    experiments/shared/data/README.md

## Discover Available Experiment Types

RUN:
    find experiments -maxdepth 2 -name "README.md" | grep -v experiments/README.md | head -10

READ the discovered experiment type README files to understand the current available experiment types and their purposes.

## Current System Analysis

RUN:
    ls -la experiments/*/current

Analyze current symlinks to understand recent experiment activity.

## Enhanced System Architecture Context

This repository implements a sophisticated infinite agentic loop pattern with revolutionary improvements:

### **Shared Dependencies System**
- **`experiments/shared/design-systems/`** - Reusable design frameworks (Geist system with 9+ comprehensive files)
- **`experiments/shared/spec-modules/`** - Quality standards modules (accessibility, performance, data requirements)
- **`experiments/shared/data/`** - Realistic business context (banking, e-commerce, healthcare scenarios)

### **Dependency-Driven Specifications**
- **`spec-config.yml`** - Flexible dependency configuration per experiment
- **Automatic resolution** - `/infinite` command resolves and includes dependencies
- **Mix-and-match capability** - Any experiment can use any combination of shared components

### **Timestamped Run Management**
- **`runs/YYYY-MM-DD-HHMMSS/`** - Each execution creates timestamped directory
- **Complete snapshots** - Spec, config, and resolved dependencies preserved
- **`current` symlinks** - Always point to most recent run for easy access
- **Historical comparison** - Easy analysis of spec evolution and results

### **Iterative Workflow Excellence**
- **Edit specs freely** - No manual folder creation required
- **Instant execution** - `/infinite` command handles all setup automatically
- **Compare approaches** - All previous runs preserved with their context
- **Rollback capability** - Easy return to previous spec versions and results

### **Advanced Parallel Coordination**
- **Dependency-aware agents** - Sub-agents receive complete resolved context
- **Enhanced uniqueness** - Global uniqueness across all historical runs
- **Quality consistency** - Shared modules ensure consistent standards
- **Scalable architecture** - Easy addition of new experiment types and dependencies

## Enhanced Usage Patterns

The dependency-enhanced `/infinite` command supports:

**Core Command Pattern:**
- `/infinite [experiment-type] [count]` - Generate iterations of any experiment type
- `/infinite [experiment-type] infinite` - Continuous generation mode

**Advanced Workflow:**
- Edit `experiments/[type]/spec.md` and `spec-config.yml` to refine approach
- Run `/infinite [type] [count]` to create timestamped run with resolved dependencies
- Analyze results in `experiments/[type]/current/iterations/`
- Compare with previous runs to understand spec evolution impact
- System auto-discovers all experiment types and handles dependency resolution

## System Architecture Analysis

UNDERSTAND the agnostic architecture:
- Auto-discovery of experiment types via directory structure
- Dependency resolution system via shared components
- Run-based execution with complete historical preservation
- Symlink-based current run access for easy navigation


## Prime Complete

You now have comprehensive understanding of the Enhanced Infinite Discovery Agent system including:

✅ **Shared Dependencies System** - Design systems, modules, and realistic data
✅ **Dependency Configuration** - spec-config.yml driven component resolution  
✅ **Timestamped Runs** - Complete execution history with snapshots
✅ **Iterative Workflow** - Edit specs freely, compare approaches easily
✅ **Enhanced Architecture** - Dependency-aware parallel coordination
✅ **Advanced Usage Patterns** - Mix-and-match capabilities across all experiments

Ready for sophisticated infinite creative discovery with dependency-driven quality and effortless iterative refinement!