const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
// Uses dotenv library to encrypt the data for connecting to the database into enviroments variables
require("dotenv").config({ path: ".env" });
const router = require('./network/routes');
// Use the DB_CONNECT url to connect to the database (MongoDB)
db(process.env.DB_CONNECT);

const app = express();
app.use(bodyParser.json());
router(app);
app.use(express.urlencoded({extended : false}));

app.use("/app", express.static('public'));

app.listen(3000);
console.log(`La aplicación está escuchando en el puerto http://localhost:${process.env.PORT}`);