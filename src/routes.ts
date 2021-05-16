import { Router } from 'express'

import { AuthController } from './controllers/AuthController'
import { ActivityController } from './controllers/ActivityController'
import { CourseUnitController } from './controllers/CourseUnitController'
import { UserController } from './controllers/UserController'
import authenticated from './middlewares/authenticated'

const authController = new AuthController()
const activityController = new ActivityController()
const courseUnitController = new CourseUnitController()
const userController = new UserController()

const routes = Router()

routes.post('/auth', authController.create)

routes.get('/user', authenticated, userController.show)
routes.get('/activity', authenticated, activityController.show)
routes.get('/courseUnit', authenticated, courseUnitController.show)

routes.post('/user', userController.create)
routes.post('/activity', authenticated, activityController.create)
routes.post('/courseUnit', authenticated, courseUnitController.create)

export default routes
