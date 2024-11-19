package models

import "time"

// Recruiter represents a recruiter user
type Recruiter struct {
    ID        uint      `json:"id" gorm:"primaryKey"`
    Name      string    `json:"name" gorm:"not null"`
    Email     string    `json:"email" gorm:"unique;not null"`
    Password  string    `json:"-"` // Password won't be serialized in JSON
    CreatedAt time.Time `json:"created_at"`
}

// JobListing represents a job posting created by a recruiter
type JobListing struct {
    ID          uint      `json:"id" gorm:"primaryKey"`
    RecruiterID uint      `json:"recruiter_id"` // Foreign key to the recruiter
    Title       string    `json:"title" gorm:"not null"`
    Description string    `json:"description"`
    Skills      string    `json:"skills"` // Comma-separated skills required
    Location    string    `json:"location"`
    CreatedAt   time.Time `json:"created_at"`
}
