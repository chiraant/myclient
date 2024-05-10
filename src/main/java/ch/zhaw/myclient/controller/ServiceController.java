package ch.zhaw.myclient.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetStateChangeDTO;
import ch.zhaw.myclient.service.AssetService;

@RestController
@RequestMapping("/api/service")

public class ServiceController {
    @Autowired
    AssetService assetService;

    @PutMapping("/assignasset")
    public ResponseEntity<Asset> assignAsset(@RequestBody AssetStateChangeDTO changeS) {
        String personEmail = changeS.getPersonEmail();
        String assetId = changeS.getAssetId();
        Optional<Asset> asset = assetService.assignAsset(assetId, personEmail);
        if (asset.isPresent()) {
            return new ResponseEntity<>(asset.get(), HttpStatus.OK); 
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
