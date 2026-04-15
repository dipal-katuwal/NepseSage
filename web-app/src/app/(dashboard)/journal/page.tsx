import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, MoreVertical } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavior Lab — NEPSE Sage AI",
  description: "Analyze the psychology behind your trades",
};

const journalEntries = [
  { ticker: "NICA", sector: "Commercial Bank", date: "2023-11-24", emotion: "Patient", emotionColor: "positive", discipline: "9.5", notes: "Entry on pivot bounce. Followed setup exactly..." },
  { ticker: "UPPER", sector: "Hydro Power", date: "2023-11-22", emotion: "Fearful", emotionColor: "negative", discipline: "3.2", notes: "Exited early due to minor pull back. Missed 4..." },
  { ticker: "SHL", sector: "Hotels", date: "2023-11-21", emotion: "Neutral", emotionColor: "text-muted-foreground", discipline: "7.0", notes: "Standard sector rotation play. No bias detecte..." },
];

export default function JournalPage() {
  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Behavior Lab</h1>
      <p className="mt-1 text-sm text-muted-foreground mb-6">
        Analyze the psychology behind your trades. The Sage AI identifies pattern-matching biases and provides clinical feedback.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Behavioral Engine */}
        <div className="card-clinical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="clinical-label text-sm text-primary">Sage Behavioral Engine</h3>
            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs">⚙️</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-secondary p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <span className="text-sm font-semibold">Detected Bias: FOMO (Fear of Missing Out)</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                System noted 3 entries near intraday highs in sectors with &gt;5% daily gain. AI suggests wait-period of 15m post-rally before entry execution.
              </p>
            </div>
            <div className="rounded-md bg-secondary p-3">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Strength: Loss Aversion Control</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Discipline rating remains high (8.4/10) on stop-loss execution. You exited 90% of losing positions within your defined 2% risk threshold.
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-8 border-t border-border pt-4">
            <div>
              <p className="clinical-label">Emotion Score</p>
              <span className="stat-value text-xl">72</span>
              <span className="text-xs text-muted-foreground"> /100</span>
            </div>
            <div>
              <p className="clinical-label">Mental Fatigue</p>
              <span className="stat-value text-xl">Low</span>
            </div>
          </div>
        </div>

        {/* Sentiment Trend Chart */}
        <div className="card-clinical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="clinical-label text-sm">Psychological Sentiment Trend</h3>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary inline-block" /> Confidence</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-destructive inline-block" /> Anxiety</span>
            </div>
          </div>
          <div className="flex items-end gap-2 h-40">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const conf = [65, 70, 60, 75, 80, 85, 55][i];
              const anx = [15, 20, 25, 10, 8, 5, 30][i];
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col gap-0.5" style={{ height: "120px" }}>
                    <div className="w-full rounded-sm bg-primary/80 mt-auto" style={{ height: `${conf}%` }} />
                    <div className="w-full rounded-sm bg-destructive/60" style={{ height: `${anx}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Discipline Heat Map */}
      <div className="card-clinical mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="clinical-label text-sm">Discipline Heat Map (30 Day Activity)</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Less Disciplined</span>
            {["bg-destructive", "bg-warning", "bg-primary/50", "bg-primary/70", "bg-primary"].map((c, i) => (
              <div key={i} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
            <span className="text-xs text-muted-foreground">Mastery</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1.5 w-fit">
          {Array.from({ length: 35 }).map((_, i) => {
            const colors = ["bg-primary", "bg-primary/70", "bg-primary/50", "bg-warning", "bg-destructive", "bg-secondary"];
            return (
              <div key={i} className={`h-6 w-6 rounded-sm ${colors[Math.floor(Math.random() * colors.length)]}`} />
            );
          })}
        </div>
      </div>

      {/* Detailed Trade Journal */}
      <div className="card-clinical">
        <div className="flex items-center justify-between mb-4">
          <h3 className="clinical-label text-sm">Detailed Trade Journal</h3>
          <button className="text-sm text-primary hover:text-primary/80">+ New Entry</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="clinical-label pb-3 text-left">Ticker</th>
              <th className="clinical-label pb-3 text-left">Date</th>
              <th className="clinical-label pb-3 text-center">Emotion Tag</th>
              <th className="clinical-label pb-3 text-center">Discipline Rating</th>
              <th className="clinical-label pb-3 text-left">Clinical Notes</th>
              <th className="clinical-label pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {journalEntries.map((e) => (
              <tr key={e.ticker + e.date} className="border-b border-border/50">
                <td className="py-3">
                  <span className="font-heading text-sm font-bold">{e.ticker}</span>
                  <p className="text-xs text-muted-foreground">{e.sector}</p>
                </td>
                <td className="py-3 text-sm text-muted-foreground font-mono">{e.date}</td>
                <td className="py-3 text-center">
                  <span className={`rounded px-2 py-1 text-xs font-semibold ${e.emotionColor === "positive" ? "badge-bullish" : e.emotionColor === "negative" ? "badge-bearish" : "bg-secondary text-muted-foreground"}`}>
                    {e.emotion}
                  </span>
                </td>
                <td className={`py-3 text-center text-sm font-bold ${parseFloat(e.discipline) > 7 ? "positive" : parseFloat(e.discipline) < 5 ? "negative" : "text-foreground"}`}>
                  {e.discipline}
                </td>
                <td className="py-3 text-sm text-muted-foreground">{e.notes}</td>
                <td className="py-3 text-right">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
