use employees;

INSERT INTO department(department_name, department_id)
VALUES
("Sales", 1),
("Engineering", 2),
("Finance", 3),
("Legal", 4);

INSERT INTO role (title, salary, department_id)
VALUES
("Manager", 90000, 1),
("Sales", 120000, 1),
("Senior Engineer", 150000, 2),
("Engineer", 120000, 2),
("Intern", 20000, 3),
("Finance", 125000, 3)

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Kevin", "Pug", 1, 1),
(2, "Birdie" ,"Cat", 2, 1),
(3, "Penny", "Girl", 4, 3),
(4, "Alvin", "Chipmunk", 3, 1),
(5, "William", "Brown", 5, 1),
(6, "James", "Wallace", 6, 5),
(7, "Bruce", "Campbell", 7, 1),
(8, "James", "Spader", 8, 7);