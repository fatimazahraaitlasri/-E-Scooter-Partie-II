const mongoose = require('mongoose');

const connectDB = async () => {
    // console.log(process.env.MONGO_URI)
    try{
        const conn= await mongoose.connect("mongodb+srv://art:1234@cluster0.blq81ce.mongodb.net/eskooter?retryWrites=true&w=majority")
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB
