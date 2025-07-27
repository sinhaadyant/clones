import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter   } from "@/trpc/routers/_app";
import { createTRPCContext } from "@/trpc/init";

const handler = (req: Request) => {
    return fetchRequestHandler({
        router: appRouter,
        req,
        endpoint: "/api/trpc",
        createContext: () => createTRPCContext(),
    });
}

export { handler as GET, handler as POST };