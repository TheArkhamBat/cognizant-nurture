package com.cognizant.loadbalancedgateway;

import com.cognizant.loadbalancedgateway.config.LoadBalancerConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;

@SpringBootApplication
@LoadBalancerClient(name = "example-service", configuration = LoadBalancerConfiguration.class)
public class LoadBalancedGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(LoadBalancedGatewayApplication.class, args);
    }
}
