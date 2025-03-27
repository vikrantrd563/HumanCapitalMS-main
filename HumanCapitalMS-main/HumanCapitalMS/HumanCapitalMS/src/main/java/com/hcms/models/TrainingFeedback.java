package com.hcms.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "trainingfeedback")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrainingFeedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer feedbackId;

    @ManyToOne
    @JoinColumn(name = "scheduleId", nullable = false)
    private TrainingSchedule schedule;

    @ManyToOne
    @JoinColumn(name = "participantId", nullable = false)
    private Employee participant;

    @Column(columnDefinition = "TEXT")
    private String feedbackComments;

    @Column(nullable = false)
    private Integer satisfactionRating;
}
