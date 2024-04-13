package ch.zhaw.myclient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetCreateDTO;
import ch.zhaw.myclient.repositories.AssetRepository;


@RestController
@RequestMapping("/api")

public class AssetController {
    @Autowired
    AssetRepository assetRepository;

    @PostMapping("/asset")
    public ResponseEntity<Asset> createAsset(
            @RequestBody AssetCreateDTO aDTO) {
        Asset aDAO = new Asset(aDTO.getAssetName(), aDTO.getPurchaseDate(), aDTO.getOwner(), aDTO.getGuaranteeEnd());
        Asset a = assetRepository.save(aDAO);

        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @GetMapping("/asset")
    public ResponseEntity<List<Asset>>getAllAsset() {
        List<Asset> allAsset = assetRepository.findAll();
        return new ResponseEntity<>(allAsset, HttpStatus.OK);
    }
    
}
