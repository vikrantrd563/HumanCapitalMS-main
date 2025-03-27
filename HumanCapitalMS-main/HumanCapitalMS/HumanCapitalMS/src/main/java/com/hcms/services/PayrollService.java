package com.hcms.services;

import com.hcms.models.Payroll;
import com.hcms.repositories.PayrollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PayrollService {

    @Autowired
    private PayrollRepository payrollRepository;

    public List<Payroll> getAllPayrolls() {
        return payrollRepository.findAll();
    }

    public Payroll getPayrollById(Integer payrollId) {
        return payrollRepository.findById(payrollId)
                .orElseThrow(() -> new RuntimeException("Payroll not found with id: " + payrollId));
    }

    public Payroll addPayroll(Payroll payroll) {
        return payrollRepository.save(payroll);
    }

    public Payroll updatePayroll(Integer payrollId, Payroll payrollDetails) {
        Payroll existingPayroll = payrollRepository.findById(payrollId)
                .orElseThrow(() -> new RuntimeException("Payroll not found with id: " + payrollId));
        
        existingPayroll.setSalaryMonth(payrollDetails.getSalaryMonth());
        existingPayroll.setSalaryYear(payrollDetails.getSalaryYear());
        existingPayroll.setBasicSalary(payrollDetails.getBasicSalary());
        existingPayroll.setAllowances(payrollDetails.getAllowances());
        existingPayroll.setDeductions(payrollDetails.getDeductions());
        existingPayroll.setNetSalary(payrollDetails.getNetSalary());
        existingPayroll.setPaymentDate(payrollDetails.getPaymentDate());
        
        return payrollRepository.save(existingPayroll);
    }

    public void deletePayroll(Integer payrollId) {
        Payroll existingPayroll = payrollRepository.findById(payrollId)
                .orElseThrow(() -> new RuntimeException("Payroll not found with id: " + payrollId));
        payrollRepository.delete(existingPayroll);
    }
}
