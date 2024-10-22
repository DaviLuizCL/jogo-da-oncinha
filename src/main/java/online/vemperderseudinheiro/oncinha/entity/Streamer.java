package online.vemperderseudinheiro.oncinha.entity;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import online.vemperderseudinheiro.oncinha.entity.Enums.Profile;

@Entity
public class Streamer extends Person {
	private static final long serialVersionUID = 1L;

	public Streamer() {
		super();
	}

	public Streamer(Integer id, String name, String email, @NotNull String password) {
		super(id, name, email, password);
		addProfile(Profile.STREAMER);
	}
}
