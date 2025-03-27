package com.hcms.controllers;

import com.hcms.models.Payroll;
import com.hcms.services.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payroll")
public class PayrollController {

    @Autowired
    private PayrollService payrollService;

    @GetMapping
    public List<Payroll> getAllPayrolls() {
        return payrollService.getAllPayrolls();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payroll> getPayrollById(@PathVariable Integer id) {
        Payroll payroll = payrollService.getPayrollById(id);
        return ResponseEntity.ok(payroll);
    }

    @PostMapping
    public ResponseEntity<Payroll> addPayroll(@RequestBody Payroll payroll) {
        Payroll createdPayroll = payrollService.addPayroll(payroll);
        return ResponseEntity.ok(createdPayroll);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Payroll> updatePayroll(@PathVariable Integer id, @RequestBody Payroll payrollDetails) {
        Payroll updatedPayroll = payrollService.updatePayroll(id, payrollDetails);
        return ResponseEntity.ok(updatedPayroll);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayroll(@PathVariable Integer id) {
        payrollService.deletePayroll(id);
        return ResponseEntity.noContent().build();
    }
}
