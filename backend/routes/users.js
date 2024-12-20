const { userDatabase, personDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await userService.load())
})

router.post('/', async (req, res) => {
    const user = await userDatabase.insert(req.body)

    res.send(user)
})

router.delete('/:userId', async (req, res) => {
    await userDatabase.removeBy('id', req.params.personId)

    res.send('ok')
})

module.exports = router