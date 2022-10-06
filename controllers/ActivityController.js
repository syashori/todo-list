import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getActivityGroups = async (req, res) =>{
    try {
        const email = req.query.email;
        const data = await prisma.activityGroup.findMany({
            where: { email },
            select:{
                id : true,
                title : true,
                created_at : true
            }
          })
          const total = data.length
        res.status(200).json({limit:1000,skip:0,total,data});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getActivityGroupById = async (req, res) =>{
    try {
        const data = await prisma.activityGroup.findUnique({
            where:{
                id: Number(req.params.id)
            },
            
            select:{
                id : true,
                title : true,
                created_at : true,
                todo_items:{
                    select:{
                        title : true,
                        activity_group_id : true,
                        id : true,
                        is_active : true,
                        priority : true,
                    }
                }
            },
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createActivityGroups = async (req, res) =>{
    const {email, title} = req.body;
    
    try {
        const data = await prisma.activityGroup.create({
            data:{
                email,
                title
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateActivityGroup = async (req, res) =>{
    const {title} = req.body;
    try {
        const data = await prisma.activityGroup.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                title
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteActivityGroup = async (req, res) =>{
    try {
        await prisma.activityGroup.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json([{}]);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}