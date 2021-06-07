import { getRepository } from 'typeorm'

import { Activity } from '../model/Activity'

interface ActivityData {
  name: string
  grade: number
  activityDate: string
  courseUnitId: string
}

class CreateActivityService {
  public async execute({ name, grade, activityDate, courseUnitId }: ActivityData): Promise<Activity> {
    const activitiesRepository = getRepository(Activity)

    const activity = activitiesRepository.create({
      name,
      grade,
      activityDate,
      courseUnitId
    })

    await activitiesRepository.save(activity)

    return activity
  }
}

export { CreateActivityService }
