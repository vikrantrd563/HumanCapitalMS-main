package com.hcms.repositories;

import com.hcms.models.SkillMatrix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillMatrixRepository extends JpaRepository<SkillMatrix, Integer> {
    List<SkillMatrix> findByEmployee_EmployeeId(Integer employeeId);
}
