import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  public async findUserByCodeAndPassword(code: string, password: string) {
    const userFound = await this.userRepository.findOne({
      where: {
        code,
        password,
      },
    });

    if (!userFound) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return userFound;
  }
  async findById(userId: string) {
    return this.userRepository.findOne({ where: { id: userId } });
  }
}
