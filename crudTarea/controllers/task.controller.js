const Task = require('../models/taskmodel');

const getTask = async (req, res) => {
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
        const tasks = await Task.findAll();
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

module.exports={
    getTask,
    createTask,
    deleteTask,
    updateTask
}