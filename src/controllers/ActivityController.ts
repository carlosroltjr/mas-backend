import { Request, Response } from 'express'

class ActivityController {
  async create(request: Request, response: Response) {
    const { name, activityDate, courseUnitId } = request.body

    return response.json({
      name,
      activityDate,
      courseUnitId
    })
  }
}

export { ActivityController }
