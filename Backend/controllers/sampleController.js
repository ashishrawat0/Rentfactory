const { sampleHandler } = require('../handlers')

const sample = {
  controllerFunctionName : async (req,res) =>{
    const response = await sampleHandler.handlerFunctionName(req,res)
    return response
  }
}

module.exports = sample