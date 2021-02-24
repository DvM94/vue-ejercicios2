const express = require("express")
const daoUser = require("../dao/daoUser")
const rtApi = express.Router()

rtApi.get("/welcome",(req,res)=>{
  res.json({
    saludo:"Hola mundo"
  })
})

rtApi.post("/nuevo",(req,res)=>{
  daoUser.save(req.body)
    .then(()=>{
      console.log("guardado en bd",req.body)
      res.json({
        respuesta:"Datos recibidos",
        datos: req.body
      })
    })
    .catch(error => {
      let errors = {}
      if(error.errors.name) errors.name = error.errors.name.message
      if(error.errors.surname) errors.surname = error.errors.surname.message
      res.json({
        respuesta:"Datos NO recibidos",
        errors: errors
      })
    })
})

module.exports=rtApi