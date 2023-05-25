
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

  @Column({
    name: 'class_date',
    nullable: false,
  })
  classDate: string;

  @Column({
    name: 'class_time',
    nullable: false,
  })
  classTime: string;

  @Column({
    name: 'class_place',
    nullable: false,
  })
  classPlace: string;

  
  @Column({
    name: 'class_room',
    nullable: false,
  })
  classRoom: string;


}
