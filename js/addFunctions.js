// var inquire = require("inquirer"); 
// var path = require("path"); 


// function addDept() { 
//     inquirer.prompt([
//         {
//             name: "dept", 
//             type: "input", 
//             message: "What is the new department?"
//         }
//     ])
//     .then(function(answer) { 
//         connection.query( 
//             "INSERT INTO departments SET?", 
//             { 
//                 id: answer.id, 
//                 dept_name: answer.dept, 
                
//             }, 
//             function(err) { 
//                 if (err) throw err; 
//                 console.log("Your department was created!"); 

//                 init(); 
//             })
//     })
// }; 

// function addRole() { 
//     inquirer.prompt([
//         {
//             name: "title", 
//             type: "input", 
//             message: "What is the new position title?"
//         }, 
//         { 
//             name: "salary", 
//             type: "input", 
//             message: "What is the salary of this position?"
//         }, 
//         { 
//             name: "dept", 
//             type: "input", 
//             message: "In which department will this position belong?"
//         }
//     ])
//     .then(function(answer) { 
//         connection.query( 
//             "INSERT INTO role SET?", 
//             { 
//                 id: answer.id, 
//                 title: answer.title, 
//                 salary: answer.salary, 
//          // ****THIS NEEDS TO BE TURNED INTO DEPARTMENT_ID#****
//                 department_id: answer.dept
        
//             }, 
//             function(err) { 
//                 if (err) throw err; 
//                 console.log("Your new role was created!"); 

//                 init(); 
//             })
//     })
// }; 


// function addEmployee() { 
//     inquirer.prompt([
//         {
//             name: "firstName", 
//             type: "input", 
//             message: "What is the new employee's name?"
//         }, 
//         { 
//             name: "lastName", 
//             type: "input", 
//             message: "What is their last name?"
//         }, 
//         { 
//             name: "role", 
//             type: "input", 
//             message: "What is this employee's position?"
//         }, 
//         {
//             name: "manager", 
//             type: "input", 
//             message: "Who is this employee's manager?"
//         }
//     ])
//     .then(function(answer) { 
//         connection.query( 
//             "INSERT INTO employee SET?", 
//             { 
//                 id: answer.id, 
//                 first_name: answer.firstName, 
//                 last_name: answer.lastName, 
//          // ****THIS NEEDS TO BE TURNED INTO ROLE_ID & MANAGER_ID#****
//                 role_id: answer.role, 
//                 manager_id: manager
        
//             }, 
//             function(err) { 
//                 if (err) throw err; 
//                 console.log("Your new employee was created!"); 

//                 init(); 
//             })
//     })
// }

// module.exports = { 
//     addDept,  
//     addRole, 
//     addEmployee 
// }