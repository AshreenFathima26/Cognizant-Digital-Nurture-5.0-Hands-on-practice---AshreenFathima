-- ============================================
-- PLSQLPrograms.sql
-- Cognizant Deep Skilling Practice
-- ============================================

-- ============================================
-- 1. CREATE TABLE
-- ============================================

CREATE TABLE Employee (
    EmpID NUMBER PRIMARY KEY,
    EmpName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

-- ============================================
-- 2. INSERT
-- ============================================ppP

INSERT INTO Employee VALUES (101, 'Ashreen', 'IT', 50000);
INSERT INTO Employee VALUES (102, 'Naveen', 'HR', 45000);
INSERT INTO Employee VALUES (103, 'John', 'IT', 60000);
INSERT INTO Employee VALUES (104, 'Priya', 'Finance', 55000);
INSERT INTO Employee VALUES (105, 'Rahul', 'IT', 70000);

COMMIT;

-- ============================================
-- 3. SELECT
-- ============================================

SELECT * FROM Employee;

-- ============================================
-- 4. UPDATE
-- ============================================

UPDATE Employee
SET Salary = 65000
WHERE EmpID = 103;

COMMIT;

-- ============================================
-- 5. DELETE
-- ============================================

DELETE FROM Employee
WHERE EmpID = 102;

COMMIT;

-- ============================================
-- 6. WHERE
-- ============================================

SELECT *
FROM Employee
WHERE Department = 'IT';

-- ============================================
-- 7. ORDER BY
-- ============================================

SELECT *
FROM Employee
ORDER BY Salary DESC;

-- ============================================
-- 8. GROUP BY
-- ============================================

SELECT Department,
       COUNT(*) AS TotalEmployees,
       AVG(Salary) AS AverageSalary
FROM Employee
GROUP BY Department;

-- ============================================
-- 9. HAVING
-- ============================================

SELECT Department,
       COUNT(*) AS TotalEmployees
FROM Employee
GROUP BY Department
HAVING COUNT(*) > 1;

-- ============================================
-- 10. JOINS
-- ============================================

CREATE TABLE Department (
    DeptID NUMBER PRIMARY KEY,
    Department VARCHAR2(30)
);

INSERT INTO Department VALUES (1, 'IT');
INSERT INTO Department VALUES (2, 'HR');
INSERT INTO Department VALUES (3, 'Finance');

COMMIT;

SELECT E.EmpID,
       E.EmpName,
       E.Department,
       D.DeptID
FROM Employee E
INNER JOIN Department D
ON E.Department = D.Department;

-- ============================================
-- 11. VIEW
-- ============================================

CREATE VIEW EmployeeView AS
SELECT EmpID,
       EmpName,
       Salary
FROM Employee;

SELECT * FROM EmployeeView;

-- ============================================
-- 12. PROCEDURE
-- ============================================

CREATE OR REPLACE PROCEDURE ShowEmployee
IS
BEGIN
    FOR emp IN (SELECT * FROM Employee)
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            emp.EmpID || ' ' ||
            emp.EmpName || ' ' ||
            emp.Salary
        );
    END LOOP;
END;
/

BEGIN
    ShowEmployee;
END;
/

-- ============================================
-- 13. FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION AnnualSalary(
    sal NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN sal * 12;
END;
/

SELECT EmpName,
       Salary,
       AnnualSalary(Salary) AS AnnualSalary
FROM Employee;

-- ============================================
-- 14. CURSOR
-- ============================================

DECLARE

    CURSOR emp_cursor IS
    SELECT EmpName, Salary
    FROM Employee;

    v_name Employee.EmpName%TYPE;
    v_salary Employee.Salary%TYPE;

BEGIN

    OPEN emp_cursor;

    LOOP

        FETCH emp_cursor
        INTO v_name, v_salary;

        EXIT WHEN emp_cursor%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(
            v_name || ' Salary = ' || v_salary
        );

    END LOOP;

    CLOSE emp_cursor;

END;
/

-- ============================================
-- 15. EXCEPTION HANDLING
-- ============================================

DECLARE

    v_salary Employee.Salary%TYPE;

BEGIN

    SELECT Salary
    INTO v_salary
    FROM Employee
    WHERE EmpID = 999;

    DBMS_OUTPUT.PUT_LINE('Salary = ' || v_salary);

EXCEPTION

    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee Not Found.');

    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Multiple Employees Found.');

    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);

END;
/

-- ============================================
-- END OF PROGRAM
-- ============================================