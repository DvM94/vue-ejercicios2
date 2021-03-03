const express = require("express")
const app = express()
const port = process.env.PORT || 3000
//enrutadores
const rtApi = require("./routers/rtApi")
const rtLang = require("./routers/rtLang")
//base de datos MongoDB
const connection = require("./connection")

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
  next()
})

//conexión a mongo db
connection.on("error",console.error.bind(console,"Error al conectar a mongo"))
connection.once("open",()=>console.log("Conexión con Mongo OK!"))

//enroutadores
app.use("/api",rtApi)
app.use("/lang",rtLang)

//arrancar el servidor
app.listen(port,(err)=>{
  if(err) console.log(`Errores: ${err}`)
  console.log(`Server run on port ${port}`)
})