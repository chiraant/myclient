package ch.zhaw.myclient.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetState;
import ch.zhaw.myclient.model.Person;
import ch.zhaw.myclient.repositories.AssetRepository;
import ch.zhaw.myclient.repositories.PersonRepository;

@Service
public class AssetService {
    @Autowired
    AssetRepository assetRepository;

    @Autowired
    PersonRepository personRepository;




    



    public Optional<Asset> assignAsset(String assetId, String personEmail) {
        Optional<Asset> assetToAssign = assetRepository.findById(assetId);
        if (assetToAssign.isPresent()) {
            Asset asset = assetToAssign.get();
            if (asset.getAssetState() == AssetState.Unassigned) {
                Person p = personRepository.findFirstByEmail(personEmail);
                if (p != null) {
                    asset.setAssetState(AssetState.Assigned);
                    asset.setPersonId(p.getId());
                    assetRepository.save(asset);
                    return Optional.of(asset);
                }
            }
        }
        return Optional.empty();
    }



    @Transactional
    public Asset updateAssetState(String assetId, AssetState newState) {
        Asset asset = assetRepository.findById(assetId)
            .orElseThrow(() -> new RuntimeException("Asset not found with id " + assetId));
        asset.setAssetState(newState);
        if (newState == AssetState.Disposed) {
            asset.setPersonId(null); // Setze die personId auf null, wenn der Zustand "Disposed" ist
        }
        return assetRepository.save(asset);
    }

    @Transactional
public Asset updateAssetForUnassignment(String assetId) {
    Asset asset = assetRepository.findById(assetId)
            .orElseThrow(() -> new RuntimeException("Asset not found with id " + assetId));
    asset.setAssetState(AssetState.Unassigned);
    asset.setPersonId(null);  // Setze die personId auf null
    return assetRepository.save(asset);
}
}
