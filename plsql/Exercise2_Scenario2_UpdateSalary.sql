CREATE OR REPLACE PROCEDURE UpdateSalary (
    p_EmployeeID IN NUMBER,
    p_Percentage IN NUMBER
) AS
    v_Count NUMBER;
    e_EmployeeNotFound EXCEPTION;
BEGIN
    SELECT COUNT(*) INTO v_Count FROM Employees WHERE EmployeeID = p_EmployeeID;
    IF v_Count = 0 THEN
        RAISE e_EmployeeNotFound;
    END IF;

    UPDATE Employees
    SET Salary = Salary + (Salary * (p_Percentage / 100))
    WHERE EmployeeID = p_EmployeeID;
    COMMIT;
EXCEPTION
    WHEN e_EmployeeNotFound THEN
        DBMS_OUTPUT.PUT_LINE('Error: Employee ID ' || p_EmployeeID || ' does not exist.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: Problem updating salary. ' || SQLERRM);
END UpdateSalary;
/