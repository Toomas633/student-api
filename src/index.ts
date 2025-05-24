import express, { Request, Response, NextFunction } from 'express'
import routes from './routes/routes'
import { ErrorResponse } from './models/error'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/', routes)
app.use(
  (err: ErrorResponse, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status ?? 500).json({
      message: err.message ?? 'Internal Server Error',
      status: err.status ?? 500,
    })
  }
)

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`)
})
