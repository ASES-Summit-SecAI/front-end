"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setName(""); setEmail(""); setMessage(""); setStatus("idle");
    }, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg, #013A6B, #00CED1)" }}
              />

              <div className="px-8 py-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "linear-gradient(135deg, #013A6B15, #00CED120)" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#00CED1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#013A6B] mb-2">You're on the list</h3>
                    <p className="text-black/40 text-sm">We'll be in touch soon.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                      style={{ background: "linear-gradient(135deg, #013A6B, #00CED1)" }}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-[#013A6B]">Get early access</h2>
                        <p className="text-black/35 text-sm mt-1">Join the waitlist for Veranota.</p>
                      </div>
                      <button
                        onClick={handleClose}
                        className="text-black/20 hover:text-black/50 transition-colors ml-4 mt-0.5"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="text-xs font-semibold text-black/40 uppercase tracking-wide mb-1.5 block">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-[#00CED1] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-black/40 uppercase tracking-wide mb-1.5 block">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-[#00CED1] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-black/40 uppercase tracking-wide mb-1.5 block">Message <span className="normal-case font-normal">(optional)</span></label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your use case..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-[#00CED1] transition-colors resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="mt-1 w-full py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                        style={{ background: "linear-gradient(135deg, #013A6B, #00CED1)" }}
                      >
                        {status === "loading" ? "Sending..." : "Request access →"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
