package de.wahlinator.repository;

import de.wahlinator.entity.PoliticalMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoliticalMemberRepository extends JpaRepository<PoliticalMember, Integer> {
}
