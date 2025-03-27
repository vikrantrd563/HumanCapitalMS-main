package com.hcms.controllers;

import com.hcms.models.SkillMatrix;
import com.hcms.services.SkillMatrixService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skills")
public class SkillMatrixController {

    @Autowired
    private SkillMatrixService skillMatrixService;

    @GetMapping
    public List<SkillMatrix> getAllSkills() {
        return skillMatrixService.getAllSkills();
    }

    @PostMapping("/skill")
    public ResponseEntity<SkillMatrix> addSkill(@RequestBody SkillMatrix skillMatrix) {
        SkillMatrix createdSkill = skillMatrixService.addSkill(skillMatrix);
        return ResponseEntity.ok(createdSkill);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SkillMatrix> getSkillById(@PathVariable Integer id) {
        return skillMatrixService.getSkillById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/employee/{employeeId}")
    public List<SkillMatrix> getSkillsByEmployeeId(@PathVariable Integer employeeId) {
        return skillMatrixService.getSkillsByEmployeeId(employeeId);
    }
}
