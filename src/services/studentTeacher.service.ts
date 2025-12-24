import { db } from "../db"

// GET teachers of a student
export const getTeachersOfStudent = async (studentId: number) => {
    const [rows] = await db.query(
        `SELECT teachers.*
        FROM teachers
        INNER JOIN student_teacher ON teachers.id = student_teacher.teacher_id
        WHERE student_teacher.student_id = ?`,
        [studentId]
    )

    return rows
}

// ADD teacher to student
export const addTeacherToStudent = async (studentId: number, teacherId: number): Promise<void> => {
    await db.execute(
        'INSERT INTO student_teacher (student_id, teacher_id) VALUES (?, ?)',
        [studentId, teacherId]
    )
}

// REMOVE teacher from student
export const removeTeacherFromStudent = async (studentId: number, teacherId: number): Promise<void> => {
    await db.execute(
        'DELETE FROM student_teacher WHERE student_id = ? AND teacher_id = ?',
        [studentId, teacherId]
    )
}
