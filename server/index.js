// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

// middleware
app.use(authRouter);

// Connections
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => {
        console.log('Connection Successful');
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});