


# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend files and build
COPY . .
RUN npm run build 

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built files from Stage 1 to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# CRITICAL FIX: Overwrite the default Nginx config with our custom React-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Google Cloud Run requires 8080)
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]