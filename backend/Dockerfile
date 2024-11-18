# Use the official Golang image as the base
FROM golang:1.20

# Set the working directory
WORKDIR /app

# Copy Go files to the container
COPY . .

# Download Go module dependencies
RUN go mod tidy

# Build the Go application
RUN go build -o main .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
