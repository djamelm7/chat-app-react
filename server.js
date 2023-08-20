const express = require("express")
const app = express();
const config = require("./config/app");
const router = require("./Router");

const bodyparser = require('body-parser');
require('dotenv').config()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(router)
const port = config.appPort ; 

app.listen(port ,() => {
    console.log(`Server Listening on port ${port}`);
} )