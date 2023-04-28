package de.wahlinator.repository;

import de.wahlinator.entity.PoliticalParty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PoliticalPartyRepository extends JpaRepository<PoliticalParty, Integer> {
}
