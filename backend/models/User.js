const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaUser = new Schema({
  name: {
    type: String,
    required: [true, "El nombre no puede ir vacío"],
    validate: {
      validator: function (name) { return /^[a-zÀ-ÿ\u00f1\u00d1\s]{3,}$/i.test(name) },
      message: "El nombre no es válido"
    }
  },
  surname: {
    type: String,
    required: [true, "El apellido no puede ir vacío"],
    validate: {
      validator: function (surname) { return /^[a-zÀ-ÿ\u00f1\u00d1\s]{3,}$/i.test(surname) },
      message: "El apellido no es válido"
    }
  },
  phone: {
    type: String,
    required: [true, "El teléfono no puede ir vacío"],
    validate: {
      validator: function (phone) { return /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/i.test(phone) },
      message: "El teléfono no es válido"
    }
  },
  email: {
    type: String,
    required: [true, "El email no puede ir vacío"],
    lowercase: true,
    validate: {
      validator: function (email) { return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email) },
      message: "El email no es válido"
    }
  },
  password: {
    type: String,
    required: [true, "La contraseña no puede ir vacía"],
    validate: {
      validator: function (password) { return /^[a-zÀ-ÿ0-9\u00f1\u00d1\s]{6,}$/i.test(password) },
      message: "La contraseña ha de tener un mínimo de 6 letras o números"
    }
  }
})

module.exports = mongoose.model("User", schemaUser)