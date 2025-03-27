package com.hcms.services;

import com.hcms.DTOS.EmployeeLoginRequest;
import com.hcms.models.Employee;
import com.hcms.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Integer id) {
        return employeeRepository.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Integer id, Employee updatedEmployee) {
        return employeeRepository.findById(id).map(employee -> {
            employee.setFirstName(updatedEmployee.getFirstName());
            employee.setLastName(updatedEmployee.getLastName());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setDepartment(updatedEmployee.getDepartment());
            employee.setSalary(updatedEmployee.getSalary());
            return employeeRepository.save(employee);
        }).orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
    
    
    public boolean loginEmployee(EmployeeLoginRequest employeeLoginRequest) {
        Employee employee = employeeRepository.findByEmail(employeeLoginRequest.getEmail());

        // Check if employee exists
        if (employee == null) {
            return false;// Incorrect password
        }

        // Validate password
        if (!employee.getPassword().equals(employeeLoginRequest.getPassword())) {
            return false; // Incorrect password
        }

        return true; // Login succes
    }

}
