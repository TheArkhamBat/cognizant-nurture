package com.cognizant.jwtservice.controller;

import com.cognizant.jwtservice.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // Dummy login: in a real app, verify username/password against a user store first
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String token = jwtTokenProvider.createToken(username);
        return Map.of("token", token);
    }
}
