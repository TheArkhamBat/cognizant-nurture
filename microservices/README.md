# microservices

Hands-on microservices exercises (Spring Boot 3 + Spring Cloud 2023.0.1) for the
Cognizant Nurture program.

| Folder | Topic |
|---|---|
| 01-account-loan-eureka | Two independent microservices registered with a Eureka discovery server |
| 02-greet-service-gateway | greet-service behind a Spring Cloud API Gateway with a global logging filter |
| 03-edge-service-routing | Edge service: static routing + request logging filter |
| 04-load-balanced-gateway | Client-side load balancing across multiple instances of the same service |
| 05-resilient-gateway | Circuit breaker + fallback route at the gateway level |
| 06-user-order-management | Two services (User, Order) talking to each other via OpenFeign, backed by JPA/H2 |
| 07-inventory-service-discovery | Product + Inventory services with Eureka discovery and a centralized Config Server |
| 08-api-gateway-advanced | Gateway with Redis-backed rate limiting and path rewriting |
| 09-payment-circuit-breaker | Resilience4j circuit breaker + fallback around a slow/unreliable third-party call |
| 10-centralized-auth-oauth | Centralized authentication via OAuth 2.1 / OIDC login |
| 11-auth-resource-server | JWT-based Resource Server configuration |
| 12-jwt-secure-communication | Hand-rolled JWT issuing + validation filter |

Each numbered folder is self-contained: every sub-project has its own pom.xml and
can be built/run independently with `mvn spring-boot:run`. See the README.md inside
each folder for the exact run order and test commands.
