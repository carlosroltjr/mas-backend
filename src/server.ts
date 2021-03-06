import 'dotenv/config'
import express from 'express'
import './database'
import cors from 'cors'
import routes from './routes'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Server started on port ${port}`))
