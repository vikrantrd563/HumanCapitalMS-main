package com.hcms.repositories;

import com.hcms.models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {
    List<Trainer> findByEmployee_EmployeeId(Integer employeeId);
}
