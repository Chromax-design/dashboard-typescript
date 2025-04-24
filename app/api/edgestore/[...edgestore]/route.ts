import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  publicImages: es.imageBucket().beforeDelete(({ ctx, fileInfo }) => {
    console.log("before delete", ctx, fileInfo);
    return true;
  }),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST };
export type EdgeStoreRouter = typeof edgeStoreRouter;
