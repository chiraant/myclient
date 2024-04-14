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

import ch.zhaw.myclient.model.Doc;
import ch.zhaw.myclient.model.DocCreateDTO;
import ch.zhaw.myclient.repositories.DocRepository;

@RestController
@RequestMapping("/api")
public class DocController {
    @Autowired
    DocRepository docRepository;

    @PostMapping("/doc")
    public ResponseEntity<Doc> createDoc(
            @RequestBody DocCreateDTO dDTO) {
        Doc dDAO = new Doc(dDTO.getTitle(), dDTO.getUploadDate());
        Doc d = docRepository.save(dDAO);

        return new ResponseEntity<>(d, HttpStatus.CREATED);
    }

    @GetMapping("/doc")
    public ResponseEntity<List<Doc>> getAllDoc() {
        List<Doc> allDoc = docRepository.findAll();
        return new ResponseEntity<>(allDoc, HttpStatus.OK);
    }

    @GetMapping("/doc/{id}")
    public ResponseEntity<Doc> getDocById(@PathVariable String id) {
        Optional<Doc> optDoc = docRepository.findById(id);
        if (optDoc.isPresent()) {
            return new ResponseEntity<>(optDoc.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
