CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_LoanAmount   IN NUMBER,
    p_InterestRate IN NUMBER,
    p_DurationYrs  IN NUMBER
) RETURN NUMBER AS
    v_MonthlyRate NUMBER;
    v_TotalMonths NUMBER;
    v_Installment NUMBER;
BEGIN
    v_MonthlyRate := (p_InterestRate / 100) / 12;
    v_TotalMonths := p_DurationYrs * 12;
    IF v_MonthlyRate = 0 THEN
        v_Installment := p_LoanAmount / v_TotalMonths;
    ELSE
        v_Installment := p_LoanAmount * (v_MonthlyRate * POWER(1 + v_MonthlyRate, v_TotalMonths)) / (POWER(1 + v_MonthlyRate, v_TotalMonths) - 1);
    END IF;
    RETURN v_Installment;
END CalculateMonthlyInstallment;
/

