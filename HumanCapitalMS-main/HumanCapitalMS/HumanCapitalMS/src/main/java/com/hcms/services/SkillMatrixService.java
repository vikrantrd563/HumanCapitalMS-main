package com.hcms.services;

import com.hcms.models.SkillMatrix;
import com.hcms.repositories.SkillMatrixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillMatrixService {

    @Autowired
    private SkillMatrixRepository skillMatrixRepository;

    public List<SkillMatrix> getAllSkills() {
        return skillMatrixRepository.findAll();
    }

    public SkillMatrix addSkill(SkillMatrix skillMatrix) {
        return skillMatrixRepository.save(skillMatrix);
    }

    public Optional<SkillMatrix> getSkillById(Integer id) {
        return skillMatrixRepository.findById(id);
    }

    public List<SkillMatrix> getSkillsByEmployeeId(Integer employeeId) {
        return skillMatrixRepository.findByEmployee_EmployeeId(employeeId);
    }
}
