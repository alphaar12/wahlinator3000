package de.wahlinator.controller;

import de.wahlinator.entity.Election;
import de.wahlinator.entity.PoliticalParty;
import de.wahlinator.payload.request.VoteRequest;
import de.wahlinator.payload.response.ElectionInfoResponse;
import de.wahlinator.payload.response.MessageResponse;
import de.wahlinator.repository.ElectionPoliticalPartyMemberRepository;
import de.wahlinator.repository.ElectionRepository;
import de.wahlinator.repository.PoliticalMemberRepository;
import de.wahlinator.repository.PoliticalPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true")
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
    public ResponseEntity<?> getElection(@PathVariable int id) {
        if (electionRepository.existsById(id)) {
            Election election = electionRepository.findById(id).get();
            List<PoliticalParty> allParties = politicalPartyRepository.findAll();
            List<PoliticalParty> politicalParties = allParties.stream()
                    .filter(o1 -> electionPoliticalPartyMemberRepository.findAllPoliticalPartiesById(id).stream()
                            .anyMatch(o2 -> Integer.parseInt(o2.toString()) == o1.getId()))
                    .collect(Collectors.toList());
            return ResponseEntity.ok().body(new ElectionInfoResponse(election.getId(), election.getType(), election.getRegion(), election.getVotes(), election.getAge(), election.getStartDate(), election.getEndDate(), politicalParties, electionPoliticalPartyMemberRepository.findAllPoliticalMembersById(id)));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Election not found!"));
        }
    }

    @GetMapping("/parties")
    public ResponseEntity<?> getParties() {

        return ResponseEntity.ok().body(politicalPartyRepository.findAll());

    }

    @GetMapping("/members")
    public ResponseEntity<?> getMembers() {

        return ResponseEntity.ok().body(politicalMemberRepository.findAll());

    }

    @PostMapping("/hasVoted")
    public ResponseEntity<?> hasVoted(@RequestBody VoteRequest vote) {
        return ResponseEntity.ok().body(electionPoliticalPartyMemberRepository.hasVoted(vote.getUserId(), vote.getElectionId()));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @Transactional
    @PutMapping("/voteParty")
    public ResponseEntity<?> voteForParty(@RequestBody VoteRequest vote) {
        if (!electionPoliticalPartyMemberRepository.hasVoted(vote.getUserId(), vote.getElectionId())) {
            electionPoliticalPartyMemberRepository.voteForParty(vote.getUserId(), vote.getElectionId(), vote.getPoliticalPartyId());
            return ResponseEntity.ok(new MessageResponse("User voted successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User has already voted!"));
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @Transactional
    @PutMapping("/voteMember")
    public ResponseEntity<?> voteForMember(@RequestBody VoteRequest vote) {
        if (!electionPoliticalPartyMemberRepository.hasVoted(vote.getUserId(), vote.getElectionId())) {
            electionPoliticalPartyMemberRepository.voteForMember(vote.getUserId(), vote.getElectionId(), vote.getPoliticalMemberIdList());
            return ResponseEntity.ok(new MessageResponse("User voted successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User has already voted!"));
        }
    }
}
