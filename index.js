const connection = require('./routes/server.js');
const inquirer = require('inquirer');

connection.connect((error) => {
    if (error) throw error;
    choiceSelect();
});

async function choiceSelect() {
    await inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectChoice',
          message: 'What would you like to do?',
          choices: [
              'View All Employees',
              'Add Employee',
              'Update Employee Role', 
              'View All Roles',
              'Add Role',
              'View All Departments',
              'Add Department',
              'Exit'
          ],
          default: 'View All Employees',
        },
      ])
      .then((answers) => {
        const{ selectChoice } = answers;
        if (selectChoice === 'View All Employees') {
          return viewEmployees();
        } else if (selectChoice === 'Add Employee') {
          console.log('Add Employee')
          return addEmployee();
        } else if (selectChoice === 'Update Employee Role') {
          return updateEmployeeRole();
        } else if (selectChoice === 'View All Roles') {
          return viewAllRoles();
        } else if (selectChoice === 'Add Role') {
          return addRole();
        } else if (selectChoice === 'View All Departments') {
          return viewAllDepts();
        } else if (selectChoice === 'Add Department') {
          return addDept();
        } else if (selectChoice === 'Exit') {
          return done();
        }
      });
}

const viewEmployees = () => {
connection.query('SELECT * FROM employee', function (err, result) {
    console.table(result)
    return done();
})
}
  
async function addDept() {
    const response = await inquirer
      .prompt([
        {
          type: "input",
          name: "department_name",
          message: "Enter the department name",
        },
      ])
      .then((data) => {
        console.log(data);
        connection.query(
          "INSERT INTO department (department_name) VALUES (?)",
          data.department_name,
          function (err, res) {
            if (err) throw err;
            console.log("Department added.");
            viewAllDepts()
          }
        );
      });
}

const viewAllDepts = () => {
connection.query('SELECT * FROM department', function (err, result) {
    console.table(result)
    return done();
})
}

async function addRole() {
const response = await inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "Enter employee's role",
    },
    {
        type: "input",
        name: "salary",
        message: "Enter the employee's salary (numbers only)",
    },
    {
        type: "input",
        name: "department_id",
        message: "Enter the employee's department",
    },
    ])
    .then((data) => {
    console.table(data);
    connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [data.title, data.salary, data.department_id], function(err, res){
        if (err) throw err;
        viewAllRoles();
        }
    );
    });
}

const viewAllRoles = () => {
    connection.query('SELECT * FROM role', function (err, result) {
        console.table(result)
        return done();
    })
}

async function addEmployee() {
    const response = await inquirer
        .prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter the employee's first name",
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the employee's last name",
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter the employee's role id#",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter the employee's manager's id#",
        },
        ])
        .then((data) => {
        console.log(data);
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [data.first_name, data.last_name, data.role_id, data.manager_id], function (err, res) {
            if (err) throw err;
            console.log("Employee added.");
            viewEmployees();
        });
        });
}

function done(){
return choiceSelect();
}