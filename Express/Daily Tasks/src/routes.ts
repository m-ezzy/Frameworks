
const routes = {
	USER_LOGIN: '/user/login',
	USER_LOGOUT: '/user/logout',
	USER_REGISTER: '/user/register',
	USER_GET: '/user/get',
	USER_UPDATE: '/user/update',
	USER_DELETE: '/user/delete',

	TASK_CREATE: '/task/create',
	TASK_UPDATE: '/task/update',
	TASK_DELETE: '/task/delete',
	TASK_GET: '/task/get',
	TASK_GET_ALL: '/task/get/all',
	TASK_GET_BY_USER: '/task/get/by/user',
	TASK_GET_BY_USER_AND_DATE: '/task/get/by/user/and/date',
	TASK_GET_BY_USER_AND_DATE_RANGE: '/task/get/by/user/and/date/range',
	TASK_GET_BY_USER_AND_DATE_RANGE_AND_STATUS: '/task/get/by/user/and/date/range/and/status',
	TASK_GET_BY_USER_AND_DATE_RANGE_AND_STATUS_AND_PRIORITY: '/task/get/by/user/and/date/range/and/status/and/priority',

	USER_TASK_CREATE: '/user/task/create',
	USER_TASK_UPDATE: '/user/task/update',
	USER_TASK_DELETE: '/user/task/delete',
	USER_TASK_GET: '/user/task/get',
	USER_TASK_GET_ALL: '/user/task/get/all',
}

import { Router } from 'express';

const router: Router = Router();
const apiRouter: Router = Router();
const authRouter: Router = Router();
const userRouter: Router = Router();
const taskRouter: Router = Router();


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router
	.post(routes.USER_LOGIN, authController.login)
	.post(routes.USER_LOGOUT, authController.logout)

	.post(routes.USER_REGISTER, userController.register)
	.post(routes.USER_GET, userController.get)
	.post(routes.USER_UPDATE, userController.update)
	.post(routes.USER_DELETE, userController.delete)

	.post(routes.TASK_CREATE, taskController.create)
	.post(routes.TASK_UPDATE, taskController.update)
	.post(routes.TASK_DELETE, taskController.delete)
	.post(routes.TASK_GET, taskController.get)
	.post(routes.TASK_GET_ALL, taskController.getAll)

export default router;
