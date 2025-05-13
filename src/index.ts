import { initTRPC } from "@trpc/server";
import { SharedPluginContext } from "./common/middleware";
import { SharedProcedureContext } from "./common/procedure";
import { sharedRouter, SharedRouterContext } from "./common/router";

type AppContext = SharedPluginContext &
  SharedProcedureContext &
  SharedRouterContext;

const t = initTRPC.context<AppContext>().create();

export const appRouter = t.router({
  sharedRouter: sharedRouter,
});

export const caller = t.createCallerFactory(appRouter)(() => {
  return {
    middlewareContext: "middleware context",
    routerContext: "router context",
    procedureContext: "procedure context",
  };
});

const run = async () => {
  await caller.sharedRouter.sharedProc();
  await caller.sharedRouter.routerProc();
};

run();
