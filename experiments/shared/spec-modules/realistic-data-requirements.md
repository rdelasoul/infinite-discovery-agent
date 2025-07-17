# Realistic Data Requirements Module

## Core Data Quality Standards

### Authenticity Requirements
All dummy data MUST feel genuine and enable complete workflow testing. Avoid placeholder text like "Lorem ipsum" or generic entries like "User 1", "Item A", etc.

### Data Completeness Principles
- **Full Working Examples**: Complete data sets that demonstrate the entire user journey
- **Realistic Business Context**: Authentic scenarios appropriate to the workflow domain
- **Multiple Data States**: Various states (completed, pending, error, loading) to test interface flexibility
- **Edge Case Coverage**: Data scenarios that test pattern boundaries and error handling
- **Volume Simulation**: Realistic data quantities that reflect actual usage patterns

## Business Domain Guidelines

### Financial Services Data
#### Banking and Transactions
```javascript
// Realistic transaction data
const transactions = [
  {
    id: "TXN-20250117-8847392",
    date: "2025-01-17T09:34:22Z",
    amount: -1247.83,
    description: "WOOLWORTHS AUCKLAND CENTRAL",
    category: "Groceries & Food",
    account: "Everyday Account (...4721)",
    balance: 3842.17,
    status: "completed",
    merchant: {
      name: "Woolworths",
      location: "Auckland Central, NZ",
      category: "Grocery Stores"
    }
  },
  {
    id: "TXN-20250116-8847234",
    date: "2025-01-16T14:22:15Z",
    amount: 2750.00,
    description: "SALARY DEPOSIT - TECH SOLUTIONS LTD",
    category: "Salary & Wages",
    account: "Everyday Account (...4721)",
    balance: 5089.83,
    status: "completed",
    reference: "PAY-240116-TS-2847"
  }
];

// Investment portfolio data
const investments = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 45,
    avgCost: 189.34,
    currentPrice: 198.67,
    marketValue: 8940.15,
    dayChange: +142.35,
    totalReturn: +419.85,
    allocation: 12.7
  }
];
```

#### Insurance and Claims
```javascript
const insuranceClaims = [
  {
    claimNumber: "CLM-HOM-2025-001847",
    policyNumber: "POL-HOM-45728394",
    type: "Home Insurance",
    incident: "Storm damage to roof tiles",
    dateOfLoss: "2025-01-15",
    reportedDate: "2025-01-16",
    estimatedCost: 8450.00,
    status: "Under Assessment",
    assessor: "Sarah Williams - Wellington Assessments Ltd",
    nextAction: "Property inspection scheduled for Jan 22"
  }
];
```

### E-commerce and Retail Data
#### Product Catalog
```javascript
const products = [
  {
    sku: "WH-DESK-OAK-001",
    name: "Scandinavian Oak Standing Desk",
    brand: "Nordic Workspace",
    price: 1299.00,
    salePrice: 999.00,
    category: "Furniture > Office > Desks",
    stock: 23,
    dimensions: "160cm W × 80cm D × 75-125cm H",
    weight: "42kg",
    materials: ["Solid Oak", "Steel Frame", "Bamboo Desktop"],
    features: [
      "Electric height adjustment",
      "Memory presets (4 positions)",
      "Anti-collision system",
      "Cable management"
    ],
    rating: 4.7,
    reviewCount: 847,
    shipping: {
      free: true,
      estimatedDays: "3-5 business days",
      options: ["Standard", "Express (+$49)", "White Glove (+$199)"]
    }
  }
];

const orders = [
  {
    orderNumber: "ORD-2025-000847293",
    customer: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      phone: "+64 21 487 3942"
    },
    items: [
      {
        sku: "WH-DESK-OAK-001",
        name: "Scandinavian Oak Standing Desk",
        quantity: 1,
        price: 999.00
      }
    ],
    subtotal: 999.00,
    shipping: 0.00,
    tax: 149.85,
    total: 1148.85,
    status: "Processing",
    tracking: "NZ472839502847",
    estimatedDelivery: "2025-01-24"
  }
];
```

### Healthcare and Medical Data
```javascript
const patientRecords = [
  {
    patientId: "PAT-2025-008472",
    name: "Emma Thompson",
    dob: "1985-03-22",
    nhiNumber: "ABC1234",
    appointments: [
      {
        date: "2025-01-22T10:30:00Z",
        provider: "Dr. James Wilson",
        clinic: "Auckland Family Health Centre",
        type: "Annual Health Check",
        status: "Scheduled",
        duration: 30,
        notes: "Follow-up on blood pressure management"
      }
    ],
    prescriptions: [
      {
        medication: "Amlodipine 5mg",
        dosage: "Once daily",
        quantity: 30,
        repeats: 5,
        prescriber: "Dr. James Wilson",
        date: "2025-01-10"
      }
    ]
  }
];
```

### Project Management Data
```javascript
const projects = [
  {
    id: "PROJ-2025-MOBILE-APP",
    name: "Customer Mobile App Redesign",
    client: "RetailPlus NZ",
    status: "In Progress",
    priority: "High",
    budget: 185000,
    spent: 127350,
    startDate: "2024-11-15",
    endDate: "2025-03-30",
    progress: 68,
    team: [
      {
        name: "Sarah Kim",
        role: "Project Manager",
        allocation: 100,
        rate: 145
      },
      {
        name: "David Martinez",
        role: "UI/UX Designer", 
        allocation: 80,
        rate: 125
      },
      {
        name: "Lisa Wong",
        role: "Senior Developer",
        allocation: 100,
        rate: 165
      }
    ],
    milestones: [
      {
        name: "User Research & Analysis",
        date: "2024-12-20",
        status: "Completed"
      },
      {
        name: "Design System & Prototypes",
        date: "2025-01-31",
        status: "In Progress"
      },
      {
        name: "Development Phase 1",
        date: "2025-02-28",
        status: "Not Started"
      }
    ]
  }
];
```

## Data State Variations

### Loading and Error States
```javascript
// Loading states
const loadingData = {
  isLoading: true,
  progress: 67,
  message: "Syncing transaction data...",
  estimated: "About 30 seconds remaining"
};

// Error states  
const errorStates = [
  {
    type: "network_error",
    message: "Unable to connect to banking server",
    action: "Retry",
    severity: "high"
  },
  {
    type: "validation_error", 
    field: "account_number",
    message: "Account number must be 16 digits",
    severity: "medium"
  },
  {
    type: "permission_error",
    message: "You don't have permission to view this account",
    action: "Contact Support",
    severity: "high"
  }
];

// Empty states
const emptyStates = {
  noTransactions: "No transactions found for the selected period",
  noSearch: "No results match your search criteria", 
  firstTime: "Welcome! Start by adding your first account"
};
```

### User Role Variations
```javascript
const userProfiles = [
  {
    role: "admin",
    name: "Jennifer Walsh",
    permissions: ["view_all", "edit_all", "delete", "manage_users"],
    dashboard: "executive_overview"
  },
  {
    role: "manager", 
    name: "David Park",
    permissions: ["view_team", "edit_team", "approve_requests"],
    dashboard: "team_performance"
  },
  {
    role: "operator",
    name: "Maria Santos",
    permissions: ["view_assigned", "edit_assigned"],
    dashboard: "daily_tasks"
  },
  {
    role: "viewer",
    name: "John Smith", 
    permissions: ["view_reports"],
    dashboard: "reports_only"
  }
];
```

## Cultural and Geographic Authenticity

### New Zealand Context
```javascript
const nzBusinessData = {
  addresses: [
    "Level 12, 123 Queen Street, Auckland 1010",
    "45 Lambton Quay, Wellington 6011", 
    "87 Worcester Street, Christchurch 8013"
  ],
  phoneNumbers: ["+64 9 123 4567", "+64 21 456 789"],
  businessNumbers: ["123-456-789", "987-654-321"],
  postcodes: ["1010", "6011", "8013"],
  currencies: "NZD",
  taxNumbers: ["125-456-789", "GST 123-456-789"]
};
```

### Industry-Specific Terminology
```javascript
// Financial services
const financialTerms = [
  "KiwiSaver", "ANZ", "Westpac", "ASB", "BNZ",
  "EFTPOS", "AP (Accounts Payable)", "AR (Accounts Receivable)"
];

// Retail
const retailTerms = [
  "SKU", "PLU", "EAN", "Wholesale", "RRP", "GST Exclusive"
];

// Healthcare
const healthcareTerms = [
  "NHI Number", "PHO", "DHB", "ACC", "Pharmac"
];
```

## Quality Assurance Standards

### Data Consistency Checklist
- [ ] All dates use consistent format (ISO 8601)
- [ ] Currency amounts include appropriate decimal places  
- [ ] Reference numbers follow realistic patterns
- [ ] Names and addresses feel authentic to region
- [ ] Business terminology matches industry standards
- [ ] Data relationships are logical and realistic

### Completeness Validation
- [ ] Multiple examples of each data type
- [ ] Success, error, and loading states represented
- [ ] Various user roles and permission levels
- [ ] Edge cases and boundary conditions
- [ ] Realistic data volumes for testing scalability

### Business Logic Accuracy
- [ ] Calculations are mathematically correct
- [ ] Status transitions follow logical workflows
- [ ] Permissions and access controls are realistic
- [ ] Temporal relationships make sense
- [ ] Cross-references between data points are valid

## Implementation Guidelines

### Data Generation Strategy
1. **Start with Real Examples**: Base dummy data on actual industry examples
2. **Anonymize Appropriately**: Change personal details while keeping realistic patterns
3. **Maintain Relationships**: Ensure data integrity across related entities
4. **Scale Appropriately**: Include realistic volumes for performance testing
5. **Version Control**: Track data changes and maintain consistency

### Testing and Validation
- Test complete user workflows with realistic data
- Verify edge cases and error scenarios
- Validate data supports all interface states
- Ensure cultural and regional appropriateness
- Confirm business logic accuracy and realism

By following these guidelines, dummy data will enable comprehensive testing and demonstration of UX patterns while feeling authentic and professionally appropriate.