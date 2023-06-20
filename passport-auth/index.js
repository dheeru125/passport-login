const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDb } = require("./config/dbConnection.js");
const { router }  = require("./routes/userRoutes.js");
dotenv.config();

const PORT = process.env.PORT || 4000
connectDb();
app.use(express.json());
app.use(cors());

app.use('/auth', router);

app.listen(PORT,()=>{
    console.log(`started backend server on ${PORT}`)
});
