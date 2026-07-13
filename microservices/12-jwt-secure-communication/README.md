# Exercise 12: JWT for secure communication

cd jwt-service && mvn spring-boot:run   -> http://localhost:8100

1. Get a token:
   curl -X POST http://localhost:8100/auth/login -H "Content-Type: application/json" -d "{\"username\":\"aditya\"}"

2. Call the protected endpoint with the token:
   curl http://localhost:8100/secure -H "Authorization: Bearer <token-from-step-1>"

Without the header (or with an invalid/expired token) you get a 401/403 instead
of the greeting.
