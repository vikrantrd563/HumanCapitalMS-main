package com.hcms.repositories;

import com.hcms.models.AppraisalForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppraisalFormRepository extends JpaRepository<AppraisalForm, Integer> {
    List<AppraisalForm> findByEmployee_EmployeeId(Integer employeeId);
}
