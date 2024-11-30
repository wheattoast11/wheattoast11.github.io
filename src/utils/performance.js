export const initPerformanceMonitoring = () => {
  // Create PerformanceObserver
  const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      // Log only significant performance issues
      if (entry.duration > 50) {
        console.warn(`Performance entry: ${entry.name} took ${entry.duration}ms`);
      }
    });
  });

  // Observe paint timing
  perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

  // Monitor long tasks
  const longTaskObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.warn(`Long task detected: ${entry.duration}ms`);
    });
  });

  longTaskObserver.observe({ entryTypes: ['longtask'] });

  // Monitor memory usage
  if (performance.memory) {
    setInterval(() => {
      const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
      const usedMB = Math.round(usedJSHeapSize / 1024 / 1024);
      const totalMB = Math.round(totalJSHeapSize / 1024 / 1024);
      console.debug(`Memory usage: ${usedMB}MB / ${totalMB}MB`);
    }, 10000);
  }
}; 