package de.wahlinator.controller;

import de.wahlinator.entity.User;
import de.wahlinator.payload.response.MessageResponse;
import de.wahlinator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    @PutMapping("/edit/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> editUser(
            @RequestBody User user,
            @PathVariable int id
    ) {
        if (userRepository.existsByPersonalNumber(user.getPersonalNumber())) {
            userRepository.findById(id).get().setPersonalNumber(user.getPersonalNumber());
            userRepository.findById(id).get().setFirstName(user.getFirstName());
            userRepository.findById(id).get().setLastName(user.getLastName());
            userRepository.findById(id).get().setBirthdate(user.getBirthdate());
            userRepository.findById(id).get().setPassword(user.getPassword());
            userRepository.findById(id).get().setZipCode(user.getZipCode());

            return ResponseEntity.ok(new MessageResponse("User updated successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: User not found!"));
        }
    }

}
