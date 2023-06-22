import { Router } from 'express';
import {
	deleteCourses,
	getAllBranches,
	getAllCourses,
	postCourses,
	updateCourse,
} from '../controllers/admin.controller.js';
import validate from '../middlewares/validate.js';

const router = Router();

router.get('/courses', getAllCourses);

router.get('/branches', getAllBranches);

router.post('/courses', validate, postCourses);

router.put('/courses/:course_id', updateCourse);

router.delete('/courses/:course_id', deleteCourses);

export default router;
