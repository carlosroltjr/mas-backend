import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { User } from '../models/User'

interface UserData {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: UserData): Promise<User | {}> {
    const usersRepository = getRepository(User)

    const userExists = await usersRepository.findOne({ email })

    if (userExists) {
      return { error: 'E-mail addres already exist' }
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
