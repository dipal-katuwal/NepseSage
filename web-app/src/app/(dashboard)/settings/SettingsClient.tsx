"use client";

import { User, Wallet, Bell, Palette, Lock, CreditCard } from "lucide-react";
import { useState } from "react";

const tabs = [
  { label: "Account", icon: User },
  { label: "Portfolio", icon: Wallet },
  { label: "Notifications", icon: Bell },
  { label: "Appearance", icon: Palette },
  { label: "Privacy", icon: Lock },
  { label: "Billing", icon: CreditCard },
];

export default function SettingsClient() {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your clinical analysis workspace and account preferences.
      </p>

      <div className="mt-6 flex gap-8">
        {/* Settings Nav */}
        <div className="w-52 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition ${
                activeTab === tab.label
                  ? "bg-secondary text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-8">
          {/* Profile Information */}
          <section>
            <h2 className="clinical-label mb-4 text-sm">Profile Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="clinical-label mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue="Arjun Koirala"
                  className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="clinical-label mb-2 block">Email Address</label>
                <input
                  type="email"
                  defaultValue="arjun.k@investnepal.com"
                  className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="clinical-label mb-2 block">Bio (Public Analyst Profile)</label>
              <textarea
                defaultValue="Retail investor focused on high-cap banking and insurance sectors in the Nepal Stock Exchange."
                rows={3}
                className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
          </section>

          {/* Appearance */}
          <section>
            <h2 className="clinical-label mb-4 text-sm">Appearance</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-clinical">
                <h3 className="text-sm font-semibold">Interface Theme</h3>
                <p className="text-xs text-muted-foreground">Select your preferred color scheme.</p>
                <div className="mt-3 flex gap-2">
                  {["Light", "Dark", "System"].map((theme) => (
                    <button
                      key={theme}
                      className={`rounded-md px-4 py-1.5 text-xs font-medium transition ${
                        theme === "Dark"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-clinical">
                  <h3 className="text-sm font-semibold">Condensed View</h3>
                  <p className="text-xs text-muted-foreground">Show more data in tables.</p>
                  <div className="mt-3 flex justify-end">
                    <div className="h-5 w-9 rounded-full bg-primary p-0.5">
                      <div className="ml-auto h-4 w-4 rounded-full bg-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="card-clinical">
                  <h3 className="text-sm font-semibold">Animations</h3>
                  <p className="text-xs text-muted-foreground">Enable transitions.</p>
                  <div className="mt-3 flex justify-end">
                    <div className="h-5 w-9 rounded-full bg-secondary p-0.5">
                      <div className="h-4 w-4 rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="clinical-label mb-4 text-sm">Notifications</h2>
            <div className="space-y-3">
              {[
                { label: "Price Alerts", desc: "Push notifications when symbols reach target prices.", email: true, mobile: true },
                { label: "Sage Insights", desc: "Daily summary of NEPSE market sentiment from Sage AI.", email: true, mobile: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between rounded-md bg-secondary p-4">
                  <div>
                    <h3 className="text-sm font-semibold">{n.label}</h3>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {["Email", "Mobile"].map((ch, i) => (
                      <label key={ch} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <div className={`h-4 w-4 rounded border ${(i === 0 ? n.email : n.mobile) ? "border-primary bg-primary" : "border-border bg-input"} flex items-center justify-center`}>
                          {(i === 0 ? n.email : n.mobile) && (
                            <svg className="h-2.5 w-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {ch}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-border pt-6">
            <button className="rounded-md border border-border px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition">
              Discard Changes
            </button>
            <button className="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
