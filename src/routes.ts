import { Router } from 'express'

const routes = Router()

routes.get('/user', (request, response) => response.json({
  message: 'It is working, Hooray!'
}))

export default routes
