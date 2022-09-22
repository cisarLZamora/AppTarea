const seqConf = require('../database/database.js');
var Sequelize = seqConf.Sequelize
const {cat_status} = require('./cat_estatus')

const Task = seqConf.sequelize.define('task',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true, 
        defaultValue: Sequelize.UUIDV4
    },
    name: {type: Sequelize.STRING}, 
    fk_status: {
        type: Sequelize.UUID
    },
    estatus: {type: Sequelize.STRING}
}, {
    tableName: 'task'
},{
    timestamps: true
}
);


Task.hasMany(cat_status, {
    foreignKey: 'fk_status',
    sourceKey: 'id'
})

cat_status.belongsTo(Task,{
    foreignKey: 'fk_status',
    targetId: 'id' 
})

module.exports= Task;