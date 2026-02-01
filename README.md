# 🎙️ AI Voice Interview Bot

A web-based **voice-enabled AI assistant** that answers questions dynamically **as me**, built for the **100x Generative AI Developer – Stage 1 Assessment**.

The bot can listen to voice input, respond intelligently using an LLM, and speak the response back — making the interaction natural and human-like.

---

## 🚀 Live Demo

👉 **Frontend (Voice Bot UI):**  
https://your-project-name.vercel.app

*(Best tested on Chrome / Edge with microphone permissions enabled)*

---

## 🧠 What This Bot Does

- Accepts **voice or text input**
- Transcribes speech in real time (browser speech recognition)
- Sends the query to an **LLM-powered backend**
- Responds **as me**, based on my background and profile
- Speaks the response back using text-to-speech
- Handles **both interview-style questions and general queries**

Example questions:
- “Introduce yourself”
- “What is your superpower?”
- “What are you trying to improve?”
- “Tell me a joke”

---

## 🧩 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Web Speech API (Speech Recognition + Speech Synthesis)
- Framer Motion (UI animations)

### Backend
- Node.js
- Express.js
- Groq LLM API (LLaMA 3.3)
- CORS + REST API

### Deployment
- Frontend: **Vercel**
- Backend: **Render**

---


## ⚙️ Environment Variables

### Backend (`server/.env`)

---

## ▶️ Run Locally

### Backend
```bash
cd server
npm install
npm start

Frontend
```bash
cd client
npm install
npm run dev

Open:

http://localhost:5173
