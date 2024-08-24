# Project Setup

This document provides the instructions to set up and run the project on your local machine for testing and development.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- MongoDB setup and running.

## Project Structure

The project has the following structure:

project │
    ├── backend/ │ 
        &emsp; ├── ... (all backend files) │ 
    ├── frontend/ │ 
        &emsp; ├── ... (React app files) │ 
        &emsp;   └── package.json (for frontend) 
    └── package.json (for backend)


## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Bharatbardiya/karn-jiva.git
cd karn-jiva
```

### 2. Install Dependencies
#### Backend
Navigate to the root of the project and run:
```
npm install
```

#### Frontend
Navigate to the ./frontend folder and run:
```
cd frontend
npm install
```

#### 3. Configure Environment Variables
Create a file named config.env inside the ./backend/config directory with the following content:

```
PORT= # number
DB_URI = # MongoDB URL
NODE_ENV = DEVELOPMENT

JWT_SECRET = # jwt secret
JWT_EXPIRES_TIME = # example - 7d
COOKIT_EXPIRES_TIME = # example 7

SMTP_HOST = # example - smtp.gmail.com
SMTP_PORT = 465
SMTP_SERVICE = # example - gmail
SMTP_EMAIL =  # your email
SMTP_PASSWORD = # your password
SMTP_FROM_EMAIL = # your email
SMTP_FROM_NAME = # name
```

#### 4. Run the Backend
To start the backend server, run the following command from the project root:
```
npm run dev
```
#### 5. Run the Frontend
To start the frontend, navigate to the ./frontend folder and run:
```
cd frontend
npm start
```
#### 6. Access the Application
Open your browser and go to:
```
http://localhost:3000
```
