package ch.zhaw.myclient.controller;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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

import ch.zhaw.myclient.model.AssetCreateDTO;
import ch.zhaw.myclient.model.AssetState;
import ch.zhaw.myclient.security.TestSecurityConfig;

@SpringBootTest
@Import(TestSecurityConfig.class)
@AutoConfigureMockMvc
@TestMethodOrder(OrderAnnotation.class)
public class AssetControllerTest {
    @Autowired
    private MockMvc mockMvc;
    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @Test
    @Order(1)
    @WithMockUser(roles = "admin")
    void testCreateAsset() throws Exception {
        AssetCreateDTO asset = new AssetCreateDTO();
        asset.setAssetName("AssetName");
        asset.setAssetState(AssetState.Unassigned);
        asset.setGuaranteeEnd("2021-01-01");
        asset.setPurchaseDate("2021-01-01");

        var jsonBody = ow.writeValueAsString(asset);

        mockMvc.perform(post("/api/asset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andReturn();
    }

    @Test
    @Order(2)
    void testCreateAssetWithoutAuthorization() throws Exception {
        AssetCreateDTO asset = new AssetCreateDTO();
        asset.setAssetName("AssetName");
        asset.setAssetState(AssetState.Unassigned);
        asset.setGuaranteeEnd("2021-01-01");
        asset.setPurchaseDate("2021-01-01");

        var jsonBody = ow.writeValueAsString(asset);

        mockMvc.perform(post("/api/asset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(3)
    @WithMockUser(roles = "admin")
    void testCreateAssetWithMissingFields() throws Exception {
        AssetCreateDTO asset = new AssetCreateDTO();
        asset.setAssetName("AssetName");
        // Missing assetState, guaranteeEnd, and purchaseDate

        var jsonBody = ow.writeValueAsString(asset);

        mockMvc.perform(post("/api/asset")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andReturn();
    }

    // PUT Request Tests

    @Test
    @Order(4)
    @WithMockUser(roles = "admin")
    void testAssignAsset() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/assign", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(5)
    void testAssignAssetWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/assign", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(6)
    @WithMockUser(roles = "admin")
    void testUnassignAsset() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/unassign", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(7)
    void testUnassignAssetWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/unassign", "6645e8dfdb66af2659445f0c")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(8)
    @WithMockUser(roles = "admin")
    void testRepairAsset() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/repair", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(9)
    void testRepairAssetWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/repair", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(10)
    @WithMockUser(roles = "admin")
    void testRepairedAsset() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/repaired", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(11)
    void testRepairedAssetWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/repaired", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }

    @Test
    @Order(12)
    @WithMockUser(roles = "admin")
    void testDisposeAsset() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/dispose", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(13)
    void testDisposeAssetWithoutAuthorization() throws Exception {
        mockMvc.perform(put("/api/asset/{id}/dispose", "664ddfb1de7594278170b1aa")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isForbidden())
                .andReturn();
    }
   @Test
    @Order(14)
    @WithMockUser
    void testGetAllAsset() throws Exception {

        mockMvc.perform(get("/api/asset")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(15)
    @WithMockUser
    void testGetAssetById() throws Exception {
       
        mockMvc.perform(get("/api/asset/{id}", "6631f5b987a77207da323b2d")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    @Order(16)
    void testGetAssetByIdWithoutAuthorization() throws Exception {
              mockMvc.perform(get("/api/asset/{id}", "6631f5b987a77207da323b2d")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andReturn();
    }

    @Test
    @Order(17)
    @WithMockUser
    void testGetAssetByIdNotFound() throws Exception {

        mockMvc.perform(get("/api/asset/{id}", "nonexistentid")
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andReturn();
    }
   
      
}
