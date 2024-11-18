package utils

import (
    "time"

    "github.com/dgrijalva/jwt-go"
)

var jwtSecret = []byte("your_secret_key")

func GenerateToken(userID uint, role string) (string, error) {
    claims := jwt.MapClaims{
        "user_id": userID,
        "role":    role,
        "exp":     time.Now().Add(time.Hour * 24).Unix(),
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(jwtSecret)
}

func VerifyToken(tokenString string) (jwt.Claims, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        return jwtSecret, nil
    })

    if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
        return claims, nil
    }

    return nil, err
}
