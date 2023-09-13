const express = require('express');
const db = require("./Config/configDB")
const mongoose =require("mongoose")
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 2109;
const router = require("./routes/userRoute");
//const { Mongoose } = require('mongoose');//
app.use(express.json());



app.use('/api', router);

 app.get('/', (req, res)=>{
     res.send('Welcome Message');
 });


app.listen(PORT, () => {
    console.log(`Sever is running at PORT ${PORT}`)
});
 













  