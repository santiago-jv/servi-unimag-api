import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    @Inject(forwardRef(() => UserService)) private readonly userService: UserService,
  ) {}
  async associateStudentToSubject(studentId: string, subjectId: string) {
    const subjectFound = await this.subjectRepository.findOne({
      where: { id: subjectId },
      relations: ['students'],
    });
    const studentFound = await this.userService.findById(studentId);
    subjectFound.students.push(studentFound);
    await this.subjectRepository.save(subjectFound);
  }

  async getSubjects() {
    return this.subjectRepository.find({
      relations:['teacher']
    });
  }

  async getOneByTeacher(teacherId:string) {
    return this.subjectRepository.findOne({
      where:{
        teacher:{
          id:teacherId
        }
      },
      relations:['students']
    })
  }

}
