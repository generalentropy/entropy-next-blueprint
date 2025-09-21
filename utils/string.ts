/**
 * Capitalize the first letter of a string.
 * Example: "hello world" -> "Hello world"
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
