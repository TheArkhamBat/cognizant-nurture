# Exercise 9: Resilient Payment Service with Circuit Breaker

1. cd third-party-service && mvn spring-boot:run   -> http://localhost:8096 (slow, ~40% failure rate)
2. cd payment-service && mvn spring-boot:run       -> http://localhost:8097

Hit the payment endpoint repeatedly:
  curl http://localhost:8097/payments/process/ORD-1
  curl http://localhost:8097/payments/process/ORD-2
  ...

After enough failures/timeouts within the sliding window, the circuit opens and
subsequent calls short-circuit straight to the fallback (no more waiting on the
slow API) -- watch the payment-service console for the "Fallback triggered..." log
line each time.
