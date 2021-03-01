const express = require("express")
const fs = require("fs")
const daoLang = require("../dao/daoLang")
const rtLang = express.Router()

rtLang.get("/:languaje",(req,res)=>{
  let lang = req.params.languaje
  fs.readFile(`./locals/${lang}.json`,"utf-8",(err,data)=>{
    res.json(JSON.parse(data))
  })
})

module.exports=rtLang