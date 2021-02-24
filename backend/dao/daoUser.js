const User = require("../models/User")

const daoUser = {}

//Guardar
daoUser.save = function save(user) {
  return new Promise((resolve, reject) => {
    let member = new User(user)
    member.save()
      .then(member => resolve(member))
      .catch(error => reject(error))
  })
}

module.exports = daoUser