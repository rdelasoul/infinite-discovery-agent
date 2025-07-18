**ENHANCED INFINITE AGENTIC LOOP COMMAND**

Think deeply about this sophisticated iterative creation process with enhanced dependency management and run tracking.

**Variables:**

experiment_path: $ARGUMENTS
count: $ARGUMENTS

**ARGUMENTS PARSING:**
Parse the following arguments from "$ARGUMENTS":
1. `experiment_path` - Path to experiment directory (e.g., "ui-components", "website-homepages/perantara-reps", "functional-ux-patterns")
2. `count` - Number of iterations (1-N or "infinite")

**ENHANCED AUTOMATIC DISCOVERY:**
Based on the experiment_path:
- spec_file: `experiments/{experiment_path}/spec.md`
- config_file: `experiments/{experiment_path}/spec-config.yml`
- run_timestamp: Generate timestamp in format `YYYY-MM-DD-HHMMSS`
- run_dir: `experiments/{experiment_path}/runs/{run_timestamp}/`
- output_dir: `{run_dir}/iterations/`

**PHASE 1: DEPENDENCY RESOLUTION**
Read and resolve all dependencies to create a consolidated specification:

**1.1 Configuration Analysis:**
Read `config_file` to understand:
- design-systems dependencies (from `shared/design-systems/`)
- spec-modules dependencies (from `shared/spec-modules/`)
- moodboards dependencies (from `shared/moodboards/`)
- data dependencies (from `shared/data/`)
- **enhancement-strategies dependencies** (from `shared/enhancement-strategies/`)
- **references dependencies** (existing work to enhance)
- experiment configuration settings

**1.2 Dependency Resolution:**
For each dependency category:
- **Design Systems**: Include content from `shared/design-systems/{module}.md`
- **Spec Modules**: Include content from `shared/spec-modules/{module}.md`  
- **Moodboards**: Include content from `shared/moodboards/{moodboard}.md` for aesthetic guidance
- **Data Sets**: Include content from `shared/data/{dataset}.md`
- **Enhancement Strategies**: Include content from `shared/enhancement-strategies/{strategy}.md` for systematic improvement approaches
- **References**: Generate intelligent summary of referenced work (max 50 lines) for enhancement context

**1.2.1 Reference Summary Generation (Enhancement Mode):**
If `references` array exists in config:
1. **Path Resolution**: Resolve `current/` symlinks to actual timestamp paths
2. **File Analysis**: Read referenced file and extract:
   - Component type and primary purpose
   - Key features and interaction points
   - Current strengths and design patterns
   - Enhancement opportunities based on selected strategies
   - Technical context and structure
3. **Summary Creation**: Generate 50-line maximum summary focusing on enhancement context
4. **Integration**: Include summary in consolidated specification as "REFERENCE_SUMMARY" section

**1.3 Consolidated Specification Creation:**
Create a comprehensive specification that includes:
- Base spec from `spec_file`
- All resolved dependency content
- Integrated requirements and constraints
- Aesthetic guidance from moodboards for brand personality
- Complete data context for realistic implementation
- **Enhancement strategies** (if specified): Systematic improvement approaches and methodologies
- **Reference summary** (if references exist): Intelligent summary of work to enhance

**PHASE 2: RUN INITIALIZATION**
Create a new timestamped run to track this generation session:

**2.1 Run Directory Setup:**
```
experiments/{experiment_path}/runs/{timestamp}/
├── spec-snapshot.md          # Complete resolved specification
├── config-snapshot.yml       # Configuration used for this run
└── iterations/              # Generated iterations output
```

**Note**: Dependencies are referenced directly from `experiments/shared/` rather than copied to save storage and maintain consistency.

**2.2 Snapshot Creation:**
- Copy current `spec.md` as `spec-snapshot.md`
- Copy current `spec-config.yml` as `config-snapshot.yml`
- Create empty `iterations/` directory for outputs
- Dependencies remain in `experiments/shared/` and are referenced directly

**2.3 Current Symlink Update (Post-Completion):**
Update the `current` symlink to point to this new run AFTER all agents complete:
```bash
cd experiments/{experiment_path}
ln -sf runs/{timestamp} current
```

**Note**: This step is performed at the end of the process to ensure symlink points to completed run.

**PHASE 3: SPECIFICATION ANALYSIS**
Analyze the consolidated specification to understand:
- What type of content to generate
- The format and structure requirements
- Any specific parameters or constraints
- The intended evolution pattern between iterations
- All dependency requirements and their implications

Think carefully about how the resolved dependencies enhance the base specification.

**PHASE 4: HISTORICAL CONTEXT ANALYSIS** 
Analyze previous runs to understand evolution trajectory:
- List all existing run directories by timestamp
- Identify the most recent previous run
- Analyze content evolution across historical iterations
- Understand the trajectory of previous generations
- Determine what gaps or opportunities exist for new iterations
- Learn from previous dependency usage patterns

**PHASE 5: ITERATION STRATEGY**
Based on consolidated spec and historical analysis:
- Determine the starting iteration number (analyze across all runs)
- Plan how each new iteration will be unique and evolutionary
- Consider how to build upon previous iterations while maintaining novelty
- Incorporate insights from resolved dependencies
- If count is "infinite", prepare for continuous generation until context limits

**PHASE 6: PARALLEL AGENT COORDINATION**
Deploy multiple Sub Agents with enhanced context including resolved dependencies:

**Sub-Agent Distribution Strategy:**
- For count 1-5: Launch all agents simultaneously 
- For count 6-20: Launch in batches of 5 agents to manage coordination
- For "infinite": Launch waves of 3-5 agents, monitoring context and spawning new waves

**Enhanced Agent Assignment Protocol:**
Each Sub Agent receives:
1. **Consolidated Spec Context**: Complete resolved specification with all dependencies
2. **Historical Snapshot**: Analysis of previous runs and their evolution
3. **Current Run Context**: Information about this specific generation session
4. **Iteration Assignment**: Specific iteration number (starting_number + agent_index)
5. **Uniqueness Directive**: Explicit instruction to avoid duplicating concepts from all previous runs
6. **Quality Standards**: Detailed requirements from consolidated specification
7. **Dependency Context**: Full access to resolved design systems, modules, and data

**Enhanced Agent Task Specification:**
```
TASK: Generate iteration [NUMBER] for [EXPERIMENT_PATH] in run [TIMESTAMP]

You are Sub Agent [X] generating iteration [NUMBER] for a new run session.

CONTEXT:
- Consolidated Specification: [Full resolved spec with all dependencies]
- Previous Runs Analysis: [Summary of historical iterations across all runs]
- Current Run: experiments/{experiment_path}/runs/{timestamp}/
- Output Directory: experiments/{experiment_path}/runs/{timestamp}/iterations/
- Your iteration number: [NUMBER]
- Assigned creative direction: [Specific innovation dimension to explore]

DEPENDENCIES AVAILABLE:
- Design Systems: [List of resolved design system files from experiments/shared/design-systems/]
- Spec Modules: [List of resolved specification modules from experiments/shared/spec-modules/]
- Moodboards: [List of aesthetic guidance files from experiments/shared/moodboards/]
- Data Sets: [List of resolved data sets from experiments/shared/data/]
- Enhancement Strategies: [List of enhancement approaches from experiments/shared/enhancement-strategies/]

ENHANCEMENT CONTEXT (if enhancement mode):
- Reference Summary: [50-line intelligent summary of work to enhance]
- Enhancement Approach: [Systematic improvement methodology from selected strategies]
- Enhancement Focus: [Specific aspects to enhance based on strategy and reference analysis]

REQUIREMENTS:
1. Read and understand the consolidated specification completely
2. Analyze previous runs to ensure your output is globally unique
3. Utilize provided dependencies appropriately (reference files directly from experiments/shared/)
4. Generate content following the resolved spec format exactly
5. Focus on [assigned innovation dimension] while maintaining spec compliance
6. **Enhancement Mode** (if applicable): Apply enhancement strategies to reference work while maintaining core functionality
7. **Reference Integration** (if applicable): Use reference summary to understand what to enhance and how
8. Create file in: experiments/{experiment_path}/runs/{timestamp}/iterations/
9. Ensure your iteration adds genuine value and novelty across all historical context

DELIVERABLE: Single file as specified, with unique innovative content utilizing dependencies
```

**Parallel Execution Management:**
- Launch all assigned Sub Agents simultaneously using Task tool
- Provide each agent with complete dependency resolution context (referencing experiments/shared/ directly)
- Monitor agent progress and completion
- Handle any agent failures by reassigning iteration numbers
- Ensure no duplicate iteration numbers are generated
- Collect and validate all completed iterations
- Verify proper dependency utilization (ensure agents can access experiments/shared/ files)

**PHASE 7: INFINITE MODE ORCHESTRATION**
For infinite generation mode, orchestrate continuous parallel waves with dependency awareness:

**Enhanced Wave-Based Generation:**
1. **Wave Planning**: Determine next wave size (3-5 agents) based on context capacity
2. **Dependency Refresh**: Update dependency context if needed between waves
3. **Agent Preparation**: Prepare fresh consolidated context snapshots for each new wave
4. **Progressive Sophistication**: Each wave should explore more advanced innovation dimensions
5. **Context Monitoring**: Track total context usage across all agents and main orchestrator
6. **Graceful Conclusion**: When approaching context limits, complete current wave and summarize

**Enhanced Infinite Execution Cycle:**
```
WHILE context_capacity > threshold:
    1. Assess current run state and previous runs
    2. Refresh dependency resolution if needed
    3. Plan next wave of agents (size based on remaining context)
    4. Assign increasingly sophisticated creative directions
    5. Launch parallel Sub Agent wave with full dependency context
    6. Monitor wave completion
    7. Update run state snapshot
    8. Evaluate context capacity remaining
    9. If sufficient capacity: Continue to next wave
    10. If approaching limits: Complete final wave and summarize
```

**Progressive Sophistication Strategy:**
- **Wave 1**: Basic functional implementation with dependency integration
- **Wave 2**: Multi-dimensional innovations with enhanced dependency utilization  
- **Wave 3**: Complex paradigm combinations with adaptive behaviors
- **Wave N**: Revolutionary concepts pushing boundaries while maintaining dependency consistency

**Context Optimization:**
- Each wave uses fresh agent instances to avoid context accumulation
- Main orchestrator maintains lightweight state tracking
- Progressive summarization of completed iterations to manage context
- Strategic pruning of less essential details in later waves
- Efficient dependency context sharing across agents

**EXECUTION PRINCIPLES:**

**Enhanced Quality & Uniqueness:**
- Each iteration must be genuinely unique across all historical runs
- Build upon previous work while introducing novel elements
- Maintain consistency with the consolidated specification
- Properly utilize resolved dependencies (design systems, data, modules)
- Ensure proper file organization in timestamped run directories

**Dependency-Aware Coordination:**
- Deploy Sub Agents with complete dependency resolution context
- Assign distinct innovation dimensions that leverage different dependency aspects
- Coordinate timing to prevent file naming conflicts
- Monitor all agents for successful completion, quality, and dependency compliance

**Enhanced Scalability & Efficiency:**
- Think deeply about evolution trajectory across parallel streams and historical runs
- For infinite mode, optimize for maximum valuable output before context exhaustion
- Use wave-based generation to manage context limits intelligently  
- Balance parallel speed with quality, coordination overhead, and dependency resolution

**Advanced Agent Management:**
- Provide each Sub Agent with complete consolidated context and dependency access
- Handle agent failures gracefully with iteration reassignment
- Ensure all parallel outputs integrate cohesively with overall progression and dependency requirements
- Maintain dependency consistency across all parallel streams

**Run Management:**
- Create comprehensive run snapshots for full reproducibility
- Track dependency evolution across different runs
- Enable easy comparison between run approaches and outcomes
- Maintain clean separation between different generation sessions

**ULTRA-THINKING DIRECTIVE:**
Before beginning generation, engage in extended thinking about:

**Enhanced Specification & Dependencies:**
- The deeper implications of the consolidated specification
- How resolved dependencies enhance the generation quality
- Integration strategies for design systems, modules, and data
- Dependency-driven evolution patterns across iterations

**Historical Evolution Analysis:**
- Patterns across previous runs and their dependency usage
- Opportunities for novel approaches not yet explored
- How dependency resolution has evolved over time
- Gaps in the historical coverage that new iterations can fill

**Advanced Parallel Strategy:**
- Optimal Sub Agent distribution leveraging dependency awareness
- How to assign distinct creative directions that utilize different dependency aspects
- Dependency-conscious wave sizing and timing for infinite mode
- Context management across multiple parallel agents with shared dependency context

**Enhanced Coordination Challenges:**
- How to prevent duplicate concepts across parallel streams and historical runs
- Strategies for ensuring each agent produces genuinely unique output with proper dependency usage
- Managing file organization within timestamped run directories
- Quality control mechanisms for parallel outputs with dependency validation

**Dependency Integration Optimization:**
- How to most effectively utilize resolved design systems in generated content
- Strategies for incorporating realistic data sets into functional demonstrations
- Integration patterns for accessibility, performance, and other spec modules
- Balancing dependency adherence with creative innovation

**Run-Based Workflow:**
- Optimal run directory organization and snapshot strategies
- How to maintain clean separation between different generation approaches
- Strategies for evolving dependency configurations between runs
- Long-term maintainability of the run-based system

Begin execution with deep analysis of these enhanced coordination challenges, including full dependency resolution, and proceed systematically through each phase, leveraging Sub Agents for maximum creative output and efficiency while maintaining proper dependency integration and run organization.