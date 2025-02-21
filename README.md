# Task Management App

## 📌 Overview
This is a **MERN stack task management application** that allows users to **add, view, and delete tasks**. The backend is built with **Node.js, Express, MongoDB**, and **Change Streams**, while the frontend is built with **React.js**. WebSockets (`socket.io`) is used for **real-time task updates**.

---

## 🚀 Features
- **Add Tasks**: Users can add tasks with a title and status.
- **View Tasks**: Displays all tasks stored in MongoDB.
- **Delete Tasks**: Remove tasks dynamically.
- **Real-Time Updates**: Uses **MongoDB Change Streams** and **WebSockets** to update tasks without refreshing the page.

---

## 🛠️ Tech Stack
### **Frontend**
- React.js
- Axios (for API requests)
- Socket.io-client (for real-time updates)

### **Backend**
- Node.js
- Express.js
- MongoDB (with Change Streams)
- Firebase Authentication
- Socket.io (for WebSockets)
- CORS & Dotenv (for environment configuration)

---


## ⚡ Real-Time Updates with WebSockets
- The backend **listens for MongoDB changes** using `changeStream`.
- When a task is **added, updated, or deleted**, it **emits an event**.
- The React frontend **receives these updates** via `socket.io-client` and updates the UI **without refreshing**.

---

## 🎯 Future Improvements
- User authentication (JWT-based login/signup)
- Task categories and due dates
- Drag-and-drop task sorting


---
## 🚀 Live Demo  
[Click here to view the live app](https://manage-task-defd3.web.app/)

Thanks for visiting my app

## Best Regards
MD. Rabiul Islam
