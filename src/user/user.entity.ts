import { Subject } from 'src/subject/subject.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from './constants/user-role.enum';
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'fullname',
    nullable: false,
  })
  fullName: string;

  @Column({
    name: 'career',
    nullable: false,
  })
  career: string;

  @Column({
    name: 'code',
    nullable: false,
    unique:true
  })
  code: string;

  @Column({
    name: 'phone',
    nullable: false,
    unique:true
  })
  phone: string;

  @Column({
    name: 'semester',
    nullable: false,
  })
  semester: string;
  @Column({
    name: 'role',
    type:'enum',
    enum: UserRole,
    default: UserRole.Student,
  })
  role: UserRole;

  @ManyToMany(() => Subject, (subject) => subject.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'student_subject',
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
  })
  subjects: Subject[];
  @Column({
    name: 'password',
    nullable: false,
  })
  password: string;

}
