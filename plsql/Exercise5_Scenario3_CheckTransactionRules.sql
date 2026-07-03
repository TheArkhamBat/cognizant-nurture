CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_Balance NUMBER;
BEGIN
    IF :NEW.Amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Transaction amount must be positive.');
    END IF;

    IF :NEW.TransactionType = 'Withdrawal' THEN
        SELECT Balance INTO v_Balance FROM Accounts WHERE AccountID = :NEW.AccountID;
        IF :NEW.Amount > v_Balance THEN
            RAISE_APPLICATION_ERROR(-20002, 'Withdrawal amount exceeds the available balance.');
        END IF;
    END IF;
END;
/