import {
  STUDENT_ALREADY_EXISTS_ERROR,
  STUDENT_NOT_FOUND_ERROR,
} from '@/constants/errors'
import { Student } from '@/models/student'

export class StudentService {
  private readonly students: Student[] = []

  public getAllStudents(): Student[] {
    return this.students
  }

  public addStudent(student: Student) {
    if (this.findStudent(student.studentNumber)) {
      throw STUDENT_ALREADY_EXISTS_ERROR
    }
    this.students.push(student)
  }

  public findStudent(studentNumber: string) {
    return this.students.find(
      (student) => student.studentNumber === studentNumber
    )
  }

  public updateStudent(
    studentNumber: string,
    updatedStudent: Partial<Student>
  ) {
    const student = this.findStudent(studentNumber)
    if (!student) {
      throw STUDENT_NOT_FOUND_ERROR
    }

    Object.assign(student, updatedStudent)
  }

  public deleteStudent(studentNumber: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.studentNumber === studentNumber
    )
    if (studentIndex === -1) {
      throw STUDENT_NOT_FOUND_ERROR
    }
    this.students.splice(studentIndex, 1)
  }
}
