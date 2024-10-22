package online.vemperderseudinheiro.oncinha.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class HomeController {

	@PostMapping("/home")
	public ResponseEntity<String> home() {
	    return ResponseEntity.ok("Bem-vindo!");
	}
	
}
