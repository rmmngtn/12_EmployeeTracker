var mysql = require("mysql");
var inquirer = require("inquirer");
var ctable = require("console.table"); 

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employeetracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    init();
});

function init() { 
    inquirer.prompt({
}