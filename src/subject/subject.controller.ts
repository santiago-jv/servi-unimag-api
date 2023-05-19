import { Body, Controller, Get, HttpStatus, Patch, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Patch('/student')
  public async associateStudentToSubject(
    @Body() associationData: { studentId: string; subjectId: string },
  ) {
    await this.subjectService.associateStudentToSubject(
      associationData.studentId,
      associationData.subjectId,
    );

    return {
      statusCode: HttpStatus.OK,
      message: 'Student associated',
      data: null,
    };
  }

  @Get('')
  public async getSubjects() {
    const result = await this.subjectService.getSubjects();

    return {
      statusCode: HttpStatus.OK,
      message: 'subjects found',
      data: result,
    };
  }

  //TODO: Add edit for subject time to start place, date, room
}
