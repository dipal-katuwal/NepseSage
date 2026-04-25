import {
  LayoutDashboard,
  Sparkles,
  BookOpen,
  Bot,
  LineChart,
  Trophy,
  Settings,
  TrendingUp,
  AlertCircle,
  Users,
  RefreshCw,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Insights", icon: Sparkles, to: "/insights" },
  { label: "Journal", icon: BookOpen, to: "/journal" },
  { label: "Sage AI", icon: Bot, to: "/sage-ai" },
  { label: "Simulator", icon: LineChart, to: "/simulator" },
  { label: "Leaderboard", icon: Trophy, to: "/leaderboard" },
  // { label: "Settings", icon: Settings, to: "/settings" },
];

export const notificationGroups = [
  {
    label: "AI Insights",
    icon: TrendingUp,
    items: [
      {
        id: 1,
        title: "Unusual Volume detected in HDL",
        desc: "Himalayan Distillery is showing a 300% increase in volume relative to its 20-day average. Potential trend reversal imminent.",
        time: "2m ago",
        unread: true,
        actions: ["Analyze Symbol", "Dismiss"],
      },
    ],
  },
  {
    label: "Market Alerts",
    icon: AlertCircle,
    items: [
      {
        id: 2,
        title: "Price Alert: NICA reached Rs. 750",
        desc: "Your alert for NIC Asia Bank has been triggered. Target price hit at 13:42:00.",
        time: "14m ago",
        unread: true,
        actions: [],
      },
      {
        id: 3,
        title: "Quarterly Report: SHL",
        desc: "Soaltee Hotel Limited has published its Q1 report. Net profit increased by 12% YoY.",
        time: "2h ago",
        unread: false,
        actions: [],
      },
    ],
  },
  {
    label: "Community",
    icon: Users,
    items: [
      {
        id: 4,
        title: "Binod K. mentioned you in a comment",
        desc: '"I think your analysis on the banking sector bull run is spot on. What do you think about ADBL?"',
        time: "5h ago",
        unread: false,
        actions: [],
        avatar: "BK",
      },
    ],
  },
  {
    label: "System Updates",
    icon: RefreshCw,
    items: [
      {
        id: 5,
        title: "New Feature: Simulator V2",
        desc: "The trading simulator now supports real-time market depth and stop-loss orders.",
        time: "Yesterday",
        unread: false,
        actions: [],
      },
    ],
  },
];
