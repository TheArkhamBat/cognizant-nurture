package com.cognizant.inventoryservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
public class InventoryController {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${welcome.message:default message - config server not reached}")
    private String welcomeMessage;

    @GetMapping("/inventory/config-check")
    public String configCheck() {
        return welcomeMessage;
    }

    // Calls product-service by logical name via Eureka + client-side load balancing
    @GetMapping("/inventory/{productId}/stock")
    public Map<String, Object> checkStock(@PathVariable Long productId) {
        return restTemplate.getForObject(
                "http://product-service/products/" + productId, Map.class);
    }
}
