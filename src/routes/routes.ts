import { Router } from 'express'
import { StudentController } from '../controllers/student.controller'
import { StudentService } from '../services/student.service'

const routes = Router()
const studentController = new StudentController(new StudentService())

routes.get('/student', studentController.getAllStudents.bind(studentController))
routes.post('/student', studentController.addStudent.bind(studentController))

routes.get(
  '/student/:studentNumber',
  studentController.getStudent.bind(studentController)
)
routes.patch(
  '/student/:studentNumber',
  studentController.updateStudent.bind(studentController)
)
routes.delete(
  '/student/:studentNumber',
  studentController.deleteStudent.bind(studentController)
)

export default routes
