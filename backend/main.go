package main

import (
	"myapp/routes"
	"myapp/utils"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	godotenv.Load()

	// Initialize database
	utils.InitDatabase()
    var result int
	if err := utils.DB.Raw("SELECT 1").Scan(&result).Error; err != nil {
		log.Fatalf("Database connection test failed: %v", err)
	}
	log.Println("Database connection test passed!")
	// Run migrations
	utils.MigrateModels()

	// Setup routes
	r := routes.SetupRoutes()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(":" + port)
}
