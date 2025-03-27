package com.hcms.DTOS;

import lombok.Data;

@Data
public class EmployeeLoginRequest {
    private String email;
    private String password;
    
    public EmployeeLoginRequest() {
		// TODO Auto-generated constructor stub
	}
	public EmployeeLoginRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
    
    
}
