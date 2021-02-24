const express = require("express")
const app = express()
const port = process.env.PORT || 3000
//enrutadores
const rtApi = require("./routers/rtApi")
//base de datos MongoDB
const connection = require("./connection")

//middlewares
app.use(express.json())

//conexión a mongo db
connection.on("error",console.error.bind(console,"Error al conectar a mongo"))
connection.once("open",()=>console.log("Conexión con Mongo OK!"))

//enroutadores
app.use("/api",rtApi)

//arrancar el servidor
app.listen(port,(err)=>{
  if(err) console.log(`Errores: ${err}`)
  console.log(`Server run on port ${port}`)
})