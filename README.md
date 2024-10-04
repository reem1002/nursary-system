
# Nursery System API

A RESTful API built using Node.js for managing a nursery system. The system has one administrator with static credentials, allows teachers to register, and lets the administrator add and manage children. This backend is built with Express and returns JSON responses with correct HTTP status codes. Server-side validation is implemented using `express-validator`, and CORS middleware is included for future frontend integration.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Teacher Routes](#teacher-routes)
  - [Child Routes](#child-routes)
  - [Class Routes](#class-routes)
- [Middlewares](#middlewares)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [License](#license)

## Features
- Teachers can register, update, and delete their accounts.
- Admin can manage children and assign teachers as class supervisors.
- RESTful API with full CRUD functionality for teachers, children, and classes.
- Server-side validation using `express-validator`.
- CORS enabled to support frontend integration.

## Technologies
- **Node.js**
- **Express.js**
- **MongoDB**
- **Morgan** (HTTP request logger)
- **CORS**
- **express-validator**

## Installation

### Clone the repository:
```bash
git clone https://github.com/your-username/nursery-system.git
```

### Navigate to the project directory:
```bash
cd nursery-system
```

### Install the required dependencies:
```bash
npm install
```

### Set up your environment variables:
Create a `.env` file in the root directory and add your MongoDB connection string:
```bash
MONGO_URI=mongodb://localhost:27017/nursery-system
```

### Run the server:
```bash
npm start
```

## API Endpoints

### Teacher Routes
- `GET /teachers` - Get all teachers
- `GET /teachers/:id` - Get teacher by ID
- `POST /teachers` - Add a new teacher (requires validation)
- `PUT /teachers/:id` - Update teacher information
- `DELETE /teachers/:id` - Delete a teacher
- `GET /teachers/supervisors` - Get all class supervisors

### Child Routes
- `GET /child` - Get all children
- `GET /child/:id` - Get a child by ID
- `GET /child/class/:id` - Get the class info of a child
- `POST /child` - Add a new child (requires validation)
- `PUT /child/:id` - Update child information
- `DELETE /child/:id` - Delete a child

### Class Routes
- `GET /class` - Get all classes
- `GET /class/:id` - Get class by ID
- `POST /class` - Add a new class
- `PUT /class/:id` - Update class information
- `DELETE /class/:id` - Delete a class
- `GET /class/child/:id` - Get all children in a class
- `GET /class/teacher/:id` - Get the class supervisor by teacher ID

## Middlewares
- **Morgan**: Logs all incoming requests with URL and method.
- **404 Not Found**: Handles undefined routes and returns a 404 error.
- **Error Handling**: Catches all system errors and returns a 500 error.
- **CORS**: Allows cross-origin requests for frontend communication.

## Error Handling
- **404**: When the requested route is not found.
- **500**: For all internal server errors.

## Testing
You can test the API using Postman or any API client:
1. Ensure MongoDB is running locally or use your own MongoDB Atlas URI.
2. Use the predefined routes to perform CRUD operations on teachers, children, and classes.

