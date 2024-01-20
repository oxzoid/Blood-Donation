const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const EmployeeModel = require('./models/Employee')

const MONGO_URI = process.env.MONGO_URI;
console.log('MONGO_URI from .env:', process.env.MONGO_URI);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
if(mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })){
  console.log("Connected to MongoDB");
}
app.post('/register',(req,res)=> {
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})



const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
