#!/bin/bash

# Deployment Script for Raj Panchal Portfolio
echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run production build
echo "Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Ready for deployment."
    echo "Files in dist/ folder:"
    ls -la dist/
    
    # Optional: Run preview server
    echo "Starting preview server (Ctrl+C to stop)..."
    npm run preview
else
    echo "Build failed! Check the errors above."
    exit 1
fi
