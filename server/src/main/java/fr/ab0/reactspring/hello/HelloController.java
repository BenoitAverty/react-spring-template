package fr.ab0.reactspring.hello;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public ResponseEntity<String> getHello() {
        return getHelloWithName("World");
    }

    @GetMapping("/hello/{name}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<String> getHelloWithName(@PathVariable String name) {
        return ResponseEntity.ok("Hello, "+name+"!");
    }
}
