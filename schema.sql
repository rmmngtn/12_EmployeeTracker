DROP DATABASE IF EXISTS employeetracker_db;
CREATE database employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(
  id INT NOT NULL,
  dept_name VARCHAR(30) 
  PRIMARY KEY (id)
);


CREATE TABLE role( 
    id INT NOT NULL, 
    title VARCHAR(30), 
    salary decimal, 
    department_id INT NOT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE employee( 
    id INT NOT NULL, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT NOT NULL, 
    manager_id INT, 
    PRIMARY KEY (id)
)

SELECT * FROM employeetracker_db;

