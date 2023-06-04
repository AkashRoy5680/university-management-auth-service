import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes
app.use('/api/v1/users/', usersRouter)

//Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('working successfully!')
  //throw new ApiError(400,"progamming is vul")
  next('progamming is vul')
})

//global error handler
app.use(globalErrorHandler)

export default app
