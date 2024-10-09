package online.vemperderseudinheiro.oncinha.entity;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import online.vemperderseudinheiro.oncinha.entity.Enums.Profile;

@Entity
public class User extends Person{
	private static final long serialVersionUID = 1L;

	public User() {
		super();
	}

	public User(Integer id, String name, String email, @NotNull String password) {
		super(id, name, email, password);
		addProfile(Profile.USER);
	}
	
	
	
}
