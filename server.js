var mysql = require("mysql");
var inquirer = require("inquirer");
var ctable = require("console.table");
const { addDept, addRole, addEmployee } = require("./js/addFunctions");
const { viewDept, viewRoles, viewEmployees } = require("./js/viewFunctions"); 
const {} = require("./js/updateFunctions"); 



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
                "Update employee information", 
                "Exit: I'm all finished."
            ]
        })
        .then(function (answer) {
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

                case "Exit: I'm all finished.":
                    connection.end();

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
        .then(function (answer) {
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
    inquirer
        .prompt({
            name: "views",
            type: "rawlist",
            message: "What would you like to view?",
            choices: [
                "View All Departments",
                "View Roles",
                "View Employees"
            ]
        })
        .then(function (answer) {
            switch (answer.views) {
                case "View All Departments":
                    viewDept();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Employees":
                    viewEmployees()
                    break;

            }
        })
}; 

function update() { 
    connection.query("SELECT * FROM employee", function(err, results){ 
            if (err) throw err; 
        
        inquirer.prompt([
            { 
                name: "choice",
                type: "rawlist", 
                message: "Which employee would you like to update?",
                choices: function() { 
                    var choicesArray = []; 
                    for (var i = 0; i < results.length; i++) { 
                        choicesArray.push(results[i].first_name + last_name); 
                    }
                    return choicesArray; 
                }, 
            }, 
            { 
                name: "role",
                type: "rawlist", 
                message: "What is the employee's new role?",
                choices: function() { 
                    var choicesArray = []; 
                    for (var i = 0; i < results.length; i++) { 
                        choicesArray.push(results[i].title); 
                    }
                    return choicesArray; 
                }, 
            }, 
        ])
        .then(function(answer) {
            var chosenItem; 
            for (var i=0; i < results.length; i++) { 
                if (results[i].item_name === answer.choice) { 
                    chosenItem = results[i]
                }
            } 
            if (chosenItem.highest_bid < parseInt(answer.bid)) {
                connection.query(
                    "UPDATE auctions SET? WHERE ?", 
                    [ 
                      { highest_bid: answer.bid
                    }, 
                    {
                        id: chosenItem.id
                    }  
                    ], 
                    function (error){ 
                        if (error) throw error; 
                    }
                )
             }
            
            
        })
