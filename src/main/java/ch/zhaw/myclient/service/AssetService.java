package ch.zhaw.myclient.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetState;
import ch.zhaw.myclient.repositories.AssetRepository;

@Service
public class AssetService {

    private AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    @Transactional
    public Asset updateAssetState(String assetId, AssetState newState) {
        Asset asset = assetRepository.findById(assetId)
            .orElseThrow(() -> new RuntimeException("Asset not found with id " + assetId));
        asset.setAssetState(newState);
        return assetRepository.save(asset);
    }
}
