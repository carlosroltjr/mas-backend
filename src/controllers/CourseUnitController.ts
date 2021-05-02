import { Request, Response } from 'express'

class CourseUnitController {
  async create(request: Request, response: Response) {
    const { name, description } = request.body
    
    return response.json({
      name,
      description
    })
  }
}

export { CourseUnitController }
