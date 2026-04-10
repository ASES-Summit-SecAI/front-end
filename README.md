# Veranota — AI Agent Accountability Platform

> Tamper-proof audit logs for LLM interactions. Like `git blame`, but for AI agents.

Veranota is the marketing and showcase website for a cryptographic accountability layer that sits between users and AI interfaces (ChatGPT, Claude, Cursor, etc.). Every agent action is cryptographically signed and logged — immutable, verifiable, and auditable.

---

## The Problem

AI is shifting from advice tool to autonomous employee, but enterprise accountability hasn't caught up:

- **33%** of organizations have zero audit trails for AI agent actions
- **Only 21.9%** treat agents as identity-bearing entities
- **58–59%** have monitoring, but only **37–40%** have kill-switches
- No adopted standard yet — OAuth/OIDC/SPIFFE were not designed for autonomous agents
- **Cursor CVE (Oct 2025):** Lakera disclosed an indirect prompt injection vulnerability enabling RCE on developer machines via agents

Regulatory pressure is mounting: NIST AI Agent Standards Initiative (Feb 2026), EU AI Act high-risk requirements effective Aug 2026.

---

## The Solution

A browser/chat extension that creates a tamper-proof commit log of every LLM interaction. Each response or action is cryptographically signed — it cannot be altered retroactively. Think **`git commit` for AI agent decisions**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |
| Deployment | Docker (multi-stage), Google Cloud Run |

---

## Project Structure

```
app/
├── page.tsx              # Composes all sections
├── layout.tsx
├── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx / HeroGraph.tsx
    ├── Problem.tsx
    ├── Solution.tsx
    ├── HowItWorks.tsx
    ├── CTA.tsx
    └── Footer.tsx
```

**Section order:** `Navbar → Hero → Problem → Solution → HowItWorks → CTA → Footer`

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other commands:

```bash
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## Docker

```bash
docker build -t veranota .
docker run -p 8080:8080 veranota
```

The image uses a 3-stage multi-stage build with a non-root `nextjs` user and standalone Next.js output on port `8080`.

---

## Design System

- **Background:** `#F5F5F7` (light), text `#111111`
- **Accents:** cyan `#00CED1`, deep blue `#013A6B`
- **Font:** Geist Sans + Geist Mono (for audit log displays)
- All components are `"use client"` with Framer Motion scroll-triggered animations
