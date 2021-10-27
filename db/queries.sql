SELECT role_id, salary
FROM role
INNER JOIN employee on employee.role_id = role.role_id;

-- UPDATE employee
-- SET employee.role_id = (
--     SELECT role.role_id
--     FROM role
-- );

-- INSERT INTO employee SELECT role_id FROM role;

-- INSERT INTO employee SELECT salary FROM role
-- WHERE employee.role_id = role.role_id;

-- UPDATE employee
-- SET employee.salary = (
--     SELECT role.salary
--     FROM role
--     WHERE role.role_id = employee.role_id
-- );