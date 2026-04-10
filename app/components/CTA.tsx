"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import EarlyAccessModal from "./EarlyAccessModal";

const COMMITS = [
  { hash: "a3f92c1", msg: "✓ Signed: Summarized Q4 earnings", time: "2m ago",  safe: true },
  { hash: "c1d74f9", msg: "✗ Blocked: Exfiltration attempt",  time: "4m ago",  safe: false },
  { hash: "b8e10d4", msg: "✓ Signed: Queried customer DB",    time: "6m ago",  safe: true },
  { hash: "f2c83a1", msg: "✗ Blocked: Security override",     time: "9m ago",  safe: false },
  { hash: "d4a21e3", msg: "✓ Signed: Refactored auth module", time: "12m ago", safe: true },
  { hash: "e9b32f7", msg: "✓ Signed: Drafted ticket reply",   time: "15m ago", safe: true },
];

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-black/5">
      <EarlyAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-bold tracking-tight text-black leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Every AI decision.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #013A6B, #00CED1)" }}
            >
              Auditable.
            </span>
          </h2>
          <p className="mt-5 text-black/40 text-base leading-relaxed max-w-lg">
            We make AI decisions auditable the way financial transactions are
            — with a tamper-proof record of exactly what the AI was doing when
            it acted.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #013A6B, #00CED1)",
              boxShadow: "0 0 24px #013A6B20, 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            Get early access
            <span className="text-white/60">→</span>
          </button>
        </motion.div>

        {/* Right — git-style commit log */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-2xl border border-black/[0.06] bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm">
            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.05] bg-black/[0.015]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <span className="ml-3 text-black/25 text-xs font-mono">veranota audit log</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono" style={{ color: "#00C853" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00C853" }} />
                live
              </span>
            </div>

            {/* Commit list */}
            <div className="relative px-4 py-3">
              {/* Vertical commit line */}
              <div className="absolute left-[29px] top-3 bottom-3 w-px bg-black/[0.08]" />

              <div className="flex flex-col gap-1">
                {COMMITS.map((c, i) => (
                  <motion.div
                    key={c.hash}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 py-2 pl-1 group"
                  >
                    <div
                      className="relative z-10 w-3 h-3 rounded-full border-2 flex-shrink-0"
                      style={{
                        borderColor: c.safe ? "#00C853" : "#ef4444",
                        background: "#ffffff",
                      }}
                    />
                    <span className="text-xs font-mono w-16 flex-shrink-0" style={{ color: "#013A6B99" }}>
                      {c.hash}
                    </span>
                    <span
                      className={`text-xs font-mono flex-1 truncate ${
                        c.safe ? "text-black/45" : "text-red-500/70"
                      }`}
                    >
                      {c.msg}
                    </span>
                    <span className="text-black/20 text-[10px] font-mono flex-shrink-0">
                      {c.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
