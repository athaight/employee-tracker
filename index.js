const connection = require('./routes/server.js');
const inquirer = require('inquirer');

connection.connect((error) => {
    if (error) throw error;
    choiceSelect();
});

function choiceSelect() {
    inquirer
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
        } else if (choices === 'Update Employee Role') {
          return updateEmployeeRole();
        } else if (choices.selectChoice === 'View All Roles') {
          return viewAllRoles();
        } else if (choices.selectChoice === 'Add Role') {
          return addRole();
        } else if (choices.selectChoice === 'View All Departments') {
          return viewAllDepts();
        } else if (choices.selectChoice === 'Add Department') {
          return addDept();
        } else if (choices.selectChoice === 'Exit') {
          return done();
        }
      });
  }