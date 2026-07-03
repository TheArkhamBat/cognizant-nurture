DECLARE
    v_age NUMBER;
BEGIN
    FOR rec IN (SELECT l.LoanID, c.DOB FROM Loans l JOIN Customers c ON l.CustomerID = c.CustomerID) LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12);
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;
        END IF;
    END LOOP;
    COMMIT;
END;
/