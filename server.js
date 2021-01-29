var mysql = require("mysql");
var inquirer = require("inquirer");
var ctable = require("console.table"); 
const { addRole, addEmployee } = require("./js/addFunctions");



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
    inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add a new department, role, or employee",
        "View departments, roles, and/or employees",
        "Update employee information"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add a new department, role, or employee":
        addNew();
        break;

      case "View departments, roles, and/or employees":
        view();
        break;

      case "Update employee information":
        update();
        break;

      
      }
    });
}

function addNew() { 
    inquirer
    .prompt({
      name: "addChoice",
      type: "rawlist",
      message: "What would you like to add?",
      choices: [
        "Add a new department",
        "Add a new employee role", 
        "Add a new employee"
      ]
    })
    .then(function(answer) {
      switch (answer.addChoice) {
      case "Add a new department":
        addDept(); 
        break;

      case "Add a new employee role":
        addRole(); 
        break;

      case "Add a new employee":
        addEmployee()
        break;

      }
    })
}



















function view() { 

}

function update() { 

}