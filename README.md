# HNG Internship - Backend Wizards Stage 0 (Dynamic Profile Endpoint)

This is my submission for the **HNG Internship Stage 0 (Backend Wizards)** task.  
It’s a simple RESTful API endpoint that returns my profile information along with a dynamic cat fact fetched from an external API.  
Built using **Node.js**, **Express.js**, and **Axios**.

---

## 🚀 Live API
[Live API Link on Railway](https://profile-endpoint-hng-0.up.railway.app/me)

---

## 🧩 Features
- RESTful **GET /me** endpoint  
- Returns dynamic data in **JSON** format  
- Fetches a **random cat fact** from the [Cat Facts API](https://catfact.ninja/fact)  
- Includes **current UTC timestamp** in ISO 8601 format  
- Proper **error handling** for failed API requests  
- Basic **rate limiting** to prevent abuse  
- **CORS enabled** for cross-origin access  
- Includes **structured logging** using `morgan`  

---

## 🧠 Technologies Used
- **Node.js** — Runtime environment  
- **Express.js** — Web framework  
- **Axios** — For external API requests  
- **Morgan** — Logging middleware  
- **dotenv** — Environment variable management  
- **express-rate-limit** — Rate limiting middleware  
- **CORS** — To enable cross-origin resource sharing  

---

## 👤 About Me
**Aladetan Fortune Ifeloju (IfeCodes)**  
A passionate **Full Stack Developer** who enjoys building scalable and user-friendly web applications.  
I solve real-life problems with my projects and constantly strive to learn and improve.  

- 💻 [GitHub](https://github.com/ALADETAN-IFE)  
- 🐦 [Twitter](https://x.com/ifeCodes_)  
- 💼 [LinkedIn](https://www.linkedin.com/in/fortune-ife-aladetan-458ab136a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

## ⚙️ How to Run Locally

```bash
# Clone this repository
git clone https://github.com/ALADETAN-IFE/hng-stage0-be-profile-endpoint.git

# Navigate into the folder
cd hng-stage0-be-profile-endpoint

# Install dependencies
npm install

# Create a .env file and add the following:
EMAIL=your-email@example.com
NAME=John Doe
STACK=Node.js/Express
PORT=4176

# Start the server
npm start
