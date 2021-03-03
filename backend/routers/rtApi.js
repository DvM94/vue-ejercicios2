const express = require("express")
const daoUser = require("../dao/daoUser")
const rtApi = express.Router()

rtApi.get("/welcome",(req,res)=>{
  res.json({
    saludo:"Hola mundo"
  })
})

rtApi.post("/nuevo",(req,res)=>{
  daoUser.saveUser(req.body)
    .then(()=>{
      res.json({
        respuesta:"Datos recibidos",
        datos: req.body
      })
    })
    .catch(error => {
      let errors = {}
      if(error.errors.name) errors.name = error.errors.name.message
      if(error.errors.surname) errors.surname = error.errors.surname.message
      if(error.errors.phone) errors.phone = error.errors.phone.message
      if(error.errors.email) errors.email = error.errors.email.message
      if(error.errors.password) errors.password = error.errors.password.message
      res.json({
        respuesta:"Datos NO recibidos",
        errors: errors
      })
    })
})

rtApi.get("/lista",(req,res)=>{
  daoUser.showUsers()
    .then(datos=>{
      res.json(datos)
    })
})

rtApi.post("/eliminar",(req,res)=>{
  daoUser.deleteUser(req.body.id)
    .then(datos=>{
      res.json(datos)
    })
})

rtApi.post("/login",(req,res)=>{
  daoUser.login(req.body.email,req.body.password)
    .then(datos=>res.json(datos))
})

module.exports=rtApi