const seqConf = require('../database/database.js');
var Sequelize = seqConf.Sequelize;

//definir tablas

const cat_status = seqConf.sequelize.define('cat_estatus',{
    id: {
        type: Sequelize.UUID, 
        primaryKey: true, 
        defaultValue: Sequelize.UUIDV4
    }, 
    name: {type: Sequelize.STRING}
}, {
    tableName: 'cat_status'
})

module.exports={
    cat_status
}