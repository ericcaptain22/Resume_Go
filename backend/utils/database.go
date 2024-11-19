package utils

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDatabase() {
	dsn := os.Getenv("DATABASE_URL")
	log.Println("Connecting to database with DSN:", dsn) // Debugging output

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	// Save the connection for reuse
	DB = db
	log.Println("Database connected successfully!")
}
