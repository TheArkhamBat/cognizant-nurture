package com.cognizant.jwtservice.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecureController {

    @GetMapping("/secure")
    public String secure(Authentication authentication) {
        return "Hello " + authentication.getName() + ", this endpoint is protected by JWT.";
    }
}
