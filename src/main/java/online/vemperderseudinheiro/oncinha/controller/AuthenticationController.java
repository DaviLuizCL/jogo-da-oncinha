package online.vemperderseudinheiro.oncinha.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import online.vemperderseudinheiro.oncinha.DTO.AuthenticationDTO;
import online.vemperderseudinheiro.oncinha.DTO.LoginResponseDTO;
import online.vemperderseudinheiro.oncinha.DTO.RegisterDTO;
import online.vemperderseudinheiro.oncinha.entity.User;
import online.vemperderseudinheiro.oncinha.infra.security.TokenService;
import online.vemperderseudinheiro.oncinha.repository.UserRepository;

@RestController
@RequestMapping("auth")
@CrossOrigin("*")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TokenService tokenService;
	
	@SuppressWarnings("rawtypes")
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
	    try {
	        var userLogin = new UsernamePasswordAuthenticationToken(data.email(), data.password());
	        var auth = this.authenticationManager.authenticate(userLogin);
	        
	        var token = tokenService.generateToken((User) auth.getPrincipal());
	        return ResponseEntity.ok(new LoginResponseDTO(token));
	        
	    } catch (BadCredentialsException e) {
	        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Credenciais inválidas");
	    } catch (UsernameNotFoundException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
	    } catch (Exception e) {
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro no servidor: " + e.getMessage());
	    }
	}

	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO data) {
	    if (this.userRepository.findByEmail(data.email()) != null) {
	        return ResponseEntity.badRequest().body(Map.of("message", "Email já cadastrado."));
	    }

	    String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
	    User user = new User(data.name(), data.email(), encryptedPassword);
	    
	    this.userRepository.save(user);
	    
	    return ResponseEntity.ok(Map.of("message", "Usuário registrado com sucesso."));
	}
	
}
