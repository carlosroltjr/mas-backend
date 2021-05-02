import { Router } from 'express'

interface UserRequest {
  name: string
  email: string
  password: string
}

const routes = Router()

routes.get('/test', (request, response) => response.json({ message: 'It is working, Hooray!' }))

routes.post('/user', () => console.log('User route'))
routes.post('/activity', () => console.log('Activity route'))
routes.post('/courseUnit', () => console.log('Course Unit route'))

export default routes
