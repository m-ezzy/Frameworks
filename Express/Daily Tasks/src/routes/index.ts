import { Request, Response, NextFunction, Router } from 'express';
import apiRouter from './api';

const router: Router = Router();

router.use('/api', apiRouter);

// error handler
// catch 404 and forward to error handler
router.use((req: Request, res: Response, next: NextFunction) => {
	const err = new Error('Route Not Found');
	err[ 'status' ] = 404;
	next(err);
});

export default router;
