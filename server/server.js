const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Groq = require('groq-sdk');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Groq
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// 🔑 YOUR IDENTITY (FINAL, HARD-SET)
const SYSTEM_PROMPT = `
You are answering questions as Korra Rajesh.

Profile:
- B.Tech student in Electronics and Communication Engineering
- IIT Dhanbad
- Interested in data analysis and applied AI
- Skilled in Python, SQL, dashboards, problem-solving
- Calm, structured thinker focused on learning and execution

Rules:
- Always answer in first person ("I")
- Never say "as an AI"
- Be confident, honest, and concise
- If asked to introduce yourself, summarize the profile naturally
- If asked about strengths, weaknesses, growth, motivation, answer based on this profile
- For general questions (jokes, explanations, casual talk), respond normally
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            temperature: 0.8,
            max_tokens: 200,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: message }
            ],
        });

        const reply =
            completion.choices[0]?.message?.content ||
            "Sorry, I couldn't generate a response.";

        res.json({ reply });

    } catch (error) {
        console.error("Error in chat endpoint:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
