package com.hcms.controllers;

import com.hcms.DTOS.EmployeeLoginRequest;
import com.hcms.models.EmployeeManager;
import com.hcms.services.EmployeeManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/managers")
public class EmployeeManagerController {

    @Autowired
    private EmployeeManagerService managerService;

    @GetMapping("/man")
    public List<EmployeeManager> getAllManagers() {
        return managerService.getAllManagers();
    }
    
    @PostMapping("/logingEmployee")
    public boolean login(@RequestBody EmployeeLoginRequest employeeLoginRequest)
    {
    	return managerService.loginEmployee(employeeLoginRequest);
    }
}
