CREATE OR REPLACE PROCEDURE SafeTransferFunds (
    p_SourceAccountID IN NUMBER,
    p_DestAccountID   IN NUMBER,
    p_Amount          IN NUMBER
) AS
    v_SourceBalance NUMBER;
    v_DestExists    NUMBER;
    e_InsufficientFunds EXCEPTION;
    e_AccountNotFound   EXCEPTION;
BEGIN
    SELECT COUNT(*) INTO v_DestExists FROM Accounts WHERE AccountID = p_DestAccountID;
    IF v_DestExists = 0 THEN
        RAISE e_AccountNotFound;
    END IF;

    SELECT Balance INTO v_SourceBalance FROM Accounts WHERE AccountID = p_SourceAccountID;
    IF v_SourceBalance < p_Amount THEN
        RAISE e_InsufficientFunds;
    END IF;

    UPDATE Accounts SET Balance = Balance - p_Amount WHERE AccountID = p_SourceAccountID;
    UPDATE Accounts SET Balance = Balance + p_Amount WHERE AccountID = p_DestAccountID;
    COMMIT;
EXCEPTION
    WHEN e_InsufficientFunds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Transfer failed due to insufficient funds.');
    WHEN e_AccountNotFound THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Destination account not found.');
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Source account not found.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Transfer failed due to an unexpected problem. ' || SQLERRM);
END SafeTransferFunds;
/