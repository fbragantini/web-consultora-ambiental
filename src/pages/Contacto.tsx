import { type FormEvent, useState } from "react";
import { PageMeta } from "@/components/PageMeta";
import { SafeImage } from "@/components/SafeImage";

const reasons = [
  { title: "Trabajo en todo el NOA", desc: "Proyectos diversos en distintas provincias del Noroeste Argentino." },
  { title: "Ambiente laboral positivo", desc: "Un equipo colaborativo, comprometido y con buena energía." },
  { title: "Capacitación continua", desc: "Formación y actualización permanente para tu desarrollo profesional." },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setNombre("");
      setEmail("");
      setMensaje("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  return (
    <>
      <PageMeta
        title="Contacto y Trabajá con Nosotros — Consultora Ambiental Bragantini"
        description="Contactá a Consultora Ambiental Bragantini o sumate al equipo. Trabajamos en todo el NOA con capacitación continua."
      />

      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              Contacto · Trabajo
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Conversemos sobre tu próximo proyecto.
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Escribinos para coordinar una propuesta técnica, solicitar información o sumarte como
              profesional al equipo de Consultora Ambiental Bragantini.
            </p>
          </div>
          <SafeImage
            src="/images/contacto.jpg"
            alt="Imagen de contacto"
            label="Imagen de contacto"
            className="border-white/15 shadow-soft"
          />
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Información de contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Completá los datos a continuación o escribinos directamente. Te responderemos a la
            brevedad.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              <div>
                <dt className="text-sm font-semibold">Email</dt>
                <dd className="text-sm text-muted-foreground">jorgebragantini2008@gmail.com</dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <dt className="text-sm font-semibold">Teléfono (WhatsApp)</dt>
                <dd className="text-sm text-muted-foreground">(0388)-154172917</dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
              </span>
              <div>
                <dt className="text-sm font-semibold">Zona de trabajo</dt>
                <dd className="text-sm text-muted-foreground">Noroeste Argentino (NOA)</dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <h3 className="font-display text-xl font-semibold">Escribinos</h3>
          <p className="mt-1 text-sm text-muted-foreground">Te responderemos a la brevedad.</p>
          <div className="mt-6 grid gap-4">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />
            <div className="grid gap-1.5">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                disabled={status === "sending"}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2 disabled:opacity-60"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending"}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2 disabled:opacity-60"
                placeholder="tu@email.com"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="mensaje" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                disabled={status === "sending"}
                className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2 disabled:opacity-60"
                placeholder="Contanos sobre tu proyecto"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>
            {status === "success" ? (
              <p className="text-sm text-accent" role="status">
                Mensaje enviado. Te vamos a responder pronto.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-destructive" role="alert">
                {errorMsg}
              </p>
            ) : null}
          </div>
        </form>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-secondary/50 p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Trabajá con nosotros</span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                ¿Por qué trabajar en Consultora Ambiental Bragantini?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Trabajá en proyectos que contribuyen al desarrollo sustentable del NOA, junto a un
                equipo de profesionales comprometidos con el medio ambiente.
              </p>
            </div>
            <SafeImage src="/images/equipo-trabajando.jpg" alt="Equipo trabajando" label="Equipo trabajando" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
