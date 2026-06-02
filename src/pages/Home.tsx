import { Link } from "react-router-dom";
import { ImageSlot } from "@/components/ImageSlot";
import { PageMeta } from "@/components/PageMeta";

const highlights = [
  { title: "Estudios de impacto", desc: "Evaluación detallada y propuestas de mitigación para proyectos." },
  { title: "Monitoreos ambientales", desc: "Seguimiento continuo y reportes técnicos integrados." },
  { title: "Planes de manejo", desc: "Diseño e implementación con criterios de sustentabilidad." },
  { title: "Remediaciones", desc: "Fitorremediación y soluciones de mitigación socioambiental." },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Consultora Ambiental Bragantini — Consultoría ambiental en el NOA"
        description="Estudios de impacto ambiental, monitoreos, planes de manejo, auditorías y remediaciones en el Noroeste Argentino."
      />

      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Consultoría ambiental · NOA
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Soluciones ambientales para un desarrollo sustentable.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              Realizamos estudios de impacto ambiental, monitoreos, planes de manejo, auditorías y
              remediaciones en proyectos públicos y privados de todo el Noroeste Argentino.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/servicios"
                className="inline-flex items-center rounded-md bg-aqua px-5 py-3 text-sm font-semibold text-deep transition hover:opacity-90"
              >
                Ver servicios
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contactarnos
              </Link>
            </div>
          </div>
          <div className="relative">
            <ImageSlot label="Imagen principal" aspect="portrait" className="border-white/15 shadow-soft" />
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-aqua/30 blur-3xl" aria-hidden="true" />
      </section>

      <section className="container-page py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page space-y-24 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ImageSlot label="Trabajo de campo" aspect="video" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Quiénes somos</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Un equipo comprometido con el ambiente</h2>
            <p className="mt-4 text-muted-foreground">
              Acompañamos proyectos en todas sus etapas con rigor técnico, mirada territorial y
              compromiso con las comunidades. Nuestro trabajo se enmarca en la normativa nacional y
              provincial vigente.
            </p>
            <Link to="/sobre-nosotros" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              Conocer más
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="md:order-2">
            <ImageSlot label="Monitoreos y muestreos" aspect="video" />
          </div>
          <div className="md:order-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Nuestros servicios</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">De los estudios al monitoreo en terreno</h2>
            <p className="mt-4 text-muted-foreground">
              Desde estudios de impacto y planes de manejo hasta auditorías, remediaciones,
              gestión de residuos peligrosos, recursos hídricos y cartografía técnica.
            </p>
            <Link to="/servicios" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              Ver todos los servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-soft md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">¿Tenés un proyecto en mente?</h2>
              <p className="mt-2 max-w-xl text-white/80">
                Conversemos sobre los requisitos ambientales de tu proyecto y cómo podemos acompañarte.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md bg-aqua px-6 py-3 text-sm font-semibold text-deep transition hover:opacity-90"
            >
              Solicitar propuesta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
