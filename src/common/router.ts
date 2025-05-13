import { initTRPC } from "@trpc/server";
import { sharedProcedure } from "./procedure";

export interface SharedRouterContext {
  routerContext: string;
}

const t = initTRPC.context<SharedRouterContext>().create();

export const sharedRouter = {
  routerProc: t.procedure.query((opts) => {
    console.log("TRPC::ROUTER::PROCEDURE" + opts.ctx.routerContext);
  }),
  sharedProc: sharedProcedure,
};
