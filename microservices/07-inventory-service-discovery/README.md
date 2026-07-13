# Exercise 7: Inventory management with Eureka + centralized config

Run in order:
1. cd config-server && mvn spring-boot:run       -> http://localhost:8888
2. cd eureka-server && mvn spring-boot:run       -> http://localhost:8761
3. cd product-service && mvn spring-boot:run     -> http://localhost:8092
4. cd inventory-service && mvn spring-boot:run   -> http://localhost:8093

Verify centralized config:
  http://localhost:8092/products/config-check
  http://localhost:8093/inventory/config-check

Create a product, then check its stock through inventory-service (which calls
product-service via Eureka service discovery, not a hardcoded URL):
  curl -X POST http://localhost:8092/products -H "Content-Type: application/json" -d "{\"name\":\"Keyboard\",\"stock\":42}"
  curl http://localhost:8093/inventory/1/stock
