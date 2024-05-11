package ch.zhaw.myclient.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Doc;
import ch.zhaw.myclient.model.DocCreateDTO;
import ch.zhaw.myclient.model.DocType;
import ch.zhaw.myclient.repositories.DocRepository;
import ch.zhaw.myclient.service.DocService;

@RestController
@RequestMapping("/api")
public class DocController {

    private DocService docService;

    public DocController(DocService docService) {
        this.docService = docService;
    }

    @PutMapping("/doc/{id}/guarantee")
    public ResponseEntity<Doc> guaranteeDoc(@PathVariable String id) {
        return ResponseEntity.ok(docService.updateDocType(id, DocType.Guarantee));
    }

    @PutMapping("/doc/{id}/offer")
    public ResponseEntity<Doc> offerDoc(@PathVariable String id) {
        return ResponseEntity.ok(docService.updateDocType(id, DocType.Offer));
    }

    @PutMapping("/doc/{id}/invoice")
    public ResponseEntity<Doc> invoiceDoc(@PathVariable String id) {
        return ResponseEntity.ok(docService.updateDocType(id, DocType.Invoice));
    }

    @PutMapping("/doc/{id}/order")
    public ResponseEntity<Doc> orderDoc(@PathVariable String id) {
        return ResponseEntity.ok(docService.updateDocType(id, DocType.Order));
    }

    @PutMapping("/doc/{id}/other")
    public ResponseEntity<Doc> otherDoc(@PathVariable String id) {
        return ResponseEntity.ok(docService.updateDocType(id, DocType.Other));
    }
    @PutMapping("/doc/{id}/type/{type}")
public ResponseEntity<Doc> updateDocType(@PathVariable String id, @PathVariable String type) {
    try {
        DocType docType = DocType.valueOf(type.toUpperCase());
        return ResponseEntity.ok(docService.updateDocType(id, docType));
    } catch (IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(null); // Handle the case where the type is invalid
    }
}


    @Autowired
    DocRepository docRepository;

    @PostMapping("/doc")
    public ResponseEntity<Doc> createDoc(
            @RequestBody DocCreateDTO dDTO) {
        Doc dDAO = new Doc(dDTO.getDocTitle(), dDTO.getUploadDate(), dDTO.getDocType());
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
