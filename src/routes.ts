import { Router } from 'express'

import { ActivityController } from './controllers/ActivityController'
import { CourseUnitController } from './controllers/CourseUnitController'
import { UserController } from './controllers/UserController'

const activityController = new ActivityController()
const courseUnitController = new CourseUnitController()
const userController = new UserController()

const routes = Router()

routes.get('/test', (request, response) => response.json({ message: 'It is working, Hooray!' }))

routes.post('/activity', activityController.create)
routes.post('/courseUnit', courseUnitController.create)
routes.post('/user', userController.create)

export default routes
