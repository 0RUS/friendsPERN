const Router = require('express')
const router = new Router()
const followingRouter = require('./followingRouter')
const personsRouter = require('./personsRouter')

router.use('/persons', personsRouter)
router.use('/', followingRouter)

module.exports = router