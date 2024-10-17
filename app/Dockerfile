# Stage 1: Build the application
FROM node:18-alpine AS builder 

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including dev dependencies
RUN npm install

# Copy the entire source code into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run the application in production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app /app

# Install only production dependencies
RUN npm install --production

# Expose the port the application listens on
EXPOSE 8081

# Start the application
CMD ["npm", "start"]
