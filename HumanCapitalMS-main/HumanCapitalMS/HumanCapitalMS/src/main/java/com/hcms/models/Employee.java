package com.hcms.models;

import java.util.Date;

import org.apache.catalina.Manager;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String gender;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String address;

    @ManyToOne
    @JoinColumn(name = "departmentId", nullable = false)
    private Department department;

    @Column(nullable = false)
    private String position;

    @Column(columnDefinition = "TEXT")
    private String skillSet;

    @Temporal(TemporalType.DATE)
    private Date employmentStartDate;

    @Temporal(TemporalType.DATE)
    private Date employmentEndDate;

    @Column(nullable = false)
    private String employmentStatus;

    @Column(nullable = false)
    private Double salary;

    @Column(nullable = false)
    private String bankAccountNumber;

    @ManyToOne
    @JoinColumn(name = "roleId", nullable = false)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "managerId")
    private EmployeeManager manager;
    
    @Column(nullable = false)
    private String password; // Hashed password for authentication

    @Column(nullable = false)
    private String roleType; // "EMPLOYEE", "ADMIN"
}
