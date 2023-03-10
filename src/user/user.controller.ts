import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { UserRepository } from './user.repository'

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData)
    return userData
  }

  @Get()
  async listUsers() {
    this.userRepository.list()
  }
}
