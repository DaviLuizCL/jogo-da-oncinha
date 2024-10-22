package online.vemperderseudinheiro.oncinha.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import online.vemperderseudinheiro.oncinha.entity.User;
import online.vemperderseudinheiro.oncinha.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public String save(User user) {
		this.userRepository.save(user);
		return user.getName() + " Salvo com sucesso!";
	}
	
	public String update(User user, Integer id) {
		user.setId(id);
		this.userRepository.save(user);
		return user.getName() + " Editado com sucesso!";
	}
	
	public List<User> findAll(){
		List<User> list = this.userRepository.findAll();
		return list;
	}
	
	public String delete(Integer id) {
		this.userRepository.deleteById(id);
		return "Excluido com sucesso";
	}
}
