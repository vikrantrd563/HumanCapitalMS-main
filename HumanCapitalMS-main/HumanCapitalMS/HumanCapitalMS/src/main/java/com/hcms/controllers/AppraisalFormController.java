package com.hcms.controllers;

import com.hcms.models.AppraisalForm;
import com.hcms.services.AppraisalFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appraisals")
public class AppraisalFormController {

    @Autowired
    private AppraisalFormService appraisalFormService;

    @GetMapping
    public List<AppraisalForm> getAllAppraisals() {
        return appraisalFormService.getAllAppraisals();
    }

    @PostMapping
    public ResponseEntity<AppraisalForm> addAppraisal(@RequestBody AppraisalForm appraisalForm) {
        AppraisalForm createdAppraisal = appraisalFormService.addAppraisal(appraisalForm);
        return ResponseEntity.ok(createdAppraisal);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppraisalForm> getAppraisalById(@PathVariable Integer id) {
        return appraisalFormService.getAppraisalById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/employee/{employeeId}")
    public List<AppraisalForm> getAppraisalsByEmployeeId(@PathVariable Integer employeeId) {
        return appraisalFormService.getAppraisalsByEmployeeId(employeeId);
    }
}
