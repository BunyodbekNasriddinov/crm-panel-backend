import {fetchAll} from '../utils/pg.js';

const getAdmin = async (admin_name, admin_password) => {
    console.log(admin_password);
    const data = await fetchAll('SELECT * FROM admins WHERE $1=admin_name AND $2=admin_password', [admin_name,admin_password])
    console.log(data);
    return data
}

export default getAdmin