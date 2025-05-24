import { STUDENT_ALREADY_EXISTS, STUDENT_NOT_FOUND } from './messages'

export const STUDENT_NOT_FOUND_ERROR = new Error(STUDENT_NOT_FOUND, {
  cause: { status: 404 },
})
export const STUDENT_ALREADY_EXISTS_ERROR = new Error(STUDENT_ALREADY_EXISTS, {
  cause: { status: 409 },
})
