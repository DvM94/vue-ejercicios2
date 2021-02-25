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

//Consultar

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

module.exports = daoUser