# Table of contents
- [Introduction](#Introduction)
- [Installation](#Installation)

# Introduction
This is a simple MERN. It allows users to send data to database in MongoDB. The app employs various technologies, including Node.js, React. On main branch you have code with TypeScript in React, to see code without TypeScript you can see branch eslint.

# Installation

1. Create a file named `.env` in the project root directory.
2. Inside the `.env` file, add the following line and replace `ATLAS_URI` with your MongoDB connection string:
ATLAS_URI=mongodb+srv://your-connection-string
3. Run the following commands to install dependencies and start the app:

- For the server:

  ```
  npm install
  node server
  ```

- For the frontend:

  ```
  cd frontend
  npm install
  npm start
  ```
