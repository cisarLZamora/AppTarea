const {Router} = require('express');
const {createCatTask} = require('../controllers/cat_estatus.controller');
const catTaskRouter = new Router();

catTaskRouter.get('/createCat', createCatTask)

module.exports = {
    catTaskRouter
}