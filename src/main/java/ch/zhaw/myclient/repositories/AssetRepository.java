
package ch.zhaw.myclient.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.myclient.model.Asset;
import ch.zhaw.myclient.model.AssetState;



public interface AssetRepository extends MongoRepository<Asset,String>{
    Page<Asset>  findByAssetState(AssetState assetState, Pageable pageable);
    Page<Asset>  findByAssetName(String assetName, Pageable pageable);
    Page<Asset>  findByPersonEmail(String personEmail, Pageable pageable);
    
    
}
