import { Request, Response } from 'express'
import { StudentService } from '../services/student.service'
import { STUDENT_NOT_FOUND_ERROR } from '@/constants/errors'
import { STUDENT_DELETED } from '@/constants/messages'

export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  public getAllStudents(_req: Request, res: Response) {
    const students = this.studentService.getAllStudents()
    res.send(students)
  }

  public addStudent(req: Request, res: Response) {
    this.studentService.addStudent(req.body)
    res.status(200).send()
  }

  public getStudent(req: Request, res: Response) {
    const student = this.studentService.findStudent(req.params.studentNumber)
    if (student) {
      res.status(200).send(student)
    } else {
      res.status(404).send(STUDENT_NOT_FOUND_ERROR)
    }
  }

  public updateStudent(req: Request, res: Response) {
    this.studentService.updateStudent(req.params.studentNumber, req.body)
    res.status(200).send()
  }

  public deleteStudent(req: Request, res: Response) {
    this.studentService.deleteStudent(req.params.studentNumber)
    res.status(200).send(STUDENT_DELETED)
  }
}
