const express = require('express');
const { addBerries, listAllBerries, getSingleBerry, updateBerry, deleteBerry } = require('../controllers/berryController');
const { deleteMany } = require('../models/berriesModel');

const berryRoute = express.Router()


berryRoute.post('/add', addBerries);
berryRoute.get('/list-all', listAllBerries)
berryRoute.get('/get-single/:id', getSingleBerry);
berryRoute.put('/update/:id', updateBerry)
berryRoute.delete('/delete/:id', deleteBerry)

module.exports = berryRoute;