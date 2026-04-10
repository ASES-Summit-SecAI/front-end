"use client";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="problem" className="py-28 px-6 md:px-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          <div className="shrink-0">
            <p className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-4">Context</p>
            <h2
              className="font-bold text-black leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              AI acts.<br />
              <span className="text-black/20">Who's watching?</span>
            </h2>
          </div>

          <div className="flex-1 grid sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                label: "No unified standard",
                body: "OAuth, OIDC, and SPIFFE were built for humans — not autonomous agents.",
              },
              {
                label: "Zero audit trails",
                body: "33% of organizations have no record of what their AI agents have done.",
              },
              {
                label: "Governance gap",
                body: "Agent adoption is outpacing every governance mechanism that exists today.",
              },
              {
                label: "Real attacks",
                body: "Cursor CVE (Oct 2025): prompt injection → Remote Code Execution, no trace.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-white border border-black/5"
              >
                <div className="text-black font-semibold text-sm mb-1.5">{item.label}</div>
                <p className="text-black/35 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
