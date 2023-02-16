
const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
  }).then(()=>console.log("Database connected"));
  

}

module.exports = connectDB