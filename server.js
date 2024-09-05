require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');



app.use(express.json());

mongoose.connect(process.env.DB)
.then(res => console.log("Database connected successfully"))











app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})







