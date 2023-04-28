package de.wahlinator.repository;

import de.wahlinator.entity.Election;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ElectionRepository extends JpaRepository<Election, Integer> {

    boolean existsById(int id);

    Optional<Election> findById(int id);

}
