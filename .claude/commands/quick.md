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
- output_dir: `experiments/{experiment_path}/current/iterations/`

**PHASE 1: QUICK SETUP**

**1.1 Dependency Resolution:**
Read config_file for essential dependencies only:
- Include design-systems files if specified
- Include critical spec-modules (accessibility, performance)
- Include moodboards for aesthetic direction
- Include data sets if needed
- Skip extensive dependency copying and snapshots

**1.2 Spec Preparation:**
Create lightweight consolidated spec:
- Base spec from spec_file
- Essential dependency content only
- Skip redundant documentation sections

**PHASE 2: FAST GENERATION**

**2.1 Historical Context (Minimal):**
Quick scan of existing iterations to avoid duplicates:
- Check current/iterations/ for existing files
- Identify starting iteration number
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
- Spec: [consolidated specification]
- Output: experiments/{experiment_path}/current/iterations/
- Iteration: [NUMBER]
- Dependencies: [essential deps only]

REQUIREMENTS:
1. Follow spec format exactly
2. Ensure uniqueness from existing iterations
3. Use dependencies appropriately
4. Create functional, accessible output
5. File: experiments/{experiment_path}/current/iterations/[filename]

DELIVERABLE: Single functional file as specified
```

**2.3 Parallel Execution:**
- Launch all agents simultaneously using Task tool
- Minimal coordination overhead
- Basic completion monitoring
- Simple file organization

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

**Quality Maintained:**
- Spec compliance required
- Basic uniqueness checking
- Functional output standards
- Dependency integration

**Efficiency:**
- 70-80% fewer tokens than /infinite
- Faster execution times
- Essential features only
- Direct output generation

Begin execution by quickly analyzing the experiment spec, resolving essential dependencies, and launching parallel Sub Agents for direct generation with minimal coordination overhead.