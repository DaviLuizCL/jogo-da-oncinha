package online.vemperderseudinheiro.oncinha.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import online.vemperderseudinheiro.oncinha.entity.User;
import online.vemperderseudinheiro.oncinha.repository.UserRepository;

@Service
public class AuthorizationService implements UserDetailsService {
    
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        
        if (user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado: " + email);
        }

        return user;
    }
}

