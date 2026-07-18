import { Boxes } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-background py-12">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-bold tracking-tight text-primary-foreground">
              Abastio
            </p>
            <p className="text-xs text-primary-foreground/50">
              Pedidos a proveedores, sin líos.
            </p>
          </div>
        </div>

        <nav aria-label="Enlaces" className="flex items-center gap-6">
          <a href="#como-funciona" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
            Cómo funciona
          </a>
          <a href="#preguntas" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
            Preguntas
          </a>
          <a href="#prueba-gratis" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
            Pruébalo gratis
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 w-[92%] max-w-6xl border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © 2026 Abastio — Proyecto en fase piloto. ¿Dudas?{" "}
          <a href="mailto:TU-CORREO@ejemplo.com" className="underline decoration-primary-foreground/20 underline-offset-2 hover:text-primary-foreground/70">
            Escríbeme
          </a>
        </p>
      </div>
    </footer>
  )
}