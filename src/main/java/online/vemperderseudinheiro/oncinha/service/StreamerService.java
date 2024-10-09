package online.vemperderseudinheiro.oncinha.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import online.vemperderseudinheiro.oncinha.entity.Streamer;
import online.vemperderseudinheiro.oncinha.repository.StreamerRepository;

@Service
public class StreamerService {

	@Autowired
	private StreamerRepository streamerRepository;
	
	
	public String save(Streamer streamer) {
		this.streamerRepository.save(streamer);
		return streamer.getName() + " Salvo com sucesso!";
	}
	
	public String update(Streamer streamer, Integer id) {
		streamer.setId(id);
		this.streamerRepository.save(streamer);
		return streamer.getName() + " Editado com sucesso!";
	}
	
	public List<Streamer> findAll(){
		List<Streamer> list = this.streamerRepository.findAll();
		return list;
	}
	
	public String delete(Integer id) {
		this.streamerRepository.deleteById(id);
		return "Excluido com sucesso";
	}
}
