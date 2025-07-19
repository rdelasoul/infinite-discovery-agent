# Multi-Card Banking Specification

## Job Statement

**Primary Job**: When an unexpected business expense arises, small business owners want to quickly check their available spending power across multiple payment methods so they can make confident purchase decisions without risking cash flow problems.

**Related Jobs**:
- Understand which card to use for different types of business purchases
- Monitor spending patterns to avoid hitting credit limits at critical times
- Track vendor payments and recurring expenses across multiple accounts
- Plan for upcoming large purchases or seasonal business expenses

**Job Success Criteria**: Users know they've succeeded when they can confidently say "yes, I can afford this purchase on [specific card]" or "I should delay this expense" within 30 seconds of checking.

## User Context

**Entry Point**: About to make a purchase / Vendor sent invoice / Planning equipment upgrade / Monthly financial review

**Emotional State**: Need quick confidence about financial capacity, slight anxiety about overspending or cash flow disruption

**Knowledge Level**: Understands their business operations but doesn't track detailed balances across 2-5 payment methods daily

**Time Available**: 30 seconds for quick spending check, 5 minutes for detailed purchase planning

**What Happens Next**: Proceed with purchase using optimal payment method, choose different card, or delay expense until cash flow improves

## Problem Statement

Given small business owners need instant visibility into spending capacity across 2-5 payment methods, create interfaces that show available funds and optimal card choice without requiring detailed financial analysis or complex calculations.

## Hypothesis

If we surface "safe to spend" amounts prominently with smart card recommendations, users will make confident business spending decisions in under 30 seconds because they can see real-time capacity and impact across all payment methods at a glance.

## Core Requirements

- Output format: Single-file HTML with realistic multi-card business scenarios
- Naming convention: `ux_pattern_[iteration].html`
- Key constraints: Focus on 2-5 card management for small businesses (0-10 employees)
- Data requirements: Realistic business expenses, vendor payments, and cash flow scenarios

## Success Metrics

- **Job Completion**: 90% of users can determine spending capacity in <30 seconds
- **Confidence**: Users report high confidence in payment method selection
- **Accuracy**: Prevents declined transactions and credit limit issues
- **Efficiency**: Reduces time spent checking multiple banking apps from 5 minutes to 30 seconds

## Approach Guidelines

- **Emotional Design**: Calm and reassuring interface that reduces spending anxiety
- **Information Hierarchy**: "Available to spend" prominently displayed, with card-specific details as secondary
- **Interaction Patterns**: Support quick scanning for immediate decisions with optional drill-down for planning

<!-- All implementation details (design system integration, data requirements, output formats, quality standards) are now handled by shared modules and spec-config.yml dependencies -->