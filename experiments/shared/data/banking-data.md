# Banking & Financial Services Data Set

## Account Information

### Personal Banking Accounts
```javascript
const accounts = [
  {
    id: "ACC-2024-847293",
    accountNumber: "03-1234-5678901-00",
    name: "Everyday Account", 
    type: "Transaction",
    balance: 4847.23,
    availableBalance: 4347.23,
    currency: "NZD",
    status: "Active",
    overdraftLimit: 500.00,
    lastUpdated: "2025-01-17T15:42:00Z",
    branch: "Auckland Queen Street",
    features: ["EFTPOS", "Online Banking", "Mobile Pay"]
  },
  {
    id: "ACC-2024-847294", 
    accountNumber: "03-1234-5678902-00",
    name: "Savings Account",
    type: "Savings",
    balance: 15847.91,
    availableBalance: 15847.91,
    currency: "NZD", 
    status: "Active",
    interestRate: 0.0345,
    lastUpdated: "2025-01-17T15:42:00Z",
    branch: "Auckland Queen Street",
    features: ["High Interest", "Goal Tracking"]
  },
  {
    id: "ACC-2024-847295",
    accountNumber: "03-1234-5678903-00", 
    name: "KiwiSaver Growth",
    type: "KiwiSaver",
    balance: 47293.18,
    currency: "NZD",
    status: "Active",
    fund: "Growth Fund",
    riskProfile: "Aggressive",
    contributionRate: 0.08,
    lastUpdated: "2025-01-17T15:42:00Z",
    features: ["Employer Contributions", "Government Contributions"]
  }
];
```

### Business Banking Accounts
```javascript
const businessAccounts = [
  {
    id: "BIZ-2024-584729",
    accountNumber: "03-5847-2938475-00",
    businessName: "Tech Solutions Ltd",
    tradingName: "TechSol NZ",
    type: "Business Transaction",
    balance: 73842.57,
    availableBalance: 68342.57,
    currency: "NZD",
    status: "Active",
    overdraftLimit: 25000.00,
    lastUpdated: "2025-01-17T15:42:00Z",
    accountManager: "Sarah Williams",
    features: ["Payroll", "Direct Debits", "International Transfers"]
  }
];
```

## Transaction History

### Personal Transactions
```javascript
const transactions = [
  {
    id: "TXN-20250117-8847392",
    accountId: "ACC-2024-847293",
    date: "2025-01-17T09:34:22Z",
    amount: -47.50,
    balance: 4847.23,
    description: "COUNTDOWN AUCKLAND CENTRAL",
    category: "Groceries & Food",
    type: "EFTPOS Purchase",
    status: "Completed",
    reference: "EFTPOS-20250117-093422",
    merchant: {
      name: "Countdown",
      location: "Auckland Central",
      category: "Supermarket"
    }
  },
  {
    id: "TXN-20250116-8847234",
    accountId: "ACC-2024-847293", 
    date: "2025-01-16T14:22:15Z",
    amount: 2750.00,
    balance: 4894.73,
    description: "SALARY DEPOSIT - TECH SOLUTIONS LTD",
    category: "Salary & Wages",
    type: "Direct Credit",
    status: "Completed",
    reference: "PAY-20250116-TS-2847"
  },
  {
    id: "TXN-20250115-8847156",
    accountId: "ACC-2024-847293",
    date: "2025-01-15T11:47:33Z", 
    amount: -89.95,
    balance: 2144.73,
    description: "SPARK NZ MONTHLY PLAN",
    category: "Telecommunications",
    type: "Direct Debit",
    status: "Completed",
    reference: "DD-SPARK-20250115",
    recurringPayment: true
  },
  {
    id: "TXN-20250114-8847089",
    accountId: "ACC-2024-847293",
    date: "2025-01-14T16:12:09Z",
    amount: -1247.83,
    balance: 2234.68,
    description: "RENT PAYMENT - CITY RENTALS",
    category: "Housing & Rent", 
    type: "Online Transfer",
    status: "Completed",
    reference: "RENT-JAN2025-APT-45B",
    scheduledPayment: true
  },
  {
    id: "TXN-20250113-8846923",
    accountId: "ACC-2024-847293",
    date: "2025-01-13T08:23:45Z",
    amount: -156.00,
    balance: 3482.51,
    description: "BP CONNECT GREENLANE",
    category: "Transport & Fuel",
    type: "EFTPOS Purchase", 
    status: "Completed",
    reference: "EFTPOS-20250113-082345"
  }
];
```

### Business Transactions  
```javascript
const businessTransactions = [
  {
    id: "BIZ-TXN-20250117-584729",
    accountId: "BIZ-2024-584729",
    date: "2025-01-17T10:15:30Z",
    amount: 15750.00,
    balance: 73842.57,
    description: "INVOICE PAYMENT - RETAILPLUS NZ",
    category: "Client Payments",
    type: "Direct Credit",
    status: "Completed",
    invoiceNumber: "INV-2025-001247",
    reference: "PROJECT-MOBILE-APP-MILESTONE-2"
  },
  {
    id: "BIZ-TXN-20250116-584728",
    accountId: "BIZ-2024-584729", 
    date: "2025-01-16T09:00:00Z",
    amount: -8942.50,
    balance: 58092.57,
    description: "PAYROLL - JANUARY 2025",
    category: "Payroll & Salaries",
    type: "Bulk Payment",
    status: "Completed",
    payrollPeriod: "01-15 January 2025",
    employeeCount: 12
  }
];
```

## Investment Portfolio

### Personal Investments
```javascript
const investments = [
  {
    symbol: "VTI",
    name: "Vanguard Total Stock Market ETF",
    shares: 127,
    avgCost: 189.34,
    currentPrice: 198.67,
    marketValue: 25231.09,
    dayChange: 847.32,
    totalReturn: 1185.31,
    allocation: 35.2,
    currency: "USD",
    exchange: "NYSE"
  },
  {
    symbol: "VXUS", 
    name: "Vanguard Total International Stock ETF",
    shares: 89,
    avgCost: 156.78,
    currentPrice: 162.45,
    marketValue: 14458.05,
    dayChange: -234.67,
    totalReturn: 504.23,
    allocation: 20.1,
    currency: "USD",
    exchange: "NYSE"
  },
  {
    symbol: "SPK.NZ",
    name: "Spark New Zealand Limited",
    shares: 1500,
    avgCost: 4.23,
    currentPrice: 4.68,
    marketValue: 7020.00,
    dayChange: 15.00,
    totalReturn: 675.00,
    allocation: 9.8,
    currency: "NZD",
    exchange: "NZX"
  }
];
```

## Credit Cards & Lending

### Credit Card Information
```javascript
const creditCards = [
  {
    id: "CC-2024-847391",
    cardNumber: "4532-****-****-2847",
    cardName: "ANZ Visa Platinum",
    cardHolder: "Jennifer M Walsh",
    type: "Platinum",
    status: "Active",
    creditLimit: 8500.00,
    availableCredit: 6247.33,
    currentBalance: 2252.67,
    minimumPayment: 67.58,
    paymentDueDate: "2025-02-05",
    interestRate: 0.1995,
    rewardPoints: 15847,
    lastPayment: {
      amount: 450.00,
      date: "2025-01-05T00:00:00Z"
    }
  }
];
```

### Recent Credit Card Transactions
```javascript
const creditCardTransactions = [
  {
    id: "CC-TXN-20250117-847392",
    cardId: "CC-2024-847391",
    date: "2025-01-17T14:22:18Z",
    amount: 127.50,
    description: "UBER TRIP - AUCKLAND",
    category: "Transport",
    type: "Purchase",
    status: "Posted",
    merchant: "Uber Technologies",
    rewardPoints: 128
  },
  {
    id: "CC-TXN-20250116-847234", 
    cardId: "CC-2024-847391",
    date: "2025-01-16T12:45:30Z",
    amount: 89.90,
    description: "WAREHOUSE STATIONERY - NEWMARKET",
    category: "Shopping",
    type: "Purchase", 
    status: "Posted",
    merchant: "Warehouse Stationery",
    rewardPoints: 90
  }
];
```

## Goals & Budgets

### Savings Goals
```javascript
const savingsGoals = [
  {
    id: "GOAL-2024-001",
    name: "Emergency Fund",
    targetAmount: 15000.00,
    currentAmount: 8847.23,
    targetDate: "2025-12-31",
    progress: 58.98,
    status: "Active",
    monthlyTarget: 625.00,
    category: "Emergency",
    priority: "High"
  },
  {
    id: "GOAL-2024-002", 
    name: "European Holiday",
    targetAmount: 8500.00,
    currentAmount: 3240.50,
    targetDate: "2025-07-15",
    progress: 38.12,
    status: "Active",
    monthlyTarget: 875.00,
    category: "Travel",
    priority: "Medium"
  }
];
```

### Budget Categories
```javascript
const budgetCategories = [
  {
    category: "Housing & Rent",
    budgeted: 1400.00,
    spent: 1247.83,
    remaining: 152.17,
    progress: 89.13,
    status: "On Track"
  },
  {
    category: "Groceries & Food", 
    budgeted: 450.00,
    spent: 398.45,
    remaining: 51.55,
    progress: 88.54,
    status: "On Track"
  },
  {
    category: "Transport & Fuel",
    budgeted: 280.00,
    spent: 342.67,
    remaining: -62.67,
    progress: 122.38,
    status: "Over Budget"
  }
];
```

## Customer Profile

### Primary Account Holder
```javascript
const customer = {
  customerId: "CUST-2024-847293",
  title: "Ms",
  firstName: "Jennifer",
  middleName: "Marie", 
  lastName: "Walsh",
  preferredName: "Jen",
  dateOfBirth: "1987-03-15",
  email: "jen.walsh@example.com",
  phone: "+64 21 847 3920",
  address: {
    street: "45B Queen Street",
    suburb: "Auckland Central", 
    city: "Auckland",
    postcode: "1010",
    country: "New Zealand"
  },
  employment: {
    employer: "Tech Solutions Ltd",
    position: "Senior Product Manager",
    industry: "Technology",
    annualIncome: 95000,
    startDate: "2022-03-01"
  },
  preferences: {
    communicationMethod: "Email",
    statementFrequency: "Monthly",
    marketingConsent: false,
    onlineBanking: true,
    mobileApp: true
  },
  relationshipManager: "David Park",
  customerSince: "2019-08-15",
  riskProfile: "Moderate"
};
```

This comprehensive banking data set provides realistic financial information suitable for testing various banking and financial UX patterns, from transaction management to investment tracking and budget planning.