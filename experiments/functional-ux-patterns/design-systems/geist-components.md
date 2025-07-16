# Geist Design System - Component Library Overview

## Component Categories

This overview provides the available Geist components for functional UX pattern development. Use these components as your visual building blocks while innovating on information architecture, workflow optimization, and user experience patterns.

## Form Components

### Button
**Purpose**: Primary, secondary, and ghost actions  
**States**: Default, hover, active, disabled, loading  
**Sizes**: Small (32px), medium (40px), large (48px)  
**Usage**: Use for all actionable elements - primary for main actions, secondary for alternative actions, ghost for subtle interactions

### Input Fields
**Purpose**: Text input, email, URL, password, search  
**Features**: Labels, placeholders, prefix/suffix elements, validation states  
**States**: Default, focus, error, disabled  
**Usage**: Core form data collection with clear labeling and error handling

### Select/Dropdown
**Purpose**: Single choice from predefined options  
**Features**: Custom styling, placeholder option, disabled options  
**Usage**: When users need to choose from 4+ options or space is limited

### Checkbox & Switch
**Purpose**: Boolean inputs and toggles  
**Features**: Indeterminate state, disabled state, labels  
**Usage**: Checkbox for multiple selections, switch for on/off settings

### Radio
**Purpose**: Single choice from multiple options  
**Features**: Groups, disabled options, required validation  
**Usage**: When users must choose exactly one option from 2-5 visible choices

### Textarea
**Purpose**: Multi-line text input  
**Features**: Resizable, character limits, descriptions  
**Sizes**: XSmall, small, medium, large  
**Usage**: Comments, descriptions, feedback, long-form content

### Description
**Purpose**: Contextual help and guidance  
**Features**: Titles, tooltips, icons, warning/success states  
**Usage**: Provide users with context, instructions, and feedback

## Typography Components

### Text
**Purpose**: All text content with semantic meaning  
**Sizes**: 10px to 72px with semantic naming  
**Variants**: Headings, body text, buttons, labels, copy text  
**Features**: Responsive scaling, color variants, weight options  
**Usage**: Maintain consistent typography hierarchy and responsive behavior

## Layout Components

### Stack
**Purpose**: Vertical and horizontal arrangement with consistent spacing  
**Directions**: Vertical, horizontal, responsive  
**Features**: Custom gaps, alignment options, justify content  
**Usage**: Organize related elements with predictable spacing patterns

### Grid
**Purpose**: Responsive 12-column layout system  
**Features**: Responsive breakpoints, custom gaps, auto-sizing  
**Usage**: Complex layouts requiring precise column control and responsive behavior

### Modal
**Purpose**: Overlay dialogs for focused tasks  
**Structure**: Header, body, footer with backdrop  
**Usage**: Critical decisions, complex forms, detailed information without losing context

### Card
**Purpose**: Grouped content container  
**Structure**: Header, body, footer sections  
**Usage**: Organize related information into digestible, scannable units

### Tabs
**Purpose**: Content organization with tabbed navigation  
**Features**: Active states, keyboard navigation  
**Usage**: Organize related content sections without page navigation

## Feedback Components

### Toast/Notification
**Purpose**: Temporary status messages  
**Types**: Success, error, warning, info  
**Positions**: Top-right, top-center, bottom-right, bottom-center  
**Usage**: Provide immediate feedback for user actions and system status

### Loading States
**Purpose**: Indicate progress and loading states  
**Types**: Spinner, skeleton (text, circle, rectangle)  
**Usage**: Manage user expectations during data loading and processing

### Tooltip
**Purpose**: Contextual information on hover/focus  
**Features**: Positioning, accessible triggers  
**Usage**: Provide additional context without cluttering the interface

## Status & Information Components

### Badge
**Purpose**: Status indicators and labels  
**Types**: Status (gray, blue, green, amber, red), special (purple, pink, teal), product-specific  
**Variants**: Default, subtle, inverted  
**Usage**: Categorization, status communication, feature highlighting

### Avatar
**Purpose**: User identification and representation  
**Features**: Images, fallbacks, groups, platform integrations  
**Sizes**: 24px, 32px, 48px, 64px  
**Usage**: User identity, team collaboration, social elements

## Data Display Components

### Table
**Purpose**: Structured data presentation  
**Features**: Sortable headers, action columns, responsive scrolling  
**Variants**: Default, striped, compact  
**Usage**: Compare data, display lists, manage records with actions

### Drawer
**Purpose**: Side panels for contextual information  
**Positions**: Bottom, right, left with customizable height  
**Structure**: Header with handle, content sections, footer actions  
**Usage**: Additional details, settings panels, alternative to modals

### Progress
**Purpose**: Task completion and loading indication  
**Types**: Linear bars, circular indicators, step-by-step processes  
**States**: Success, error, warning variants  
**Usage**: Show completion status, guide users through multi-step processes

## Information & State Components

### Note
**Purpose**: Important messages and callouts  
**Types**: Default, success, error, warning, secondary, violet, cyan  
**Features**: Icons, actions, filled variants  
**Sizes**: Small, default, large  
**Usage**: Highlight important information, provide contextual guidance

### Empty State
**Purpose**: No data or empty content scenarios  
**Types**: Default, search results, error states, onboarding  
**Features**: Icons, descriptions, action buttons, help links  
**Usage**: Guide users when content is missing or unavailable

### Error
**Purpose**: Error communication and validation feedback  
**Types**: General, field-specific, API, validation, network, permission  
**Features**: Icons, technical details, recovery actions  
**Usage**: Clear error communication with actionable recovery paths

## Component Selection Guidelines

### When to Use Each Component Type

**Forms**: Use when collecting user input or configuring settings
- Button for actions, Input for data entry, Select for choices, Radio/Checkbox for selections

**Layout**: Use for organizing content and creating structure
- Stack for simple arrangements, Grid for complex layouts, Card for content grouping

**Feedback**: Use for system communication and user guidance
- Toast for status updates, Loading for wait states, Tooltip for help

**Status**: Use for categorization and user identification
- Badge for labels and status, Avatar for user representation

**Data**: Use for presenting information and collections
- Table for structured data, Drawer for contextual panels, Progress for completion

**Information**: Use for guidance and state communication
- Note for important messages, Empty State for no content, Error for problems

## Integration with UX Patterns

These components provide the visual vocabulary for your UX pattern innovations. Focus your creativity on:

- **Information Architecture**: How you organize content within these components
- **Workflow Optimization**: How you sequence and connect these components
- **Progressive Disclosure**: When and how you reveal component functionality
- **Error Prevention**: How you use components to guide users toward success
- **Contextual Assistance**: How components adapt to provide relevant help

**For detailed implementation:** Reference the specific component files (`geist-forms.md`, `geist-layout.md`, etc.) when you need complete HTML examples and implementation details.