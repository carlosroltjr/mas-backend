import { getRepository } from 'typeorm';

import { Activity } from '../models/Activity';

interface UserId {
  id?: string
}

class GetActivitiesService {
  public async execute({ id }: UserId) {
    const activityRepository = getRepository(Activity)

    const activities = activityRepository.find()

    if (!activities) {
      return { message: 'Activities not found' }
    }

    return activities
  }
}

export { GetActivitiesService }
