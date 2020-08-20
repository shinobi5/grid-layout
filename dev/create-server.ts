import { Application, send } from "../deps.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/dev`,
    index: "index.html",
  });
});

await app.listen({ port: 1234 });
