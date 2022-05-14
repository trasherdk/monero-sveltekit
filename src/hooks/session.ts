/** @type {import('@sveltejs/kit').GetSession} */
import { parseCookie } from '$utils/cookie'

export function getSession (event) {
  console.log('hooks: getSession[headers]', event.request.headers)

  const user = parseCookie(event.request.headers.cookie).user
  return { user }
}
