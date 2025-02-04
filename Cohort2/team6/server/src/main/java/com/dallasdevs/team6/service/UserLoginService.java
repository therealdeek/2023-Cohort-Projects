package com.dallasdevs.team6.service;

import com.dallasdevs.team6.dao.UserDao;
import com.dallasdevs.team6.entity.UserEntity;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserLoginService {

    @Value("${jwt.secret}") // Use a secret value from your application.properties or application.yml
    private String jwtSecret;

    @Value("${jwt.expirationMs}") // Use expiration time from your application.properties or application.yml
    private long jwtExpirationMs;
    private PasswordEncryptionService passwordEncryptionService;
    private final UserDao userDao;

    public UserLoginService(final PasswordEncryptionService passwordEncryptionService, final UserDao userDao) {
        this.passwordEncryptionService = passwordEncryptionService;
        this.userDao = userDao;
    }

    // Method to authenticate the user
    public UserEntity authenticateUser(final String username, final String password) {
        UserEntity userEntity = userDao.findByUsername(username);
        if (userEntity != null && passwordEncryptionService.validatePassword(password, userEntity.getPassword())) {
            return userEntity;
        }
        return null;
    }

    // Method to generate JWT
    public String generateJwtToken(final UserEntity userEntity) {
        String uuid = userEntity.getUuid();
        String username = userEntity.getUsername();
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + jwtExpirationMs);

        return Jwts.builder()
                .setSubject(username)
                .claim("uuid", uuid)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
    }
}
