import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { SubjectModule } from 'src/subject/subject.module';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => SubjectModule)],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
