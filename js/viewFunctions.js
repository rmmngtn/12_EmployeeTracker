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

module.exports = { 
    viewDept,  
    viewRoles, 
    viewEmployees 
}

