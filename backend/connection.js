const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ejercicio9",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

module.exports=mongoose.connection