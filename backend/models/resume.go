package models

type Resume struct {
    ID          uint   `json:"id" gorm:"primaryKey"`
    Name        string `json:"name"`
    Skills      string `json:"skills"`
    Experience  int    `json:"experience"`
    Location    string `json:"location"`
    ContactInfo string `json:"contact_info"`
    TemplateID  uint   `json:"template_id"`
    CreatedAt   time.Time
}
