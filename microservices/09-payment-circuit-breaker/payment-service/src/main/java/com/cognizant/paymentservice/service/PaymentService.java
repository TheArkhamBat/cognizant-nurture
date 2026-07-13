package com.cognizant.paymentservice.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class PaymentService {

    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    @Autowired
    private RestTemplate restTemplate;

    @CircuitBreaker(name = "paymentService", fallbackMethod = "fallbackProcessPayment")
    public Map<String, Object> processPayment(String orderId) {
        return restTemplate.getForObject(
                "http://localhost:8096/slow-api", Map.class);
    }

    // Fallback method: same signature as the guarded method, plus a Throwable param
    public Map<String, Object> fallbackProcessPayment(String orderId, Throwable t) {
        logger.warn("Fallback triggered for order {} - reason: {}", orderId, t.toString());
        return Map.of(
                "status", "PENDING",
                "message", "Payment gateway unavailable, order " + orderId + " queued for retry");
    }
}
