# Shared Data Sets

## Purpose
Realistic dummy data collections that experiments can reference to create authentic, business-appropriate demonstrations. These data sets enable comprehensive workflow testing and provide authentic context for UX pattern evaluation.

## Available Data Sets

### banking-data.md
**Use Case**: Financial services, banking interfaces, fintech applications
- Personal and business banking accounts
- Transaction histories with realistic amounts and descriptions
- Investment portfolios and performance data
- Credit card information and transactions
- Savings goals and budget categories
- Complete customer profiles with employment and preferences

**Key Features**:
- New Zealand banking context (account numbers, banks, terminology)
- Realistic transaction patterns and amounts
- Multiple account types (transaction, savings, KiwiSaver, business)
- Various transaction types (EFTPOS, direct debits, salary, transfers)
- Investment data with market performance

### ecommerce-data.md
**Use Case**: Online retail, product catalogs, shopping experiences
- Comprehensive product information with specifications
- Customer orders with detailed shipping and billing
- Shopping cart and checkout workflows
- Customer reviews and ratings
- Inventory management data
- Promotions and discount systems
- Sales analytics and performance metrics

**Key Features**:
- New Zealand retail context (pricing in NZD, local shipping)
- Detailed product specifications and features
- Complete order lifecycle (placement to delivery)
- Realistic customer behavior patterns
- Business intelligence data for dashboard interfaces

## Usage Guidelines

### In Experiment Specs
Reference data sets directly in specifications:
```markdown
## Data Requirements
Use realistic business data from: ../shared/data/banking-data.md

### Specific Sections to Include:
- Personal Banking Accounts (for account overview interfaces)
- Transaction History (for transaction management patterns)
- Budget Categories (for financial planning UX)
```

### In spec-config.yml
```yaml
dependencies:
  data:
    - banking-data
    - ecommerce-data
```

### Selective Usage
Pick specific data types based on experiment focus:
- **Transaction Management UX**: Use transaction histories and account data
- **Product Discovery UX**: Use product catalog and search data  
- **Dashboard UX**: Use analytics and performance data
- **Customer Service UX**: Use customer profiles and order histories

## Data Quality Standards

### Authenticity Requirements
- ✅ Realistic business terminology and references
- ✅ Appropriate cultural and geographic context (New Zealand)
- ✅ Logical relationships between data points
- ✅ Genuine-feeling amounts, dates, and descriptions
- ✅ Professional naming conventions and references

### Completeness Standards
- ✅ Multiple examples of each data type
- ✅ Various states (completed, pending, error, empty)
- ✅ Edge cases and boundary conditions
- ✅ Realistic data volumes for scalability testing
- ✅ Cross-referenced relationships (orders→customers→products)

### Business Logic Accuracy
- ✅ Mathematically correct calculations
- ✅ Logical status progressions and workflows
- ✅ Realistic permission and access patterns
- ✅ Appropriate temporal relationships
- ✅ Valid business rules and constraints

## Creating New Data Sets

### Planning New Data Sets
Consider these domains for future expansion:
- **Healthcare**: Patient records, appointments, medical histories
- **Education**: Student information, courses, grades, schedules
- **Real Estate**: Property listings, inspections, sales data
- **Logistics**: Shipping, inventory, supply chain data
- **HR/Recruitment**: Employee records, job applications, performance
- **Legal**: Case management, document tracking, billing

### Data Set Structure Template
```markdown
# [Domain] Data Set

## [Entity Type 1]
### [Sub-category]
\```javascript
const [entityName] = [
  {
    id: "[realistic-id-pattern]",
    [key properties with realistic values]
  }
];
\```

## [Entity Type 2]
[Continue pattern for all major entities]

## [Relationship Data]
[Cross-references between entities]

## [Analytics/Reporting Data]
[Aggregate data for dashboard scenarios]
```

### Quality Checklist for New Data Sets
- [ ] Data feels authentic to industry professionals
- [ ] Geographic and cultural context is appropriate
- [ ] Terminology matches domain standards
- [ ] Relationships between entities are logical
- [ ] Multiple examples of each entity type
- [ ] Various states and edge cases represented
- [ ] Calculations and business logic are accurate
- [ ] Data volume appropriate for testing scenarios

## Integration with Experiments

### Automatic Resolution
The enhanced `/infinite` command should:
1. Read data dependencies from `spec-config.yml`
2. Include referenced data sets in resolved specifications
3. Make data available to AI agents for pattern generation
4. Maintain data consistency across iteration batches

### Example Integration
```javascript
// In generated UX patterns, reference realistic data
const accountData = /* banking-data.md: Personal Banking Accounts */;
const transactionData = /* banking-data.md: Transaction History */;

// Use for authentic interface demonstration
function renderAccountOverview() {
  return accountData.map(account => 
    `<div class="account-card">
      <h3>${account.name}</h3>
      <p class="balance">$${account.balance.toLocaleString()}</p>
      <span class="account-number">${account.accountNumber}</span>
    </div>`
  ).join('');
}
```

This shared data approach ensures that all experiments can access high-quality, realistic data appropriate to their domain, enabling authentic workflow testing and professional demonstration of UX patterns.