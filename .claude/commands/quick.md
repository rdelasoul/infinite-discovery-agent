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
- **Enhancement strategies**: Include content from `shared/enhancement-strategies/` if specified
- **References**: Generate quick summary of referenced work (max 30 lines for speed)
- Skip extensive dependency copying and snapshots

**1.2.1 Quick Reference Summary (Enhancement Mode):**
If `references` array exists in config:
1. **Path Resolution**: Resolve `current/` symlinks to actual timestamp paths
2. **Quick Analysis**: Extract key patterns using streamlined approach:
   - Component type and main purpose
   - Top 5 key features only
   - Primary interaction points
   - Enhancement focus based on selected strategies
3. **Concise Summary**: Generate 30-line maximum summary (streamlined for /quick speed)
4. **Fast Integration**: Include in streamlined spec as brief "REFERENCE_CONTEXT" section

**1.3 Spec Preparation:**
Create streamlined spec with intelligent content adaptation:

**Step 1: Load and Analyze Spec Content**
- Read base spec from spec_file
- Include essential dependency content only
- Detect if spec contains verbose thinking sections

**Step 2: Intelligent Content Processing**
Detect and conditionally process based on spec structure:

**Detection Phase:**
Check if spec contains any of these patterns:
- Sections titled "Ultra-Thinking Directive" (any case variation)
- Sections with "Before creating each" or "deeply consider:"
- Multiple paragraphs with thinking prompts ("Think deeply about", "Consider carefully", etc.)
- Extended bullet lists with thinking questions (5+ items)

**Processing Decision:**
- **If verbose content detected**: Proceed with removal steps below
- **If minimal spec detected**: Use spec as-is without modification
- **Hybrid approach**: Remove only the detected verbose sections

**Step 3: Conditional Removal (only if detected)**
If verbose content was found, remove:
- Entire "## Ultra-Thinking Directive" sections
- Paragraphs starting with thinking prompts
- Extended analytical bullet lists
- Meta-instructions about thinking process

**Step 4: Preserve Core Content**
Always keep (regardless of spec style):
- File naming and structure requirements
- Technical specifications and output format
- Quality standards (accessibility, performance)
- Design requirements and constraints
- Section requirements (what to include)
- Any custom directives from spec-config.yml

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
- Spec: [PROCESSED SPECIFICATION - Adapted to optimal format]
- Output: experiments/{experiment_path}/runs/{run_timestamp}/iterations/
- Iteration: [NUMBER]
- Dependencies: [essential deps only]
- Enhancement Strategy: [Strategy type if enhancement mode]
- Reference Context: [30-line quick summary if enhancement mode]
- Experiment Config: [Any custom config from spec-config.yml]

REQUIREMENTS:
1. Follow the provided spec exactly as given
2. Ensure uniqueness from existing iterations
3. Use dependencies appropriately
4. Create functional, accessible output
5. **Quick Enhancement** (if applicable): Apply enhancement strategy efficiently using reference context
6. File: experiments/{experiment_path}/runs/{run_timestamp}/iterations/[filename]
7. Focus on efficient, direct implementation

APPROACH: Direct implementation following the spec requirements
DELIVERABLE: Single functional file as specified in the spec
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
3. **INTELLIGENTLY ADAPTING spec content** based on detection:
   - Detect if spec contains verbose thinking sections
   - If found: Remove ultra-thinking content for efficiency
   - If not found: Use spec as-is without modification
   - Respect any custom structure from spec-config.yml
4. Launching parallel Sub Agents with adapted spec
5. Updating `current` symlink to point to new run upon completion

This maintains the proper run-based architecture while achieving token efficiency through intelligent spec adaptation that works with ANY spec format - verbose, minimal, or custom.