# Legacy Specifications Directory

This directory contains specification files from the original infinite agentic loop experiments, preserved for reference and historical context.

## Current Approach

The **Infinite Discovery Agent** now uses a **distributed specification system**:
- Each experiment type has its own `spec.md` file in `experiments/{type}/spec.md`
- Templates for creating new specs are available in `templates/`
- Auto-discovery finds specifications automatically when using `/infinite` commands

## Legacy Specifications

The files in this directory include:

### **Original UI Component Specs**
- `invent_new_ui_v3.md` - The canonical 236-line themed hybrid UI component specification (now at `experiments/ui-components/spec.md`)
- `invent_new_ui.md`, `invent_new_ui_v2.md`, `invent_new_ui_v4.md` - Evolution of the UI component specifications

### **Website Project Specs**
- `perantara_reps_ui_spec.md` - Perantara Reps homepage specification (now at `experiments/website-homepages/perantara-reps/spec.md`)
- `radibaboe_portfolio_spec.md` - Portfolio website specification (now at `experiments/website-homepages/portfolio-site/spec.md`)
- Additional project documentation and PRDs

## Usage

These legacy specifications are kept for:
- **Historical Reference**: Understanding the evolution of the specification approach
- **Research Purposes**: Analyzing different approaches to AI agent guidance
- **Template Ideas**: Inspiration for creating new experiment specifications

## Migration

All active specifications have been migrated to the distributed system:
- **UI Components**: `experiments/ui-components/spec.md`
- **Website Homepages**: `experiments/website-homepages/{project}/spec.md`
- **Interactions**: `experiments/interactions/spec.md`
- **UI Innovations**: `experiments/ui-innovations/spec.md`

For new experiment types, use the templates in `templates/` directory rather than these legacy files.