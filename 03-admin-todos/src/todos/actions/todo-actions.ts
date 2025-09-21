'use server'

import { Todo } from "@/generated/prisma"
import prisma from "../../../lib/prisma"
import { revalidatePath } from "next/cache"

export const sleep = async(seconds: number = 0) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    await sleep(3)

    const todo = await prisma.todo.findFirst({ where: {id} })

    if(!todo){
        throw `Todo con id ${id} no encontrado`
    }

    const updatedTodo = await prisma.todo.update({
        where: {id},
        data: {complete: complete}
    })

    revalidatePath('/dashboard/server-todos')
    return updatedTodo
}

export const addTodo = async(description: string) => {
    try {
        // const {complete, description} = await postSchema.validate(await request.json())
        const todo = await prisma.todo.create({data: { description } })

        revalidatePath('/dashboard/server-todos')
        return todo
    }catch(error){
        return {
            message: "Error creando todo"
        }
    }
}

export const deleteCompleted = async():Promise<void> => {
    await prisma.todo.deleteMany({where: {complete: true}})

    revalidatePath('/dashboard/server-todos')
}