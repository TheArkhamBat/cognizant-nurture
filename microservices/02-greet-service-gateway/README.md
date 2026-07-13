# Exercise 2: greet-service behind an API Gateway

Run in order:
1. cd eureka-server && mvn spring-boot:run       -> http://localhost:8761
2. cd greet-service && mvn spring-boot:run       -> http://localhost:8080/greet
3. cd api-gateway && mvn spring-boot:run         -> http://localhost:9090

Test through the gateway: http://localhost:9090/greet-service/greet
Watch the api-gateway console for the "====> Request URL" log line from LogFilter.
