"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "motion/react"
import { CircleCheck, Plus } from "lucide-react"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const faqs = [
  { question: "¿Cuánto cuesta?", answer: "Gratis durante la fase piloto. Cuando lancemos precios, tú decides si te quedas." },
  { question: "¿Tengo que instalar algo?", answer: "No, es una página web. Se abre desde el móvil o el ordenador, sin descargas." },
  { question: "¿Cuánto tardo en tenerlo listo?", answer: "Menos de 5 minutos la primera vez que metes tu catálogo." },
  { question: "¿Sigo pudiendo pedir por WhatsApp o llamada si quiero?", answer: "Sí, no te obligamos a nada — la app solo te prepara la lista, tú decides cómo la envías." },
  { question: "¿Qué pasa con mis datos?", answer: "Solo se usan para generar tus pedidos. No se comparten ni se venden a nadie." },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="preguntas" className="relative overflow-hidden scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="mx-auto w-[92%] max-w-2xl">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center">
          <motion.p variants={fadeUp} className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Dudas rápidas
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            Preguntas frecuentes
          </motion.h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-10 flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div key={item.question} variants={fadeUp} className="group h-36 w-full [perspective:1000px]">
                <div
                  className={`relative h-full w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${
                    isOpen ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(isOpen ? null : index);
                    }
                  }}
                  aria-expanded={isOpen}
                >
                  {/* Front: Question */}
                  <div className="absolute inset-0 flex items-center justify-between gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-primary/60 hover:bg-white/[0.1] [backface-visibility:hidden]">
                    <span className="font-display text-lg font-semibold text-primary-foreground">{item.question}</span>
                    <Plus className="size-6 shrink-0 text-primary transition-transform duration-300" aria-hidden="true" />
                  </div>

                  {/* Back: Answer */}
                  <div className="absolute inset-0 flex items-center gap-4 rounded-2xl border-2 border-primary/50 bg-primary/[0.08] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <CircleCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
                    <p className="font-display text-base leading-relaxed text-primary-foreground/90">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}