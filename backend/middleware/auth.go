package middleware

import (
    "net/http"
    "strings"
    "myapp/utils"
    "github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("Authorization")
        if token == "" || !strings.HasPrefix(token, "Bearer ") {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
            c.Abort()
            return
        }

        token = strings.TrimPrefix(token, "Bearer ")
        if _, err := utils.VerifyToken(token); err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
            c.Abort()
            return
        }

        c.Next()
    }
}
