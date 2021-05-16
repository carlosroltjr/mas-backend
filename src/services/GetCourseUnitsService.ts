import { getRepository } from 'typeorm';

import { CourseUnit } from '../models/CourseUnit';

interface UserId {
  id?: string
}

class GetCourseUnitsService {
  public async execute({ id }: UserId) {
    const courseUnitRepository = getRepository(CourseUnit)

    const courseUnits = courseUnitRepository.find()

    if (!courseUnits) {
      return { message: 'Couse Units not found' }
    }

    return courseUnits
  }
}

export { GetCourseUnitsService }
