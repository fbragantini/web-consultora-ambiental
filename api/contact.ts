import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUBJECT = "consulta web consultora bragantini";
const DEFAULT_TO = "jorgebragantini2008@gmail.com";

type ContactBody = {
  nombre?: string;
  email?: string;
  mensaje?: string;
  website?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return res.status(503).json({ error: "El envío de emails no está configurado todavía." });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactBody;

  if (body.website?.trim()) {
    return res.status(200).json({ ok: true });
  }

  const nombre = body.nombre?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const mensaje = body.mensaje?.trim() ?? "";

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Completá nombre, email y mensaje." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "El email no es válido." });
  }

  if (nombre.length > 120 || email.length > 254 || mensaje.length > 5000) {
    return res.status(400).json({ error: "Algún campo es demasiado largo." });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  const text = [
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    "",
    "Mensaje:",
    mensaje,
  ].join("\n");

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: SUBJECT,
      reply_to: email,
      text,
    }),
  });

  if (!sendRes.ok) {
    const detail = await sendRes.text();
    console.error("Resend error:", sendRes.status, detail);
    return res.status(502).json({ error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde." });
  }

  return res.status(200).json({ ok: true });
}
