package ch.zhaw.myclient.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import ch.zhaw.myclient.model.DocCreateDTO;
import ch.zhaw.myclient.model.DocType;
import ch.zhaw.myclient.security.TestSecurityConfig;

@SpringBootTest
@Import(TestSecurityConfig.class)
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
public class DocControllerTests {

    @Autowired
    private MockMvc mockMvc;


    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @Test
    @Order(1)
    @WithMockUser(roles = "admin")
    void testCreateDoc() throws Exception {
        DocCreateDTO doc = new DocCreateDTO();
        doc.setDocTitle("Title");
        doc.setDocType(DocType.Guarantee);
        doc.setUploadDate("2021-01-01");
        doc.setUserEmail("achiramal@test.ch");

        var jsonBody = ow.writeValueAsString(doc);

        mockMvc.perform(post("/api/doc")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andReturn();
    }

    @Test
    @Order(2)
    void testCreateDocWithoutAuthorization() throws Exception {
        DocCreateDTO doc = new DocCreateDTO();
        doc.setDocTitle("Title");
        doc.setDocType(DocType.Guarantee);
        doc.setUploadDate("2021-01-01");
        doc.setUserEmail("achiramal@test.ch");

        var jsonBody = ow.writeValueAsString(doc);

        mockMvc.perform(post("/api/doc")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(3)
    @WithMockUser(roles = "admin")
    void testCreateDocWithMissingFields() throws Exception {
        DocCreateDTO doc = new DocCreateDTO();
        doc.setDocTitle("Title");
        // Missing docType and uploadDate
        doc.setUserEmail("achiramal@test.ch");

        var jsonBody = ow.writeValueAsString(doc);

        mockMvc.perform(post("/api/doc")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andReturn();
    }


   

    // PUT Request Tests

    @Test
    @Order(6)
    @WithMockUser(roles = "admin")
    void testGuaranteeDoc() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/guarantee", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(7)
    void testGuaranteeDocWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/guarantee", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(8)
    @WithMockUser(roles = "admin")
    void testOfferDoc() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/offer", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(9)
    void testOfferDocWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/offer", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(10)
    @WithMockUser(roles = "admin")
    void testInvoiceDoc() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/invoice", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(11)
    void testInvoiceDocWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/invoice", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(12)
    @WithMockUser(roles = "admin")
    void testOrderDoc() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/order", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(13)
    void testOrderDocWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/order", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(14)
    @WithMockUser(roles = "admin")
    void testOtherDoc() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/other", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(15)
    void testOtherDocWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/doc/{id}/other", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    // GET Request Tests

    @Test
    @Order(16)
    @WithMockUser
    void testGetAllDoc() throws Exception {
        mockMvc.perform(get("/api/doc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(17)
    @WithMockUser
    void testGetDocById() throws Exception {
        mockMvc.perform(get("/api/doc/{id}", "663203319ace341e63c665dc")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(18)
    void testGetDocByIdWithoutAuthorization() throws Exception {
        mockMvc.perform(get("/api/doc/{id}", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andReturn();
    }

    @Test
    @Order(19)
    @WithMockUser
    void testGetDocByIdNotFound() throws Exception {
        mockMvc.perform(get("/api/doc/{id}", "nonexistentid")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();
    }
}


