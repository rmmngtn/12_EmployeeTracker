var inquire = require("inquirer");
var path = require("path");


function viewDept() {
    connection.query("SELECT id, dept_name FROM department", function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);
        //  Don't forget to end the query!
        connection.end();

        init();
    });
}

function viewRoles() {
    inquirer.prompt([
        {
            name: "startRole",
            type: "list",
            message: "Would you like to search for a role, or view all?",
            choices: ["View all Roles", "Search by Role"]
        }
    ])
        .then(function (answer) {

            switch (answer.start) {
                case "View all Roles":
                    connection.query("SELECT id, title, salary, department_id FROM role", function (err, res) {
                        if (err) throw err;
                        //   tables are tight!
                        console.table(res);
                        //  Don't forget to end the query!
                        connection.end();

                        init();
                    });

                case "Search by Role":
                    return searchbyRole();
            }
        })
}


function searchbyRole() {
    inquirer
        .prompt({
            name: "position",
            type: "input",
            message: "What postion would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT id, title, salary, department FROM role WHERE ?";
            connection.query(query, { position: answer.position }, function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.table(res);
                    connection.end(); 
                }
                init();
            });
        });
}
}

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
            viewRole();
            break;

        case "View Employees":
            viewEmployee()
            break;

    }