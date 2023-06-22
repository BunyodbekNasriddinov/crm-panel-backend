import { InternalServerError } from '../errors/errors.js';
import adminModel from '../models/admin.model.js';

const getAllCourses = async (req, res, next) => {
	try {
		const courses = await adminModel.getCourses();

		res.status(200).json({
			status: 200,
			message: 'All courses',
			data: courses,
		});
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};

const postCourses = async (req, res, next) => {
	try {

		const { course_name, course_price, branch_id } = req.body;
		const image = req.files[0].filename;

		const course = await adminModel.postCourses(course_name, course_price, branch_id, image);

		res.status(201).json({
			status: 201,
			message: 'All courses',
			data: course[0],
		});
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};

export { getAllCourses, postCourses };
