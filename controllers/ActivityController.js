const {ActivityGroup, TodoItem} = require('../models/Model.js')

module.exports = {
    getActivityGroups: async function(req, res){
        try {
            const email = req.query.email;
            const data = await ActivityGroup.findAll({
                where:{
                    email : email,
                },
                attributes:['id','title','created_at']
            })
              const total = data.length
            res.status(200).json({limit:1000,skip:0,total,data});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    getActivityGroupById: async function(req, res){
        try {
            const data = await ActivityGroup.findOne({
                where:{
                    id: Number(req.params.id)
                },
                include: {
                    model: TodoItem,
                    as : 'todo_items',
                    attributes : ['title','activity_group_id','id','is_active','priority']
                  },
                attributes :["id","title","created_at"],
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({msg: error.message});
        }
    },
    createActivityGroups: async function(req, res){
        try {
            const data = await ActivityGroup.create(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    },
    updateActivityGroup: async function(req, res){
        try {
            await ActivityGroup.update(req.body,{
                where:{
                    id: Number(req.params.id)
                }
            });
            const data = await ActivityGroup.findOne({
                where:{
                    id: Number(req.params.id)
                },
            })
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    },
    deleteActivityGroup: async function(req, res){
        try {
            await ActivityGroup.destroy({
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