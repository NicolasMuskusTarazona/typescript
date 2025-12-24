import express from "express"
import studentRoutes from "./routes/student.routes"
import teacherRoutes from "./routes/teacher.routes"
import studentTeacherRoutes from "./routes/studentTeacher.routes"
const app = express()

app.use(express.json())
app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)
app.use("/students", studentTeacherRoutes)

export default app
