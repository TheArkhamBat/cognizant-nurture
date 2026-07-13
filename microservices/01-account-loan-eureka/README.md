# Exercise 1: Account + Loan microservices with Eureka

Run in this order (separate terminals):
1. cd eureka-discovery-server && mvn spring-boot:run   -> http://localhost:8761
2. cd account && mvn spring-boot:run                   -> http://localhost:8080/accounts/00987987973432
3. cd loan && mvn spring-boot:run                       -> http://localhost:8081/loans/H00987987972342

Refresh http://localhost:8761 to see account-service and loan-service registered.
