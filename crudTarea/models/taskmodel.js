const seqConf = require('../database/database.js');
var Sequelize = seqConf.Sequelize
const {cat_status} = require('./cat_estatus')

const Task = seqConf.sequelize.define('tarea',{
    id: {
        type: Sequelize.UUID,
        autoincrement: true,
        primaryKey: true
    },
    nombre: {type: Sequelize.STRING}, 
    fk_id_estatus: {
        type: Sequelize.UUID,
        foreignKey: true
    }
},{
    timestamps: true
});

Task.hasMany(cat_status, {
    foreignKey: 'fk_id_estatus',
    sourceKey: 'id'
})

cat_status.belongsTo(Task,{
    foreignKey: 'fk_id_estatus',
    targetId: 'id' 
})

module.exports= Task;