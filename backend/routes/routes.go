package routes

import (
    "myapp/controllers"
    "myapp/middleware"
    "github.com/gin-gonic/gin"
)

func SetupRoutes() *gin.Engine {
    r := gin.Default()

    r.POST("/register", controllers.Register)
    r.POST("/login", controllers.Login)

    auth := r.Group("/")
    auth.Use(middleware.AuthMiddleware())
    {
        auth.POST("/resumes", controllers.CreateResume)
        auth.GET("/resumes", controllers.GetResumes)
    }

    return r
}
