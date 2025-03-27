package com.hcms.repositories;

import com.hcms.models.TrainingFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingFeedbackRepository extends JpaRepository<TrainingFeedback, Integer> {
    List<TrainingFeedback> findBySchedule_ScheduleId(Integer scheduleId);
}
