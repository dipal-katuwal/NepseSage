# NEPSE Sage AI 🇳🇵

**NEPSE Sage AI** is a professional-grade clinical analysis platform designed for investors in the Nepal Stock Exchange. It combines high-precision data visualization with AI-driven insights to provide a superior trading and portfolio management experience.

Originally built with TanStack Start, this project has been fully migrated to **Next.js 15 (App Router)** for enhanced performance, scalability, and server-side capabilities.

---

## 🚀 Key Features

### 📊 Clinical Dashboard
A high-density financial command center featuring:
- **Portfolio Health**: Real-time value tracking and daily P/L metrics.
- **Discipline Score**: A proprietary metric (0-100) that rates your adherence to your trading plan.
- **Opportunity Radar**: AI-flagged technical signals (Mean Reversion, Volume Breakouts, etc.).
- **Risk Meter**: Live Portfolio Beta and risk rating calculation.

### 🤖 Sage AI Assistant
A dedicated interface that acts as:
- **Technical Analyst**: Can analyze MACD crossovers, RSI levels, and support/resistance for symbols like NTC or NICA.
- **Trading Psychologist**: Identifies behavioral biases (FOMO, Loss Aversion) from your trading journal.
- **Market Sentiment Engine**: Aggregates real-time NEPSE trends and selective accumulation signals.

### 🧪 Behavior Lab (Trading Journal)
Analyze the psychology behind every trade. Log your emotions, track your discipline heatmap, and receive clinical feedback on your trading patterns.

### 🎮 Trading Simulator
Practice your strategies in a risk-free environment using real NEPSE market data and virtual capital.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI System**: [Tailwind CSS 4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Validation**: [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **Infrastructure**: [Cloudflare / Wrangler](https://developers.cloudflare.com/workers/wrangler/)

---

## 📁 Project Structure

```text
/src
  /app
    /(dashboard)      # Main application layout & routes
      /insights       # Community & AI market insights
      /journal        # Behavior Lab & trade tracking
      /leaderboard    # Analyst rankings
      /sage-ai        # AI Chat interface
      /settings       # User & workspace preferences
      /simulator      # Virtual trading environment
      layout.tsx      # App navigation & sidebar
      page.tsx        # Clinical Dashboard
    globals.css       # Tailwind 4 & clinical theme
    layout.tsx        # Root configuration & metadata
  /components
    /ui               # Shadcn UI components
    AppLayout.tsx     # Sidebar & Topbar structure
  /hooks              # Custom React hooks
  /lib                # Utility functions
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the Next.js development server:
```bash
npm run dev
```
Visit `http://localhost:3000` to see the clinical dashboard.

### Build
Generate an optimized production build:
```bash
npm run build
```

---

## 🎨 Design System
The project uses a custom "Clinical Navy" theme defined in `src/app/globals.css`, focusing on:
- **Typography**: Space Grotesk (Headings) & DM Sans (Body).
- **Colors**: High-contrast OKLCH-based colors for accessibility and professional utility.
- **Components**: Modified Shadcn UI components optimized for data-dense financial applications.

---

## 📝 License
This project is private and intended for educational/personal use for the NEPSE investing community.
