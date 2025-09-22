/**
 * URL constants used throughout the application.
 * Centralize base URLs and avoid hardcoding.
 *
 * Examples:
 * - Application base URL
 * - API endpoints
 * - CDN or asset URLs
 */

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const API_BASE_URL = `${BASE_URL}/api`;
