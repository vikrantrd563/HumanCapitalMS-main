package com.hcms.repositories;

import com.hcms.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findByEmail(String email);
    Employee findByPassword(String password);
    List<Employee> findByDepartment_DepartmentId(Integer departmentId);
}
