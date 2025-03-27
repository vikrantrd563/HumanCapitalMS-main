package com.hcms.repositories;

import com.hcms.models.Employee;
import com.hcms.models.EmployeeManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeManagerRepository extends JpaRepository<EmployeeManager, Long> {
    EmployeeManager findByEmail(String email); // Ensure EmployeeManager is returned
}