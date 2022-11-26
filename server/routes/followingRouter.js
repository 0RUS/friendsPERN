const Router = require('express')
const followingController = require('../controllers/followingController')
const router = new Router()

router.get('/max-following', followingController.max)
router.get('/not-following', followingController.not)

module.exports = router