"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3"
    >
      <motion.div
        animate={
          (scrolled
            ? {
                backgroundColor: "rgba(245,245,247,0.72)",
                backdropFilter: "blur(18px) saturate(180%)",
                WebkitBackdropFilter: "blur(18px) saturate(180%)",
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)",
                borderRadius: "9999px",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
              }
            : {
                backgroundColor: "rgba(245,245,247,0)",
                backdropFilter: "blur(0px) saturate(100%)",
                WebkitBackdropFilter: "blur(0px) saturate(100%)",
                borderColor: "rgba(0,0,0,0)",
                boxShadow: "0 0px 0px rgba(0,0,0,0)",
                borderRadius: "0px",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              }) as Parameters<typeof motion.div>[0]["animate"]
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between w-full max-w-5xl border py-1.5"
      >
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/logos/logo.png"
            alt="Veranota — auditing for AI agents"
            className="h-auto w-auto max-h-[3rem] max-w-[7rem] object-contain object-left select-none sm:max-h-[3.5rem] sm:max-w-[8rem]"
            width={1024}
            height={1024}
            draggable={false}
          />
        </a>
        <a
          href="#product"
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-black/55 hover:text-black/80 hover:border-black/20 transition-all"
        >
          See the product
        </a>
      </motion.div>
    </motion.nav>
  );
}
