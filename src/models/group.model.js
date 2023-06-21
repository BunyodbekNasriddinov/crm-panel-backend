import { fetchAll } from "../utils/pg.js"

const getGroupByBranchIdQuery = `
  SELECT * FROM groups
  WHERE branch_id = $1
  `

async function getGroupsBranchId(branch_id) {
  return await fetchAll(getGroupByBranchIdQuery, [branch_id])
}

export default { getGroupsBranchId }
