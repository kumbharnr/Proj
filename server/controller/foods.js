const path =require('path')
const table = require('../model/food')
const sequelize = require('sequelize')
// const express = require('express')
exports.getfoods= (req,res)=>{
    res.status(200).send("working fine")
}
exports.getallfoods=(req,res)=>{
    table.FoodTable.findAll({raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err);
        res.status(400).send(err)
    })
}

