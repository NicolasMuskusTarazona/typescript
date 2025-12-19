// Service Teacher
import { Teacher } from "../models/teacher.model"

let teachers: Teacher[] = []

// CREATE
export const createTeacher = (teacher: Teacher): Teacher => {
    teachers.push(teacher)
    return teacher
}

// GET ALL
export const getTeachers = (): Teacher[] => {
    return teachers
}

// GET BY ID
export const getTeacherById = (id: number): Teacher | undefined => {
    return teachers.find(t => t.id === id)
}

// UPDATE
export const updateTeacher = (
    id: number,
    data: Partial<Teacher>
): Teacher | null => {
    const teacher = teachers.find(t => t.id === id)
    if (!teacher) return null

    Object.assign(teacher, data)
    return teacher
}

// DELETE
export const deleteTeacher = (id: number): boolean => {
    const index = teachers.findIndex(t => t.id === id)
    if (index === -1) return false

    teachers.splice(index, 1)
    return true
}
