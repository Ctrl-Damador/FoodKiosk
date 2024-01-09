import { PrismaClient } from '@prisma/client'

export const api = {
    externalResolver: true,
};

export default async function handler(req, res){

    const prisma = new PrismaClient()

    //*Obtener ordenes
    const orders = await prisma.order.findMany({
        where: {
            status: false 
        }
    })
    res.status(200).json(orders)

    //*Crear ordenes
    if(req.method === "POST"){

        const order = await prisma.order.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                request: req.body.order,
                date: req.body.date
            }
        })
       
        res.status(200).json(order)
    }
    
}