import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { Subject } from './subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports:[TypeOrmModule.forFeature([Subject]), UserModule],
})
export class SubjectModule {}
