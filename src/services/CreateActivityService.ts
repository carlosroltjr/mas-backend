import { getRepository } from 'typeorm'

import { Activity } from '../models/Activity'

interface ActivityData {
  name: string
  activityDate: string
  courseUnitId: string
}

class CreateActivityService {
  public async execute({ name, activityDate, courseUnitId }: ActivityData) {
    const activitiesRepository = getRepository(Activity)

    const activity = {
      name,
      activityDate,
      courseUnitId
    }

    await activitiesRepository.save(activity)

    return activity
  }
}

export { CreateActivityService }
