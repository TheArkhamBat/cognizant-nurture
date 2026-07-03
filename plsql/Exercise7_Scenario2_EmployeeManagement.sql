CREATE OR REPLACE PACKAGE EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2);
    PROCEDURE UpdateEmployee(p_EmployeeID NUMBER, p_Position VARCHAR2, p_Salary NUMBER);
    FUNCTION GetAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2) AS
    BEGIN
        INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
        VALUES (p_EmployeeID, p_Name, p_Position, p_Salary, p_Department, SYSDATE);
        COMMIT;
    END HireEmployee;

    PROCEDURE UpdateEmployee(p_EmployeeID NUMBER, p_Position VARCHAR2, p_Salary NUMBER) AS
    BEGIN
        UPDATE Employees
        SET Position = p_Position, Salary = p_Salary
        WHERE EmployeeID = p_EmployeeID;
        COMMIT;
    END UpdateEmployee;

    FUNCTION GetAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER AS
        v_Salary NUMBER;
    BEGIN
        SELECT Salary INTO v_Salary FROM Employees WHERE EmployeeID = p_EmployeeID;
        RETURN v_Salary * 12;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN NULL;
    END GetAnnualSalary;
END EmployeeManagement;
/