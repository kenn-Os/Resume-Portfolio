"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import OverviewPanel from "../components/OverviewPanel";
import ServicesPanel from "../components/ServicesPanel";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ToolsPanel from "../components/ToolsPanel";
import WorkflowPanel from "../components/WorkflowPanel";
import ContactPanel from "../components/ContactPanel";
import ResumePanel from "../components/ResumePanel";

const sections = {
  overview: OverviewPanel,
  services: ServicesPanel,
  experience: ExperienceTimeline,
  tools: ToolsPanel,
  workflow: WorkflowPanel,
  contact: ContactPanel,
  resume: ResumePanel,
};

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleNavigate = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActiveComponent = sections[activeSection] || OverviewPanel;

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar — desktop only */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar with tabs */}
        <Topbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-[11px] text-muted">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-primary font-medium capitalize">
              {activeSection}
            </span>
          </div>

          {/* Animated section switcher */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-4 lg:px-6 py-3 flex items-center justify-between">
          <p className="text-[11px] text-muted">
            © {new Date().getFullYear()} Kennedy C · All rights reserved
          </p>
          <div className="flex items-center gap-3 text-[11px] text-muted">
            <button
              onClick={() => handleNavigate("contact")}
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
            <span className="text-border">·</span>
            <button
              onClick={() => handleNavigate("resume")}
              className="hover:text-accent transition-colors"
            >
              Download CV
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
