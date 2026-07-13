# Exercise 3: Edge service routing and filtering

cd edge-service && mvn spring-boot:run   -> http://localhost:8085

Test: http://localhost:8085/example/anything  -> routed to http://example.org
Watch the console for the "Request: ..." log line from LoggingFilter.
