const {cat_status} = require('../models/cat_estatus')

const createCatTask = async(req, res) => {
    const {nombre} = req.body;

    try {
        const newCat_task = await cat_status.create({
            nombre : nombre
        })
        console.log(newCat_task)
        res.json(newCat_task)
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const getCatsTaskEstatus = async(req, res) => {
    //array de tareas
    try {
        const categories = await cat_status.findAll()
        console.log(categories);
        res.json(categories)
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const getCatTask = async(req, res) => {
    try {
        const {id} = req.params;
        const cat_task = await cat_status.findOne({
            where: {
                id
            }
        })
        if (!cat_task) { 
            return res.status(404).json({
                mensaje: 'categoría no encontrada'
            }) ;
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        }) 
    }
}

const updateCatTaskEstatus = async(req, res) => {
    try {
        const {id} = req.params;
        const {nombre} = req.body;
        const cat = await cat_status.findByPk(id);

        cat.nombre = nombre
        await cat.save();
        res.json(cat);
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

const deleteCatTaskEstatus = async(req, res) => {
    const {id} = req.params;
    try {
        await cat_status.destroy({
            where: {
                id: id
            }
        })
        res.sendStatus(204);
        res.send('delete cat_estatus')
    } catch (error) {
        return res.status(500).json({
            mensaje: error.message
        })
    }
}

module.exports={
    createCatTask,
    getCatsTaskEstatus,
    updateCatTaskEstatus,
    deleteCatTaskEstatus,
    getCatTask
}
