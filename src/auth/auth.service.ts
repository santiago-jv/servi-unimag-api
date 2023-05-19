import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  public async loginUser(code: string, password: string) {
    const userFound = await this.userService.findUserByCodeAndPassword(
      code,
      password,
    );

    if (!userFound) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return {
      user: userFound,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };
  }
}
