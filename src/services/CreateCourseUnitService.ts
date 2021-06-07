import { getRepository } from 'typeorm'

import { CourseUnit } from '../model/CourseUnit'

interface CourseUnitData {
  name: string
  description: string
}

class CreateCourseUnitService {
  public async execute({ name, description }: CourseUnitData): Promise<CourseUnit>{
    const courseUnitsRepository = getRepository(CourseUnit)

    const courseUnit = courseUnitsRepository.create({
      name,
      description
  })

    await courseUnitsRepository.save(courseUnit)

    return courseUnit
  }
}

export { CreateCourseUnitService }
