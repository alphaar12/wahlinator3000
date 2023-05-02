package de.wahlinator.security;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

public class Md5PasswordEncoder implements PasswordEncoder {

    @Override
    public String encode(CharSequence rawPassword) {
        return DigestUtils.md5Hex(rawPassword.toString());
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encode(rawPassword).equals(encodedPassword);
    }
}