// student.controller.ts
import { Request, Response } from "express";
import * as service from "../services/student.service";

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const student = await service.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: "Error creating student", error });
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const students = await service.getStudent();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Error fetching students", error });
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const student = await service.getStudentById(id);
        if (!student) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Error fetching student", error });
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const student = await service.updateStudent(id, req.body);
        if (!student) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Error updating student", error });
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deletedStudent = await service.deleteStudent(id);

        if (!deletedStudent) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.json(deletedStudent);
    } catch (error) {
        res.status(500).json({ message: "Error deleting student", error });
    }
}
