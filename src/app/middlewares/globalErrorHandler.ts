import { Request, Response, NextFunction } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import config from '../../config'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statuscode = 500
  const message = 'something went wrong'
  const errorMessages: IGenericErrorMessage[] = []

  res.status(statuscode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env != 'production' ? err?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
