package de.wahlinator.repository;

import de.wahlinator.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsById(int id);

    Optional<User> findById(int id);

}
