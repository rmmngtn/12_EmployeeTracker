var mysql = require("mysql");
var inquirer = require("inquirer");
var ctable = require("console.table");
// const { addDept, addRole, addEmployee } = require("./js/addFunctions");
// const { viewDept, viewRoles, viewEmployees } = require("./js/viewFunctions"); 
// const update =
 require("./js/updateFunctions"); 




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
            type: "list",
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
            type: "list",
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
            type: "list",
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

function addDept() { 
    inquirer.prompt([
        {
            name: "dept", 
            type: "input", 
            message: "What is the new department?"
        }
    ])
    .then(function(answer) { 
        connection.query( 
            "INSERT INTO department SET?", 
            { 
                id: answer.id, 
                dept_name: answer.dept, 
                
            }, 
            function(err) { 
                if (err) throw err; 
                console.log("Your department was created!"); 

                init(); 
            })
    })
}; 

function addRole() { 
    inquirer.prompt([
        {
            name: "title", 
            type: "input", 
            message: "What is the new position title?"
        }, 
        { 
            name: "salary", 
            type: "input", 
            message: "What is the salary of this position?"
        }, 
        { 
            name: "dept", 
            type: "input", 
            message: "In which department will this position belong?"
        }
    ])
    .then(function(answer) { 
        connection.query( 
            "INSERT INTO role SET?", 
            { 
                id: answer.id, 
                title: answer.title, 
                salary: answer.salary, 
         // ****THIS NEEDS TO BE TURNED INTO DEPARTMENT_ID#****
                department_id: answer.dept
        
            }, 
            function(err) { 
                if (err) throw err; 
                console.log("Your new role was created!"); 

                init(); 
            })
    })
}; 


function addEmployee() { 
    inquirer.prompt([
        {
            name: "firstName", 
            type: "input", 
            message: "What is the new employee's name?"
        }, 
        { 
            name: "lastName", 
            type: "input", 
            message: "What is their last name?"
        }, 
        { 
            name: "role", 
            type: "input", 
            message: "What is this employee's position?"
        }, 
        {
            name: "manager", 
            type: "input", 
            message: "Who is this employee's manager?"
        }
    ])
    .then(function(answer) { 
        connection.query( 
            "INSERT INTO employee SET?", 
            { 
                id: answer.id, 
                first_name: answer.firstName, 
                last_name: answer.lastName, 
         // ****THIS NEEDS TO BE TURNED INTO ROLE_ID & MANAGER_ID#****
                role_id: answer.role, 
                manager_id: manager
        
            }, 
            function(err) { 
                if (err) throw err; 
                console.log("Your new employee was created!"); 

                init(); 
            })
    })
}

function viewDept() {
    connection.query("SELECT id, dept_name FROM department", function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);
        //  Don't forget to end the query!
        // connection.end();

        init();
    });
};

function viewRoles() {
    connection.query("SELECT id, title, salary, department_id FROM role", function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);
        //  Don't forget to end the query!
        // connection.end();

        init();
    });

};

function viewEmployees() { 
    connection.query("SELECT id, first_name, last_name, role_id FROM employee", 
    // FINISH WITH JOIN
    function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);

        init();
    });

};

function update() {
    var rolechoices = [];
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Which employee would you like to update?",
                choices: function () {
                    var empChoices = [];
                    for (var i = 0; i < results.length; i++) {
                        empChoices.push(results[i].first_name3);
                    }
                    return empChoices;
                },
            }
        ])
            .then(function (answer) {
                var chosenEmp;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].first_name  === answer.choice) {
                        chosenEmp = results[i]
                    }
                }
                connection.query("SELECT * FROM role", function (err, results) {
                    if (err) throw err;
                    inquirer.prompt([
                        {
                            name: "role",
                            type: "list",
                            message: "What is the employee's new role?",
                            choices: function () {
                                for (var i = 0; i < results.length; i++) {
                                    rolechoices.push(results[i].title);
                                }
                                return rolechoices;
                            },
                        }
                    ])
                        .then(function (roleAnswer) {
                            var chosenRole;
                            for (var i = 0; i < results.length; i++) {
                                if (results[i].title === roleAnswer.choice) {
                                    chosenRole = results[i]
                                }
                            }
                            connection.query('SELECT id FROM role WHERE title = ?', [chosenRole], function (err, res) {
                                if (err) throw (err);
                                let roleId = res[0].id;
                                var query = "UPDATE employee SET role_id ? WHERE ?";
                                connection.query(query, [roleId, chosenEmp], function (err, res) {
                                    if (err) throw err;
                                    console.log(`Successfully updated ${chosenEmp}'s role to ${chosenRole}.`)
                                });

                                viewEmployees();
                            })
                        }

                        )
                })
            })
    })
}
        
          




           
                   
    



   