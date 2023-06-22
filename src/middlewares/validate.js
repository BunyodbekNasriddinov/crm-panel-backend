import { BadRequestError, InternalServerError } from '../errors/errors.js';
import { courseSchema } from '../utils/validation.js';

const validate = (req, res, next) => {
	try {
		const { course_name, course_price, branch_id } = req.body;
		const image = req.files[0].filename;

		const { error } = courseSchema.validate({
			course_name,
			course_price,
			branch_id,
			avatar: image,
		});

		if (error) {
			throw new BadRequestError(error.message);
		}

		next();
	} catch (error) {
		next(new InternalServerError(error.message));
	}
};

export default validate;
