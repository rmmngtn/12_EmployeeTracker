// var inquire = require("inquirer"); 
// var path = require("path"); 

// function update() {
//     var rolechoices = [];
//     connection.query("SELECT * FROM employee", function (err, results) {
//         if (err) throw err;

//         inquirer.prompt([
//             {
//                 name: "choice",
//                 type: "rawlist",
//                 message: "Which employee would you like to update?",
//                 choices: function () {
//                     var empChoices = [];
//                     for (var i = 0; i < results.length; i++) {
//                         empChoices.push(results[i].first_name + last_name);
//                     }
//                     return empChoices;
//                 },
//             }
//         ])
//             .then(function (answer) {
//                 var chosenEmp;
//                 for (var i = 0; i < results.length; i++) {
//                     if (results[i].first_name + last_name === answer.choice) {
//                         chosenEmp = results[i]
//                     }
//                 }
//                 connection.query("SELECT * FROM role", function (err, results) {
//                     if (err) throw err;
//                     inquirer.prompt([
//                         {
//                             name: "role",
//                             type: "rawlist",
//                             message: "What is the employee's new role?",
//                             choices: function () {
//                                 for (var i = 0; i < results.length; i++) {
//                                     rolechoices.push(results[i].title);
//                                 }
//                                 return rolechoices;
//                             },
//                         }
//                     ])
//                         .then(function (roleAnswer) {
//                             var chosenRole;
//                             for (var i = 0; i < results.length; i++) {
//                                 if (results[i].title === roleAnswer.choice) {
//                                     chosenRole = results[i]
//                                 }
//                             }
//                             connection.query('SELECT id FROM role WHERE title = ?', [chosenRole], function (err, res) {
//                                 if (err) throw (err);
//                                 let roleId = res[0].id;
//                                 var query = "UPDATE employee SET role_id ? WHERE ?";
//                                 connection.query(query, [roleId, chosenEmp], function (err, res) {
//                                     if (err) throw err;
//                                     console.log(`Successfully updated ${chosenEmp}'s role to ${chosenRole}.`)
//                                 });

//                                 viewEmployees();
//                             })
//                         }

//                         )
//                 })
//             })
//     })
// }


// module.exports = { 
//     update
// }
