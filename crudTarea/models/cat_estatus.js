import {DataTypes} from('sequelize');
import { sequelize } from "../database/database";

//definir tablas
export const cat_status = sequelize.define('cat_estatuss',{
    id: {
        type: DataTypes.UUID,
        autoincrement: true, 
        primaryKey: true
    },
    nombre: {type: DataTypes.STRING}
});
