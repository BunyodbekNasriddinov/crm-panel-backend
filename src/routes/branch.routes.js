import { Router } from "express"
import branchController from "../controllers/branch.controller.js"
import checktoken from "../middlewares/checktoken.js"
import role from "../middlewares/role.middleware.js"

const router = Router()

router.get("/branch",  checktoken, role, branchController.getBranchById)
router.post("/branch/new", branchController.newBranch)
router.put("/branch", branchController.updateBranch)
router.delete("/branch/:id", branchController.deleteBranch)

export default router
