// Service Student
import {Student} from "../models/student.model"
import { db } from "../db";

let students: Student[] = []

// GET ALL
export const getStudent = async (): Promise<Student[]> => {
    const [rows] = await db.query('SELECT * FROM students');
    return rows as Student[];
}

// GET BY ID
export const getStudentById = async (id: number): Promise<Student | null> => {
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
    return (rows as Student[])[0] || null;
}

// CREATE
export const createStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
    const [result] = await db.execute(
        'INSERT INTO students (name, lastname, age, active) VALUES (?, ?, ?, ?)',
        [student.name,student.lastname, student.age, student.active]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, ...student };
}

// UPDATE
export const updateStudent = async (id: number, data: Partial<Student>): Promise<Student | null> => {
    await db.execute(
        'UPDATE students SET name = ?, lastname = ?, age = ?, active = ? WHERE id = ?',
        [data.name,data.lastname, data.age, data.active, id]
    );
    return getStudentById(id);
}

// DELETE
export const deleteStudent = async (id: number): Promise<Student | null> => {
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
    const student = (rows as Student[])[0];
    if (!student) return null;
    await db.execute('DELETE FROM students WHERE id = ?', [id]);
    return student;
}
