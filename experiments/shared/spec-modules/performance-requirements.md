# Performance Requirements Module

## Core Performance Standards

### Loading Performance
- **First Contentful Paint (FCP)**: < 1.8 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds  
- **Time to Interactive (TTI)**: < 3.8 seconds
- **Total Blocking Time (TBT)**: < 300ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Runtime Performance
- **Frame Rate**: Maintain 60fps during animations and interactions
- **Input Delay**: < 100ms response time for all user interactions
- **Memory Usage**: Efficient memory management with proper cleanup
- **Battery Impact**: Minimal CPU usage and power consumption
- **Network Efficiency**: Optimize for 3G and slower connections

### Technical Implementation Guidelines

#### Critical CSS Optimization
```css
/* Inline critical CSS for above-the-fold content */
/* Use CSS custom properties for efficient updates */
:root {
  --primary-color: #0070f3;
  --font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Optimize expensive properties */
.optimized-animation {
  /* Use transform and opacity for GPU acceleration */
  transform: translateZ(0); /* Force GPU layer */
  will-change: transform, opacity; /* Hint to browser */
}

/* Efficient layout patterns */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  /* Avoid layout thrashing */
  contain: layout style paint;
}
```

#### JavaScript Performance Patterns
```javascript
// Efficient event handling
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use passive event listeners for scroll events
document.addEventListener('scroll', handleScroll, { passive: true });

// Intersection Observer for efficient visibility detection
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load content only when visible
      loadContent(entry.target);
    }
  });
}, { threshold: 0.1 });

// Efficient animation with requestAnimationFrame
function animate() {
  // Batch DOM operations
  requestAnimationFrame(() => {
    // Perform animations here
    updateElements();
  });
}

// Memory efficient cleanup
class ComponentManager {
  constructor() {
    this.listeners = [];
    this.timers = [];
  }
  
  addListener(element, event, handler) {
    element.addEventListener(event, handler);
    this.listeners.push({ element, event, handler });
  }
  
  cleanup() {
    this.listeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.timers.forEach(timer => clearTimeout(timer));
  }
}
```

#### HTML Optimization
```html
<!-- Resource hints for better loading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="//api.example.com">

<!-- Optimize images with proper sizing and lazy loading -->
<img src="hero-image.webp" 
     alt="Description"
     width="800" 
     height="400"
     loading="lazy"
     decoding="async">

<!-- Minimize render-blocking resources -->
<link rel="stylesheet" href="critical.css">
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Efficient font loading -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### Performance Optimization Strategies

#### Code Splitting and Lazy Loading
- **Component-based splitting**: Load features only when needed
- **Route-based splitting**: Separate code by page/section
- **Dynamic imports**: `import()` for conditional loading
- **Image lazy loading**: Load images as they enter viewport
- **Font optimization**: Subset fonts and use font-display: swap

#### Caching and Network Optimization
- **Service Worker**: Cache resources for offline functionality
- **CDN Usage**: Serve static assets from edge locations
- **Resource Compression**: Gzip/Brotli compression for text assets
- **HTTP/2 Optimization**: Leverage multiplexing and server push
- **Bundle Analysis**: Regular analysis of bundle size and dependencies

#### Runtime Optimization
- **Virtual Scrolling**: For large lists and data sets
- **Object Pooling**: Reuse objects instead of creating new ones
- **Event Delegation**: Use single event listeners for multiple elements
- **Throttling/Debouncing**: Limit expensive operations
- **Web Workers**: Offload heavy computations to background threads

### Monitoring and Measurement

#### Core Web Vitals Tracking
```javascript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send metrics to monitoring service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

#### Performance Budget
- **JavaScript**: < 170KB compressed on mobile
- **CSS**: < 50KB compressed
- **Images**: Optimize for < 500KB total initial load
- **Fonts**: < 100KB for primary font family
- **Third-party scripts**: Minimize and async load when possible

#### Testing Requirements
- **Lighthouse Audits**: Achieve 90+ scores across all categories
- **Real Device Testing**: Test on mid-range mobile devices
- **Network Throttling**: Test on 3G and slower connections
- **Long-term Monitoring**: Track performance metrics in production
- **Regression Testing**: Automated performance testing in CI/CD

### Device and Network Considerations

#### Mobile Optimization
- **Touch Response**: < 100ms touch to visual feedback
- **Scroll Performance**: Smooth 60fps scrolling
- **Battery Efficiency**: Minimize wake locks and background processing
- **Memory Constraints**: Efficient memory usage on low-end devices
- **Offline Functionality**: Graceful degradation without network

#### Progressive Enhancement
- **Core Functionality**: Works without JavaScript
- **Enhancement Layers**: Add features based on capability detection
- **Fallback Strategies**: Alternative experiences for unsupported features
- **Adaptive Loading**: Adjust based on device and network capabilities
- **Graceful Degradation**: Maintain usability when features fail

### Success Criteria
- **Lighthouse Score**: 90+ in Performance, Accessibility, Best Practices, SEO
- **Real User Metrics**: 75th percentile meets Core Web Vitals thresholds
- **Cross-Device Performance**: Consistent experience on mobile and desktop
- **Network Resilience**: Functional on slow and unreliable connections
- **Long-term Stability**: Performance maintains over time without degradation