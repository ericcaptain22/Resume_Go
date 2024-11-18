package controllers

import (
    "net/http"
    "myapp/models"
    "myapp/utils"
    "github.com/gin-gonic/gin"
    "golang.org/x/crypto/bcrypt"
)

func Register(c *gin.Context) {
    var user models.User
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
    user.Password = string(hashedPassword)

    if err := utils.DB.Create(&user).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to register"})
        return
    }

    c.JSON(http.StatusCreated, user)
}

func Login(c *gin.Context) {
    var req struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    var user models.User
    if err := utils.DB.Where("email = ?", req.Email).First(&user).Error; err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
        return
    }

    if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
        return
    }

    token, _ := utils.GenerateToken(user.ID, user.Role)
    c.JSON(http.StatusOK, gin.H{"token": token})
}
