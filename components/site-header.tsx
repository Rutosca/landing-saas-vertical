"use client"

import { motion } from "motion/react"
import { Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas", href: "#preguntas" },
]

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-sm backdrop-blur-md md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Abastio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          
          <Button
            variant="ghost"
            className="hidden text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
          >
            Iniciar sesión
          </Button>
          <Button className="rounded-full font-semibold shadow-sm" render={<a href="#prueba-gratis" />}>
            Pruébalo gratis
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
