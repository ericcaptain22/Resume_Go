# Use the Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the application
RUN npm run build

# Expose the port React serves on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
