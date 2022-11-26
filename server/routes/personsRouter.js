const Router = require('express')
const personController = require('../controllers/personController')
const router = new Router()

router.get('/', personController.getAll)
router.get('/:id', personController.getOne)
router.get('/:id/friends', personController.getFriends)
router.post('/new', personController.create)

module.exports = router