package ch.zhaw.myclient.service;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import ch.zhaw.myclient.model.Doc;
import ch.zhaw.myclient.model.DocType;
import ch.zhaw.myclient.repositories.DocRepository;
@ExtendWith(MockitoExtension.class)
public class DocServiceTest {

    @Mock
    private DocRepository docRepository;

    @InjectMocks
    private DocService docService;

    private Doc existingDoc;
    private final String docId = "1";

    @BeforeEach
    void setUp() {
        existingDoc = new Doc();
        existingDoc.setId(docId);
        existingDoc.setDocType(DocType.Offer);  // Anfangstyp setzen
    }


    @Test
void testUpdateDocTypeSuccess() {
    // Konfiguriere das Verhalten von findById, um das vorhandene Dokument zurückzugeben
    when(docRepository.findById(docId)).thenReturn(Optional.of(existingDoc));
    // Konfiguriere save, um das geänderte Dokument zurückzugeben
    when(docRepository.save(existingDoc)).thenReturn(existingDoc);

    Doc updatedDoc = docService.updateDocType(docId, DocType.Invoice);
    assertEquals(DocType.Invoice, updatedDoc.getDocType());
    verify(docRepository).save(existingDoc);  // Überprüfen, ob save aufgerufen wurde
}
@Test
void testUpdateDocTypeNotFound() {
    // Konfiguriere findById, um ein leeres Optional zurückzugeben, was bedeutet, dass kein Dokument gefunden wird
    when(docRepository.findById(docId)).thenReturn(Optional.empty());

    // Erwarte eine RuntimeException, wenn das Dokument nicht gefunden wird
    Exception exception = assertThrows(RuntimeException.class, () -> {
        docService.updateDocType(docId, DocType.Invoice);
    });

    assertEquals("Doc not found with id " + docId, exception.getMessage());
}
}
