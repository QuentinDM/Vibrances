import { sendEmails } from "../services/email-template.js";

export async function emailController(req, res) {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return res.status(400).json({ error: "Champs manquants" });
    }

    await sendEmails({ firstName, lastName, email, phone, date, time });

    return res.json({ result: "success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erreur serveur" });

    return res.status(500).json({
      error: err.message,
      details: err.body || null
    });
  }
}