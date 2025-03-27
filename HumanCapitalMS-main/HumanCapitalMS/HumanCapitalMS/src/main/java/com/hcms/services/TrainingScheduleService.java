package com.hcms.services;

import com.hcms.models.TrainingSchedule;
import com.hcms.repositories.TrainingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingScheduleService {

    @Autowired
    private TrainingScheduleRepository trainingScheduleRepository;

    public List<TrainingSchedule> getAllSchedules() {
        return trainingScheduleRepository.findAll();
    }
}
