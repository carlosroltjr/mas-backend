import { Request, Response } from "express"

import { AuthUserService } from "../services/AuthUserService"

class AuthController {
  async create(request: Request, response: Response) {
    const authData = request.body

    const authUser = new AuthUserService()

    const auth = await authUser.execute(authData)

    return response.json(auth)
  }
}

export { AuthController }