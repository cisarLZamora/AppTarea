const Task = require('../models/taskmodel');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const createTask = async (req, res) => {
    try {
        const {name, fk_status} = req.body;

        const newtTask = await Task.create({
            name,
            fk_status
        })
        res.json(newtTask);
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await Task.destroy({
            where: {id},
        })
        console.log(result)
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const updateTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findOne(
            {where: {id}}
        )
        task.set(req.body);
        await task.save();
        return res.json(task)
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const getTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findOne({
            where: {id}
        }
        )
        res.json(task)
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

module.exports={
    getTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}