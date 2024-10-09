package online.vemperderseudinheiro.oncinha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import online.vemperderseudinheiro.oncinha.entity.Streamer;
import online.vemperderseudinheiro.oncinha.service.StreamerService;


@RestController
@RequestMapping ("/streamer")
@CrossOrigin("*")
public class StreamerController {
	
	@Autowired
	private StreamerService streamerService;
	
	@PostMapping("/save")
	public ResponseEntity<String>save(@Valid @RequestBody Streamer streamer) {
		try {
			String message = this.streamerService.save(streamer);
			return new ResponseEntity<String>(message, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String>update(@Valid @RequestBody Streamer streamer, @PathVariable Integer id) {
		try {
			String message = this.streamerService.update(streamer, id);
			return new ResponseEntity<String>(message, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/findall")
	public ResponseEntity<List<Streamer>>findAll() {
		try {
			List<Streamer> streamerList = this.streamerService.findAll();
			return new ResponseEntity<List<Streamer>>(streamerList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String>delete(@PathVariable Integer id) {
		try {
			String message = this.streamerService.delete(id);
			return new ResponseEntity<String>(message, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
