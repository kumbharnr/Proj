const express = require('express');
// const Sequelize = require('sequelize');
// const conn = require('./config/database')
const cors = require('cors')
const port = 8000;
const shopRoutes = require('./routes/foodDetails')

const app=express();
app.use(cors());

app.use(shopRoutes)
app.get('/getFoodDetails',shopRoutes)

// app.post('/storedata')

app.listen(port,()=>{
    console.log("listening at 8000");
})