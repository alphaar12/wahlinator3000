package de.wahlinator.security.services;

import de.wahlinator.entity.User;
import de.wahlinator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String personalNumber) throws UsernameNotFoundException {
        User user = userRepository.findByPersonalNumber(personalNumber)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with personal number: " + personalNumber));

        return UserDetailsImpl.build(user);
    }
}
