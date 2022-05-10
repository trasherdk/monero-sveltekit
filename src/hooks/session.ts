/** @type {import('@sveltejs/kit').GetSession} */
import { parseCookie } from '$lib/utils/cookie'

export function getSession (event) {
  console.log('hooks: getSession')

  console.log(event.request.headers)
  const user = parseCookie(event.request.headers.cookie).user
  return { user }
}
