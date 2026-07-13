package com.cognizant.billingservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class BillingController {

    @GetMapping("/api/billing/{id}")
    public Map<String, Object> getBill(@PathVariable String id) {
        return Map.of("id", id, "amount", 1999.00, "currency", "INR");
    }
}
