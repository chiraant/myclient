
package ch.zhaw.myclient.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.myclient.model.Asset;

public interface AssetRepository extends MongoRepository<Asset,String>{
    
}
