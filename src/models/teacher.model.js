import { fetchAll } from "../utils/pg.js"

const loginQuery = ``

const login = async ({ username, password }) => {
  const teacher = await fetchAll(loginQuery, [username, password])
  return teacher
}

export default {
  login,
}
