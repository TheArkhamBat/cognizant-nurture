# Exercise 5: Resilience patterns in an API Gateway

cd resilient-gateway && mvn spring-boot:run   -> http://localhost:8086

Route /resilient/** proxies to http://localhost:8080 (point it at the account-service from
exercise 1, or any local service) wrapped in a CircuitBreaker named "exampleCircuitBreaker".
If the downstream call fails or times out, requests are forwarded to /fallback instead of
propagating the error.

Test: http://localhost:8086/resilient/accounts/123  (works if a service is up on 8080)
Stop the downstream service and hit the same URL -- you should get the fallback message
instead of a connection error once the circuit breaker trips.
