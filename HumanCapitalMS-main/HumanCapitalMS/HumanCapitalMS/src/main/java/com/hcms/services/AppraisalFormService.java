package com.hcms.services;

import com.hcms.models.AppraisalForm;
import com.hcms.repositories.AppraisalFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppraisalFormService {

    @Autowired
    private AppraisalFormRepository appraisalFormRepository;

    public List<AppraisalForm> getAllAppraisals() {
        return appraisalFormRepository.findAll();
    }

    public AppraisalForm addAppraisal(AppraisalForm appraisalForm) {
        return appraisalFormRepository.save(appraisalForm);
    }

    public Optional<AppraisalForm> getAppraisalById(Integer id) {
        return appraisalFormRepository.findById(id);
    }

    public List<AppraisalForm> getAppraisalsByEmployeeId(Integer employeeId) {
        return appraisalFormRepository.findByEmployee_EmployeeId(employeeId);
    }
}
