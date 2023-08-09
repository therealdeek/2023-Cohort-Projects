package com.dallasdevs.team6.service;

import com.dallasdevs.team6.dao.UserDao;
import com.dallasdevs.team6.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService {

    @Autowired
    private UserDao userDao;


    public UserEntity loadUserByUsername(final String username) {
        UserEntity userEntity = userDao.findByUsername(username);
        if (userEntity == null) {
            throw new RuntimeException("User not found with username: " + username);
        }

        return  userEntity;
    }
}



