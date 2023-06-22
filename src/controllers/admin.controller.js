import { InternalServerError } from '../errors/errors.js';
import adminModel from '../models/admin.model.js';

const getAllCourses = async (req, res, next) => {
	try {
		const { course } = req.query;

		let courses;
		if (course) {
			courses = await adminModel.getCoursesByQuery(course);
		} else {
			courses = await adminModel.getCourses();
		}

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

const getAllBranches = async (req, res, next) => {
	try {
		const courses = await adminModel.getAllBranches();

		res.status(201).json({
			status: 201,
			message: 'All courses',
			data: courses,
		});
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};

const updateCourse = async (req, res, next) => {
	try {
		const course_id = req.params.course_id;
		const { course_name, course_price } = req.body;
		const image = req.files[0]?.filename;

		const updatedCourse = await adminModel.findByIdAndUpdate(
			course_name ? course_name : null,
			course_price ? course_price : null,
			image ? image : null,
			course_id
		);

		res.status(201).json({
			status: 201,
			message: 'All courses',
			data: updatedCourse,
		});
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};

export { getAllBranches, getAllCourses, postCourses, updateCourse };
