# Modular Specification Proposal

*Transform monolithic spec.md files into focused job statements with user context and reusable shared modules*

## Executive Summary

### The Problem We're Solving
**Specification Bloat**: Current spec.md files contain 500+ lines mixing creative problems with boilerplate requirements. Every new experiment copies hundreds of lines of accessibility standards, performance requirements, design tokens, and data specifications.

**Missing User Context**: Specifications focus on what to build rather than what job users need to accomplish, leaving AI agents to guess at appropriate UI solutions.

### The Solution: Modular Specifications with Jobs-to-be-Done
A **modular architecture** that separates creative problem definitions from implementation standards, enhanced with Jobs-to-be-Done framework to give AI agents clear user context for generating appropriate UI solutions.

### Expected Benefits

#### Immediate Benefits
- ✅ **Cleaner specs**: 50-100 lines instead of 500+
- ✅ **Faster experimentation**: No more copying boilerplate
- ✅ **Consistent standards**: Update once, apply everywhere
- ✅ **Zero disruption**: Backward compatible with existing system

#### Long-term Benefits
- 📈 **Rapid prototyping**: New experiments in minutes, not hours
- 🎯 **Clear focus**: User jobs and context separated from implementation
- 🚀 **Easy maintenance**: Central updates to shared standards
- 💡 **Flexible configuration**: Mix and match dependencies per experiment

## Core Concept: Separation of Concerns + User Jobs

### The Mental Model
```
USER JOB + CONTEXT + SHARED MODULES = CONTEXTUAL UI SPECIFICATION
```

- **User Job**: What the user is trying to accomplish (not what to build)
- **Context**: User's emotional state, time constraints, and journey position
- **Shared Modules**: Reusable standards and requirements
- **Configuration**: Mix and match via spec-config.yml

### From Monolithic to Modular

**Before: Monolithic Specification**
```markdown
# UI Components Spec (Old Way)
- Problem statement (10 lines)
- Design system details (100+ lines)
- Accessibility standards (50+ lines)
- Performance requirements (30+ lines)
- Data examples (200+ lines)
- Ultra-thinking directives (100+ lines)
- Output format details (20+ lines)
- Moodboard aesthetic guidance (50+ lines)
```

**After: Job-Focused Specification**
```markdown
# UI Components Spec (New Way)
## Job Statement
What is the user trying to accomplish?

## User Context  
What's their situation, emotional state, and constraints?

## Problem Statement
How does our UI help complete this job?

## Success Metrics
How do we know the job was completed successfully?
```

### The New Architectural Split

```yaml
# spec-config.yml handles the "how" and "with what"
dependencies:
  design-systems: [geist-core]      # Pulls in 100+ lines of design tokens
  spec-modules: [accessibility]     # Pulls in 50+ lines of standards
  data: [banking-data]             # Pulls in 200+ lines of context
  moodboards: [modern-minimalist]  # Pulls in aesthetic guidance
  format: single-file              # Output format specification
```

## Benefits of Modular Approach

### 1. **Cleaner Problem Definition with User Context**
spec.md becomes about the **user's job** rather than implementation boilerplate:
- What job is the user trying to accomplish?
- What's their context (emotional, temporal, knowledge)?
- How does our UI help them succeed?
- How do we measure job completion?

### 2. **Reusable Standards**
Common requirements move to shared modules:
- Accessibility → `shared/spec-modules/accessibility-standards.md`
- Performance → `shared/spec-modules/performance-requirements.md`
- Design tokens → `shared/design-systems/geist-core.md`
- Brand guidelines → `shared/moodboards/modern-minimalist.md`

### 3. **Flexible Configuration**
spec-config.yml enables mixing and matching:
```yaml
# Experiment A: Full constraints for production-ready work
dependencies:
  design-systems: [geist-core, geist-components]
  spec-modules: [accessibility, performance, security]
  moodboards: [modern-minimalist]
  data: [banking-data]

# Experiment B: Creative freedom for exploration
dependencies:
  design-systems: []               # No design constraints
  spec-modules: [accessibility]    # Only essential standards
  moodboards: [organic-nature]     # Different aesthetic direction
  data: []                        # Pure visual exploration
```

### 4. **Faster Experimentation Cycles**
When you have an idea for a new experiment:
1. Copy a similar experiment's folder
2. Define the user job and context
3. Adjust dependencies in spec-config.yml
4. Run it - AI agents have everything needed to generate contextual UI

No more copying hundreds of lines of boilerplate standards!

## Additional JTBD Examples

### E-commerce Product Page
```markdown
## Job Statement
**Primary Job**: When comparing similar products with sizing variations, users want to confidently select the right fit so they can avoid the hassle of returns.

**User Context**
**Entry Point**: Came from search results / social media ad / friend's recommendation
**Emotional State**: Excited about product but worried about fit
**Time Available**: 2-3 minutes to decide before losing interest
**What Happens Next**: Add to cart or continue searching
```

### SaaS Team Dashboard
```markdown
## Job Statement  
**Primary Job**: When starting their Monday morning, managers want to quickly identify which team members might need support this week so they can proactively prevent project delays.

**User Context**
**Entry Point**: Monday morning routine / Alert about missed deadline
**Emotional State**: Focused but slightly overwhelmed by week ahead
**Knowledge Level**: Knows team well but not every project detail
**Time Available**: 5-10 minutes for morning review
```

### Mobile Transit App
```markdown
## Job Statement
**Primary Job**: When their usual commute is disrupted, users want to find the fastest alternative route so they can minimize how late they'll be.

**User Context**
**Entry Point**: Push notification about delay / Saw crowd at station
**Emotional State**: Stressed and frustrated, need quick solution
**Time Available**: 30 seconds while walking/standing
**What Happens Next**: Start moving toward chosen alternative
```

## Implementation Plan

### Phase 1: Extract Common Sections (Day 1)
```bash
# Move repeated content to shared modules
mv "accessibility standards" → experiments/shared/spec-modules/accessibility-standards.md
mv "performance requirements" → experiments/shared/spec-modules/performance-requirements.md
mv "design system details" → experiments/shared/design-systems/geist-core.md
```

### Phase 2: Update Configurations (Day 2)
```yaml
# Add to each experiment's spec-config.yml
dependencies:
  design-systems: [geist-core]
  spec-modules: [accessibility-standards, performance-requirements]
  moodboards: [modern-minimalist]
  data: [banking-data]
```

### Phase 3: Refactor Specifications (Day 3-5)
```markdown
# Update each spec.md to focus on unique aspects
- Remove boilerplate (now in shared modules)
- Focus on the creative problem
- Clarify success criteria
- Simplify approach guidelines
```

### Phase 4: Create Templates (Week 2)
```bash
# Create reusable templates for different experiment types
experiments/templates/
├── standard-experiment-spec.md
├── enhancement-experiment-spec.md
├── website-experiment-spec.md
└── component-experiment-spec.md
```

## Recommended Specification Structure (Jobs-to-be-Done Focused)

### Standard Experiment spec.md
```markdown
# [Experiment Name] Specification

## Job Statement
<!-- What is the user trying to accomplish? Not what interface to build -->
**Primary Job**: When [situation], users want to [motivation] so they can [expected outcome].

**Related Jobs**: 
- [Secondary job they might need to accomplish]
- [Adjacent task that often comes before/after]

**Job Success Criteria**: Users know they've succeeded when [specific observable outcome].

## User Context
<!-- Critical context about the user's state and journey -->
**Entry Point**: How did they get here? [Clicked from email / Monthly routine / Alert triggered / etc.]

**Emotional State**: [Anxious about money / Time-pressed / Confused / Confident but needs validation]

**Knowledge Level**: [First-time user / Returning daily / Expert wanting efficiency / Relearning after absence]

**Time Available**: [30 seconds to check / 5 minutes to explore / Extended analysis session]

**What Happens Next**: After completing this job, users will [next action/decision].

## Problem Statement
<!-- Now frame the UI/UX challenge in context of the job -->
Given the job of [job summary], create an interface that [specific solution approach].

## Hypothesis
<!-- Connect solution to job success -->
If we [approach based on job needs], then users will [complete job successfully] because [reasoning tied to context].

## Core Requirements
<!-- Only experiment-specific requirements -->
- Output format: [specific to this experiment]
- Naming convention: [pattern]
- Key constraints: [unique to this problem]
- File structure: [if different from standard]

## Success Metrics
<!-- Tied directly to job completion -->
- Job Completion: Can users accomplish [primary job] in [time/clicks]?
- Confidence: Do users feel certain about [key decision/outcome]?
- Efficiency: Time from entry to job completion?
- Error Prevention: Common mistakes avoided?

## Approach Guidelines
<!-- Design direction informed by job and context -->
- Emotional Design: Given their [emotional state], the interface should feel [quality].
- Information Hierarchy: Prioritize [critical info for job] over [less relevant details].
- Interaction Patterns: Support [quick scanning / deep analysis / comparison / etc.] based on job needs.

<!-- All implementation details handled by spec-config.yml -->
```

## Example: Before and After

### Before (Monolithic)
```markdown
# Banking Interface Spec
## Problem
Create banking interfaces...

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- Color contrast ratios > 4.5:1
- [40+ more lines of accessibility details]

## Performance Requirements
- 90+ Lighthouse score
- 60fps animations
- [25+ more lines of performance details]

## Design System Integration
- Use Geist design tokens
- Follow spacing scale: 4px, 8px, 16px...
- [80+ more lines of design system details]

## Data Requirements
- Use realistic banking data
- Account balances: $1,234.56 format
- [150+ more lines of data specifications]
```

### After (Modular with Jobs-to-be-Done)
```markdown
# Banking Interface Spec

## Job Statement
**Primary Job**: When an unexpected expense comes up, users want to quickly know if they can afford it without disrupting their financial goals so they can make a confident purchase decision.

**Related Jobs**:
- Check if this purchase will affect upcoming bills
- See how this fits into monthly spending patterns
- Find ways to afford it if current balance is insufficient

**Job Success Criteria**: Users feel confident saying "yes I can afford this" or "no, not right now" within 30 seconds.

## User Context
**Entry Point**: Opened app while standing in store / Received payment request / Planning a purchase online

**Emotional State**: Slightly anxious about spending, need quick reassurance or clear "no"

**Knowledge Level**: Knows their general financial situation but not exact numbers

**Time Available**: 30-60 seconds before feeling rushed

**What Happens Next**: Either proceeds with purchase or looks for alternatives

## Problem Statement
Given users need quick affordability decisions while shopping, create an interface that instantly shows spending power without requiring mental math or account switching.

## Hypothesis
If we surface "safe to spend" amount prominently with upcoming obligations visualized, users will make confident decisions in under 30 seconds because they can see the full impact at a glance.

## Success Metrics
- Job Completion: 90% of users reach decision in <30 seconds
- Confidence: Users report high confidence in their decision
- Accuracy: Users don't regret decisions due to missed information
- Return Usage: Users check before most non-routine purchases

## Approach Guidelines
- Emotional Design: Calm and reassuring, reduce money anxiety
- Information Hierarchy: "Safe to spend" number biggest, then upcoming impacts
- Interaction Patterns: Single glance comprehension, optional drill-down for details
```

```yaml
# spec-config.yml (handles implementation details)
dependencies:
  design-systems: [geist-core]
  spec-modules: [accessibility-standards, performance-requirements]
  moodboards: [modern-minimalist]
  data: [banking-data]
  format: single-file
```

## Why Jobs-to-be-Done Works for AI-Generated UI

### The AI Agent Advantage
When AI agents understand the **job** rather than just the **interface requirements**, they can:

1. **Make Intelligent Trade-offs**
   - Knowing the user has 30 seconds influences every design decision
   - Understanding emotional state (anxious vs. confident) shapes visual hierarchy
   - Time pressure leads to different solutions than leisurely exploration

2. **Generate Contextually Appropriate Solutions**
   - Mobile-first if entry point is "standing in store"
   - Dense information display if user is "expert wanting efficiency"
   - Calming design if emotional state is "anxious about money"

3. **Prioritize Features Correctly**
   - "Safe to spend" becomes hero element when job is affordability decision
   - Transaction history becomes secondary (not primary) for this job
   - Quick actions surface based on "what happens next"

4. **Create Believable Scenarios**
   - Test data reflects real job situations (unexpected expenses)
   - Micro-copy speaks to emotional state ("You're covered" vs. "Balance: $543.21")
   - Error states anticipate job failure modes

### Example: Same Data, Different Jobs

**Job A**: "Check if I can afford this $200 purchase"
- Hero: Large "Safe to spend: $347" with visual indicator
- Context: "After this purchase: $147 available"
- Quick action: "See how this affects my budget"

**Job B**: "Understand why I'm overdrawn"
- Hero: Timeline of recent transactions with running balance
- Context: Highlighted fees and their triggers
- Quick action: "Prevent this next time"

**Job C**: "Plan for upcoming large expense"
- Hero: Calendar view with cash flow projection
- Context: Savings opportunities highlighted
- Quick action: "Set aside money now"

Same banking data, completely different interfaces based on the job.

## Benefits in Practice

### **Cleaner Specs**
- Each spec.md is 50-100 lines instead of 500+
- Focus on creative problem, not implementation details
- Easy to understand what makes each experiment unique

### **Consistent Standards**
- Update accessibility requirements once, affects all experiments
- Maintain design system consistency across experiments
- Evolve performance standards centrally

### **Flexible Experimentation**
- Try same creative approach with different design systems
- A/B test with and without certain constraints
- Rapidly prototype new experiment concepts

### **Easier Maintenance**
- Clear separation between creative intent and implementation
- Shared modules reduce duplication
- Configuration changes don't require spec rewrites

## Success Metrics

### Week 1
- [ ] Extract common sections from 3+ existing specs
- [ ] Create initial shared modules structure
- [ ] Test with one refactored experiment

### Month 1
- [ ] All active experiments using modular approach
- [ ] 50%+ reduction in spec.md file sizes
- [ ] New experiment creation time < 30 minutes

### Month 3
- [ ] Complete template library established
- [ ] Shared modules mature and stable
- [ ] Team creating experiments 3x faster

## Risk Mitigation

### Backward Compatibility
- Existing monolithic specs continue to work
- Gradual migration path
- No forced updates

### Learning Curve
- Clear documentation and examples
- Templates for common patterns
- Incremental adoption possible

## Related Proposals

### Enhancement Framework
The Modular Specification Architecture works independently but complements the **Enhancement Framework Proposal** (see ENHANCEMENT_FRAMEWORK_PROPOSAL.md), which enables systematic enhancement of proven work through analytical strategies. When used together:
- Enhancement experiments benefit from cleaner, focused specs
- Shared modules ensure consistent quality across enhancements
- Both proposals maintain the same simple user interface

## The Bottom Line

**What We're Building**: A modular specification system that combines Jobs-to-be-Done framework with separated implementation standards.

**Investment Required**: 1 week to extract and refactor existing specs.

**Expected ROI**: 3x faster experiment creation, more contextually appropriate UI, easier maintenance.

**Success Indicator**: New experiments created in 30 minutes with AI agents producing UI that matches real user needs.

---

*This Modular Specification proposal with Jobs-to-be-Done framework enables AI agents to generate contextually appropriate UI while maintaining full compatibility with the existing infinite discovery system.*