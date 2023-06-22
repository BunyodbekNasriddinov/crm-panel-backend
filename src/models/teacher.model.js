import { fetchAll } from "../utils/pg.js"

const loginQuery = `
  SELECT * FROM teachers
`

const getAllTeacher = async () => {
  const teacher = await fetchAll(loginQuery)
  console.log(teacher);
  return teacher
}

export default {
  getAllTeacher,
}
