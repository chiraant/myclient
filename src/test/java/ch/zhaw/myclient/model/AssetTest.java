package ch.zhaw.myclient.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class AssetTest {
     @Test
    void testNoArgsConstructor() {
        Asset asset = new Asset();
        assertNull(asset.getId());
        assertNull(asset.getAssetName());  // Obwohl NonNull in der Klasse, sollte der no-arg Constructor nicht fehlschlagen
        assertNull(asset.getPurchaseDate());
        assertNull(asset.getGuaranteeEnd());
        assertEquals(AssetState.Unassigned, asset.getAssetState());
        assertNull(asset.getPersonId());
        assertNull(asset.getPersonEmail());
    }

    @Test
    void testRequiredArgsConstructor() {
        Asset asset = new Asset("Laptop", "2024-01-01", "2025-01-01");
        assertNotNull(asset.getAssetName());
        assertNotNull(asset.getPurchaseDate());
        assertNotNull(asset.getGuaranteeEnd());
        assertEquals("Laptop", asset.getAssetName());
        assertEquals("2024-01-01", asset.getPurchaseDate());
        assertEquals("2025-01-01", asset.getGuaranteeEnd());
        assertEquals(AssetState.Unassigned, asset.getAssetState());
    }

    @Test
    void testSetters() {
        Asset asset = new Asset();
        asset.setId("123");
        asset.setAssetName("PC-001");
        asset.setPurchaseDate("2023-05-21");
        asset.setGuaranteeEnd("2024-05-21");
        asset.setAssetState(AssetState.Assigned);
        asset.setPersonId("p123");
        asset.setPersonEmail("email@example.com");

        assertEquals("123", asset.getId());
        assertEquals("PC-001", asset.getAssetName());
        assertEquals("2023-05-21", asset.getPurchaseDate());
        assertEquals("2024-05-21", asset.getGuaranteeEnd());
        assertEquals(AssetState.Assigned, asset.getAssetState());
        assertEquals("p123", asset.getPersonId());
        assertEquals("email@example.com", asset.getPersonEmail());
    }

    @Test
    void testNonNullFields_RequiredArgsConstructor() {
        assertThrows(NullPointerException.class, () -> {
            new Asset(null, "2024-01-01", "2025-01-01");
        });
        assertThrows(NullPointerException.class, () -> {
            new Asset("Laptop", null, "2025-01-01");
        });
        assertThrows(NullPointerException.class, () -> {
            new Asset("Laptop", "2024-01-01", null);
        });
    }
}
