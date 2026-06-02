import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold">Consultora Ambiental Bragantini</p>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Servicios integrales de consultoría ambiental para proyectos públicos y privados en todo el NOA.
            Comprometidos con el desarrollo sustentable.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-foreground">Sobre Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Zona de trabajo</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Noroeste Argentino (NOA)
            <br />
            Proyectos públicos y privados
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Consultora Ambiental Bragantini. Todos los derechos reservados.</p>
          <p>Hecho con compromiso ambiental.</p>
        </div>
      </div>
    </footer>
  );
}
