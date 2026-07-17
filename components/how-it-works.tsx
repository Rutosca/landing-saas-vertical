"use client"

import { motion, type Variants, useInView } from "motion/react"
import { useRef } from "react"
import {
  ListPlus,
  SlidersHorizontal,
  Send,
  MessageCircle,
  Check,
  Plus,
} from "lucide-react"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ---------------------------------------------------------------- */
/* Step 1 — catalogue items appear one by one                        */
/* ---------------------------------------------------------------- */
function CatalogMock() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const rows = ["Harina de fuerza", "Aceite de oliva", "Tomate triturado"]

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {rows.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            delay: 0.3 + i * 0.35,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
        >
          <span className="inline-flex size-5 items-center justify-center rounded-md bg-primary/20 text-primary">
            <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="text-xs font-medium text-primary-foreground/80">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Step 2 — quantity ticks up with a floating "+"                    */
/* ---------------------------------------------------------------- */
function QuantityMock() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
    >
      <span className="text-xs font-medium text-primary-foreground/80">
        Cajas esta semana
      </span>
      <div className="relative flex items-center gap-2">
        {/* floating + */}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={
            inView
              ? { opacity: [0, 1, 1, 0], y: [6, -10, -14, -20] }
              : {}
          }
          transition={{ delay: 0.5, duration: 1, times: [0, 0.3, 0.7, 1] }}
          className="absolute -top-1 right-9 text-sm font-bold text-primary"
        >
          <Plus className="size-3.5" strokeWidth={3} aria-hidden="true" />
        </motion.span>

        <span className="inline-flex size-6 items-center justify-center rounded-md bg-white/10 text-primary-foreground/50">
          <span className="text-sm leading-none">−</span>
        </span>

        <QuantityNumber inView={inView} />

        <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary/20 text-primary">
          <Plus className="size-3" strokeWidth={3} aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

function QuantityNumber({ inView }: { inView: boolean }) {
  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden text-sm font-bold text-primary-foreground">
      <motion.span
        initial={{ y: 0 }}
        animate={inView ? { y: [-0, -24, -48] } : {}}
        transition={{
          delay: 0.5,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.5, 1],
        }}
        className="absolute flex flex-col items-center leading-6"
      >
        <span className="h-6">2</span>
        <span className="h-6">3</span>
        <span className="h-6">4</span>
      </motion.span>
    </span>
  )
}

/* ---------------------------------------------------------------- */
/* Step 3 — send icon slides toward WhatsApp                         */
/* ---------------------------------------------------------------- */
function SendMock() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4"
    >
      {/* dashed path */}
      <div
        aria-hidden="true"
        className="absolute left-12 right-12 top-1/2 -z-0 h-px -translate-y-1/2 border-t border-dashed border-primary/30"
      />

      {/* origin — order list */}
      <span className="relative z-10 inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-primary-foreground/70">
        <ListPlus className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>

      {/* flying send icon */}
      <motion.span
        initial={{ x: 0, opacity: 0, scale: 0.8 }}
        animate={
          inView
            ? { x: [0, 60, 120], opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }
            : {}
        }
        transition={{ delay: 0.4, duration: 1.1, times: [0, 0.5, 1] }}
        className="absolute left-9 z-20 text-primary"
      >
        <Send className="size-4" strokeWidth={2} aria-hidden="true" />
      </motion.span>

      {/* destination — WhatsApp */}
      <motion.span
        initial={{ scale: 1 }}
        animate={inView ? { scale: [1, 1.18, 1] } : {}}
        transition={{ delay: 1.3, duration: 0.4 }}
        className="relative z-10 inline-flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary"
      >
        <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </motion.span>
    </div>
  )
}

/* ---------------------------------------------------------------- */

const steps = [
  {
    icon: ListPlus,
    title: "Sube tu catálogo una vez",
    body: "Añade tus productos y proveedores habituales. Solo lo haces la primera vez.",
    mock: <CatalogMock />,
  },
  {
    icon: SlidersHorizontal,
    title: "Ajusta cantidades cada semana",
    body: "Entra, marca lo que necesitas esta semana. Menos de 2 minutos.",
    mock: <QuantityMock />,
  },
  {
    icon: Send,
    title: "Envía tu pedido",
    body: "Genera la lista agrupada por proveedor y mándala con un toque.",
    mock: <SendMock />,
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden scroll-mt-24 bg-surface py-20 md:py-28"
    >
      {/* Warm glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 bottom-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
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
              Cómo funciona
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
              Así de simple
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative mt-16 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {/* connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-6 hidden sm:block"
            >
              <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {steps.map(({ icon: Icon, title, body, mock }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative flex flex-col"
              >
                {/* Number + icon header */}
                <div className="relative z-10 mb-6 flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-primary/25 bg-surface text-primary shadow-sm ring-4 ring-surface">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-bold text-primary-foreground/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/55">
                  {body}
                </p>

                {/* Animated mock */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-sm">
                  {mock}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
