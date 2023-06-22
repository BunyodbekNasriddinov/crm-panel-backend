import { Router } from "express"

import adminRouter from "./admin.routes.js"
import LoginRouter from "./auth.routes.js"
import groupRouter from "./group.routes.js"
import branchRouter from "./branch.routes.js"

const router = Router()

router.use(LoginRouter)
router.use("/admin", adminRouter)
router.use(groupRouter)
router.use(branchRouter)

export default router
