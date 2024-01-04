import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { hash } from 'bcrypt'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor() {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await hash(createUserDto.password, 6),
    }

    const user = null

    return {
      ...user,
      password: null,
    }
  }

  async findByEmail(email: string) {
    const user = null

    return user || null
  }

  async findUserById(id: string) {
    const user = null

    return user ?? null
  }

  async findAll() {
    const user = null

    return user ?? null
  }

  async update(id: string, data: UpdateUserDto) {
    const user = null

    if (!user) throw new Error('User not found!')

    const userUpdated = null

    return userUpdated ?? null
  }

  async remove(id: string) {
    return 'User Deleted'
  }
}
