const seqConf = require('../database/database.js');
var Sequelize = seqConf.Sequelize
//definir tablas

const cat_status = seqConf.sequelize.define('cat_estatus',{
    id: {
        type: Sequelize.UUID,
        autoincrement: true, 
        primaryKey: true
    }, 
    nombre: {type: Sequelize.STRING}
})

module.exports={
    cat_status
}