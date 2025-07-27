import { initTRPC } from '@trpc/server';
import { auth } from '@clerk/nextjs/server';

// Create context function
export const createTRPCContext = async () => {
  const { userId } = await auth();
  return {
    userId,
  };
};

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create();
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
