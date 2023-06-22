import { Router } from "express"
import teacherController from "../controllers/teacher.controller.js"
const router = Router()

router.get('/teacher', teacherController)



export default router
