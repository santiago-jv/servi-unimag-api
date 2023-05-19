
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn
  
} from 'typeorm';
@Entity({
  name: 'subjects',
})
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
  })
  name: string;

  @ManyToMany(() => User, (user) => user.subjects, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    cascade: true 
  })
  students: User[];
  @JoinColumn({ 
    name:'teacher_id',
  })
  @ManyToOne(() => User, (user) => user.subjects)
  teacher: User;
}
