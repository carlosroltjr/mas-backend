import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { CourseUnit } from './CourseUnit'

@Entity("activies")
class Activity {
  constructor(){
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  activityDate: Date

  @ManyToOne(() => CourseUnit, courseUnit => courseUnit.activities)
  courseUnit: CourseUnit

  @CreateDateColumn()
  created_at: Date
}

export { Activity }
