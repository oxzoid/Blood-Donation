const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const DonorModel = require('./models/Donor')

const MONGO_URI = process.env.MONGO_URI;
console.log('MONGO_URI from .env:', process.env.MONGO_URI);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
if(mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })){
  console.log("Connected to MongoDB");
}


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/login',(req,res)=>{
  const  {email,password} = req.body;
  DonorModel.findOne({email:email })
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json("password is incorrect")
      }
    }
    else{
      res.json("No record exists")
    }
  })
})
app.get('/home',(req,res)=>{
  DonorModel.findOne({btype:btype})
  .then(user=>{
    console.log(user.btype)
    res.json(user.btype)
  })
  .catch(err=>res.json(err))
})
app.post('/register',(req,res)=> {
    DonorModel.create(req.body)
    .then(donors=>res.json(donors))
    .catch(err=>res.json(err))
})



const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
