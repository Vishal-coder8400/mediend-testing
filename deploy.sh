#!/bin/bash

# Deployment script for Mediend
# This script ensures a clean build and proper PM2 restart

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/html/mediend

echo "📥 Pulling latest changes..."
git pull origin server

echo "🧹 Cleaning old build..."
rm -rf .next
rm -rf node_modules/.cache

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔨 Building application..."
npm run build

echo "🔄 Restarting PM2..."
pm2 restart mediend-8001 || pm2 restart 1 || pm2 restart all

echo "✅ Deployment complete!"
echo "📊 Checking PM2 status..."
pm2 status

