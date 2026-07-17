"use client"

import { motion } from "motion/react"
import { Check, Clock, Send, Store } from "lucide-react"

const orderItems = [
  { name: "Harina de fuerza", qty: "10 sacos", ready: true },
  { name: "Aceite de oliva V.E.", qty: "24 uds", ready: true },
  { name: "Tomate triturado", qty: "6 cajas", ready: true },
  { name: "Levadura fresca", qty: "2 kg", ready: false },
]

export function OrderPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Main order card */}
      <div className="animate-float-slow rounded-3xl border border-border bg-card p-5 shadow-xl shadow-foreground/5">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Store className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Distribuciones Vega
              </p>
              <p className="text-xs text-muted-foreground">
                Pedido semanal · Martes
              </p>
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            Borrador
          </span>
        </div>

        <ul className="space-y-2 py-4">
          {orderItems.map((line, i) => (
            <motion.li
              key={line.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.18, duration: 0.4 }}
              className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.75 + i * 0.18,
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  className={`flex size-5 items-center justify-center rounded-full ${
                    line.ready
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground"
                  }`}
                >
                  {line.ready ? (
                    <Check className="size-3" aria-hidden="true" />
                  ) : (
                    <Clock className="size-3" aria-hidden="true" />
                  )}
                </motion.span>
                <span className="text-sm font-medium text-foreground">
                  {line.name}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{line.qty}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm"
        >
          <Send className="size-4" aria-hidden="true" />
          Enviar pedido
        </motion.button>
      </div>

      {/* Floating "confirmado" toast */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5, ease: "easeOut" }}
        className="animate-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-8"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-chart-4/15 text-chart-4">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Pedido confirmado
          </p>
          <p className="text-xs text-muted-foreground">
            Entrega el jueves a las 08:00
          </p>
        </div>
      </motion.div>

      {/* Floating time badge */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
        className="absolute -right-3 -top-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-lg sm:-right-6"
      >
        <Clock className="size-4 text-primary" aria-hidden="true" />
        <span className="text-sm font-semibold text-foreground">2:04 min</span>
      </motion.div>
    </motion.div>
  )
}
