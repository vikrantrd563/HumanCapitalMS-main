package com.hcms.repositories;

import com.hcms.models.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayrollRepository extends JpaRepository<Payroll, Integer> {
    Payroll findByEmployee_EmployeeId(Integer employeeId);
}
