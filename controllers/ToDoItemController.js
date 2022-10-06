import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getToDoItems = async (req, res) =>{
    try {
        const data = await prisma.toDoItem.findMany()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getToDoItemById = async (req, res) =>{
    try {
        const data = await prisma.toDoItem.findUnique({
            where:{
                id: Number(req.params.id)
            },
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createToDoItems = async (req, res) =>{
    const {activity_group_id, priority, title
    } = req.body;
    
    try {
        const data = await prisma.toDoItem.create({
            data:{
                activity_group_id : Number(activity_group_id),
                priority,
                title
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateToDoItem = async (req, res) =>{
    const {is_active, priority, title} = req.body;
    try {
        const data = await prisma.toDoItem.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                title,
                is_active,
                priority
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteToDoItem = async (req, res) =>{
    try {
        const data = await prisma.toDoItem.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json([{}]);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}