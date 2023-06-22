import teacherModel from "../models/teacher.model.js"

async function getTeacher(req, res, next) {
  const teacher = await teacherModel.getAllTeacher()

  res.send(teacher)
}

export default getTeacher
