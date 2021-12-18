async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/ping") {
    return new Response("pong");
  }
  return new Response("not found", { status: 400 });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
