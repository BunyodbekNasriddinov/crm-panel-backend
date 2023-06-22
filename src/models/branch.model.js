import { fetchAll, fetchOne } from "../utils/pg.js"

const getBranchByIdQuery = `
  SELECT * 
  FROM branch
  WHERE $1=branch_id
`

async function getBranchById(branch_id) {
  return await fetchAll(getBranchByIdQuery, [branch_id])
}

const newBranchQuery = `
  INSERT INTO branch(branch_name, branch_phone, branch_address) 
  VALUES($1, $2, $3)
  RETURNING *
`

async function newBranch({ branch_name, branch_phone, branch_address }) {
  return await fetchAll(newBranchQuery, [
    branch_name,
    branch_phone,
    branch_address,
  ])
}

const updateBranchQuery = `
  UPDATE branch
  SET
    branch_name = COALESCE($2, branch_name),
    branch_phone = COALESCE($3, branch_phone), 
    branch_address = COALESCE($4, branch_address)
  WHERE branch_id = $1
  RETURNING *
`

async function updateBranch({
  branch_id,
  branch_name,
  branch_phone,
  branch_address,
}) {
  return await fetchAll(updateBranchQuery, [
    branch_id,
    branch_name,
    branch_phone,
    branch_address,
  ])
}

const deleteBranchQuery = `
  DELETE FROM branch
  WHERE branch_id = $1
  RETURNING *
`

async function deleteBranch(id) {
  return await fetchAll(deleteBranchQuery, [id])
}

export default { newBranch, updateBranch, deleteBranch, getBranchById }
