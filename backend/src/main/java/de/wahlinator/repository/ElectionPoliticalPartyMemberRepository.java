package de.wahlinator.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ElectionPoliticalPartyMemberRepository {
    @PersistenceContext
    EntityManager entityManager;

    public List<?> findAllPoliticalMembersById(int id) {
        Query query = entityManager.createNativeQuery("SELECT Political_Party_ID, political_members FROM election_political_party WHERE Election_ID = ? ").setParameter(1, id);
        return query.getResultList();
    }

    public List<?> findAllPoliticalPartiesById(int id) {
        Query query = entityManager.createNativeQuery("SELECT political_member_ID FROM election_political_member WHERE Election_ID = ? ").setParameter(1, id);
        return query.getResultList();
    }

    public boolean hasVoted(int userId, int electionId) {
        Query query = entityManager.createNativeQuery("SELECT EXISTS(SELECT * FROM Has_Voted_Election WHERE Users_id = ? AND Election_id = ? );").setParameter(1, userId).setParameter(2, electionId);

        BigInteger a = (BigInteger) query.getResultList().get(0);
        if (a.compareTo(BigInteger.ONE) >= 0) {
            return true;
        }
        return false;
    }

    @Transactional
    public void voteForParty(int userId, int electionId, int politicalPartyId) {
        try {
            entityManager.createNativeQuery("UPDATE election_political_party_Votes SET votes = votes + 1 WHERE Election_ID = ? AND political_party_ID = ? ;").setParameter(1, electionId).setParameter(2, politicalPartyId).executeUpdate();
            entityManager.createNativeQuery("INSERT INTO Has_Voted_Election(Users_ID, Election_ID) VALUES( ? , ? );").setParameter(1, userId).setParameter(2, electionId).executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Transactional
    public void voteForMember(int userId, int electionId, ArrayList<Integer> politicalMemberIdList) {
        try {
            for (Integer memberId : politicalMemberIdList) {
                System.out.println(memberId);
                entityManager.createNativeQuery("UPDATE election_political_member_Votes SET votes = votes + 1 WHERE Election_ID = ? AND political_member_ID = ? ;").setParameter(1, electionId).setParameter(2, memberId).executeUpdate();
            }
            entityManager.createNativeQuery("INSERT INTO Has_Voted_Election(Users_ID, Election_ID) VALUES( ? , ? );").setParameter(1, userId).setParameter(2, electionId).executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

