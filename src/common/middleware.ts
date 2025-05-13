import { initTRPC } from "@trpc/server";

export interface SharedPluginContext {
  middlewareContext: string;
}

export const createSharedPlugin = () => {
  const t = initTRPC.context<SharedPluginContext>().create();
  return {
    plug1: t.procedure.use((opts) => {
      console.log("TRPC::PLUGIN::" + opts.ctx.middlewareContext);
      return opts.next();
    }),
  };
};
