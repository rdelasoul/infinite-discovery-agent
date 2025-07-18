# Experiments Directory

Contains all UI/UX experiment types for the Infinite Discovery Agent.

## Structure

Each experiment type follows the pattern:
- `spec.md` - Generation specification
- `spec-config.yml` - Dependency configuration  
- `runs/` - Timestamped execution history
- `current/` - Symlink to latest run

## Usage

The system auto-discovers experiment types. Use `/infinite [experiment-type] [count]` or `/quick [experiment-type] [count]`.

See main README.md for command syntax and CLAUDE.md for detailed documentation.

## Creating New Types

Copy `spec.md` and `spec-config.yml` from any existing experiment, customize, and run.