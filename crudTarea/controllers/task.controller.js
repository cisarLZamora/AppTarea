const getTask = (req, res) => {
    res.send('getting projects')
}

const createTask = (req, res) => {
    console.log(req.body)
    res.send('creating task')
}

module.exports={
    getTask,
    createTask
}