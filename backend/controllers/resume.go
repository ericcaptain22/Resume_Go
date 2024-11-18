package controllers

import (
	"myapp/models"
	"myapp/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateResume(c *gin.Context) {
	var resume models.Resume
	if err := c.ShouldBindJSON(&resume); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := utils.DB.Create(&resume).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create resume"})
		return
	}

	c.JSON(http.StatusCreated, resume)
}

func GetResumes(c *gin.Context) {
	skill := c.Query("skill")
	var resumes []models.Resume
	if err := utils.DB.Where("skills LIKE ?", "%"+skill+"%").Find(&resumes).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch resumes"})
		return
	}

	c.JSON(http.StatusOK, resumes)
}
