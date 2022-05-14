/** @type {import('@sveltejs/kit').Handle} */
// import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { parseCookie } from '$lib/utils/cookie'

export async function handle ({ event, resolve }) {
  //  event.locals.user = await getUserInformation(event.request.headers.get('cookie'));
  console.log('hooks: handle')

  const cookies = parseCookie(event.request.headers.get('cookie') || '');
  console.log('hooks: handle[cookies]', cookies)

  event.locals.userid = cookies.userid || uuid();

  const response = await resolve(event);
  const setCookies: string[] = []
  if (!cookies.userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    setCookies.push(`userid=${event.locals.userid}; Path=/; SameSite=Strict; HttpOnly`)
  }

  if (!cookies['X-Custom-Header']) {
    setCookies.push(`X-Custom-Header=potato; Path=/; SameSite=Strict; HttpOnly`)
  }

  console.log('hooks: handle[Set-Cookie]', setCookies)
  if (setCookies.length) {
    response.headers.set(
      'Set-Cookie', setCookies
    );
  }
  console.log(response.headers);

  return response;
}
