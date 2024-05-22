package ch.zhaw.myclient.controller;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import ch.zhaw.myclient.model.Mail;
import ch.zhaw.myclient.security.TestSecurityConfig;
import ch.zhaw.myclient.service.MailService;

@SpringBootTest
@Import(TestSecurityConfig.class)
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
public class MailControllerTest {
     @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MailService mailService;

    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();


     @Test
    @Order(1)
    @WithMockUser(roles = "admin")
    void testSendEmailSuccess() throws Exception {
        Mail mail = new Mail();
        mail.setTo("chiraant@students.zhaw.ch");
        mail.setSubject("Test Subject");
        mail.setMessage("This is a test email.");

        var jsonBody = ow.writeValueAsString(mail);


        mockMvc.perform(post("/api/send-email")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string("Email sent successfully"))
                .andReturn();
    }
    @Test
    @Order(2)
    void testSendEmailWithoutAuthorization() throws Exception {
        Mail mail = new Mail();
        mail.setTo("test@example.com");
        mail.setSubject("Test Subject");
        mail.setMessage("This is a test email.");

        var jsonBody = ow.writeValueAsString(mail);

        mockMvc.perform(post("/api/send-email")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

}
