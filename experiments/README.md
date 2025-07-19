# Experiments Directory

Contains all UI/UX experiment types for the Infinite Discovery Agent.

## Structure

Each experiment type follows the pattern:
- `spec.md` - Generation specification
- `spec-config.yml` - Dependency configuration  
- `runs/` - Timestamped execution history
- `current/` - Symlink to latest run

## Available Experiments

### Banking & Financial Interfaces
- **`multi-card-banking/`** - Multi-card banking interface patterns and workflows
- **`bank-relationship-intelligence/`** - Banking relationship management UX components

### Web Development
- **`website-homepages/`** - Project-specific homepage variations (perantara-reps, portfolio-site)

### Shared Resources
- **`shared/`** - Reusable components across all experiments
  - `design-systems/` - Geist design system files
  - `spec-modules/` - Quality standards (accessibility, performance)
  - `moodboards/` - Visual aesthetic direction
  - `data/` - Realistic business contexts
  - `enhancement-strategies/` - Systematic improvement methodologies (interactions, innovations, patterns, demo-fidelity)

## Usage

The system auto-discovers experiment types. Use `/infinite [experiment-type] [count]` or `/quick [experiment-type] [count]`.

See main README.md for command syntax and CLAUDE.md for detailed documentation.

## Creating New Types

Copy `spec.md` and `spec-config.yml` from any existing experiment, customize, and run.