package com.hcms.controllers;

import com.hcms.models.TrainingFeedback;
import com.hcms.services.TrainingFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainingfeedback")
public class TrainingFeedbackController {

    @Autowired
    private TrainingFeedbackService trainingFeedbackService;

    @GetMapping
    public List<TrainingFeedback> getAllFeedback() {
        return trainingFeedbackService.getAllFeedback();
    }
}
