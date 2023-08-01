const express = require("express")
const app = express();
const config = require("./config/app")
require('dotenv').config()


const port = config.appPort ; 

app.listen(port ,() => {
    console.log(`Server Listening on port ${port}`);
} )