package com.hcms.controllers;

import com.hcms.models.TrainingSchedule;
import com.hcms.services.TrainingScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainingschedules")
public class TrainingScheduleController {

    @Autowired
    private TrainingScheduleService trainingScheduleService;

    @GetMapping
    public List<TrainingSchedule> getAllSchedules() {
        return trainingScheduleService.getAllSchedules();
    }
}
