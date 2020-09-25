const router = require ('express').Router()
const {users, user, updateuser} = require('../controllers/users.controller')


router.get('/allusers', users)
router.get('/:id', user)
router.put('/:id', updateuser)

module.exports = router

