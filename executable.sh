#!/bin/bash

# Script to run backend and frontend 

## run back (spring boot)
echo "Running backend"
cd backend/target
java -jar backend-0.0.1-SNAPSHOT.jar &

cd ../../

## run front (react)
echo "Running frontend"
cd frontend 
npm install 
npm start
