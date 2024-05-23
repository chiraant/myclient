package ch.zhaw.myclient.controller;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

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

import ch.zhaw.myclient.model.AssetStateChangeDTO;
import ch.zhaw.myclient.security.TestSecurityConfig;

@SpringBootTest
@Import(TestSecurityConfig.class)
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
public class ServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @Test
    @Order(1)
    @WithMockUser
    public void testCreateService() throws Exception {
        // create a test doc and convert to Json
        AssetStateChangeDTO assetChange = new AssetStateChangeDTO();
        assetChange.setPersonEmail("achiramal@test.ch");
        assetChange.setAssetId("6644d7512f94ca67ed9fa7ae");
        
        var jsonBody = ow.writeValueAsString(assetChange);
        // POST Json to service with authorization header
        mockMvc.perform(put("/api/service/assignasset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }
    @Test
    @Order(2)
    public void testAssignAssetWithoutAuthorization() throws Exception {
        AssetStateChangeDTO assetChange = new AssetStateChangeDTO();
        assetChange.setPersonEmail("achiramal@test.ch");
        assetChange.setAssetId("664ddfb1de7594278170b1aa");

        var jsonBody = ow.writeValueAsString(assetChange);

        mockMvc.perform(put("/api/service/assignasset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }
    @Test
    @Order(3)
    @WithMockUser
    public void testAssignAssetWithMissingFields() throws Exception {
        AssetStateChangeDTO assetChange = new AssetStateChangeDTO();
        assetChange.setPersonEmail("achiramal@test.ch");
        // Missing assetId

        var jsonBody = ow.writeValueAsString(assetChange);

        mockMvc.perform(put("/api/service/assignasset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andReturn();
    }
    @Test
    @Order(4)
    @WithMockUser
    public void testAssignAssetWithEmptyFields() throws Exception {
        AssetStateChangeDTO assetChange = new AssetStateChangeDTO();
        assetChange.setPersonEmail("");
        assetChange.setAssetId("");

        var jsonBody = ow.writeValueAsString(assetChange);

        mockMvc.perform(put("/api/service/assignasset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andReturn();
    }
}


