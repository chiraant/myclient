package ch.zhaw.myclient.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetCreateDTO;
import ch.zhaw.myclient.model.AssetState;
import ch.zhaw.myclient.repositories.AssetRepository;
import ch.zhaw.myclient.service.AssetService;

@RestController
@RequestMapping("/api")

public class AssetController {

    private AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @PutMapping("/asset/{id}/assign")
    public ResponseEntity<Asset> assignAsset(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (!userRoles.contains("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok(assetService.updateAssetState(id, AssetState.Assigned));
    }

    @PutMapping("/asset/{id}/unassign")
    public ResponseEntity<Asset> unassignAsset(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {  
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (!userRoles.contains("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } 
        return ResponseEntity.ok(assetService.updateAssetForUnassignment(id));
    }

    @PutMapping("/asset/{id}/repair")
    public ResponseEntity<Asset> ToRepairAsset(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (!userRoles.contains("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok(assetService.updateAssetState(id, AssetState.InRepair));
    }
    @PutMapping("/asset/{id}/repaired")
public ResponseEntity<Asset> RepairedAsset(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
    List<String> userRoles = jwt.getClaimAsStringList("user_roles");
    if (!userRoles.contains("admin")) {
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    } 
    return ResponseEntity.ok(assetService.updateAssetState(id, AssetState.Assigned));
}

    @PutMapping("/asset/{id}/dispose")
    public ResponseEntity<Asset> disposeAsset(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (!userRoles.contains("admin")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } 
        return ResponseEntity.ok(assetService.updateAssetState(id, AssetState.Disposed));
    }

    @Autowired
    AssetRepository assetRepository;

    @PostMapping("/asset")
    public ResponseEntity<Asset> createAsset(
            @RequestBody AssetCreateDTO aDTO,
            @AuthenticationPrincipal Jwt jwt) {
                List<String> userRoles = jwt.getClaimAsStringList("user_roles");
 if (!userRoles.contains("admin")) {
 return new ResponseEntity<>(HttpStatus.FORBIDDEN);
 } 
        Asset aDAO = new Asset(aDTO.getAssetName(), aDTO.getPurchaseDate(), aDTO.getGuaranteeEnd());
        Asset a = assetRepository.save(aDAO);

        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @GetMapping("/asset")
public ResponseEntity<Page<Asset>> getAllAsset(
        @RequestParam(required = false) String assetName,
        @RequestParam(required = false) String personEmail,
        @RequestParam(required = false) AssetState assetState,
        @RequestParam(required = false, defaultValue = "0") int pageNumber,
        @RequestParam(required = false, defaultValue = "10") int pageSize) {

    Sort sort = Sort.by("assetName").ascending(); // Sort assets alphabetically
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, sort);

    Page<Asset> assets;
    if (assetState  != null) {
        assets = assetRepository.findByAssetState(assetState, pageRequest);
    } else {
        assets = assetRepository.findAll(pageRequest);
    }

    return ResponseEntity.ok(assets);
}
    @GetMapping("/asset/{id}")
    public ResponseEntity<Asset> getAssetById(@PathVariable String id) {
        Optional<Asset> optAsset = assetRepository.findById(id);
        if (optAsset.isPresent()) {
            return new ResponseEntity<>(optAsset.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
