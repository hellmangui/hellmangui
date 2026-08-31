**English** · [Português](README.pt-BR.md) · [Español](README.es.md)

# Guilherme — `hellmangui`

I build systems that have to keep running: a game world, a server economy, and software a real business depends on every night.

Four domains, four different failure modes. A combat system that stutters, an economy that inflates, a reservation that never reaches the kitchen, a payment credited twice — I've had to design against all four.

---

## What I'm building

### 🎮 HEL — extraction-survival melee, Unreal Engine 5
A full game on **ACF** (Ascent Combat Framework) with **AGLS** locomotion, **MetaHuman** characters and **Gaea** terrain. Hero module, flight and jump traversal, combat tuning. 253 GB of project, versioned, with its own knowledge base of combat-framework documentation.

### 🍽️ Alvor Reservas — reservation SaaS with AI
Built for **two restaurants in Alvor, Portugal**, in operation for 30 years and taking bookings by phone and Facebook Messenger.

The hard constraint shaped everything: *the restaurants cannot stop*. So the system is **additive, never disruptive** — phone and Messenger keep working, and every channel lands in one panel through a `channel` field. Staff adopt it in stages, and every change is reversible.

`Next.js 16` · `React 19` · `Supabase` with row-level security for tenant isolation · provider-agnostic AI layer so the proof-of-concept costs nothing and production uses the best model by changing one variable.

### 🐎 Pantanal — RedM server with a real economy
Farms, animal genetics and breeding, cooperatives, a mint, workshops, industries and exports. Dozens of Lua resources plus a **Next.js companion app** with per-module dashboards and player tutorials.

### 💳 SMM Panel — payments and reseller integration
**MercadoPago** checkout with Discord auth. The webhook re-fetches payment status from the provider instead of trusting the callback, guards against double-crediting, and moves status and balance inside a single transaction.

---

## How I work

**Decisions get written down.** Every project carries a `DECISIONS.md` — context, decision, reasoning — and a constitution of non-negotiable principles. When I come back six months later, I know *why*, not just *what*.

**Constraints come before features.** The Alvor system starts from "the restaurant cannot stop", not from a feature list.

**Cost is an architecture problem.** The AI layer is provider-agnostic on purpose: free models for development, the best model in production, one environment variable apart.

---

## Stack

| | |
|---|---|
| **Game** | Unreal Engine 5 · C++ · Blueprints · ACF · MetaHuman · Gaea |
| **Web** | TypeScript · Next.js · React · Tailwind · Prisma |
| **Data** | PostgreSQL · Supabase · SQLite |
| **Game servers** | Lua · RedM / FiveM · VORP |
| **Payments & auth** | MercadoPago · NextAuth · Discord OAuth |

---

## GitHub

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=hellmangui&show_icons=true&count_private=true&hide_border=true&theme=github_dark&hide_title=true">
  <img src="https://github-readme-stats.vercel.app/api?username=hellmangui&show_icons=true&count_private=true&hide_border=true&hide_title=true" alt="GitHub stats for hellmangui">
</picture>

Most of my work lives in private repositories — game projects and client software.

---

*Open to conversations about game systems, simulated economies, and software for businesses that can't afford downtime.*
