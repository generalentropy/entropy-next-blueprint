/**
 * Environment-related constants.
 * These values depend on process.env and runtime configuration.
 *
 * Examples:
 * - NODE_ENV checks (development/production/test)
 * - Runtime feature flags
 * - Safe getters for environment variables
 */

export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PROD = process.env.NODE_ENV === "production";
