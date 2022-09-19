const {Router} = require('express');
const {createCatTask, deleteCatTaskEstatus, getCatsTaskEstatus
, updateCatTaskEstatus, getCatTask} = require('../controllers/cat_estatus.controller');
const catTaskRouter = new Router();

catTaskRouter.post('/createCat', createCatTask);
catTaskRouter.get('/getCats', getCatsTaskEstatus);
catTaskRouter.get('/getCat/:id', createCatTask);
catTaskRouter.put('/updateCat/:id', updateCatTaskEstatus);


module.exports = {
    catTaskRouter
}