"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOG_ENTRIES = [
  { hash: "a3f92c1", action: "Summarized Q4 earnings report", agent: "gpt-4o", time: "09:14:03", status: "signed" },
  { hash: "b8e10d4", action: "Queried customer database", agent: "claude-3", time: "09:13:49", status: "signed" },
  { hash: "c1d74f9", action: "Transfer $50k to external account", agent: "unknown", time: "09:13:31", status: "blocked" },
  { hash: "d4a21e3", action: "Drafted reply to ticket #8821", agent: "gpt-4o", time: "09:12:58", status: "signed" },
  { hash: "e9b32f7", action: "Accessed HR records", agent: "claude-3", time: "09:12:12", status: "signed" },
];

export default function Hero() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= LOG_ENTRIES.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), 900);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16">
      {/* Subtle animated blob */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none"
      />

      {/* Big headline */}
      <div className="relative z-10 max-w-6xl w-full mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-6">
            Research Preview
          </p>
          <h1
            className="font-bold tracking-tight text-black leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Every agent action.
            <br />
            <span className="text-indigo-400">Signed.</span>{" "}
            <span className="text-violet-400">Logged.</span>{" "}
            <span className="text-purple-400">Proven.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-black/40 text-lg max-w-md"
          >
            A cryptographic audit layer for AI agents — like git history, but for everything your AI does.
          </motion.p>
        </motion.div>

        {/* Live log */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 w-full max-w-2xl"
        >
          <div className="rounded-2xl border border-black/8 bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm shadow-black/5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-black/[0.015]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <span className="ml-3 text-black/25 text-xs font-mono">veranota · live audit log</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                live
              </span>
            </div>

            <div className="divide-y divide-black/[0.04] font-mono text-xs min-h-[200px]">
              {LOG_ENTRIES.slice(0, visible).map((e, i) => (
                <motion.div
                  key={e.hash}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-black/[0.015] transition-colors"
                >
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                    e.status === "signed"
                      ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                      : "bg-red-50 text-red-500 border-red-200"
                  }`}>
                    {e.status === "signed" ? "✓ signed" : "✗ blocked"}
                  </span>
                  <span className="text-indigo-400 shrink-0">{e.hash}</span>
                  <span className={`flex-1 truncate ${e.status === "blocked" ? "text-red-500" : "text-black/60"}`}>
                    {e.action}
                  </span>
                  <span className="text-black/20 shrink-0 hidden sm:block">{e.agent}</span>
                  <span className="text-black/20 shrink-0">{e.time}</span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              {visible < LOG_ENTRIES.length && (
                <div className="flex items-center gap-4 px-5 py-3.5">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-indigo-300"
                  >
                    ▋
                  </motion.span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
