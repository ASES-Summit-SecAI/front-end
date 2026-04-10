"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Install the extension", body: "Plugs into any AI chat interface. No model changes." },
  { n: "02", title: "Instructions are signed", body: "Cryptographic proof attached to every message at the source." },
  { n: "03", title: "Actions are logged", body: "Every response hashed and committed to an immutable audit trail." },
  { n: "04", title: "Unknown origins blocked", body: "No valid proof? The action never executes." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-4">How it works</p>
            <h2
              className="font-bold text-black leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Four steps.<br />
              <span className="text-black/20">Full accountability.</span>
            </h2>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-2xl bg-white border border-black/5 overflow-hidden group hover:border-indigo-200 transition-colors"
            >
              {/* Step number watermark */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-bold text-black/[0.04] select-none pointer-events-none group-hover:text-indigo-500/5 transition-colors">
                {s.n}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mb-8" />
              <h3 className="text-black font-semibold mb-2 text-sm">{s.title}</h3>
              <p className="text-black/35 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { value: "33%", label: "of enterprises have no AI audit trail", color: "text-red-500" },
            { value: "21.9%", label: "treat agents as identity-bearing entities", color: "text-orange-500" },
            { value: "2028", label: "Gartner: 33% of enterprise software will be agentic", color: "text-indigo-500" },
          ].map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-black/5 text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${s.color}`}>{s.value}</div>
              <p className="text-black/35 text-xs leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
