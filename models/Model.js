const { Sequelize, DATE } = require( 'sequelize')
const db = require( '../config/Database.js')

const { DataTypes } = Sequelize

const ActivityGroup = db.define('activities',{
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    freezeTableName:true
})
const TodoItem = db.define('todos',{
    title: DataTypes.STRING,
    is_active: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    priority: DataTypes.STRING,
    activity_group_id: DataTypes.INTEGER,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
    freezeTableName:true
})
db.sync()

ActivityGroup.hasMany(TodoItem,{
    foreignKey:"activity_group_id",
    as : 'todo_items',
})

module.exports =  {ActivityGroup, TodoItem}
