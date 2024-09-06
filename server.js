require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const allRoutes = require('./routes/index')



app.use(express.json());






// app routes

app.use('/api', allRoutes);





mongoose.connect(process.env.DB)
.then(res => console.log("Database connected successfully"))











app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})







