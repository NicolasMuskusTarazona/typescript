import { Request, Response } from "express"
import * as service from "../services/studentTeacher.service"

// GET /students/:studentId/teachers
export const getTeachersOfStudent = async (req: Request, res: Response) => {
    try {
        const studentId = Number(req.params.studentId)

        if (isNaN(studentId)) {
            return res.status(400).json({ message: "Invalid student id" })
        }

        const teachers = await service.getTeachersOfStudent(studentId)

        res.status(200).json(teachers)
    } catch (error) {
        res.status(500).json({
            message: "Error getting teachers of student",
            error
        })
    }
}

// POST /students/:studentId/teachers
export const addTeacherToStudent = async (req: Request, res: Response) => {
    try {
        const studentId = Number(req.params.studentId)
        const { teacherId } = req.body

        if (isNaN(studentId) || !teacherId) {
            return res.status(400).json({ message: "Invalid data" })
        }

        await service.addTeacherToStudent(studentId, teacherId)

        res.status(201).json({
            message: "Teacher added to student"
        })
    } catch (error: any) {
        // DUPLICATE RELATION
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "Teacher already assigned to student"
            })
        }
        res.status(500).json({
            message: "Error adding teacher to student",
            error
        })
    }
}

// DELETE /students/:studentId/teachers/:teacherId
export const removeTeacherFromStudent = async (req: Request, res: Response) => {
    try {
        const studentId = Number(req.params.studentId)
        const teacherId = Number(req.params.teacherId)

        if (isNaN(studentId) || isNaN(teacherId)) {
            return res.status(400).json({ message: "Invalid ids" })
        }

        await service.removeTeacherFromStudent(studentId, teacherId)

        res.status(200).json({
            message: "Teacher removed from student"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error removing teacher from student",
            error
        })
    }
}
