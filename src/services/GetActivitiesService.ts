import { getRepository } from 'typeorm';

import { Activity } from '../model/Activity';

interface UserId {
  id?: string
}

class GetActivitiesService {
  public async execute({ id }: UserId) {
    console.log('Id do usuário da atividade: ' + id)

    const activityRepository = getRepository(Activity)

    const activities = await activityRepository.find({relations: ["courseUnit"]})

    if (!activities) {
      return { message: 'Activities not found' }
    }

    return activities
  }
}

export { GetActivitiesService }
