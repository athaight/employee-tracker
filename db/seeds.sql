INSERT INTO department (department_name, department_id)
VALUES ('Sales', 1),
       ('Engineering', 2),
       ('Finance,', 3),
       ('Legal', 4);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (1,'Sales Lead', 100000, 1),
       (2,'Salesperson', 80000, 1),
       (3,'Lead Engineer', 150000, 2),
       (4,'Software Engineer', 120000, 2),
       (5,'Account Manager', 160000, 3),
       (6,'Accountant', 125000, 3),
       (7,'Legal Team Lead', 250000, 4),
       (8,'Lawyer', 190000, 4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1, 1),
       (2, 'Mike', 'Chan', 2, 1),
       (3, 'Ashley', 'Rodriguez', 2, 3),
       (4, 'Kevin', 'Tupik', 4, 3),
       (5, 'Kunal', 'Singh', 4, 1),
       (6, 'Malia', 'Brown', 3, 5),
       (7, 'Sarah', 'Lourd', 5, 3),
       (8, 'Tom', 'Jerry', 5, 7),
       (9, 'Mike', 'Turtle', 6, 7),
       (10, 'Tom', 'Allen', 7, 7),
       (11, 'Tom', 'Allen', 8, 7);
