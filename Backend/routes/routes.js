const express = require('express')
const { sampleController } = require('../controllers')

module.exports = ()=>{
  const router = express.Router()

  router.post('/routeName',
    sampleController.controllerFunctionName
  )

  return router
}