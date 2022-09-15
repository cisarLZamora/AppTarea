const createCatTask = (req, res) => {
    console.log(req.body)
    res.send('creating catTask')
}

module.exports={
    createCatTask
}
