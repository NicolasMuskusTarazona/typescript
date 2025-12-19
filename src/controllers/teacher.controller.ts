// Controller Teacher
import { Request, Response } from "express"
import * as service from "../services/teacher.service"

// CREATE
export const create = (req: Request, res: Response) => {
    const teacher = service.createTeacher(req.body)
    res.status(201).json(teacher)
}

// GET ALL
export const getAll = (_req: Request, res: Response) => {
    res.json(service.getTeachers())
}

// GET BY ID
export const getById = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const teacher = service.getTeacherById(id)

    if (!teacher) {
        res.status(404).json({ message: "Teacher not found" })
        return
    }

    res.json(teacher)
}

// UPDATE
export const update = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const teacher = service.updateTeacher(id, req.body)

    if (!teacher) {
        res.status(404).json({ message: "Teacher not found" })
        return
    }

    res.json(teacher)
}

// DELETE
export const remove = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const deleted = service.deleteTeacher(id)

    if (!deleted) {
        res.status(404).json({ message: "Teacher not found" })
        return
    }

    res.status(204).send()
}
