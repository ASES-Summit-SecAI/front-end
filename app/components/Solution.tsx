"use client";
import { motion } from "framer-motion";

const pills = [
  { label: "Cryptographic signing", body: "Every instruction signed at source. Forged or injected commands detected instantly." },
  { label: "Immutable audit log", body: "Tamper-proof record of every agent action. Git-style history for your AI." },
];

export default function Solution() {
  return (
    <section className="py-20 px-6 md:px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        {pills.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-white border border-[#DCDCDC] hover:border-[#00CED1] transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ background: "#00CED1" }} />
            <h3 className="text-black font-semibold mb-1.5">{p.label}</h3>
            <p className="text-black/35 text-sm leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
