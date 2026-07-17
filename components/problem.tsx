"use client"

import { motion, type Variants } from "motion/react"
import { ClipboardList, MessageCircle, AlertTriangle } from "lucide-react"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const cards = [
  {
    icon: AlertTriangle,
    title: "Te pilla sin stock a mitad de semana.",
    body: "Te quedas sin algo a mitad de semana y no da tiempo a esperar al proveedor.",
  },
  {
    icon: ClipboardList,
    title: "Ni recuerdas qué pediste ni a qué precio.",
    body: "Apuntas el pedido en una nota del móvil, y la semana que viene no te acuerdas qué pediste ni a qué precio.",
  },
  {
    icon: MessageCircle,
    title: "Siempre lo mismo, proveedor por proveedor.",
    body: "Cada semana llamas o mandas WhatsApp a cada proveedor por separado, para pedir siempre lo mismo.",
  },
]

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      {/* Warm glow — same accent, darker canvas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              El día a día
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
              ¿Te suena esto?
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {cards.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
              >
                {/* Icon container */}
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="font-display text-base font-semibold leading-snug text-primary-foreground">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/55">
                  {body}
                </p>

                {/* Bottom accent line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-7 right-7 h-px rounded-full bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
