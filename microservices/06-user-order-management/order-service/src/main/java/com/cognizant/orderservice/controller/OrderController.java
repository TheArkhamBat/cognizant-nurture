package com.cognizant.orderservice.controller;

import com.cognizant.orderservice.client.UserClient;
import com.cognizant.orderservice.dto.UserDto;
import com.cognizant.orderservice.entity.Order;
import com.cognizant.orderservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserClient userClient;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody Order order) {
        // Verify the user exists in user-service before accepting the order
        UserDto user;
        try {
            user = userClient.getUser(order.getUserId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("User " + order.getUserId() + " does not exist in user-service");
        }
        Order saved = orderRepository.save(order);
        return ResponseEntity.ok().body(
                "Order " + saved.getId() + " created for user " + user.getName());
    }
}
