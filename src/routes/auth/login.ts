/** @type {import('@sveltejs/kit').RequestHandler} */
import db from "$lib/database";

/*
export async function get (event) {

  console.log('login.get(req)', event.request)
  //
  //  const conn = await db.getConnection()
  //  console.log('Connection:', conn)
  //
  const usercnt = await db.query('select count(*) users from auth')

  console.log('Users in DB:', usercnt[0])

  // const auth = await db.query('select * from auth where alias = ?',[req?.body?.alias])
  return {
    body: {
      id: 1,
      alias: 'TrasherDK',
      authenticated: true
    }
  }
}

*/

export async function post ({ request }) {
  const params = await request.json()
  console.log('login.post(req)', params)
  /*
    const conn = await db.getConnection()
    console.log('Connection:', conn)
  */
  const usercnt = await db.query('select count(*) users from auth')

  console.log('Users in DB:', usercnt[0])
  const query = 'select * from auth where alias = ?'
  const auth = await db.query(query, [params.alias])
  console.log(query.replace('?', `'${params.alias}'`), auth)
  return {
    body: {
      id: 1,
      alias: 'TrasherDK',
      authenticated: true
    }
  }
}
