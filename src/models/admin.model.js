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

const getAllBranches = async () => {
	const data = await fetchAll('SELECT * FROM branch');
	return data;
};

const findByIdAndUpdate = async (name, price, image, id) => {
	const data = await fetchAll(
		`UPDATE courses SET course_name = COALESCE($1, course_name), 
												course_price = COALESCE($2, course_price),
												course_image = COALESCE($3, course_image) 
												WHERE course_id = $4 RETURNING *`,
		[name, price, image, id]
	);
	return data;
};

const getCoursesByQuery = async name => {
	const data = await fetchAll(
		'SELECT * FROM courses INNER JOIN branch ON courses.branch_id = branch.branch_id  WHERE course_name ILIKE $1',
		[`%${name}%`]
	);
	return data;
};

const findByIdAndDelete = async id => {
	const data = await fetchAll('DELETE FROM courses WHERE course_id = $1 RETURNING *', [id]);
	return data;
};

export default {
	getAdmin,
	getCourses,
	postCourses,
	getAllBranches,
	findByIdAndUpdate,
	getCoursesByQuery,
	findByIdAndDelete,
};
