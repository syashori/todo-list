const {TodoItem} = require('../models/Model.js')

module.exports = {
    getToDoItems: async function(req, res){
        try {
            const data = await TodoItem.findAll()
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    getToDoItemById: async function(req, res){
        try {
            const data = await TodoItem.findOne({
                where:{
                    id: Number(req.params.id)
                },
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({msg: error.message});
        }
    },
    createToDoItems: async function(req, res){
        try {
            const data = await TodoItem.create(req.body)
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    },
    updateToDoItem: async function(req, res){
        try {
            await TodoItem.update(req.body,{
                where:{
                    id: Number(req.params.id)
                }
            });
            const data = await TodoItem.findOne({
                where:{
                    id: Number(req.params.id)
                },
            })
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    },
    deleteToDoItem: async function(req, res){
        try {
            await TodoItem.destroy({
                where:{
                    id: Number(req.params.id)
                }
            });
            res.status(200).json([{}]);
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    },
};