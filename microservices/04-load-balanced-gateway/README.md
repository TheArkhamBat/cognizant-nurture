# Exercise 4: Load balancing in an API Gateway

Run in order:
1. cd eureka-server && mvn spring-boot:run                          -> http://localhost:8761
2. cd example-service && mvn spring-boot:run                        -> instance A on port 8091
3. Open a second terminal: cd example-service && mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8092
   -> instance B on port 8092 (two instances of example-service registered under the same name)
4. cd load-balanced-gateway && mvn spring-boot:run                  -> http://localhost:9091

Hit http://localhost:9091/loadbalanced/hello repeatedly and watch the response alternate
between "port 8091" and "port 8092" -- that's the RandomLoadBalancer in action.
