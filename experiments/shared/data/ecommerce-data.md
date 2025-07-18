# E-commerce & Retail Data Set

## Product Catalog

### Featured Products
```javascript
const products = [
  {
    id: "PROD-2025-WH-DESK-001",
    sku: "WH-DESK-OAK-STAND-160",
    name: "Scandinavian Oak Standing Desk",
    brand: "Nordic Workspace",
    category: {
      primary: "Furniture",
      secondary: "Office Furniture", 
      tertiary: "Desks"
    },
    price: {
      regular: 1299.00,
      sale: 999.00,
      currency: "NZD",
      discount: 23
    },
    stock: {
      available: 23,
      reserved: 4,
      warehouse: "Auckland",
      leadTime: "3-5 business days"
    },
    reviews: {
      rating: 4.7,
      count: 847
    },
    shipping: {
      standard: { cost: 0, time: "3-5 business days" },
      express: { cost: 49.00, time: "1-2 business days" }
    }
  },
  {
    id: "PROD-2025-CH-ERG-001", 
    name: "ProErgo Mesh Office Chair",
    brand: "Ergonomic Solutions",
    category: { primary: "Furniture", secondary: "Office Furniture", tertiary: "Chairs" },
    price: { regular: 849.00, currency: "NZD" },
    stock: { available: 156, warehouse: "Auckland" },
    reviews: { rating: 4.4, count: 203 }
  }
];
```

## Customer Orders

### Recent Orders
```javascript
const orders = [
  {
    id: "ORD-2025-JAN-001247",
    customerId: "CUST-2023-4892",
    date: "2025-01-15T14:32:00Z",
    status: "shipped",
    total: 1348.00,
    currency: "NZD",
    items: [
      {
        productId: "PROD-2025-WH-DESK-001",
        quantity: 1,
        price: 999.00,
        total: 999.00
      }
    ],
    shipping: {
      address: {
        name: "Sarah Chen",
        street: "45 Queen Street",
        city: "Auckland", 
        postcode: "1010",
        country: "New Zealand"
      },
      method: "express",
      cost: 49.00,
      tracking: "NZP2025011500847"
    },
    payment: {
      method: "credit_card",
      last4: "4532",
      brand: "visa"
    }
  }
];
```

## Shopping Cart & Checkout

### Active Shopping Carts
```javascript
const shoppingCarts = [
  {
    sessionId: "CART-2025-JAN-15-8847",
    customerId: "CUST-2023-4892", 
    created: "2025-01-15T13:45:00Z",
    updated: "2025-01-15T14:12:00Z",
    items: [
      {
        productId: "PROD-2025-WH-DESK-001",
        quantity: 1,
        addedAt: "2025-01-15T13:45:00Z"
      }
    ],
    subtotal: 999.00,
    shipping: 49.00,
    tax: 149.85,
    total: 1197.85,
    currency: "NZD"
  }
];
```

## Customer Reviews

### Product Reviews
```javascript
const reviews = [
  {
    id: "REV-2025-001428",
    productId: "PROD-2025-WH-DESK-001",
    customerId: "CUST-2023-4892",
    rating: 5,
    title: "Excellent quality and smooth operation",
    review: "Perfect standing desk for my home office. Assembly was straightforward and the height adjustment is whisper quiet.",
    date: "2025-01-10T09:15:00Z",
    verified: true,
    helpful: 23
  }
];
```

## Customer Profiles

### Registered Customers
```javascript
const customers = [
  {
    id: "CUST-2023-4892",
    email: "sarah.chen@email.com",
    name: {
      first: "Sarah",
      last: "Chen"
    },
    phone: "+64 21 555 0123",
    addresses: [
      {
        type: "billing",
        street: "45 Queen Street",
        city: "Auckland",
        postcode: "1010",
        country: "New Zealand",
        default: true
      }
    ],
    preferences: {
      newsletter: true,
      sms: false,
      currency: "NZD",
      language: "en-NZ"
    },
    joinDate: "2023-03-15T10:22:00Z",
    totalOrders: 8,
    totalSpent: 4247.50
  }
];
```

## Inventory Management

### Stock Levels
```javascript
const inventory = [
  {
    productId: "PROD-2025-WH-DESK-001",
    sku: "WH-DESK-OAK-STAND-160",
    warehouse: "Auckland",
    available: 23,
    reserved: 4,
    incoming: 50,
    incomingDate: "2025-01-25T00:00:00Z",
    reorderLevel: 10,
    reorderQuantity: 25
  }
];
```

## Promotions & Discounts

### Active Promotions
```javascript
const promotions = [
  {
    id: "PROMO-2025-NEWDEAL",
    name: "Summer Office Refresh", 
    type: "percentage",
    value: 15,
    code: "SUMMER15",
    validFrom: "2025-01-01T00:00:00Z",
    validUntil: "2025-01-31T23:59:59Z",
    categories: ["Furniture"],
    minSpend: 500.00,
    maxDiscount: 300.00,
    usageLimit: 500,
    usageCount: 247,
    active: true
  }
];
```

## Analytics Data

### Sales Performance
```javascript
const salesData = {
  daily: {
    date: "2025-01-15",
    revenue: 15420.00,
    orders: 23,
    averageOrderValue: 670.43,
    topProducts: ["PROD-2025-WH-DESK-001", "PROD-2025-CH-ERG-001"]
  },
  monthly: {
    month: "2025-01",
    revenue: 89750.00,
    orders: 134,
    newCustomers: 28,
    returningCustomers: 106
  }
};
```