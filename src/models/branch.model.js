import { fetchAll } from "../utils/pg.js"

const newBranchQuery = `
  INSERT INTO branch(branch_name, branch_phone, branch_address) 
  VALUES($1, $2, $3)
  `

async function newBranch({ branch_name, branch_phone, branch_address }) {
  return await fetchAll(newBranchQuery, [
    branch_name,
    branch_phone,
    branch_address,
  ])
}

export default { newBranch }
