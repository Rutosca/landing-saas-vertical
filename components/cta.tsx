"use client"

import { useState, type FormEvent } from "react"
import { motion, type Variants } from "motion/react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Cta() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: aquí conectaremos con Supabase para guardar el lead de verdad
    setSent(true)
  }

  return (
    <section
      id="prueba-gratis"
      className="relative overflow-hidden scroll-mt-24 bg-background py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-3xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl border border-white/10 bg-surface p-8 text-center shadow-lg sm:p-12"
        >
          <motion.p variants={fadeUp} className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Fase piloto
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            Buscamos los primeros bares de la zona para probarlo gratis
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/60">
            Sin coste, sin permanencia. Solo necesitamos tu feedback real mientras terminamos de construirlo.
          </motion.p>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3">
            <input
              type="text"
              required
              placeholder="Tu email o teléfono"
              className="h-12 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none ring-primary/40 focus:ring-2"
            />
            <textarea
              placeholder="¿Qué proveedor te da más dolores de cabeza? (opcional)"
              rows={2}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none ring-primary/40 focus:ring-2"
            />
            <Button type="submit" size="lg" disabled={sent} className="group h-12 rounded-full text-base font-semibold shadow-md">
              {sent ? "¡Recibido, gracias!" : "Quiero probarlo gratis"}
              {!sent && <Send className="ml-1 size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}