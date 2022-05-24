const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


//creates an express application
const app = express()
require("dotenv").config();
app.use(cors());
app.use(express.json());

//Connecting MongoDB with our app
mongoose.connect(process.env.MONGO_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log(err.message);
})


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})