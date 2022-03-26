/** @type {import('@sveltejs/kit').Handle} */

export async function handle ({ event, resolve }) {
  event.locals.user = await getUserInformation(event.request.headers.get('cookie'));

  const response = await resolve(event);
  response.headers.set('x-custom-header', 'potato');

  console.log(response.headers);

  return response;
}
