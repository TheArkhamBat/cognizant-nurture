package com.cognizant.thirdpartyservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Random;

@RestController
public class SlowApiController {

    private final Random random = new Random();

    // Simulates a slow, occasionally-failing third-party payment gateway
    @GetMapping("/slow-api")
    public Map<String, Object> slowApi() throws InterruptedException {
        Thread.sleep(3000); // simulate high latency

        if (random.nextInt(10) < 4) { // ~40% simulated failure rate
            throw new RuntimeException("Third-party gateway timeout");
        }
        return Map.of("status", "SUCCESS", "transactionId", System.currentTimeMillis());
    }
}
