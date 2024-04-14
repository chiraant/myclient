package ch.zhaw.myclient.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.zhaw.myclient.model.Doc;
import ch.zhaw.myclient.model.DocType;
import ch.zhaw.myclient.repositories.DocRepository;

@Service
public class DocService {
    private DocRepository docRepository;

    public DocService(DocRepository docRepository) {
        this.docRepository = docRepository;
    }

    @Transactional
    public Doc updateDocType(String docId, DocType newType) {
        Doc doc = docRepository.findById(docId)
                .orElseThrow(() -> new RuntimeException("Doc not found with id " + docId));
        doc.setDocType(newType);
        return docRepository.save(doc);
    }
}
