const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    BType: String,
    City: String,

})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel