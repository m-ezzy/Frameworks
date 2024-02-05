import { Router } from 'express';
import { create, update, remove } from '../controllers/task';

const taskRouter = Router();

taskRouter
.post("/create", create)
.post("/update", update)
.post("/delete", remove);

export default taskRouter;
