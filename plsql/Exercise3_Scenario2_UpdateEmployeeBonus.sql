CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_Department IN VARCHAR2,
    p_BonusPct   IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_BonusPct / 100))
    WHERE Department = p_Department;
    COMMIT;
END UpdateEmployeeBonus;
/