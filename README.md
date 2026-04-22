# NEPSE Sage AI 🇳🇵

**NEPSE Sage AI** is a professional-grade clinical analysis platform for the Nepal Stock Exchange. It transforms raw market data into high-precision visual intelligence, combining institutional-grade UI with advanced AI behavioral insights.

---

## 🏛️ Architecture & Context
This project is a high-performance **Next.js 15 (App Router)** application, migrated from TanStack Start for superior SEO, edge compatibility, and developer velocity. It is designed with a **"Clinical Analyst"** philosophy: high-density data, zero-latency interactions, and a professional navy aesthetic.

### 🧠 Core Intelligence
- **Behavioral Analysis**: Tracks "Discipline Scores" and identifies cognitive biases (FOMO, Revenge Trading) via the Journal.
- **AI Engine**: A specialized interface for symbol analysis (e.g., NICA, NTC) and sentiment aggregation.
- **Data Density**: UI is optimized for professional utility, using Space Grotesk for readability and DM Sans for dense data.

---

## 🚀 Module Breakdown

### 📊 Clinical Dashboard (`/`)
The mission control for investors.
- **Real-time Portfolio Health**: Value tracking and P/L metrics.
- **Discipline Score**: Proprietary metric rating adherence to trading plans.
- **Risk Meter**: Live Portfolio Beta and volatility ratings.

### 🤖 Sage AI (`/sage-ai`)
The analytical core.
- **Technical Analyst**: Support/resistance detection and indicator interpretation.
- **Sentiment Engine**: Aggregates NEPSE trends and accumulation signals.

### 🧪 Behavior Lab (`/journal`)
The trading psychologist.
- **Emotional Logging**: Tracks mental state during trades.
- **Pattern Recognition**: Flags "Red Flag" behaviors automatically.

### 🎮 Simulator (`/simulator`)
- **Virtual Capital**: Risk-free strategy testing with real market data.

---

## 🛠️ Technical Stack & Primitives

- **Framework**: Next.js 15 (App Router, Server Components)
- **Styling**: Tailwind CSS 4 + Shadcn UI (Radix UI)
- **Visuals**: Framer Motion (Micro-interactions) + Recharts (Financial charts)
- **Type Safety**: Zod (Schema validation) + TypeScript (Strict mode)
- **Deployment**: Optimized for Cloudflare Workers/Pages (Wrangler)

---

## 📁 Developer Guide: Project Structure

```text
/src
  /app
    /(dashboard)      # Authenticated routes & main layout
      /insights       # Market sentiment & AI community signals
      /journal        # Behavioral tracking (The "Psychologist")
      /sage-ai        # AI LLM interface (The "Analyst")
      /simulator      # Virtual trading logic
      layout.tsx      # Sidebar & State management (SidebarProvider)
      page.tsx        # Dashboard entry point
    globals.css       # Design system (OKLCH colors, clinical variables)
  /components
    /ui               # Atomic Shadcn components (customized)
    AppLayout.tsx     # Shell structure & navigation logic
  /lib
    /utils.ts         # Tailwind merging & shared helpers
  /hooks
    /use-mobile.tsx   # Responsive breakpoint management
```

---

## 🎨 Design Language (Clinical Navy)
The design system enforces a premium, anti-generic UI:
- **Calibrated Color**: OKLCH-based colors for perfect light/dark mode transitions.
- **Micro-Motion**: Hardware-accelerated transitions via Framer Motion.
- **Typography**: `font-heading` (Space Grotesk) for impact; `font-sans` (DM Sans) for utility.

---

## ⚙️ Development Workflow

1. **Setup**: `npm install`
2. **Local Dev**: `npm run dev` (Port 3000)
3. **Build**: `npm run build` (Static/Edge optimization)

---

## 📝 Usage for AI Tools
If pasting this into another AI for development:
> "This is a Next.js 15 App Router project using Shadcn UI and Tailwind 4. The project follows a 'Clinical Analyst' aesthetic. Key files include `AppLayout.tsx` for layout and `globals.css` for the theme. Prioritize performance, data density, and Space Grotesk typography in all UI changes."

