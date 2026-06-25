import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import emailRoute from "./routes/email-routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "https://vibrances.vercel.app",
    "http://localhost:5173"
  ]
}));
app.use(express.json());

/* =========================
      INFOMANIAK 
========================= */

const API_TOKEN = process.env.INFOMANIAK_API_TOKEN;
const DEFAULT_CALENDAR_ID = process.env.INFOMANIAK_CALENDAR_ID;
const HOSTNAME = process.env.INFOMANIAK_HOSTNAME || "kmeet.infomaniak.com";

app.post("/api/kmeet/rooms", async (req, res) => {
  if (!API_TOKEN) {
    return res.status(500).json({ error: "INFOMANIAK_API_TOKEN n’est pas configuré." });
  }

  const {
    calendar_id = DEFAULT_CALENDAR_ID,
    starting_at,
    ending_at,
    timezone = "Europe/Zurich",
    title,
    description = "",
    attendees = [],
    options,
  } = req.body;

  if (!starting_at || !ending_at || !title) {
    return res.status(400).json({ error: "starting_at, ending_at et title sont obligatoires." });
  }

  const payload = {
    calendar_id: Number(calendar_id),
    starting_at,
    ending_at,
    timezone,
    hostname: HOSTNAME,
    title,
    description,
    options: {
      subject: title,
      start_audio_muted: true,
      enable_recording: false,
      enable_moderator_video: false,
      start_audio_only: false,
      lobby_enabled: false,
      password_enabled: false,
      e2ee_enabled: false,
    },
  };

  try {
    const response = await fetch("https://api.infomaniak.com/1/kmeet/rooms", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Réponse Infomaniak (status:", response.status + "):", JSON.stringify(data, null, 2));
    
    if (response.ok) {
      return res.status(200).json({ result: "success", ...data });
    } else {
      return res.status(response.status).json({ error: data.error || data.message || "Erreur Infomaniak" });
    }
  } catch (error) {
    console.error("Erreur lors de l'appel Infomaniak:", error);
    return res.status(500).json({ error: error.message || "Erreur interne" });
  }
});

/* =========================
   BREVO (NOUVEAU)
========================= */

app.use("/api", emailRoute);

/* ========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});