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
    specifications: {
      dimensions: "160cm W × 80cm D × 75-125cm H",
      weight: "42kg", 
      materials: ["Solid Oak Veneer", "Steel Frame", "Bamboo Desktop"],
      warranty: "5 years structural, 2 years electronic"
    },
    features: [
      "Electric height adjustment (75-125cm)",
      "Memory presets (4 positions)",
      "Anti-collision safety system",
      "Integrated cable management",
      "Dual motor system",
      "Quiet operation (<45dB)"
    ],
    reviews: {
      rating: 4.7,
      count: 847,
      distribution: {
        5: 612,
        4: 168,
        3: 45,
        2: 15,
        1: 7
      }
    },
    shipping: {
      standard: {
        cost: 0,
        time: "3-5 business days",
        description: "Free standard delivery"
      },
      express: {
        cost: 49.00,
        time: "1-2 business days", 
        description: "Express courier"
      },
      whiteGlove: {
        cost: 199.00,
        time: "5-7 business days",
        description: "Assembly & setup included"
      }
    },
    images: [
      "desk-oak-main.jpg",
      "desk-oak-side.jpg", 
      "desk-oak-mechanism.jpg",
      "desk-oak-setup.jpg"
    ],
    seo: {
      title: "Scandinavian Oak Standing Desk - Electric Height Adjustable",
      description: "Premium electric standing desk with solid oak veneer, memory presets, and quiet dual motors. Free shipping NZ wide.",
      keywords: ["standing desk", "height adjustable", "oak desk", "office furniture"]
    }
  },
  {
    id: "PROD-2025-CH-ERG-001",
    sku: "CH-ERG-MESH-ADJ-BLK",
    name: "ProErgo Mesh Office Chair",
    brand: "Ergonomic Solutions",
    category: {
      primary: "Furniture",
      secondary: "Office Furniture",
      tertiary: "Chairs"
    },
    price: {
      regular: 849.00,
      sale: null,
      currency: "NZD"
    },
    stock: {
      available: 156,
      reserved: 12,
      warehouse: "Wellington",
      leadTime: "1-3 business days"
    },
    specifications: {
      dimensions: "65cm W × 65cm D × 112-125cm H",
      weight: "18kg",
      materials: ["Breathable Mesh", "Aluminum Base", "High-density Foam"],
      warranty: "10 years structural, 5 years components"
    },
    features: [
      "Lumbar support adjustment",
      "4D armrest adjustment",
      "Tilt tension control",
      "Seat depth adjustment",
      "Breathable mesh back",
      "GREENGUARD Gold certified"
    ],
    reviews: {
      rating: 4.5,
      count: 423,
      distribution: {
        5: 289,
        4: 98,
        3: 25,
        2: 8,
        1: 3
      }
    }
  },
  {
    id: "PROD-2025-MON-UHD-001", 
    sku: "MON-UHD-32-4K-USB-C",
    name: "32\" 4K USB-C Monitor",
    brand: "DisplayTech Pro",
    category: {
      primary: "Electronics",
      secondary: "Computer Hardware",
      tertiary: "Monitors"
    },
    price: {
      regular: 1299.00,
      sale: 1099.00,
      currency: "NZD",
      discount: 15
    },
    stock: {
      available: 47,
      reserved: 8,
      warehouse: "Christchurch", 
      leadTime: "2-4 business days"
    },
    specifications: {
      screenSize: "32 inches",
      resolution: "3840 × 2160 (4K UHD)",
      panelType: "IPS",
      refreshRate: "60Hz",
      connectivity: ["USB-C", "HDMI 2.1", "DisplayPort 1.4", "USB Hub"],
      brightness: "400 cd/m²",
      colorAccuracy: "100% sRGB, 95% DCI-P3"
    },
    features: [
      "65W USB-C power delivery",
      "KVM switch functionality", 
      "Picture-by-picture mode",
      "Height adjustable stand",
      "VESA mount compatible",
      "Low blue light certification"
    ],
    reviews: {
      rating: 4.6,
      count: 234,
      distribution: {
        5: 156,
        4: 54,
        3: 18,
        2: 4,
        1: 2
      }
    }
  }
];
```

## Customer Orders

### Recent Orders
```javascript
const orders = [
  {
    id: "ORD-2025-000847293",
    orderNumber: "NWS-2025-847293",
    status: "Processing",
    orderDate: "2025-01-17T10:24:33Z",
    customer: {
      id: "CUST-2024-584729",
      name: "Michael Chen",
      email: "m.chen@techstartup.co.nz",
      phone: "+64 21 487 3942"
    },
    billing: {
      name: "Michael Chen",
      company: "TechStartup Ltd",
      address: "Level 3, 127 Featherston Street",
      city: "Wellington",
      postcode: "6011",
      country: "New Zealand"
    },
    shipping: {
      name: "Michael Chen", 
      company: "TechStartup Ltd",
      address: "Level 3, 127 Featherston Street",
      city: "Wellington",
      postcode: "6011",
      country: "New Zealand",
      method: "Standard Delivery",
      cost: 0.00,
      estimatedDelivery: "2025-01-24"
    },
    items: [
      {
        productId: "PROD-2025-WH-DESK-001",
        sku: "WH-DESK-OAK-STAND-160", 
        name: "Scandinavian Oak Standing Desk",
        quantity: 1,
        unitPrice: 999.00,
        totalPrice: 999.00,
        status: "In Stock"
      },
      {
        productId: "PROD-2025-CH-ERG-001",
        sku: "CH-ERG-MESH-ADJ-BLK",
        name: "ProErgo Mesh Office Chair",
        quantity: 1,
        unitPrice: 849.00,
        totalPrice: 849.00,
        status: "In Stock"
      }
    ],
    pricing: {
      subtotal: 1848.00,
      shipping: 0.00,
      tax: 277.20,
      discount: 0.00,
      total: 2125.20,
      currency: "NZD"
    },
    payment: {
      method: "Credit Card",
      last4: "2847",
      cardType: "Visa",
      status: "Paid",
      transactionId: "TXN-20250117-847293"
    },
    tracking: {
      carrier: "CourierPost",
      trackingNumber: "CP847293847292",
      status: "Label Created",
      estimatedDelivery: "2025-01-24"
    },
    timeline: [
      {
        status: "Order Placed",
        timestamp: "2025-01-17T10:24:33Z",
        description: "Order received and payment confirmed"
      },
      {
        status: "Processing", 
        timestamp: "2025-01-17T11:15:22Z",
        description: "Items being prepared for shipment"
      }
    ]
  },
  {
    id: "ORD-2025-000847156",
    orderNumber: "NWS-2025-847156", 
    status: "Delivered",
    orderDate: "2025-01-10T14:33:15Z",
    customer: {
      id: "CUST-2024-584628",
      name: "Sarah Kim",
      email: "sarah.kim@example.com",
      phone: "+64 9 234 5678"
    },
    items: [
      {
        productId: "PROD-2025-MON-UHD-001",
        sku: "MON-UHD-32-4K-USB-C",
        name: "32\" 4K USB-C Monitor",
        quantity: 2,
        unitPrice: 1099.00,
        totalPrice: 2198.00,
        status: "Delivered"
      }
    ],
    pricing: {
      subtotal: 2198.00,
      shipping: 49.00,
      tax: 337.05,
      discount: 109.90,
      total: 2474.15,
      currency: "NZD"
    },
    status: "Delivered",
    deliveredDate: "2025-01-13T16:45:00Z"
  }
];
```

## Shopping Cart & Checkout

### Active Shopping Carts
```javascript
const shoppingCarts = [
  {
    id: "CART-2025-584729847", 
    customerId: "CUST-2024-584729",
    sessionId: "SESS-20250117-847293",
    createdDate: "2025-01-17T09:15:22Z",
    lastModified: "2025-01-17T15:42:18Z",
    status: "Active",
    items: [
      {
        productId: "PROD-2025-WH-DESK-001",
        sku: "WH-DESK-OAK-STAND-160",
        name: "Scandinavian Oak Standing Desk",
        quantity: 1,
        unitPrice: 999.00,
        totalPrice: 999.00,
        addedDate: "2025-01-17T09:15:22Z"
      },
      {
        productId: "PROD-2025-CH-ERG-001", 
        sku: "CH-ERG-MESH-ADJ-BLK",
        name: "ProErgo Mesh Office Chair",
        quantity: 1,
        unitPrice: 849.00,
        totalPrice: 849.00,
        addedDate: "2025-01-17T15:42:18Z"
      }
    ],
    totals: {
      itemCount: 2,
      subtotal: 1848.00,
      estimatedShipping: 0.00,
      estimatedTax: 277.20,
      estimatedTotal: 2125.20,
      currency: "NZD"
    },
    recommendations: [
      "PROD-2025-MON-UHD-001",
      "PROD-2025-LAMP-DESK-001",
      "PROD-2025-WIRE-MGT-001"
    ]
  }
];
```

## Customer Reviews

### Product Reviews
```javascript
const reviews = [
  {
    id: "REV-2025-001847",
    productId: "PROD-2025-WH-DESK-001",
    customerId: "CUST-2024-583947",
    customerName: "David Park",
    rating: 5,
    title: "Perfect standing desk for home office",
    content: "After 6 months of use, this desk has transformed my work setup. The height adjustment is smooth and quiet, memory presets work perfectly, and the oak finish looks premium. Assembly was straightforward with clear instructions. Highly recommend for anyone looking to upgrade their workspace.",
    pros: [
      "Smooth, quiet height adjustment",
      "Premium oak finish quality",
      "Easy assembly process",
      "Memory presets are accurate",
      "Solid build quality"
    ],
    cons: [
      "Price point is high",
      "Heavy package delivery"
    ],
    verified: true,
    helpful: 23,
    notHelpful: 1,
    datePosted: "2025-01-10T16:22:15Z",
    images: ["review-desk-setup.jpg", "review-desk-detail.jpg"]
  },
  {
    id: "REV-2025-001623",
    productId: "PROD-2025-CH-ERG-001",
    customerId: "CUST-2024-584729",
    customerName: "Jennifer Walsh",
    rating: 4,
    title: "Great chair, minor assembly issues",
    content: "Overall very happy with this chair. The mesh back is breathable and comfortable for long work sessions. Lumbar support is excellent. Only issue was one of the armrest adjustment mechanisms was slightly loose out of the box, but customer service sorted it quickly.",
    pros: [
      "Excellent lumbar support",
      "Breathable mesh material", 
      "Multiple adjustment options",
      "Good customer service"
    ],
    cons: [
      "Minor quality control issue",
      "Assembly instructions could be clearer"
    ],
    verified: true,
    helpful: 18,
    notHelpful: 2,
    datePosted: "2025-01-08T11:45:30Z"
  }
];
```

## Customer Profiles

### Registered Customers
```javascript
const customers = [
  {
    id: "CUST-2024-584729",
    email: "m.chen@techstartup.co.nz",
    profile: {
      title: "Mr",
      firstName: "Michael",
      lastName: "Chen",
      company: "TechStartup Ltd",
      phone: "+64 21 487 3942",
      dateOfBirth: "1989-07-15"
    },
    addresses: [
      {
        id: "ADDR-001",
        type: "Primary",
        name: "Michael Chen",
        company: "TechStartup Ltd",
        street: "Level 3, 127 Featherston Street",
        suburb: "Wellington Central",
        city: "Wellington",
        postcode: "6011",
        country: "New Zealand",
        isDefault: true
      }
    ],
    preferences: {
      currency: "NZD",
      communicationMethod: "Email",
      marketingConsent: true,
      reviewNotifications: true,
      deliveryInstructions: "Leave with building reception if not home"
    },
    loyaltyProgram: {
      tier: "Gold",
      points: 3847,
      nextTierPoints: 1153,
      memberSince: "2023-03-15"
    },
    orderHistory: {
      totalOrders: 8,
      totalSpent: 12847.50,
      averageOrderValue: 1605.94,
      lastOrderDate: "2025-01-17T10:24:33Z"
    },
    wishlist: [
      "PROD-2025-MON-UHD-001",
      "PROD-2025-LAMP-DESK-001"
    ]
  }
];
```

## Inventory Management

### Stock Levels
```javascript
const inventory = [
  {
    sku: "WH-DESK-OAK-STAND-160",
    productName: "Scandinavian Oak Standing Desk",
    locations: [
      {
        warehouse: "Auckland Distribution Centre",
        available: 15,
        reserved: 3,
        inTransit: 0,
        reorderLevel: 5,
        maxStock: 25
      },
      {
        warehouse: "Wellington Store",
        available: 8,
        reserved: 1,
        inTransit: 2,
        reorderLevel: 3,
        maxStock: 15
      }
    ],
    supplier: {
      name: "Nordic Workspace Manufacturing",
      leadTime: 14,
      minOrderQuantity: 10,
      lastDelivery: "2025-01-08"
    },
    costPrice: 650.00,
    retailPrice: 1299.00,
    salePrice: 999.00,
    margin: 34.88
  }
];
```

## Promotions & Discounts

### Active Promotions
```javascript
const promotions = [
  {
    id: "PROMO-2025-NY-OFFICE",
    name: "New Year Office Setup",
    description: "Save 23% on selected office furniture",
    type: "Category Discount",
    discountType: "Percentage",
    discountValue: 23,
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-01-31T23:59:59Z",
    applicableProducts: [
      "PROD-2025-WH-DESK-001",
      "PROD-2025-CH-ERG-001"
    ],
    minOrderValue: 500.00,
    maxDiscount: 500.00,
    usageLimit: 1000,
    usageCount: 247,
    status: "Active"
  },
  {
    id: "PROMO-2025-FREESHIP",
    name: "Free Shipping Over $150",
    description: "Free standard shipping on orders over $150",
    type: "Shipping Discount",
    discountType: "Free Shipping",
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-31T23:59:59Z",
    minOrderValue: 150.00,
    status: "Active",
    autoApply: true
  }
];
```

## Analytics Data

### Sales Performance
```javascript
const salesData = {
  daily: {
    date: "2025-01-17",
    orders: 47,
    revenue: 28475.50,
    averageOrderValue: 605.86,
    conversionRate: 3.2,
    newCustomers: 12,
    returningCustomers: 35
  },
  topProducts: [
    {
      sku: "WH-DESK-OAK-STAND-160", 
      name: "Scandinavian Oak Standing Desk",
      unitsSold: 8,
      revenue: 7992.00
    },
    {
      sku: "CH-ERG-MESH-ADJ-BLK",
      name: "ProErgo Mesh Office Chair", 
      unitsSold: 12,
      revenue: 10188.00
    }
  ],
  topCategories: [
    {
      category: "Office Furniture",
      orders: 23,
      revenue: 19847.50
    },
    {
      category: "Electronics",
      orders: 15,
      revenue: 6735.00  
    }
  ]
};
```

This comprehensive e-commerce data set provides realistic product, customer, and transaction information suitable for testing various retail and online shopping UX patterns, from product browsing to checkout optimization and order management.