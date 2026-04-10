"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "33%", label: "of enterprises have zero audit trails for AI agent activity" },
  { value: "21.9%", label: "treat agents as identity-bearing entities with access scopes" },
  { value: "37–40%", label: "have real containment controls like kill-switches" },
  { value: "2028", label: "Gartner predicts 33% of enterprise software will include agentic AI" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/30 text-xs leading-relaxed">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
