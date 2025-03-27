package com.hcms.DTOS;

import lombok.Data;

@Data
public class EmployeeRegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String roleType;
}