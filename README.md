``` 
    ______                __                    
   / ____/___ ___  ____  / /___  __  _____  ___ 
  / __/ / __ `__ \/ __ \/ / __ \/ / / / _ \/ _ \
 / /___/ / / / / / /_/ / / /_/ / /_/ /  __/  __/
/_____/_/ /_/ /_/ .___/_/\____/\__, /\___/\___/ 
 /_  __/_______/_/_____/ /____/____/__          
  / / / ___/ __ `/ ___/ //_/ _ \/ ___/          
 / / / /  / /_/ / /__/ ,< /  __/ /              
/_/ /_/   \__,_/\___/_/|_|\___/_/               
``` 
                                                     
## Description:
This app is part of the curriculum for the U of A / Trilogy Education Services Full Stack Coding Bootcamp.

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## About the Project:
This project runs in the terminal as prompts for values to build an SQL database of employees, roles, managers, departments, and allows for viewing of each.

To install npm and dependenices:
```
npm i
```
Be Sure to log into myslq2 to run the schema for the database creation:
```
mysql> source <path to schema file>
```
To initalize the prompts:
```
npm run start
```
## DEMO:


https://user-images.githubusercontent.com/69359454/139109469-1fac63fa-8604-4a43-bf45-aaa41d8f9461.mp4


### Screenshots:
![seeds sql - employee-tracker - Visual Studio Code 10_27_2021 9_31_40 AM](https://user-images.githubusercontent.com/69359454/139108757-ba4fb695-e354-4371-a2cd-2eaf39a5a47d.png)

## Technologies:
Node.js, Express, Inquirer, MySql2, Connect

## Future / Scalability:
Want to add functions for department editing, salary editing, and various fields as they come up.
