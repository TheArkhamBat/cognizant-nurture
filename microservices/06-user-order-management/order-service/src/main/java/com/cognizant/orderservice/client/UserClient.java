package com.cognizant.orderservice.client;

import com.cognizant.orderservice.dto.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

// Points directly at user-service (http://localhost:8090). Swap the url for
// name-based discovery (name = "user-service") once Eureka is wired in.
@FeignClient(name = "user-service", url = "http://localhost:8090")
public interface UserClient {

    @GetMapping("/users/{id}")
    UserDto getUser(@PathVariable("id") Long id);
}
