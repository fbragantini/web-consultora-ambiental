import { Link } from "react-router-dom";
import { ImageSlot } from "@/components/ImageSlot";
import { PageMeta } from "@/components/PageMeta";

type Service = {
  title: string;
  desc: string;
  bullets?: string[];
};

const services: Service[] = [
  {
    title: "Estudios de Impacto Ambiental",
    desc: "Evaluación detallada de impactos ambientales potenciales y propuestas de mitigación para proyectos públicos y privados.",
  },
  {
    title: "Monitoreos Ambientales",
    desc: "Seguimiento sistemático de parámetros ambientales con reportes técnicos integrados según normativa vigente.",
  },
  {
    title: "Planes de Manejo Ambiental",
    desc: "Diseño e implementación de planes para minimizar impactos y asegurar prácticas sustentables en proyectos de todas las escalas.",
  },
  {
    title: "Auditorías Ambientales",
    desc: "Evaluación del desempeño ambiental de una organización o proyecto según normativa vigente nacional y provincial.",
  },
  {
    title: "Remediaciones Ambientales",
    desc: "Soluciones técnicas para la recuperación de sitios y mitigación de impactos socioambientales.",
    bullets: ["Fitorremediación", "Mitigación de impacto socioambiental"],
  },
  {
    title: "Hidroponia y Wallipinis",
    desc: "Hidroponia convencional, forraje verde hidropónico y wallipinis para producción sustentable.",
  },
  {
    title: "Cartografía y Gestión de Permisos",
    desc: "Trabajos de cartografía en general y gestión integral de permisos legales ambientales.",
    bullets: ["Art. 40", "Permisos provinciales y nacionales"],
  },
  {
    title: "Recursos Hídricos",
    desc: "Estudios, monitoreos y planes de gestión integral de recursos hídricos.",
  },
  {
    title: "Gestión de Residuos Peligrosos",
    desc: "Asesoramiento integral para la correcta gestión, transporte y disposición de residuos peligrosos.",
  },
  {
    title: "Tratamiento de Aguas y Efluentes",
    desc: "Diseño y seguimiento de sistemas de tratamiento para disposición final segura.",
    bullets: ["Efluentes cloacales", "Efluentes industriales de actividad minera"],
  },
];

export default function Servicios() {
  return (
    <>
      <PageMeta
        title="Servicios — Consultora Ambiental Bragantini"
        description="Estudios de impacto, monitoreos, planes de manejo, auditorías, remediaciones, recursos hídricos, residuos peligrosos y más."
      />

      <section className="bg-gradient-soft">
        <div className="container-page py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Servicios</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
            Soluciones integrales en consultoría ambiental.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Acompañamos cada etapa de tu proyecto con servicios técnicos especializados, adaptados
            a la normativa vigente y a las particularidades de cada territorio.
          </p>
        </div>
      </section>

      <section className="container-page space-y-24 py-20">
        {services.slice(0, 3).map((s, i) => (
          <div key={s.title} className="grid items-center gap-12 md:grid-cols-2">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <ImageSlot label={`Foto: ${s.title}`} aspect="video" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                0{i + 1} · Servicio destacado
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container-page py-12 pb-24">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Todos nuestros servicios</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v20" /><path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {s.bullets ? (
                <ul className="mt-4 space-y-1.5 text-sm text-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-soft md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">¿Necesitás un servicio específico?</h2>
              <p className="mt-2 max-w-xl text-white/80">Contanos sobre tu proyecto y armemos juntos una propuesta a medida.</p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md bg-aqua px-6 py-3 text-sm font-semibold text-deep transition hover:opacity-90"
            >
              Contactarnos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
