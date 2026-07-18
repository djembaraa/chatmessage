# Real-Time Chat Application

A real-time chat application built with the MERN stack and Socket.io. This project allows users to communicate with each other in real time.

## Tech Stack

*   **MongoDB:** NoSQL database for storing user data and chat history.
*   **Express.js:** Web application framework for Node.js.
*   **React:** Frontend JavaScript library for building user interfaces.
*   **Node.js:** JavaScript runtime environment.
*   **Socket.io:** Library for real-time, bidirectional, and event-based communication.

## Features

*   Real-time messaging between users.
*   RESTful API architecture.
*   Separated frontend and backend environments.

## Prerequisites

Ensure you have the following installed on your local machine:
*   Node.js (v14 or higher)
*   npm or yarn
*   MongoDB (local instance or cloud database like MongoDB Atlas)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/djembaraa/chatmessage.git
cd chatmessage
```

### 2. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up environment variables:
    *   Create a `.env` file in the `backend` directory.
    *   Add your MongoDB connection string and any necessary ports/secrets. Example:
        ```
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        ```
4.  Start the backend server:
    ```bash
    npm run dev
    ```
    (or `npm start` depending on your package.json scripts)

### 3. Frontend Setup

1.  Open a new terminal window and navigate to the frontend directory from the project root:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm run dev
    ```

### 4. Running the Application

Once both the backend and frontend servers are running, the application should be accessible in your browser (typically at http://localhost:5173 for Vite or http://localhost:3000 for Create React App). The backend will handle the real-time Socket.io connections.
