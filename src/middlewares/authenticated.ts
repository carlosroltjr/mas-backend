import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface Token {
  subject: string,
  role: string
}

export default (request: Request, response: Response, next: NextFunction) => {
  const headerAuthorization = request.headers.authorization

  if (!headerAuthorization) {
    return { error: 'JWT not found' }
  }

  const [ , token ] = headerAuthorization.split(' ')

  const verifyToken = verify(token, authConfig.jwt.secret)

  if (!verifyToken) {
    return { error: 'Invalid token' }
  }

  const { subject, role } = verifyToken as Token

  request.body = {
    id: subject,
    role: role
  }

  return next()
}
