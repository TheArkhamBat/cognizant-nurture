DECLARE
    CURSOR ApplyAnnualFee IS
        SELECT AccountID, Balance FROM Accounts FOR UPDATE;
    v_Fee NUMBER := 50;
BEGIN
    FOR rec IN ApplyAnnualFee LOOP
        UPDATE Accounts
        SET Balance = Balance - v_Fee
        WHERE CURRENT OF ApplyAnnualFee;
    END LOOP;
    COMMIT;
END;
/