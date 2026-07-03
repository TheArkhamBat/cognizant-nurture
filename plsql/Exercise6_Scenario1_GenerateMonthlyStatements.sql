DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT c.Name, t.AccountID, t.TransactionID, t.TransactionDate, t.Amount, t.TransactionType
        FROM Transactions t
        JOIN Accounts a ON t.AccountID = a.AccountID
        JOIN Customers c ON a.CustomerID = c.CustomerID
        WHERE TRUNC(t.TransactionDate, 'MM') = TRUNC(SYSDATE, 'MM');
BEGIN
    FOR rec IN GenerateMonthlyStatements LOOP
        DBMS_OUTPUT.PUT_LINE('Customer: ' || rec.Name || ' | Acc: ' || rec.AccountID || ' | TxID: ' || rec.TransactionID || ' | Date: ' || TO_CHAR(rec.TransactionDate, 'YYYY-MM-DD') || ' | Type: ' || rec.TransactionType || ' | Amt: ' || rec.Amount);
    END LOOP;
END;
/