# Exercise 6: User + Order management system

1. cd user-service && mvn spring-boot:run    -> http://localhost:8090
2. cd order-service && mvn spring-boot:run   -> http://localhost:8091

Create a user:
  curl -X POST http://localhost:8090/users -H "Content-Type: application/json" -d "{\"name\":\"Aditya\",\"email\":\"aditya@example.com\"}"

Create an order for that user (order-service calls user-service via OpenFeign to validate):
  curl -X POST http://localhost:8091/orders -H "Content-Type: application/json" -d "{\"userId\":1,\"product\":\"Laptop\",\"quantity\":1}"
