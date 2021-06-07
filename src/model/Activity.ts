import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { CourseUnit } from './CourseUnit'

@Entity("activities")
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
  activityDate: string

  @Column()
  courseUnitId: string

  @Column()
  grade: number

  @ManyToOne(() => CourseUnit, courseUnit => courseUnit.activities)
  @JoinTable()
  courseUnit: CourseUnit

  @CreateDateColumn()
  createdAt: Date
}

export { Activity }
