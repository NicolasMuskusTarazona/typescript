// teacher.controller.ts
import { Request, Response } from "express";
import * as service from "../services/teacher.service";

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const teacher = await service.createTeacher(req.body);
        res.status(201).json(teacher);
    } catch (error) {
        res.status(500).json({ message: "Error creating teacher", error });
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const teachers = await service.getTeachers();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching teachers", error });
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const teacher = await service.getTeacherById(id);
        if (!teacher) {
            res.status(404).json({ message: "Teacher not found" });
            return;
        }
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: "Error fetching teacher", error });
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const teacher = await service.updateTeacher(id, req.body);
        if (!teacher) {
            res.status(404).json({ message: "Teacher not found" });
            return;
        }
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: "Error updating teacher", error });
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deleteTeacher = await service.deleteTeacher(id);

        if (!deleteTeacher) {
            res.status(404).json({ message: "Teacher not found" });
            return;
        }
        res.json(deleteTeacher);
    } catch (error) {
        res.status(500).json({ message: "Error deleting teacher", error });
    }
}
