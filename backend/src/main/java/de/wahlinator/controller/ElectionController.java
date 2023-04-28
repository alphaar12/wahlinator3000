package de.wahlinator.controller;

import de.wahlinator.entity.Election;
import de.wahlinator.payload.response.ElectionInfoResponse;
import de.wahlinator.payload.response.MessageResponse;
import de.wahlinator.repository.ElectionPoliticalPartyMemberRepository;
import de.wahlinator.repository.ElectionRepository;
import de.wahlinator.repository.PoliticalMemberRepository;
import de.wahlinator.repository.PoliticalPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping("/elections")
public class ElectionController {

    @Autowired
    private ElectionRepository electionRepository;

    @Autowired
    private ElectionPoliticalPartyMemberRepository electionPoliticalPartyMemberRepository;

    @Autowired
    private PoliticalPartyRepository politicalPartyRepository;
    @Autowired
    private PoliticalMemberRepository politicalMemberRepository;

    @GetMapping("/election/{id}")
    public ResponseEntity<?> getElection(
            @PathVariable int id
    ) {
        if (electionRepository.existsById(id)) {
            Election election = electionRepository.findById(id).get();
            return ResponseEntity.ok().body(
                    new ElectionInfoResponse(
                            election.getId(),
                            election.getType(),
                            election.getRegion(),
                            election.getVotes(),
                            election.getStartDate(),
                            election.getEndDate(),
                            electionPoliticalPartyMemberRepository.findAllPoliticalPartiesById(id),
                            electionPoliticalPartyMemberRepository.findAllPoliticalMembersById(id))
            );
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Election not found!"));
        }
    }

    @GetMapping("/parties")
    public ResponseEntity<?> getParties() {

        return ResponseEntity.badRequest().body(politicalPartyRepository.findAll());

    }

    @GetMapping("/members")
    public ResponseEntity<?> getMembers() {

        return ResponseEntity.badRequest().body(politicalMemberRepository.findAll());

    }
}
