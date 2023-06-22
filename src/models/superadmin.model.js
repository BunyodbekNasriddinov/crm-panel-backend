import { fetchOne } from "../utils/pg.js"

const loginQuery = `
  SELECT * FROM superadmin
  WHERE username = $1 AND password = $2
`

const login = async ({ username, password }) => {
  const superadmin = await fetchOne(loginQuery, [username, password])
  return superadmin
}

export default {
  login,
}
