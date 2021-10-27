DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department (
  department_name VARCHAR(30) NOT NULL,
  department_id INTEGER PRIMARY KEY AUTO_INCREMENT
);
CREATE TABLE role (
  role_id INT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL
);
CREATE TABLE employee (
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  manager_id INTEGER NOT NULL,
  role_id INT
);