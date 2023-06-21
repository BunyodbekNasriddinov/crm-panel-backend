import { Router } from "express"
import groupController from "../controllers/group.controller.js"
const router = Router()

router.get("/groups", groupController.getGroupByBranchId)

export default router
