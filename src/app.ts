import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes
app.use('/api/v1/users/', UserRoutes)

//Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('working successfully!')
  //throw new ApiError(400,"progamming is vul")
  next('progamming is vul')
})

//global error handler
app.use(globalErrorHandler)

export default app
