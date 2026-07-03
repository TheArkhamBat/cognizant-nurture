CREATE OR REPLACE PROCEDURE TransferFunds (
    p_SourceAccountID IN NUMBER,
    p_DestAccountID   IN NUMBER,
    p_Amount          IN NUMBER
) AS
    v_Balance NUMBER;
BEGIN
    SELECT Balance INTO v_Balance FROM Accounts WHERE AccountID = p_SourceAccountID;
    IF v_Balance >= p_Amount THEN
        UPDATE Accounts SET Balance = Balance - p_Amount WHERE AccountID = p_SourceAccountID;
        UPDATE Accounts SET Balance = Balance + p_Amount WHERE AccountID = p_DestAccountID;
        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transaction Aborted: Insufficient balance.');
    END IF;
END TransferFunds;
/