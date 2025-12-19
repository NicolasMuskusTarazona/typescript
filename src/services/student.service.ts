// Service Student
import {Student} from "../models/student.model"

let students: Student[] = []

// CREATE
export const createStudent = (student: Student): Student =>{
    students.push(student)
    return student
}

// GET ALL
export const getStudent = (): Student[] =>{
    return students
}

// GET BY ID
export const getStudentById = (id: number): Student | undefined =>{
    return students.find(s => s.id === id)
}

// UPDATE
export const updateStudent = (id: number, data: Partial<Student>): Student | null =>{
    const student = students.find(s => s.id === id)
    if(!student) return null

    Object.assign(student,data)
    return student
} 
// DELETE
export const deleteStudent = (id: number): boolean =>{
    const index = students.findIndex(s => s.id === id)
    if(index === -1) return false

    students.splice(index,1)
    return true
}