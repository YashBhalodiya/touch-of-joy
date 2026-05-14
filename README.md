# Touch Of Joy - Premium Salon Website

A modern, premium, responsive, and visually stunning website for a ladies' beauty parlor named "Touch Of Joy".

## Architecture

This project is separated into a Frontend and a Backend.

*   **Frontend**: React.js + Vite, Tailwind CSS, Framer Motion, Lucide Icons.
*   **Backend**: Node.js + Express.js API, MongoDB via Mongoose.

## Setup Instructions

### 1. Prerequisites

*   Node.js (v16 or higher)
*   MongoDB (local instance running on `localhost:27017` or a MongoDB Atlas URI)

### 2. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    *   Copy the `.env.example` file and rename it to `.env` (or simply modify the existing `.env`).
    *   Ensure your `MONGODB_URI` points to a valid MongoDB database. The default `.env` is set to `mongodb://localhost:27017/touchofjoy`.
4.  Start the development server:
    ```bash
    npm run dev
    ```
    *Note: `nodemon` is installed, you can add `"dev": "nodemon server.js"` to your `package.json` scripts or simply run `npx nodemon server.js`.*

### 3. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).
