const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    btype: String,
    city: String,   

})

const DonorModel = mongoose.model("donors", DonorSchema)

module.exports = DonorModel