const getTask = (req, res) => {
    res.send('getting projects')
}

const createTask = (req, res) => {
    console.log(req.body)
    res.send('creating task')
}

const deleteTask = (req, res) => {
    console.log(req.body)
    res.send('delete task')
}

const updateTask = (req, res) => {
    console.log(req.body)
    res.send('delete task')
}

module.exports={
    getTask,
    createTask,
    deleteTask,
    updateTask
}