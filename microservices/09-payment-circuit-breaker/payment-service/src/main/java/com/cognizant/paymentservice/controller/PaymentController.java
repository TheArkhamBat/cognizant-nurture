package com.cognizant.paymentservice.controller;

import com.cognizant.paymentservice.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/payments/process/{orderId}")
    public Map<String, Object> process(@PathVariable String orderId) {
        return paymentService.processPayment(orderId);
    }
}
