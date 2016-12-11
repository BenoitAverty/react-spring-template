package fr.ab0.reactspring.greetings;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.RandomAccess;

@RestController
@RequestMapping("/api")
public class GreetingsController {

    private List<String> names = new ArrayList<>();

    @PostConstruct
    private void init() {
        names.add("World");
    }

    @GetMapping("/greetings")
    public ResponseEntity<String> getHello() {
        int index = new Random().nextInt(names.size());
        return getHelloWithName(names.get(index));
    }

    @GetMapping("/greetings/{name}")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<String> getHelloWithName(@PathVariable String name) {
        return ResponseEntity.ok("Hello, "+name+"!");
    }

    @PostMapping("/greetings")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Void> postName(@RequestBody String name) {
        names.add(name);

        return ResponseEntity.ok().build();
    }
}
