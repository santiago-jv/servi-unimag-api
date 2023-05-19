import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
interface LoginData {
  code: string;
  password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  public async login(@Body() loginData: LoginData) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Usuario autenticado',
      data: await this.authService.loginUser(
        loginData.code,
        loginData.password,
      ),
    };
  }
}
