# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# If using Vite, this might output to 'dist'. If Create React App, it outputs to 'build'.
RUN npm run build 

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the built files from the previous stage
# Note: Change /app/build to /app/dist if you are using Vite!
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080 for Google Cloud Run
EXPOSE 8080
# Modify Nginx config to listen on 8080 instead of default 80
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]