import { getRepository } from 'typeorm'

import { Activity } from '../model/Activity'

interface ActivityData {
  name: string
  activityDate: string
  grade: number
  courseUnitId: string
}

class CreateActivityService {
  public async execute({ name, activityDate, grade, courseUnitId }: ActivityData) {
    const activitiesRepository = getRepository(Activity)

    const activity = {
      name,
      activityDate,
      grade,
      courseUnitId
    }

    await activitiesRepository.save(activity)

    return activity
  }
}

export { CreateActivityService }
