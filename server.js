var express = require("express");
var mysql = require("mysql");

// Express server setup for localhost and parsing
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mysql setup for localhost database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Protoss7",
    database: "frienddb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
});

require("./app/routing/apiRoutes")(app, connection);
require("./app/routing/htmlRoutes")(app, connection);

app.listen(PORT, function () {
    console.log("\nListening\n");
});