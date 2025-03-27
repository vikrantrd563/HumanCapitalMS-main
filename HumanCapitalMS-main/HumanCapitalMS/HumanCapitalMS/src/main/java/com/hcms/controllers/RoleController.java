package com.hcms.controllers;

import com.hcms.models.Role;
import com.hcms.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/role")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }
    
    
    @PostMapping("/role")
    public Role createRole(@RequestBody Role role) {
        return roleService.createRole(role);
    }
    
}
