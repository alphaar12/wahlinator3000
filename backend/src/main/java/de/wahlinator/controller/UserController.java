package de.wahlinator.controller;

import de.wahlinator.entity.User;
import de.wahlinator.payload.response.MessageResponse;
import de.wahlinator.payload.response.UserInfoResponse;
import de.wahlinator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping("/admin")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    @PutMapping("/editUser/{personalNumber}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> editUser(
            @RequestBody User user,
            @PathVariable String personalNumber
    ) {
        if (userRepository.existsByPersonalNumber(user.getPersonalNumber())) {
            userRepository.findByPersonalNumber(personalNumber).get().setPersonalNumber(user.getPersonalNumber());
            userRepository.findByPersonalNumber(personalNumber).get().setFirstName(user.getFirstName());
            userRepository.findByPersonalNumber(personalNumber).get().setLastName(user.getLastName());
            userRepository.findByPersonalNumber(personalNumber).get().setBirthdate(user.getBirthdate());
            userRepository.findByPersonalNumber(personalNumber).get().setConstituency(user.getConstituency());
            userRepository.findByPersonalNumber(personalNumber).get().setFederalState(user.getFederalState());

            return ResponseEntity.ok(new MessageResponse("User updated successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User not found!"));
        }
    }

    @GetMapping("/getUser/{personalNumber}")
    public ResponseEntity<?> getSingleCar(
            @PathVariable String personalNumber
    ) {
        if (userRepository.existsByPersonalNumber(personalNumber)) {
            User user = userRepository.findByPersonalNumber(personalNumber).get();
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User not found!"));
        }
    }

}
