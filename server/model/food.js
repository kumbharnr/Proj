const Sequelize = require('sequelize');
const express = require('express')
const conn = require('../config/database')


var sequelize = new Sequelize(conn.DB,conn.USER,conn.PASSWORD,{
    host:conn.HOST,
    dialect:conn.dialect,
    pool:{
        min:conn.pool.min,
        max:conn.pool.max,
        acquire:conn.pool.acquire,
        idle:conn.pool.idle

    }
});

let FoodTable = sequelize.define('allfoods',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    foodName:Sequelize.STRING,
    FoodDetail:Sequelize.STRING,
    foodPrice:Sequelize.INTEGER,
    time:Sequelize.STRING,
    foodImage:Sequelize.STRING


},{
    timestamps:false,
    freezeTableName:true
 });

 exports.sequelize = sequelize
 exports.FoodTable = FoodTable

// FoodTable.sync().then(()=>{
//         console.log("table is created ");
//     }).catch((err)=>{
//         console.error("error is "+err);
//     }).finally(()=>{
//         sequelize.close();
//     })
    

