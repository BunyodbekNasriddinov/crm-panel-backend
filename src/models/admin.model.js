import { fetchAll } from '../utils/pg.js';

const getAdmin = async () => {
	const data = await fetchAll('SELECT * FROM admins');
	return data;
};

const getCourses = async () => {
	const data = await fetchAll(
		'SELECT * FROM courses AS c INNER JOIN branch AS b ON c.branch_id = b.branch_id;'
	);
	return data;
};

const postCourses = async (name, price, branch_id, image) => {
	const data = await fetchAll(
		'INSERT INTO courses(course_name, course_price, branch_id, course_image) VALUES ($1,$2, $3, $4) RETURNING *',
		[name, price, branch_id, image]
	);
	return data;
};

export default { getAdmin, getCourses, postCourses };
