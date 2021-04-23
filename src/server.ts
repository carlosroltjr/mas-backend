import express from 'express'
import cors from 'cors'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`Server started on port ${port}`))
