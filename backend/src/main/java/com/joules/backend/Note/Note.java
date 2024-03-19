package com.joules.backend.Note;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Note {
    @Id
    @GeneratedValue
    private Integer id; 
    @Column
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastUpdated; 

    @Column(columnDefinition = "TEXT")
    private String content; 

    @Basic
    private String title; 
    private Boolean archived; 
    private String[] categories; 
}
