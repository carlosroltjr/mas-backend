import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getRepository } from 'typeorm'

import authConfig from '../config/auth'
import { User } from '../model/User'

interface AuthData {
  email: string,
  password: string
}

class AuthUserService {
  public async execute({ email, password }: AuthData): Promise<String | {}> {
    const usersRopository = getRepository(User)

    const user = await usersRopository.findOne({ email })

    if (!user) {
      return { error: 'User not found' }
    }

    const comparePassword = await compare(password, user.password)

    if (!comparePassword) {
      return { error: 'Incorrect password' }
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({"role":"user"}, secret, {
      subject: user.id,
      expiresIn
    })

    const {id, name, email:emailUser} = user 

    return {
      user:{
          id,
          name,
          email: emailUser
      },
      token
    }
  }
}

export { AuthUserService }
