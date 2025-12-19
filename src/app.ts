import express from "express"
import studentRoutes from "./routes/student.routes"
import teacherRoutes from "./routes/teacher.routes"
const app = express()

app.use(express.json())
app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)

export default app
