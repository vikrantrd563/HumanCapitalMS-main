package com.hcms.repositories;

import com.hcms.models.TrainingModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingModuleRepository extends JpaRepository<TrainingModule, Integer> {
}
