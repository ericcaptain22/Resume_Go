package utils

import "myapp/models"

// MigrateModels applies the database schema for the project
func MigrateModels() {
	err := DB.AutoMigrate(
		&models.User{},
		&models.Resume{},
	)
	if err != nil {
		log.Fatalf("Database migration failed: %v", err)
	}
	log.Println("Database migration completed!")
}
