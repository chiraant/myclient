package ch.zhaw.myclient.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.myclient.model.Doc;

public interface DocRepository extends MongoRepository<Doc,String>{
    
}
