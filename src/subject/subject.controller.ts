import { Controller, Get, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
    constructor(private readonly subjectService:SubjectService) {
    }

    @Post("/student")
    public async associateStudentToSubject() {
        //TODO: Resolver internal server error
        const result = await this.subjectService.associateStudentToSubject("37658c34-93b6-40cd-9b64-e2a31d795328", "37658c34-93b6-40cd-9b64-e2a3qd795328")
    }

    @Get("")
    public async getSubjects() {
        //TODO: Agregar data del monitor
        const result = await this.subjectService.getSubjects()

        return {
            data:result
        }
    }

    //TODO: Lista de estudiantes asociados al monitor.
    //TODO: Add edit for subject time to start place, date, room
}
