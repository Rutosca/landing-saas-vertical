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
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "Nuevo interesado — Abastio",
          contacto: data.get("contacto"),
          mensaje: data.get("mensaje") || "(sin comentario)",
        }),
      })
      if (!res.ok) throw new Error("fallo en el envío")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="prueba-gratis" className="relative overflow-hidden scroll-mt-24 bg-background py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-4xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl border border-white/10 bg-surface p-8 text-center shadow-lg sm:p-14"
        >
          <motion.p variants={fadeUp} className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Fase piloto
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-primary-foreground sm:text-5xl">
            Antes de cerrar, un paso más
          </motion.h2>

          <motion.h3 variants={fadeUp} className="mt-5 font-display text-lg font-semibold text-primary-foreground/85 sm:text-xl">
            Cuéntanos cómo pedís ahora y te avisamos en cuanto esté listo para ti
          </motion.h3>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-md flex-col gap-3">
            <input
              name="contacto"
              type="text"
              required
              placeholder="Tu email o teléfono"
              className="h-12 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none ring-primary/40 focus:ring-2"
            />
            <textarea
              name="mensaje"
              placeholder="¿Qué proveedor te da más dolores de cabeza? (opcional)"
              rows={2}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none ring-primary/40 focus:ring-2"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "sent"}
              className="group h-12 rounded-full text-base font-semibold shadow-md"
            >
              {status === "sent" ? "¡Recibido, gracias!" : status === "loading" ? "Enviando..." : "Quiero probarlo gratis"}
              {status === "idle" && <Send className="ml-1 size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
            </Button>

            {status === "error" && (
              <p className="text-xs text-red-400">Algo ha ido mal — inténtalo otra vez en un momento.</p>
            )}
            <p className="mt-1 text-xs text-primary-foreground/45">
              Sin coste, sin permanencia — solo tu feedback real.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}