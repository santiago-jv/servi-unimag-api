import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/teacher/:teacherId/students')
  public async getStudentsOfMonitor(@Param('teacherId') teacherId: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Students found',
      data: await this.userService.getStudentsOfMonitor(teacherId),
    };
  }
}
