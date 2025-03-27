package com.hcms.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "skillmatrix")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SkillMatrix {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer matrixId;

    @ManyToOne
    @JoinColumn(name = "employeeId", nullable = false)
    private Employee employee;

    @Column(nullable = false)
    private String skillName;

    @Column(nullable = false)
    private String skillLevel;

    @Temporal(TemporalType.DATE)
    private Date lastUpdated;
}
