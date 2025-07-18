# 🏆 Real-Time Reward Points Leaderboard

A full-stack **MERN** project to manage users, award random points, and display a real-time leaderboard with claim history using **Node.js**, **Express**, **MongoDB**, and **React**.

---

## 🚀 Live Demo

👉 [Click here to view the hosted app on Vercel](https://reward-point-app.vercel.app/)

---

## ✨ Features

- 📋 Display a list of users (initially seeded with 10 users)
- ➕ Add new users from the frontend (stored in MongoDB)
- 🎯 Claim random points (1 to 10) for a selected user
- 🕓 Store point-claim history
- 🔄 Real-time leaderboard updates
- 🏅 Dynamic ranking of users based on total points

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB ( Atlas)

---

## 🖼️ Screenshots

<img width="1436" height="901" alt="Screenshot 2025-07-16 133537" src="https://github.com/user-attachments/assets/3ddb9a65-b81c-4492-81c3-89bad13bdba0" />

<img width="1019" height="818" alt="Screenshot 2025-07-16 133457" src="https://github.com/user-attachments/assets/e2b24f7f-b218-4d3b-8b0a-d267b9f7538d" />

---

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (Local or Atlas)
- (Optional) `dotenv` setup for environment variables

### Installation

```bash
# Clone the repository
git clone https://github.com/student-nitish/RewardPointApp.git

# Go into the project folder
cd RewardPointApp

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Start backend (assuming you have MongoDB running)
npm start

# Start frontend
cd ../frontend
npm run dev
