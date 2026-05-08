import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route non trovata:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container-prose text-center">
        <p className="font-cn text-6xl text-accent mb-6">迷</p>
        <h1 className="font-display text-7xl md:text-8xl mb-6">404</h1>
        <p className="text-lg text-muted-foreground mb-10">
          La pagina che cercavi non esiste, o si è smarrita lungo il cammino.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-accent transition-colors"
        >
          Torna alla Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
