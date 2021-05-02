import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Activity } from './Activity'

@Entity("courseUnits")
class CourseUnit {
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
  description: string

  @OneToMany(() => Activity, activity => activity.courseUnit)
  activities: Activity[]

  @CreateDateColumn()
  created_at: Date
}

export { CourseUnit }
