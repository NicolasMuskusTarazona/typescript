// teacher.service.ts
import { Teacher } from "../models/teacher.model";
import { db } from "../db";

// GET ALL
export const getTeachers = async (): Promise<Teacher[]> => {
    const [rows] = await db.query('SELECT * FROM teachers');
    return rows as Teacher[];
}

// GET BY ID
export const getTeacherById = async (id: number): Promise<Teacher | null> => {
    const [rows] = await db.query('SELECT * FROM teachers WHERE id = ?', [id]);
    return (rows as Teacher[])[0] || null;
}

// CREATE
export const createTeacher = async (teacher: Omit<Teacher, 'id'>): Promise<Teacher> => {
    const [result] = await db.execute(
        'INSERT INTO teachers (name, lastname , subject) VALUES (?, ?, ?)',
        [teacher.name,teacher.lastname, teacher.subject]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, ...teacher };
}

// UPDATE
export const updateTeacher = async (id: number, data: Partial<Teacher>): Promise<Teacher | null> => {
    await db.execute(
        'UPDATE teachers SET name = ?, lastname = ?, subject = ? WHERE id = ?',
        [data.name,data.lastname, data.subject, id]
    );
    return getTeacherById(id);
}

// DELETE
export const deleteTeacher = async (id: number): Promise<Teacher | null> => {
    const [rows] = await db.query('SELECT * FROM teachers WHERE id = ?', [id]);
    const teacher = (rows as Teacher[])[0];
    if (!teacher) return null;
    await db.execute('DELETE FROM teachers WHERE id = ?', [id]);
    return teacher;
}