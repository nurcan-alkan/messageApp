const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRouter = require('./routes/users')
const indexRouter = require('./routes/index')
const router = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.use(cors())

app.set('view engine', 'pug')

router.use('/users', usersRouter)
router.use('/', indexRouter)

app.listen(3000, () => {
    console. log('started listening on 3000')
})