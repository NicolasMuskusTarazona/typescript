// Controller Student
import {Request,Response} from "express"
import * as service from "../services/student.service"

// CREATE
export const create = (req:Request, res: Response) =>{
    const student = service.createStudent(req.body)
    res.status(201).json(student)
}

// GET ALL
export const getAll =(_req: Request, res: Response) => {
    res.json(service.getStudent())
}
// GET BY ID
export const getById =(req: Request, res: Response) =>{
    const id= Number(req.params.id)
    const student = service.getStudentById(id)

    if(!student){
        res.status(404).json({message: "Student not found"})
        return
    }
    res.json(student)
}

// UPDATE
export const update = (req:Request, res: Response) =>{
    const id = Number(req.params.id)
    const student = service.updateStudent(id, req.body)

    if(!student){
        res.status(404).json({message: "Student not found"})
        return
    }
    res.json(student)
}

// DELETE
export const remove = (req: Request,res: Response) => {
    const id = Number(req.params.id)
    const delted = service.deleteStudent(id)

    if(!delted){
        res.status(404).json({message: "Student not found"})
        return
    }
    res.status(204).send()
}