package com.hcms.repositories;

import com.hcms.models.TrainingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingScheduleRepository extends JpaRepository<TrainingSchedule, Integer> {
    List<TrainingSchedule> findByModule_ModuleId(Integer moduleId);
}
