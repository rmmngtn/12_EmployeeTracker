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
};

function viewRoles(){
    connection.query("SELECT id, title, salary, department_id FROM role", function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);
        //  Don't forget to end the query!
        connection.end();

        init();
    });

};

function viewEmployees() { 
    connection.query("SELECT id, first_name, last_name, role.title, role.salary, department.name AS department, role.salary, MANAGER INFO FROM role", 
    // FINISH WITH JOIN
    function (err, res) {
        if (err) throw err;
        //   tables are tight!
        console.table(res);

        init();
    });

};



module.exports = { 
    viewDept,  
    viewRoles, 
    viewEmployees 
}

