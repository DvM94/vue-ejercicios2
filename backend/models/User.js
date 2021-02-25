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
  }
})

module.exports = mongoose.model("User", schemaUser)