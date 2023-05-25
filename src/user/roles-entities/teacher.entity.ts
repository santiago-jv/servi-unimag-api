import { User } from '../user.entity';
import { Entity,OneToMany } from 'typeorm';
import { Subject } from 'src/subject/subject.entity';
@Entity({
  name: 'teachers',
})
export class Teacher extends User {

  @OneToMany(() => Subject, subject => subject.teacher,)
  subjects: Subject[];
}
