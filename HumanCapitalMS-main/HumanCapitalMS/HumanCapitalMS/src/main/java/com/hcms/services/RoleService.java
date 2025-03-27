package com.hcms.services;

import com.hcms.models.Role;
import com.hcms.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    // Get all roles
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    // Get a role by ID
    public Optional<Role> getRoleById(int id) {
        return roleRepository.findById(id);
    }

    // Create a new role
    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    // Update an existing role
    public Role updateRole(int id, Role updatedRole) {
        return roleRepository.findById(id).map(role -> {
            role.setRoleName(updatedRole.getRoleName());
            role.setDescription(updatedRole.getDescription());
            return roleRepository.save(role);
        }).orElseThrow(() -> new RuntimeException("Role not found with ID: " + id));
    }

    // Delete a role
    public void deleteRole(int id) {
        roleRepository.deleteById(id);
    }
}
