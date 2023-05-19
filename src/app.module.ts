import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/subject.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME ?? 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME ?? 'servi_unimag',
      entities: [User, Subject],
      synchronize: true,
      
    }),
    SubjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
