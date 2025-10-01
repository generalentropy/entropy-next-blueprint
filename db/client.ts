import { PrismaClient } from "@prisma/client";

// Define the type for the global object
type GlobalWithPrisma = {
  prisma?: PrismaClient;
};
/**
 * The `global` variable is a global object in Node.js,
 * similar to `window` in the browser.
 * It is available everywhere in your Node.js application
 * without having to import it, and can be used as a container
 * for variables that should be accessible across modules.
 */

// Check if a Prisma instance already exists on the global object
const globalForPrisma = global as unknown as GlobalWithPrisma;

// Initialize a new Prisma instance or reuse the existing one
const prisma = globalForPrisma.prisma || new PrismaClient();

// In development, store the instance on the global object
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
