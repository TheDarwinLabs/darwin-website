#!/bin/bash

# Step 1: Pull lastest code
git pull

# Step 2: Build Docker image
sudo docker build -t darwin-website-dev .

# Step 3: Save Docker image
sudo docker save -o darwin-website-dev.tar darwin-website-dev

# Step 4: Load Docker image
sudo docker load -i ./darwin-website-dev.tar

# Step 5: Stop containers defined in docker-compose file
sudo docker compose -f docker-compose-website-dev.yml down

# Step 6: Start containers defined in docker-compose file in detached mode
sudo docker compose -f docker-compose-website-dev.yml up -d

# Step 7: Clean unused images
# sudo docker image prune -f
sudo docker system prune -f
