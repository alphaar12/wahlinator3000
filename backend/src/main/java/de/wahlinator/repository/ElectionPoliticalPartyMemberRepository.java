package de.wahlinator.repository;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class ElectionPoliticalPartyMemberRepository {
    @PersistenceContext
    EntityManager entityManager;

    public List<?> findAllPoliticalMembersById(int id) {
        Query query = entityManager.createNativeQuery("SELECT Political_Party_ID, political_members FROM election_political_party WHERE Election_ID = " + id);
        return query.getResultList();
    }

    public List<?> findAllPoliticalPartiesById(int id) {
        Query query = entityManager.createNativeQuery("SELECT political_member_ID FROM election_political_member WHERE Election_ID = " + id);
        return query.getResultList();
    }
}

