package ch.zhaw.myclient.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.myclient.model.Person;


public interface PersonRepository extends MongoRepository<Person,String> {
    Person findFirstByEmail(String email);
}
