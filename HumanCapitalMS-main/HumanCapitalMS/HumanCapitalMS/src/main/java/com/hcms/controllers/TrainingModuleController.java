package com.hcms.controllers;

import com.hcms.models.TrainingModule;
import com.hcms.services.TrainingModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/training-modules")
public class TrainingModuleController {

    @Autowired
    private TrainingModuleService trainingModuleService;

    @GetMapping
    public List<TrainingModule> getAllTrainingModules() {
        return trainingModuleService.getAllTrainingModules();
    }

    @PostMapping
    public ResponseEntity<TrainingModule> createTrainingModule(@RequestBody TrainingModule trainingModule) {
        TrainingModule createdModule = trainingModuleService.createTrainingModule(trainingModule);
        return ResponseEntity.ok(createdModule);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainingModule> getTrainingModuleById(@PathVariable Integer id) {
        return trainingModuleService.getTrainingModuleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrainingModule> updateTrainingModule(@PathVariable Integer id, @RequestBody TrainingModule updatedModule) {
        try {
            TrainingModule updated = trainingModuleService.updateTrainingModule(id, updatedModule);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrainingModule(@PathVariable Integer id) {
        trainingModuleService.deleteTrainingModule(id);
        return ResponseEntity.noContent().build();
    }
}
