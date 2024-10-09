package online.vemperderseudinheiro.oncinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import online.vemperderseudinheiro.oncinha.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
