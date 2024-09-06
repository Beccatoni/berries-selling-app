const express = require('express');
const berryRoutes = require('./berryRoutes')
const allRoutes = express.Router()





allRoutes.use('/berries', berryRoutes)



module.exports = allRoutes