import { Router } from "express"
import branchController from "../controllers/branch.controller.js"

const router = Router()

router.get("/branch/:id", branchController.getBranchById)
router.post("/branch/new", branchController.newBranch)
router.put("/branch/:id", branchController.updateBranch)
router.delete("/branch/:id", branchController.deleteBranch)

export default router
