package com.hcms.services;

import com.hcms.models.TrainingFeedback;
import com.hcms.repositories.TrainingFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingFeedbackService {

    @Autowired
    private TrainingFeedbackRepository trainingFeedbackRepository;

    public List<TrainingFeedback> getAllFeedback() {
        return trainingFeedbackRepository.findAll();
    }
}
