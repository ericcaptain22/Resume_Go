package models

type Resume struct {
	ID         uint   `json:"id" gorm:"primaryKey"`
	UserID     uint   `json:"user_id"`
	Name       string `json:"name"`
	Skills     string `json:"skills"`
	Experience int    `json:"experience"`
	Location   string `json:"location"`
}
