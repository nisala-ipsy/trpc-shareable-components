import { initTRPC } from "@trpc/server";
import { createSharedPlugin, SharedPluginContext } from "./middleware";

export interface SharedProcedureContext {
  procedureContext: string;
}

const t = initTRPC
  .context<SharedProcedureContext & SharedPluginContext>()
  .create();

const sharedPlugin = createSharedPlugin();

const baseProcedure = t.procedure.concat(sharedPlugin.plug1);

export const sharedProcedure = baseProcedure.query((opts) => {
  console.log("TRPC::PROCEDURE::" + opts.ctx.procedureContext);
});
