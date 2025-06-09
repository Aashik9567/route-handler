//if a folder has a file named route.ts, it will be treated as a route
// and if folder has a file name page.tsx and route.ts, route.ts will be used as default for the route
export async function GET() {
  return new Response('users section');
}