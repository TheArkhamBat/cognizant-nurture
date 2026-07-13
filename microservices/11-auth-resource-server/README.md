# Exercise 11: Authorization Server / Resource Server

Replace issuer-uri in application.yml with your real Authorization Server
(Keycloak, Okta, Google, etc.).

cd resource-server && mvn spring-boot:run   -> http://localhost:8099

Calling /secure without a valid JWT Bearer token returns 401. With a valid
access token from the configured issuer:
  curl http://localhost:8099/secure -H "Authorization: Bearer <token>"
