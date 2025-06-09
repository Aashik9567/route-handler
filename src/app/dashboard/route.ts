export async function GET() {
  return new Response('Dashboard component', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}