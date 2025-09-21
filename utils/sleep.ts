/**
 * Async delay (useful for testing/loading simulations).
 * Example: await sleep(1000)
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
