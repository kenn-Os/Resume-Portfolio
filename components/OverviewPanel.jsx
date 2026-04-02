"use client";

import { motion } from "framer-motion";
import { profile, metrics } from "../lib/data";

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const iconMap = {
  calendar: CalendarIcon,
  wrench: WrenchIcon,
  briefcase: BriefcaseIcon,
  zap: ZapIcon,
};

const metricColors = [
  { bg: "bg-accent-light", text: "text-accent", border: "border-[#BAE6FD]" },
  { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  {
    bg: "bg-success-light",
    text: "text-[#16A34A]",
    border: "border-[#BBF7D0]",
  },
  { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function OverviewPanel() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {/* Hero Identity Panel */}
      <motion.div variants={item} className="panel p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-[#0284C7] flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-white text-xl font-bold">KC</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-semibold text-primary tracking-tight">
                  {profile.name}
                </h1>
                <span className="tag-success text-[11px]">
                  <span className="status-dot w-1.5 h-1.5" />
                  {profile.status}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mt-0.5">
                {profile.role}
              </p>
              <p className="text-sm text-muted mt-2 max-w-md leading-relaxed">
                {profile.tagline}
              </p>
            </div>
          </div>

          {/* System info badges */}
          <div className="flex flex-col gap-1.5 text-xs text-muted shrink-0">
            <div className="flex items-center gap-1.5">
              <MapPinIcon />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon />
              <span>Response: {profile.responseTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon />
              <span>Timezone: {profile.timezone}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((metric, i) => {
          const Icon = iconMap[metric.icon];
          const colors = metricColors[i];
          return (
            <motion.div key={metric.label} variants={item}>
              <div
                className={`metric-card border ${colors.border} transition-all duration-200 hover:shadow-panel-hover`}
              >
                <div
                  className={`w-7 h-7 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}
                >
                  {Icon && <Icon />}
                </div>
                <div className="mt-2">
                  <p
                    className={`text-2xl font-semibold tracking-tight ${colors.text}`}
                  >
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-muted">{metric.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Status Row */}
      <motion.div variants={item} className="panel p-4">
        <p className="section-label mb-3">System Status</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: "Availability",
              value: "Open to new clients",
              status: "active",
            },
            {
              label: "Work Mode",
              value: "Remote — Async friendly",
              status: "active",
            },
            {
              label: "Commitment",
              value: "Part-time & Full-time",
              status: "neutral",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-border"
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${s.status === "active" ? "bg-success" : "bg-amber-400"}`}
              />
              <div>
                <p className="text-[11px] text-muted">{s.label}</p>
                <p className="text-xs font-medium text-primary">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
