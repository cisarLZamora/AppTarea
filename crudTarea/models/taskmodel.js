//import { sequelize } from "../database/database";
//import { cat_estatus } from './cat_estatus.model';
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
},{
    timestamps: true
});

taskmodel.hasMany(cat_estatus, {
    foreignKey: 'fk_id_estatus',
    sourceKey: 'id'
})

cat_status.belongsTo(task,{
    foreignKey: 'fk_id_estatus',
    targetId: 'id' 
})

module.exports= Task;