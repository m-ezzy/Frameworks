import { Router } from 'express';
import { create, update, deleteUser } from '../controllers/user';

const userRouter = Router();

userRouter
.post("/create", create)
.post("/update", update)
.post("/delete", deleteUser);

export default userRouter;
