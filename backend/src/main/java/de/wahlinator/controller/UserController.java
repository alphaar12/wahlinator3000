package de.wahlinator.controller;

import de.wahlinator.entity.User;
import de.wahlinator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/admin/newUser")
    public ResponseEntity assignUser(
            @RequestBody User user
    ) {
        if (!userRepo.existsById(user.getId())) {
            userRepo.save(
                    new User(0, user.getPersonalNumber(), user.getFirstName(), user.getLastName(), user.getBirthdate(), user.getZipCode(), user.getPassword())
            );

            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cars")
    public ResponseEntity<List<User>> findAll() {
        List<User> listUsers = userRepo.findAll();

        return new ResponseEntity<>(listUsers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @Transactional
    @PutMapping("/admin/edit/{id}")
    public ResponseEntity editUser(
            @RequestBody User user,
            @PathVariable int id
    ) {
        if (userRepo.existsById(user.getId())) {
            userRepo.findById(id).get().setPersonalNumber(user.getPersonalNumber());
            userRepo.findById(id).get().setFirstName(user.getFirstName());
            userRepo.findById(id).get().setLastName(user.getLastName());
            userRepo.findById(id).get().setBirthdate(user.getBirthdate());
            userRepo.findById(id).get().setPassword(user.getPassword());
            userRepo.findById(id).get().setZipCode(user.getZipCode());

            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
