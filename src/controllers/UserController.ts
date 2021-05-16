import { Request, Response } from 'express'

import { CreateUserService } from '../services/CreateUserService'
import { GetUserService } from '../services/GetUserService'

class UserController {
  async create(request: Request, response: Response) {
    const userData = request.body
    const createUser = new CreateUserService()
    
    const user = await createUser.execute(userData)

    return response.json(user)
  }

  async show(request: Request, response: Response) {
    const userId = request.body.user

    const getUser = new GetUserService()

    const user = await getUser.execute(userId)

    return response.json(user)
  }
}

export { UserController }
