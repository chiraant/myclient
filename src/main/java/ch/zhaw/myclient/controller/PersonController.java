package ch.zhaw.myclient.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Person;
import ch.zhaw.myclient.model.PersonCreateDTO;
import ch.zhaw.myclient.repositories.PersonRepository;
@RestController
@RequestMapping("/api")

public class PersonController {

    @Autowired
    PersonRepository personRepository;


    @PostMapping("/person")
    public ResponseEntity<Person> createPerson(
            @RequestBody PersonCreateDTO pDTO) {
                Person pDAO = new Person(pDTO.getFirstName(), pDTO.getLastName(), pDTO.getEmail());
                Person p = personRepository.save(pDAO);

        return new ResponseEntity<>(p, HttpStatus.CREATED);
    }

    @GetMapping("/person")
    public ResponseEntity<List<Person>> getAllPerson() {
        List<Person> allPerson = personRepository.findAll();
        return new ResponseEntity<>(allPerson, HttpStatus.OK);
    }


    @GetMapping("/person/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable String id) {
        Optional<Person> optAsset = personRepository.findById(id);
        if (optAsset.isPresent()) {
            return new ResponseEntity<>(optAsset.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
