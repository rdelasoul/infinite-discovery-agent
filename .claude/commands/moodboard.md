# Moodboard Creation Assistant

Create and manage **visual inspiration moodboards** for aesthetic direction in infinite discovery experiments. This command helps bridge the gap between client aesthetic preferences ("I like this website") and actionable creative guidance for AI agents.

## Usage

```bash
# Interactive moodboard creation
/moodboard create [name]

# Analyze specific websites and create moodboard
/moodboard analyze [name] [url1] [url2] [url3]

# Add references to existing moodboard
/moodboard update [name] [url1] [url2]

# List available moodboards
/moodboard list

# Show moodboard details
/moodboard show [name]
```

## Command Implementation

### `/moodboard create [name]`

**Purpose**: Interactive assistant for creating a new moodboard from scratch

**Process**:
1. **Gather Basic Information**
   - Moodboard name and purpose
   - Target brand personality (innovative, trustworthy, playful, etc.)
   - Primary use case (website, app, brand identity, etc.)

2. **Collect Inspiration Sources**
   - Website URLs that inspire the aesthetic direction
   - Specific elements to note from each source
   - What specifically appeals about each reference

3. **Aesthetic Analysis**
   - Extract color palettes from inspiration sources
   - Identify typography characteristics and personality
   - Note layout patterns and visual hierarchy approaches
   - Analyze interaction styles and animation personality

4. **Structure into Template**
   - Fill out the comprehensive moodboard template
   - Ensure all required sections are covered
   - Add specific implementation guidance for AI agents

5. **Save and Integrate**
   - Save to `experiments/shared/moodboards/[name].md`
   - Provide guidance on using in spec-config.yml
   - Suggest compatible experiment types

**Example Usage**:
```bash
/moodboard create client-wellness
# → Interactive prompts guide through aesthetic analysis
# → Creates experiments/shared/moodboards/client-wellness.md
# → Provides integration guidance
```

### `/moodboard analyze [name] [urls...]`

**Purpose**: Automatically analyze provided websites and create structured moodboard

**Process**:
1. **Website Analysis**
   - Fetch each provided URL using WebFetch tool
   - Extract visual elements, color usage, typography choices
   - Identify layout patterns and interaction styles
   - Note specific aesthetic characteristics

2. **Color Palette Extraction**
   - Identify primary, secondary, and accent colors
   - Analyze color emotional associations
   - Check contrast and accessibility considerations
   - Structure into palette format with hex codes

3. **Typography Analysis**
   - Identify font personalities and characteristics
   - Note hierarchy patterns and text treatment
   - Extract typography guidance for implementation
   - Document specific style recommendations

4. **Visual Style Pattern Analysis**
   - Layout philosophy and grid approaches
   - Spacing and whitespace usage
   - Visual hierarchy techniques
   - Imagery and media treatment styles

5. **Interaction Style Analysis**
   - Animation and transition characteristics
   - Micro-interaction patterns
   - Overall interaction personality
   - Timing and easing preferences

6. **Generate Comprehensive Moodboard**
   - Compile analysis into structured template format
   - Add implementation guidelines for AI agents
   - Include specific guidance and recommendations
   - Save to moodboards directory

**Example Usage**:
```bash
/moodboard analyze modern-healthcare https://stripe.com https://linear.app https://figma.com
# → Analyzes three sites for healthcare-appropriate modern aesthetic
# → Creates comprehensive moodboard with extracted elements
# → Ready for use in experiments
```

### `/moodboard update [name] [urls...]`

**Purpose**: Add new inspiration sources to existing moodboard

**Process**:
1. **Load Existing Moodboard**
   - Read current moodboard file
   - Understand existing aesthetic direction
   - Identify areas that could be enhanced

2. **Analyze New Sources**
   - Extract elements from new URLs
   - Compare with existing aesthetic direction
   - Identify complementary or conflicting elements

3. **Integrate Findings**
   - Add new inspiration sources to overview section
   - Update color palette if new complementary colors found
   - Enhance typography guidance with new examples
   - Refine visual style patterns based on new analysis

4. **Quality Assurance**
   - Ensure aesthetic consistency across all sources
   - Resolve any conflicting guidance
   - Maintain clear, actionable implementation guidelines

**Example Usage**:
```bash
/moodboard update tech-startup https://discord.com https://notion.so
# → Adds Discord and Notion analysis to existing tech-startup moodboard
# → Updates guidance while maintaining aesthetic consistency
```

### `/moodboard list`

**Purpose**: Show all available moodboards and their characteristics

**Process**:
1. **Scan Moodboards Directory**
   - List all .md files in experiments/shared/moodboards/
   - Extract basic information from each moodboard
   - Show aesthetic direction and best use cases

2. **Display Summary**
   - Moodboard name and aesthetic description
   - Primary colors and personality traits
   - Recommended use cases and experiment types
   - Integration examples

**Example Output**:
```
Available Moodboards:

🔹 modern-minimalist
   Aesthetic: Clean geometry, purposeful simplicity
   Colors: Professional blue, success green, neutral grays
   Best for: Professional services, SaaS, portfolios

🌿 organic-nature  
   Aesthetic: Natural forms, earth-inspired colors
   Colors: Forest green, golden amber, earth browns
   Best for: Wellness, sustainability, creative services

⚡ tech-startup
   Aesthetic: Bold, energetic, future-focused
   Colors: Electric indigo, vibrant pink, tech gradients
   Best for: Technology products, startups, innovation
```

### `/moodboard show [name]`

**Purpose**: Display detailed information about specific moodboard

**Process**:
1. **Load Moodboard File**
   - Read experiments/shared/moodboards/[name].md
   - Extract key sections and information

2. **Display Comprehensive Summary**
   - Aesthetic direction and inspiration sources
   - Color palette with hex codes
   - Typography and visual style guidance
   - Usage recommendations and integration examples

## Implementation Guidelines

### **WebFetch Integration**
- Use WebFetch tool to analyze inspiration websites
- Extract visual elements using AI analysis
- Focus on actionable design elements for AI implementation

### **Structured Analysis**
- Follow moodboard template format exactly
- Ensure all required sections are covered
- Provide specific, actionable guidance for AI agents

### **Quality Assurance**
- Verify aesthetic consistency across inspiration sources
- Ensure accessibility considerations are included
- Check that guidance is specific enough for AI implementation

### **Error Handling**
- Handle inaccessible URLs gracefully
- Provide clear error messages for invalid moodboard names
- Suggest alternatives when requested moodboards don't exist

## Usage in Experiments

### **Integration with spec-config.yml**
```yaml
# After creating moodboard, add to experiment configuration
dependencies:
  moodboards:
    - [created-moodboard-name]
```

### **Compatible Experiment Types**
- **UI Components**: Aesthetic guidance for themed hybrid components
- **Website Homepages**: Brand-specific aesthetic direction
- **Functional UX Patterns**: Visual consistency within design system constraints
- **All experiment types**: Can benefit from aesthetic guidance

### **Workflow Integration**
1. **Create moodboard**: `/moodboard create client-project`
2. **Configure experiment**: Add to spec-config.yml
3. **Generate variations**: `/infinite [experiment-type] [count]`
4. **Iterate**: Update moodboard based on results, regenerate

## Quality Standards

### **Moodboard Completeness**
- All template sections filled with specific guidance
- Color palettes include hex codes and emotional associations
- Typography guidance includes specific characteristics
- Implementation guidelines are actionable for AI agents

### **Aesthetic Consistency**
- Inspiration sources complement each other
- No conflicting aesthetic directions
- Clear, unified vision across all elements

### **AI Implementation Ready**
- Specific enough for AI agents to understand and implement
- Includes technical considerations and constraints
- Provides quality assurance checkpoints

This command provides the foundation for systematic aesthetic guidance in the infinite discovery system, bridging client preferences with actionable AI creative direction.