import groupModel from "../models/group.model.js"

async function getGroupByBranchId(req, res, next) {
  const groups = groupModel.getGroupsBranchId(req.body?.branch_id)
  res.json(groups)
}

export default {
  getGroupByBranchId,
}
