require('dotenv').config();
const mongoose = require('mongoose');

const DBpassword = process.env.DB_PASSWORD
const DBusername = process.env.DB_USERNAME
// const DB = process.env.DATABASE


 const DATABASE=`mongodb+srv://${DBusername}:${DBpassword}@cluster0.si5s27q.mongodb.net/`
 


mongoose.connect(DATABASE).then(() => {
    console.log('Database Connected')
}).catch((error) => {
    console.log(error.message)
});