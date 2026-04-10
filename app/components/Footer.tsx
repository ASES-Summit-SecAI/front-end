"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 border-t border-black/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex items-center justify-end"
      >
        <p className="text-black/20 text-xs">© {new Date().getFullYear()} Veranota</p>
      </motion.div>
    </footer>
  );
}
