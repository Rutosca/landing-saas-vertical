"use client"

import { motion, type Variants } from "motion/react"
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OrderPreview } from "@/components/order-preview"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* soft warm glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-[8%] top-1/3 h-72 w-72 rounded-full bg-chart-2/20 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
          >
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            Pedidos a proveedores en piloto automático
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Pide a tus proveedores en 2 minutos, sin{" "}
            <span className="text-primary">WhatsApp</span> ni{" "}
            <span className="relative whitespace-nowrap">
              olvidos
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-primary/40"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Abastio centraliza todos tus pedidos en un solo lugar. Plantillas por
            proveedor, recordatorios automáticos y confirmaciones al instante —
            para que a tu negocio nunca le falte stock.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              className="group h-12 rounded-full px-7 text-base font-semibold shadow-md"
            >
              Pruébalo gratis
              <ArrowRight
                className="ml-1 size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-card px-7 text-base font-semibold text-foreground hover:bg-secondary"
            >
              Ver cómo funciona
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-primary" aria-hidden="true" />
              Sin tarjeta de crédito
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Listo en 5 minutos
            </span>

          </motion.div>
        </motion.div>

        {/* Right: animated order preview */}
        <OrderPreview />
      </div>
    </section>
  )
}
