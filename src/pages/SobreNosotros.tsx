import { ImageSlot } from "@/components/ImageSlot";
import { PageMeta } from "@/components/PageMeta";

const reasons = [
  { title: "Trabajo en todo el NOA", desc: "Proyectos en diversas provincias del Noroeste Argentino, con presencia en terreno." },
  { title: "Ambiente laboral positivo", desc: "Un equipo colaborativo donde se valora el aporte de cada profesional." },
  { title: "Capacitación continua", desc: "Acompañamos el crecimiento profesional con formación y actualización permanente." },
];

export default function SobreNosotros() {
  return (
    <>
      <PageMeta
        title="Sobre Nosotros — Consultora Ambiental Bragantini"
        description="Conocé al equipo de Consultora Ambiental Bragantini y por qué los profesionales eligen trabajar con nosotros en el NOA."
      />

      <section className="bg-gradient-soft">
        <div className="container-page py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Sobre Nosotros</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
            Profesionales ambientales al servicio del desarrollo sustentable del NOA.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Esta sección se encuentra en elaboración. Próximamente compartiremos en detalle nuestra
            historia, misión y al equipo que conforma la consultora.
          </p>
        </div>
      </section>

      <section className="container-page space-y-24 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ImageSlot label="Foto del equipo" aspect="video" />
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Nuestro equipo</h2>
            <p className="mt-4 text-muted-foreground">
              Profesionales de diversas disciplinas ambientales trabajando de manera coordinada
              para brindar soluciones técnicas integrales a nuestros clientes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">¿Por qué trabajar con nosotros?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Descubrí lo que hace especial a nuestro equipo y por qué los profesionales ambientales
            eligen desarrollar su carrera con nosotros.
          </p>
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

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="md:order-2">
            <ImageSlot label="Trabajo en terreno" aspect="video" />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Compromiso con el ambiente</h2>
            <p className="mt-4 text-muted-foreground">
              Nuestro trabajo aporta al cuidado del ambiente y al desarrollo sustentable de las
              comunidades en las que operamos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
