package com.hcms.services;

import com.hcms.models.TrainingModule;
import com.hcms.repositories.TrainingModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainingModuleService {

    @Autowired
    private TrainingModuleRepository trainingModuleRepository;

    public List<TrainingModule> getAllTrainingModules() {
        return trainingModuleRepository.findAll();
    }

    public TrainingModule createTrainingModule(TrainingModule trainingModule) {
        return trainingModuleRepository.save(trainingModule);
    }

    public Optional<TrainingModule> getTrainingModuleById(Integer id) {
        return trainingModuleRepository.findById(id);
    }

    public TrainingModule updateTrainingModule(Integer id, TrainingModule updatedModule) {
        Optional<TrainingModule> existingModuleOpt = trainingModuleRepository.findById(id);
        if (existingModuleOpt.isPresent()) {
            TrainingModule existingModule = existingModuleOpt.get();
            existingModule.setModuleName(updatedModule.getModuleName());
            existingModule.setDescription(updatedModule.getDescription());
            existingModule.setDuration(updatedModule.getDuration());
            // Update other fields as necessary
            return trainingModuleRepository.save(existingModule);
        } else {
            throw new RuntimeException("Training module not found with id: " + id);
        }
    }

    public void deleteTrainingModule(Integer id) {
        trainingModuleRepository.deleteById(id);
    }
}
