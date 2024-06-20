const express = require('express')
const cors = require('cors')
const connectSubscriptionsDB = require('./configs/subscriptionsDB')

const usersRouter = require('./routers/UsersDbRouter')
const moviesRouter = require('./routers/MoviesDbRouter')
const subscriptionsRouter = require('./routers/SubscriptionsRouter')

const getallUsers = require('./BLL/usersBll')
const getAllMovies = require('./BLL/moviesBll')


const app = express()
const port = 8000

connectSubscriptionsDB()

app.use(cors())
app.use(express.json())


getallUsers()
getAllMovies()

//routers
app.use('/members', usersRouter)
app.use('/movies', moviesRouter)
app.use('/subscriptions', subscriptionsRouter)


app.listen(port)