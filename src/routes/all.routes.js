
import { Router } from 'express';

import adminRouter from './admin.routes.js';
import LoginRouter from './auth.routes.js'

const router = Router()

router.use(LoginRouter)
router.use('/admin', adminRouter);

export default router;
