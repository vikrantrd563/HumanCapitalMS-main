package com.hcms.services;

import com.hcms.DTOS.EmployeeLoginRequest;
import com.hcms.models.Employee;
import com.hcms.models.EmployeeManager;
import com.hcms.repositories.EmployeeManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeManagerService {

    @Autowired
    private EmployeeManagerRepository managerRepository;

    public List<EmployeeManager> getAllManagers() {
        return managerRepository.findAll();
    }
    

    public boolean loginEmployee(EmployeeLoginRequest employeeLoginRequest) {
        EmployeeManager employee = managerRepository.findByEmail(employeeLoginRequest.getEmail());

        if (employee == null) {
            return false; // Employee not found
        }

        
        
        return employee.getPassword().equals(employeeLoginRequest.getPassword());
    }
}
