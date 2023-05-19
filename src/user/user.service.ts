import { Inject, Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectService } from 'src/subject/subject.service';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => SubjectService)) private readonly subjectService: SubjectService,
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

  async getStudentsOfMonitor(userId: string) {
    const teacher = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    return (await this.subjectService.getOneByTeacher(teacher.id)).students;
  }
}
