import { Router } from "express"

import adminRouter from "./admin.routes.js"
import LoginRouter from "./auth.routes.js"
import groupRouter from "./group.routes.js"
import branchRouter from "./branch.routes.js"
import superadminRouter from "./superadmin.routes.js"
import studentRouter from "./student.routes.js"
import teacherRouter from "./teacher.routes.js"

const router = Router()

router.use(LoginRouter)
router.use("/admin", adminRouter)
router.use(groupRouter)
router.use(branchRouter)
router.use(superadminRouter)
router.use(studentRouter)
router.use(teacherRouter)

export default router
