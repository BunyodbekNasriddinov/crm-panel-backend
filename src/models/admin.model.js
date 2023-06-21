import {fetchAll} from '../utils/pg.js';

const getAdmin = async () => {
    const data = await fetchAll('SELECT * FROM admins')
        return data
}

export default getAdmin