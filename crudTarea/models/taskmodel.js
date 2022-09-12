import {DataTypes} from ('sequelize');
import { sequelize } from "../database/database";
import { cat_estatus } from './cat_estatus.model';
const Task = sequelize.define('tarea',{
    id: {
        type: DataTypes.UUID,
        autoincrement: true,
        primaryKey: true
    },
    nombre: {type: DataTypes.STRING}, 
},{
    timestamps: true
});

taskmodel.hasMany(cat_estatus, {
    foreignKey: 'fk_id_estatus',
    sourceKey: 'id'
})

cat_estatus.belongsTo(taskmodel,{
    foreignKey: 'fk_id_estatus',
    targetId: 'id' 
})

module.exports= Task;