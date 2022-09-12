import {Router} from 'express';
import {getTask, createTask} from '../controllers/task.controller';
const router = new Router();

router.get('/');
router.get('/tasks', getTask);//quiero obtener 
router.post('/tasks', createTask); // crear una tarea
router.put('/');//quiero actualizar


export default router;