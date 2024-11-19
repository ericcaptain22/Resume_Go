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
