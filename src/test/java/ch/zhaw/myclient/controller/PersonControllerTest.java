package ch.zhaw.myclient.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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

import ch.zhaw.myclient.model.PersonCreateDTO;
import ch.zhaw.myclient.security.TestSecurityConfig;

@SpringBootTest
@Import(TestSecurityConfig.class)
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
public class PersonControllerTest {

   
    @Autowired
    private MockMvc mockMvc;

    


    


    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @Test
    @Order(1)
    @WithMockUser
    public void testCreatePerson() throws Exception {
        // create a test doc and convert to Json
        PersonCreateDTO person = new PersonCreateDTO();
        person.setFirstName("John");
        person.setLastName("Doe");
        person.setEmail("jdoe@test.ch");
        var jsonBody = ow.writeValueAsString(person);
        // POST Json to service with authorization header
        mockMvc.perform(post("/api/person")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andReturn();
    }
    @Test
    @Order(2)
    @WithMockUser
    public void testCreatePersonWithMissingFields() throws Exception {
        PersonCreateDTO person = new PersonCreateDTO();
        person.setFirstName("John");
        
        // Missing last name and email

        var jsonBody = ow.writeValueAsString(person);

        mockMvc.perform(post("/api/person")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andReturn();
    }
    @Test
    @Order(3)
    @WithMockUser
    public void testCreatePersonWithoutAuthorization() throws Exception {
        PersonCreateDTO person = new PersonCreateDTO();
        person.setFirstName("John");
        person.setLastName("Doe");
        person.setEmail("jdoe@gmx.ch");

        var jsonBody = ow.writeValueAsString(person);

        mockMvc.perform(post("/api/person")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }
    @Test
    @Order(4)
    @WithMockUser(roles = "admin")
    public void testGetAllPerson() throws Exception {

        mockMvc.perform(get("/api/person")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(5)
    @WithMockUser(roles = "admin")
    public void testGetPersonById() throws Exception {
        

        mockMvc.perform(get("/api/person/{id}", "662503c65ce19870a1557a85")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(6)
    public void testGetPersonByIdWithoutAuthorization() throws Exception {
        mockMvc.perform(get("/api/person/{id}", "662503c65ce19870a1557a85")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andReturn();
    }

    @Test
    @Order(7)
    @WithMockUser(roles = "admin")
    public void testGetPersonByIdNotFound() throws Exception {
     mockMvc.perform(get("/api/person/{id}", "nonexistentid")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();
    }

    
}
