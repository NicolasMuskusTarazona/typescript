import { Router } from "express"
import * as controller from "../controllers/studentTeacher.controller"

const router = Router()

// Obtener todos los teachers de un student
router.get("/:studentId/teachers",controller.getTeachersOfStudent)
// Agregar un teacher a un student
router.post("/:studentId/teachers",controller.addTeacherToStudent)
// Eliminar un teacher de un student
router.delete("/:studentId/teachers/:teacherId", controller.removeTeacherFromStudent)

export default router
