import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

//components
import Connection from './database/db.js'
import Routes from './routes/Route.js'


const app = express()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes)

const PORT = 5000

Connection()









app.listen(PORT, () => console.log(`The server is running successfully on PORT ${PORT}`))