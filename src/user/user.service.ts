import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor() {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await hash(createUserDto.password, 6),
    };

    const user = null;
    // await this.repositorio.user.create({
    //   data,
    // });

    return {
      ...user,
      password: null,
    };
  }

  async findByEmail(email: string) {
    const user = null;
    // await this.repositorio.user.findUnique({ where: { email } });
    return user || null;
  }

  async findUserById(id: string) {
    const user = null;
    // await this.repositorio.user.findUnique({ where: { id } });
    return user ?? null;
  }

  async findAll() {
    const user = null;
    // await this.repositorio.user.findMany();
    return user ?? null;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = null;
    // await this.repositorio.user.findUnique({ where: { id } });

    if (!user) throw new Error('User not found!');

    const userUpdated = null;
    // await this.repositorio.user.update({
    //   where: { id },
    //   data,
    // });

    return userUpdated ?? null;
  }

  async remove(id: string) {
    const user = null;
    // await this.repositorio.user.findUnique({ where: { id } });

    if (!user) throw new Error('User not found!');

    // await this null.repositorio.user.delete({ where: { id } });

    return 'User Deleted';
  }
}
