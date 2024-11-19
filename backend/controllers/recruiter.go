package controllers

import (
    "net/http"
    //"strings"
    "myapp/models"
    "myapp/utils"

    "github.com/gin-gonic/gin"
    "golang.org/x/crypto/bcrypt"
)

// RegisterRecruiter handles recruiter registration
func RegisterRecruiter(c *gin.Context) {
    var recruiter models.Recruiter
    if err := c.ShouldBindJSON(&recruiter); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // Hash password before storing it
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(recruiter.Password), 14)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Error hashing password"})
        return
    }
    recruiter.Password = string(hashedPassword)

    if err := utils.DB.Create(&recruiter).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to register recruiter"})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"message": "Recruiter registered successfully!"})
}

// PostJob handles job posting by a recruiter
func PostJob(c *gin.Context) {
    var job models.JobListing
    if err := c.ShouldBindJSON(&job); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // Save the job to the database
    if err := utils.DB.Create(&job).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create job listing"})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"message": "Job listing created successfully!", "job": job})
}

// SearchResumes allows recruiters to search resumes by skill
func SearchResumes(c *gin.Context) {
    skill := c.Query("skill")
    location := c.Query("location")

    var resumes []models.Resume
    query := utils.DB.Where("skills LIKE ?", "%"+skill+"%")
    if location != "" {
        query = query.Where("location = ?", location)
    }

    if err := query.Find(&resumes).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch resumes"})
        return
    }

    c.JSON(http.StatusOK, resumes)
}
