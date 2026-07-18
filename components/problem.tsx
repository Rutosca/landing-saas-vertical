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
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_5px_10px_rgba(0,0,0,0.04),0_15px_25px_rgba(0,0,0,0.3)]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div 
                    className="absolute bottom-[55%] left-1/2 w-[150%] -translate-x-1/2 rounded-full pb-[150%] blur-[35px]"
                    style={{
                      opacity: 0.15,
                      backgroundImage: 'conic-gradient(from 205deg at 50% 50%, transparent 0deg, var(--primary) 25deg, transparent 295deg, transparent 360deg)'
                    }}
                  />
                </div>

                {/* Background tiles & lines */}
                <div 
                  className="absolute inset-0 z-0 overflow-hidden rounded-2xl"
                  style={{
                    maskImage: 'radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%)'
                  }}
                >
                  {/* Tiles */}
                  <div className="opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100">
                    <div className="absolute left-0 top-0 h-[10%] w-[22.5%] animate-tile bg-primary/5 opacity-0" />
                    <div className="absolute left-[22.5%] top-0 h-[10%] w-[27.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-6s' }} />
                    <div className="absolute left-[50%] top-0 h-[10%] w-[27.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-4s' }} />
                    <div className="absolute left-[77.5%] top-0 h-[10%] w-[22.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-2s' }} />
                    
                    <div className="absolute left-0 top-[10%] h-[22.5%] w-[22.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-4s' }} />
                    <div className="absolute left-[22.5%] top-[10%] h-[22.5%] w-[27.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-2s' }} />
                    <div className="absolute left-[50%] top-[10%] h-[22.5%] w-[27.5%] animate-tile bg-primary/5 opacity-0" />
                    <div className="absolute left-[77.5%] top-[10%] h-[22.5%] w-[22.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-4s' }} />
                    
                    <div className="absolute left-[50%] top-[32.5%] h-[22.5%] w-[27.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-6s' }} />
                    <div className="absolute left-[77.5%] top-[32.5%] h-[22.5%] w-[22.5%] animate-tile bg-primary/5 opacity-0" style={{ animationDelay: '-2s' }} />
                  </div>

                  {/* Lines */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {/* Line 1 */}
                    <div className="absolute left-0 right-0 top-[10%] h-px origin-left scale-x-0 bg-white/10 transition-transform duration-300 group-hover:delay-0 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-[22.5%] top-0 w-px origin-top scale-y-0 bg-white/10 transition-transform duration-300 group-hover:delay-0 group-hover:scale-y-100" />
                    
                    {/* Line 2 */}
                    <div className="absolute left-0 right-0 top-[32.5%] h-px origin-left scale-x-0 bg-white/10 transition-transform delay-150 duration-300 group-hover:delay-150 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-[50%] top-0 w-px origin-top scale-y-0 bg-white/10 transition-transform delay-150 duration-300 group-hover:delay-150 group-hover:scale-y-100" />
                    
                    {/* Line 3 */}
                    <div className="absolute left-0 right-0 top-[55%] h-px origin-left scale-x-0 bg-white/10 transition-transform delay-300 duration-300 group-hover:delay-300 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-[22.5%] top-0 w-px origin-top scale-y-0 bg-white/10 transition-transform delay-300 duration-300 group-hover:delay-300 group-hover:scale-y-100" />
                  </div>
                </div>

                {/* Icon container */}
                <div className="relative z-10 mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20 backdrop-blur-md transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary group-hover:ring-primary/40">
                  <Icon className="relative z-10 size-5 transition-colors duration-300" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="relative z-10 font-display text-base font-semibold leading-snug text-primary-foreground">
                  {title}
                </h3>
                <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-primary-foreground/55">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
