const router = require('express').Router()

const handlers = require('../handlers')

router.post('/send', handlers.sendMessage)

module.exports = router