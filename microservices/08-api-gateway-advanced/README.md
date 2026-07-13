# Exercise 8: API Gateway with rate limiting, caching (Redis), and path rewriting

Requires a local Redis instance (used by the RequestRateLimiter filter):
  docker run -p 6379:6379 -d redis

Run in order:
1. cd customer-service && mvn spring-boot:run   -> http://localhost:8094
2. cd billing-service && mvn spring-boot:run    -> http://localhost:8095
3. cd api-gateway && mvn spring-boot:run        -> http://localhost:9092

Test (note the path rewrite from /customers/** to /api/customers/**):
  curl http://localhost:9092/customers/1
  curl http://localhost:9092/billing/1

Hit either endpoint more than 10 times quickly and you should start getting HTTP 429
(Too Many Requests) from the RequestRateLimiter filter.
