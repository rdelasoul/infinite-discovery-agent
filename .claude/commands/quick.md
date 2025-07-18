**QUICK INFINITE DISCOVERY COMMAND**

Fast iteration mode for rapid UI/UX experimentation without token-heavy analysis.

**Variables:**
experiment_path: $ARGUMENTS
count: $ARGUMENTS

**ARGUMENTS PARSING:**
Parse the following from "$ARGUMENTS":
1. `experiment_path` - Path to experiment directory (e.g., "ui-components", "website-homepages/project-name")
2. `count` - Number of iterations (1-N or "infinite")

**Auto-Discovery:**
- spec_file: `experiments/{experiment_path}/spec.md`
- config_file: `experiments/{experiment_path}/spec-config.yml`
- run_timestamp: `YYYY-MM-DD-HHMMSS` (current timestamp)
- run_dir: `experiments/{experiment_path}/runs/{run_timestamp}/`
- output_dir: `experiments/{experiment_path}/runs/{run_timestamp}/iterations/`

**PHASE 1: QUICK SETUP**

**1.1 Run Directory Creation:**
Create timestamped run with essential structure:
- Create `experiments/{experiment_path}/runs/{run_timestamp}/`
- Create `experiments/{experiment_path}/runs/{run_timestamp}/iterations/`
- Copy `spec.md` to `runs/{run_timestamp}/spec-snapshot.md`
- Copy `spec-config.yml` to `runs/{run_timestamp}/config-snapshot.yml`

**1.2 Dependency Resolution:**
Read config_file for essential dependencies only:
- Include design-systems files if specified
- Include critical spec-modules (accessibility, performance)
- Include moodboards for aesthetic direction
- Include data sets if needed
- Skip extensive dependency copying and snapshots

**1.3 Spec Preparation:**
Create lightweight consolidated spec by actively removing ultra-thinking content:

**Step 1: Load and Parse Spec Content**
- Read base spec from spec_file
- Include essential dependency content only

**Step 2: Remove Ultra-Thinking Sections**
Remove entire sections that match these patterns:
- Any section titled "## Ultra-Thinking Directive" (remove section header and all content until next ## header)
- Any section titled "## Ultra-thinking Directive" (case variations)
- Any section containing "Before creating each" followed by thinking prompts
- Any section containing "deeply consider:" followed by bullet points
- Any section with "Generate components that are:" followed by detailed thinking criteria

**Step 3: Remove Thinking Prompts**
Remove paragraphs that contain:
- "Think deeply about"
- "Consider carefully"
- "Analyze thoroughly"
- "Before beginning"
- "Extended thinking"
- Long bullet lists with thinking questions (5+ thinking bullets)

**Step 4: Keep Core Requirements**
Preserve only:
- File naming and structure requirements
- Technical specifications and output format
- Quality standards (accessibility, performance)
- Essential design requirements
- Section requirements (what sections to include)
- Basic brand guidelines

**PHASE 2: FAST GENERATION**

**2.1 Historical Context (Minimal):**
Quick scan of existing iterations to avoid duplicates:
- Check all previous runs in `runs/` directory for existing files
- Identify starting iteration number across all runs
- Skip extensive historical analysis

**2.2 Direct Agent Deployment:**
Launch Sub Agents with streamlined context:

**Agent Assignment:**
For count 1-10: Launch all agents simultaneously
For "infinite": Launch waves of 3-5 agents until context limits

**Agent Task (Streamlined):**
```
TASK: Generate iteration [NUMBER] for [EXPERIMENT_PATH]

CONTEXT:
- Spec: [STREAMLINED SPECIFICATION - All ultra-thinking sections removed, core requirements only]
- Output: experiments/{experiment_path}/runs/{run_timestamp}/iterations/
- Iteration: [NUMBER]
- Dependencies: [essential deps only]

REQUIREMENTS:
1. Follow spec format exactly (no deep thinking required - requirements are direct)
2. Ensure uniqueness from existing iterations
3. Use dependencies appropriately
4. Create functional, accessible output
5. File: experiments/{experiment_path}/runs/{run_timestamp}/iterations/[filename]
6. Focus on efficient implementation - NO extensive analysis or ultra-thinking

APPROACH: Direct implementation based on streamlined requirements
DELIVERABLE: Single functional file as specified
```

**2.3 Parallel Execution:**
- Launch all agents simultaneously using Task tool
- Minimal coordination overhead
- Basic completion monitoring
- Update `current` symlink to point to new run after completion

**PHASE 3: QUICK INFINITE MODE**
For infinite generation:

**Simple Wave Management:**
```
WHILE context allows:
    1. Plan next wave (3-5 agents)
    2. Launch parallel agents with basic context
    3. Monitor completion
    4. Continue to next wave
    5. Stop at context limits
```

**Execution Principles:**

**Speed-Focused:**
- Minimal analysis overhead
- Direct generation approach
- Essential dependencies only
- Streamlined agent coordination
- **Ultra-thinking directives removed** from spec content

**Quality Maintained:**
- Spec compliance required
- Basic uniqueness checking
- Functional output standards
- Dependency integration

**Token Efficiency:**
- 70-80% fewer tokens than /infinite (achieved by actively removing ultra-thinking directives)
- Faster execution times through streamlined specs
- Essential features only - no thinking prompts
- Direct output generation without analysis overhead
- Streamlined specification content with ultra-thinking sections removed

Begin execution by:
1. Creating timestamped run directory with snapshots
2. Quickly analyzing the experiment spec and resolving essential dependencies
3. **ACTIVELY REMOVING ultra-thinking sections** from spec content following the 4-step process:
   - Remove "## Ultra-Thinking Directive" sections entirely
   - Remove "Before creating each" thinking prompts
   - Remove "Think deeply about" paragraphs
   - Keep only core requirements and specifications
4. Launching parallel Sub Agents with streamlined spec (no thinking prompts)
5. Updating `current` symlink to point to new run upon completion

This maintains the proper run-based architecture while achieving true token efficiency through streamlined spec preparation and fast execution approach.