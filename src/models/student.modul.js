import { fetchAll } from "../utils/pg.js"

const loginQuery = ``

const login = async ({ username, password }) => {
  const student = await fetchAll(loginQuery, [username, password])
  return student
}

export default {
  login,
}
