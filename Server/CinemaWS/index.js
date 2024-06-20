const express = require('express')
const cors = require('cors')
const connectUsersDB = require('./configs/UserDB')

const usersFileRouter = require('./routers/usersRouter')
const permissionsFileRouter = require('./routers/permissionsRouter')
const userDbRouter = require('./routers/userRouter')
const membersRouter = require('./routers/membersRouter')
const moviesRouter = require('./routers/moviesRouter')
const subscriptionsRouter = require('./routers/subscriptionsRouter')
const authRoouter = require('./routers/authRouter')
const accessRouter = require('./routers/accessRouter')

connectUsersDB()

const port = 3000

const app = express()

app.use(cors())
app.use(express.json())

//Routers
app.use('/users', usersFileRouter)
app.use('/permissions', permissionsFileRouter)
app.use('/user', userDbRouter)
app.use('/members', membersRouter)
app.use('/movies', moviesRouter)
app.use('/subscriptions', subscriptionsRouter)
app.use('/auth', authRoouter)
app.use('/access', accessRouter)




app.listen(port)