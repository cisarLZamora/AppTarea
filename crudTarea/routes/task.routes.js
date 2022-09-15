//1era forma
//import {Router} from 'express';
//import {getTask, createTask} from '../controllers/task.controller';
//2da forma
const {Router} = require('express');
const {getTask, createTask, deleteTask, updateTask} = require('../controllers/task.controller')
const TaskRouter = Router();

TaskRouter.get('/', getTask);
TaskRouter.post('/createTask', createTask); // crear una tarea
TaskRouter.put('/updateTask/:id', updateTask);
TaskRouter.get('/getTask/:id', getTask);//quiero obtener 
TaskRouter.delete('/deleteTask/:id', deleteTask);

module.exports = {
    TaskRouter
}
