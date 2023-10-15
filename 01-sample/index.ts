/**
 * file: index.ts
 * description: file responsible for run Bun.js application
 * date: 10/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const server = Bun.serve({
  port: 3000,
  fetch(_req) {
    return new Response('Fala, meus consagrados(as)!');
  },
});

console.log(`Application running at http://localhost:${server.port}...`);