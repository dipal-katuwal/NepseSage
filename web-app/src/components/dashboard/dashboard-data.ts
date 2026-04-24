export const stats = [
  { label: "Portfolio Value", value: "Rs. 1,248,500", change: "+12.4%", positive: true },
  { label: "Daily P/L", value: "Rs. 14,200", change: "+1.14%", positive: true },
  { label: "Discipline Score", value: "84/100", change: null, positive: true },
  { label: "Risk Rating", value: "Moderate-High", change: null, positive: false, isWarning: true },
];

export const holdings = [
  { symbol: "NICA", qty: "1,200", avgCost: "540.00", ltp: "582.40", pl: "+7.85%", value: "Rs. 698,880", positive: true, sector: "Banking" },
  { symbol: "SHL", qty: "500", avgCost: "410.00", ltp: "398.20", pl: "-2.88%", value: "Rs. 199,100", positive: false, sector: "Hotels" },
  { symbol: "HDHPC", qty: "2,500", avgCost: "182.50", ltp: "215.00", pl: "+17.81%", value: "Rs. 537,500", positive: true, sector: "Hydro" },
];

export const watchlist = [
  { symbol: "NTC", sector: "Telecom", price: "844.00", change: "-0.42%", positive: false },
  { symbol: "HRL", sector: "Reinsurance", price: "612.00", change: "+2.15%", positive: true },
  { symbol: "NABBC", sector: "Banking", price: "488.20", change: "+0.12%", positive: true },
  { symbol: "CHCL", sector: "Hydro", price: "214.50", change: "-1.80%", positive: false },
];

export const opportunities = [
  { symbol: "UPPER", signal: "Mean Reversion", match: "94%", type: "Sage AI Signal" },
  { symbol: "CIT", signal: "Volume Breakout", match: "72%", type: "Neutral Signal" },
];
