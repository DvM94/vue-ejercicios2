const { resolveDirective } = require("vue")
const User = require("../models/User")

const daoUser = {}

//Guardar
daoUser.saveUser = function saveUser(user) {
  return new Promise((resolve, reject) => {
    let member = new User(user)
    member.save()
      .then(member => resolve(member))
      .catch(error => reject(error))
  })
}

//Listar

daoUser.showUsers = function showUsers() {
  return new Promise((resolve, reject) => {
    resolve(User.find().lean())
  })
}

//Eliminar

daoUser.deleteUser = function deleteUser(id) {
  return new Promise((resolve, reject) => {
    resolve(User.findByIdAndDelete(id))
  })
}

//Logear

daoUser.login = function login(email,password){
  return new Promise((resolved,reject)=>{
    User.findOne({email:email})
      .then(member=>{
        if(member){
          if(member.password==password)
            resolved(member)
          else
            resolved(null)
        }
        else{
          resolved(null)
        }
      })
  })
}

module.exports = daoUser