# Moodboards Directory

Visual inspiration and aesthetic direction for AI agents when creating themed designs.

## Purpose

Bridge client aesthetic preferences to actionable creative direction for businesses without established brands.

## Quick Start

```bash
# Use existing moodboard in experiment
# Edit experiments/[experiment-type]/spec-config.yml:
dependencies:
  moodboards:
    - modern-minimalist

# Run experiment with aesthetic guidance
/infinite ui-components 5

# Create new moodboard
/moodboard create client-project
```

## Available Moodboards

- **modern-minimalist** - Clean geometry, professional aesthetic
- **organic-nature** - Natural forms, earth-inspired colors  
- **tech-startup** - Bold, energetic, innovation-focused
- **landing-pages** - High-conversion landing page aesthetics
- **_template** - Template for creating new moodboards

## Integration

Moodboards work alongside existing shared dependencies:
- **Design Systems**: Technical frameworks (Geist, etc.)
- **Spec Modules**: Quality standards (accessibility, performance)  
- **Data Sets**: Business context (banking, ecommerce)
- **Moodboards**: Visual inspiration and aesthetic direction

## Creating New Moodboards

Use `/moodboard create [name]` command or copy `_template.md` as starting point.